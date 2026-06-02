import { useEffect, useState } from "react";

export default function AnimatedText({ text, tag: Tag = "span", delay = 0, className = "", style = {} }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tag className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 0.4s ease ${delay + i * 22}ms, transform 0.4s ease ${delay + i * 22}ms`,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}