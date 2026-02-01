import type { SocialType } from "./config";

export function PeopleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIcon({ type }: { type: SocialType }) {
  switch (type) {
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5">
          <path
            d="M21 5.5 3.8 12.2c-1 .4-1 1.8.1 2.1l4.4 1.4 1.7 5.2c.3 1 1.6 1.1 2.1.3l2.5-3.7 4.6 3.4c.8.6 2 .1 2.2-.9l2.6-13.1c.2-1.1-.8-2-1.9-1.4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5">
          <path
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5">
          <path
            d="M21 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C17.2 5 12 5 12 5s-5.2 0-6.8.2c-.9.2-1.6.9-1.8 1.8C3 8.6 3 12 3 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8C6.8 19 12 19 12 19s5.2 0 6.8-.2c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
        </svg>
      );
    default:
      return <span className="text-sm font-semibold">{type.toUpperCase()}</span>;
  }
}
