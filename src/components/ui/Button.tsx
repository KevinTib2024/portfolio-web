import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  style = {},
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    letterSpacing: "0.02em",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    transition: "var(--transition)",
    border: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...(size === "md" ? { padding: "11px 22px", fontSize: "14px" } : {}),
    ...(size === "sm" ? { padding: "7px 14px", fontSize: "13px" } : {}),
    ...(size === "lg" ? { padding: "14px 28px", fontSize: "16px" } : {}),
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--accent)",
      color: "#050709",
    },
    outline: {
      background: "transparent",
      color: "var(--text)",
      border: "1px solid var(--border-2)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-2)",
    },
  };

  const combined: React.CSSProperties = { 
    ...base, 
    ...variants[variant], 
    ...style 
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    if (variant === "primary") {
      el.style.filter = "brightness(1.1)";
      el.style.transform = "translateY(-1px)";
    } else if (variant === "outline") {
      el.style.borderColor = "var(--accent)";
      el.style.color = "var(--accent)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.style.filter = "";
    el.style.transform = "";
    if (variant === "outline") {
      el.style.borderColor = "";
      el.style.color = "";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={combined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}