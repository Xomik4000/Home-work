import { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
};

function AnimateOnScroll({
  children,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        isVisible
          ? "animate-on-scroll animate-on-scroll--visible"
          : "animate-on-scroll"
      }
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;