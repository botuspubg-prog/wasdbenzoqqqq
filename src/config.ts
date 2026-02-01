export type SocialType = "telegram" | "instagram" | "youtube" | "tiktok" | "x";

export type LandingConfig = {
  avatar: { src: string; alt?: string };
  title: string;
  members: { value: string; label: string };
  online: { value: string; label: string };
  descriptionLines: string[];
  button: { text: string; url: string; newTab?: boolean };
  socials?: { type: SocialType; url: string }[];
  theme?: {
    accentHsl?: string;
    backgroundHsl?: string;
    cardHsl?: string;
    patternOpacity?: number;
  };
};

export const defaultConfig: LandingConfig = {
  avatar: { src: "/avatar.jpg", alt: "Avatar" },
  title: "Telegram Preview",
  members: { value: "0", label: "members" },
  online: { value: "0", label: "online" },
  descriptionLines: ["Description line 1", "Description line 2"],
  button: { text: "Join Group", url: "https://t.me/", newTab: true },
  socials: []
};

export async function loadConfig(): Promise<LandingConfig> {
  try {
    const res = await fetch("/config.json", { cache: "no-store" });
    if (!res.ok) return defaultConfig;
    const data = (await res.json()) as LandingConfig;
    return { ...defaultConfig, ...data };
  } catch {
    return defaultConfig;
  }
}

export function applyTheme(theme?: LandingConfig["theme"]) {
  if (!theme) return;

  const root = document.documentElement;

  if (theme.accentHsl) {
    root.style.setProperty("--primary", theme.accentHsl);
    root.style.setProperty("--accent", theme.accentHsl);
    root.style.setProperty("--ring", theme.accentHsl);
    root.style.setProperty("--glow-color", `${theme.accentHsl} / 0.3`);
  }
  if (theme.backgroundHsl) root.style.setProperty("--background", theme.backgroundHsl);
  if (theme.cardHsl) root.style.setProperty("--card", theme.cardHsl);
  if (typeof theme.patternOpacity === "number") {
    root.style.setProperty("--pattern-opacity", String(theme.patternOpacity));
  }
}
