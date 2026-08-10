export function Logo({ size = 44 }: { size?: number }) {
  return (
    <div
      className="relative grid place-items-center rounded-2xl"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #2D1F14 0%, #1A120B 100%)",
        border: "1px solid rgba(200,155,60,0.4)",
        boxShadow: "0 8px 24px -8px rgba(200,155,60,0.5), inset 0 1px 0 rgba(245,230,200,0.15)",
      }}
      aria-label="AFS Logo"
    >
      <span
        className="font-display font-bold tracking-tight"
        style={{
          fontSize: size * 0.42,
          background: "linear-gradient(135deg, #F5E6C8 0%, #E4C078 45%, #C89B3C 80%, #A97142 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "0.05em",
        }}
      >
        AFS
      </span>
    </div>
  );
}
