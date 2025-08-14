"use client";

import { useState, useEffect, useRef } from "react";

const ScrollAnimation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isInView ? "visible-opacity" : "hidden-opacity"
      } transition-transform duration-500`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
