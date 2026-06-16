type SkyBackgroundProps = {
  className?: string;
};

export const SkyBackground = ({ className = "" }: SkyBackgroundProps) => {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      className={className}
    >
      {/* Sun */}
      <div
        style={{
          position: "absolute",
          top: "-2rem",
          right: "-2rem",
          width: "10rem",
          height: "10rem",
          borderRadius: "9999px",
          background: "var(--color-sun)",
          opacity: 0.9,
          boxShadow: "0 0 60px 20px rgba(250,204,21,0.35)",
          animation: "spin-slow 40s linear infinite",
        }}
      />

      {/* Cloud 1 */}
      <Cloud
        style={{
          position: "absolute",
          left: "-1rem",
          top: "5rem",
          width: "9rem",
          opacity: 0.9,
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />

      {/* Cloud 2 */}
      <Cloud
        style={{
          position: "absolute",
          right: "1rem",
          top: "12rem",
          width: "7rem",
          opacity: 0.8,
          animation: "float-slower 11s ease-in-out infinite",
        }}
      />

      {/* Cloud 3 */}
      <Cloud
        style={{
          position: "absolute",
          bottom: "5rem",
          left: "2rem",
          width: "8rem",
          opacity: 0.7,
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />

      {/* Stars */}
      <Star
        style={{
          position: "absolute",
          left: "2rem",
          top: "3rem",
          width: "1.2rem",
          animation: "twinkle 3s ease-in-out infinite",
        }}
      />
      <Star
        style={{
          position: "absolute",
          right: "5rem",
          top: "8rem",
          width: "1rem",
          animation: "twinkle 3s ease-in-out infinite 1s",
        }}
      />
      <Star
        style={{
          position: "absolute",
          left: "50%",
          top: "2rem",
          width: "0.8rem",
          animation: "twinkle 3s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
};

const Cloud = ({ style }: { style: React.CSSProperties }) => (
  <svg viewBox="0 0 120 60" style={style} fill="var(--color-cloud)">
    <ellipse cx="40" cy="40" rx="34" ry="20" />
    <ellipse cx="70" cy="34" rx="28" ry="22" />
    <ellipse cx="92" cy="42" rx="22" ry="16" />
    <rect x="20" y="38" width="80" height="18" rx="9" />
  </svg>
);

const Star = ({ style }: { style: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" style={style} fill="var(--color-sun)">
    <path d="M12 1.5l2.6 6.5 6.9.4-5.3 4.4 1.8 6.7L12 16.9 5.9 20l1.8-6.7-5.3-4.4 6.9-.4z" />
  </svg>
);
