import { useEffect, useMemo, useState } from "react";
import { applyTheme, loadConfig, type LandingConfig } from "./config";
import { ArrowRight, PeopleIcon, SocialIcon } from "./icons";

export default function App() {
  const [cfg, setCfg] = useState<LandingConfig | null>(null);

  useEffect(() => {
    (async () => {
      const c = await loadConfig();
      applyTheme(c.theme);
      setCfg(c);
    })();
  }, []);

  const socials = useMemo(() => (cfg?.socials ?? []).filter((s) => !!s.url), [cfg]);

  if (!cfg) return null;

  const linkProps = cfg.button.newTab
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : ({} as const);

  return (
    <div className="telegram-pattern min-h-screen flex items-center justify-center p-6">
      <div className="glass-card animate-float-in w-full max-w-[420px] rounded-[28px] px-7 sm:px-10 py-10 text-center">
        {/* Avatar */}
        <div className="avatar-ring mx-auto w-[92px] h-[92px] sm:w-[104px] sm:h-[104px]">
          <img
            src={cfg.avatar.src}
            alt={cfg.avatar.alt ?? "Avatar"}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-[26px] sm:text-[28px] font-bold tracking-tight">
          {cfg.title}
        </h1>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <div className="stat-badge inline-flex items-center gap-2">
            <PeopleIcon className="w-4 h-4 opacity-90" />
            <span className="font-semibold">{cfg.members.value}</span>
            <span className="text-muted-foreground">{cfg.members.label}</span>
          </div>

          <div className="stat-badge inline-flex items-center gap-2">
            <span className="online-dot" />
            <span className="font-semibold">{cfg.online.value}</span>
            <span className="text-muted-foreground">{cfg.online.label}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 space-y-3">
          {cfg.descriptionLines.map((line, idx) => (
            <p key={idx} className="text-muted-foreground leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* Button */}
        <a
          href={cfg.button.url}
          {...linkProps}
          className="btn-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-[16px] sm:text-[17px] font-semibold text-primary-foreground"
        >
          <span>{cfg.button.text}</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Socials */}
        {socials.length > 0 && (
          <div className="mt-6 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.type}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.type}
                title={s.type}
              >
                <SocialIcon type={s.type} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
