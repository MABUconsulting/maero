export function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 10 L90 10 M150 10 L240 10"
        stroke="#C9A961"
        strokeWidth="0.8"
      />
      <path
        d="M95 10 C100 4, 108 4, 113 10 C108 16, 100 16, 95 10 Z M127 10 C132 4, 140 4, 145 10 C140 16, 132 16, 127 10 Z"
        fill="#C9A961"
        opacity="0.9"
      />
      <circle cx="120" cy="10" r="2" fill="#C9A961" />
    </svg>
  );
}
