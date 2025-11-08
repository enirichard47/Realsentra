interface SentraLogoProps {
  size?: number;
  className?: string;
}

export default function SentraLogo({ size = 40, className = "" }: SentraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sentra-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="sentra-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1ab8ad" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Shield Background */}
      <path
        d="M20 2 L28 6 L28 16 C28 24 20 36 20 36 C20 36 12 24 12 16 L12 6 L20 2 Z"
        fill="url(#sentra-gradient)"
        opacity="0.15"
      />

      {/* Shield Border */}
      <path
        d="M20 2 L28 6 L28 16 C28 24 20 36 20 36 C20 36 12 24 12 16 L12 6 L20 2 Z"
        stroke="url(#sentra-glow)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Circuit "S" Path - Left curve */}
      <path
        d="M15 12 Q13 14 15 17"
        stroke="url(#sentra-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Circuit "S" Path - Center vertical */}
      <path
        d="M15 17 L25 17"
        stroke="url(#sentra-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Circuit "S" Path - Right curve top */}
      <path
        d="M25 17 Q27 19 25 22"
        stroke="url(#sentra-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Circuit "S" Path - Center return */}
      <path
        d="M25 22 L15 22"
        stroke="url(#sentra-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Circuit "S" Path - Right curve bottom */}
      <path
        d="M15 22 Q13 24 15 27"
        stroke="url(#sentra-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Circuit nodes - left */}
      <circle cx="15" cy="12" r="1.5" fill="url(#sentra-glow)" />
      <circle cx="15" cy="27" r="1.5" fill="url(#sentra-glow)" />

      {/* Circuit nodes - right */}
      <circle cx="25" cy="17" r="1.5" fill="url(#sentra-glow)" />
      <circle cx="25" cy="22" r="1.5" fill="url(#sentra-glow)" />

      {/* Center accent dot */}
      <circle cx="20" cy="19.5" r="0.8" fill="url(#sentra-glow)" opacity="0.8" />
    </svg>
  );
}
