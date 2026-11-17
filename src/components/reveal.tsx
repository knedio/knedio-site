import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
};

/**
 * Scroll-driven fade, in CSS. The text is in the page from the first paint.
 * Browsers without `animation-timeline: view()` show it with no animation,
 * and `prefers-reduced-motion` turns the animation off.
 */
export const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const Tag = as;
  const style: CSSProperties | undefined = delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <Tag className={className ? `reveal ${className}` : "reveal"} style={style}>
      {children}
    </Tag>
  );
};
