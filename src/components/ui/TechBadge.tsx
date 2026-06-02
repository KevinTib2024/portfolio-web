export default function TechBadge({ name, level, small = false }) {
  const levelColors = {
    advanced: { bg: "rgba(0,212,170,0.08)", color: "var(--accent)", border: "rgba(0,212,170,0.2)" },
    intermediate: { bg: "rgba(79,142,247,0.08)", color: "var(--blue)", border: "rgba(79,142,247,0.2)" },
    beginner: { bg: "rgba(90,100,128,0.08)", color: "var(--text-3)", border: "var(--border)" },
  };

  const c = levelColors[level] || levelColors.intermediate;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: small ? "11px" : "12px",
        fontWeight: 400,
        color: c.color,
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: "6px",
        padding: small ? "3px 9px" : "5px 12px",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
        transition: "var(--transition)",
      }}
    >
      {name}
    </span>
  );
}