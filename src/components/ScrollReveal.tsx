import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type RevealVariant = "up" | "left" | "right" | "pop";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  variant?: RevealVariant;
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.16,
  variant = "up",
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "0px 0px -72px 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${inView ? "is-visible" : ""} ${className}`}
      data-reveal={variant}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
