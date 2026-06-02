export default function SectionLabel({ children, accent = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: accent ? "var(--accent)" : "var(--text-3)",
        padding: "5px 12px",
        border: `1px solid ${accent ? "var(--accent-dim)" : "var(--border)"}`,
        borderRadius: "99px",
        background: accent ? "var(--accent-dim)" : "transparent",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: accent ? "var(--accent)" : "var(--text-3)",
          flexShrink: 0,
        }}
      />
      {children}
    </span>
  );
}