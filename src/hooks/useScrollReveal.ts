import { useCallback } from "react";

/**
 * Animate each attached element once. Content remains visible if motion or
 * browser animation support is unavailable; no scroll-driven React renders.
 */
export default function useScrollReveal(delay = 0) {
  return useCallback(
    (element: HTMLElement | null) => {
      if (
        !element ||
        typeof IntersectionObserver === "undefined" ||
        !element.animate
      )
        return;
      const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (preference.matches) return;

      let animation: Animation | undefined;
      const stop = () => {
        observer.disconnect();
        animation?.cancel();
      };
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer.disconnect();
          if (preference.matches || element.contains(document.activeElement))
            return;
          animation = element.animate(
            [
              { opacity: 0, transform: "translateY(22px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 700,
              delay: Math.min(
                Number(element.dataset.revealDelay) || delay,
                240,
              ),
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
        },
        { threshold: 0.08 },
      );

      observer.observe(element);
      preference.addEventListener("change", stop);
      element.addEventListener("focusin", stop);
      return () => {
        stop();
        preference.removeEventListener("change", stop);
        element.removeEventListener("focusin", stop);
      };
    },
    [delay],
  );
}
