import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (threshold: number[] = [0.1, 0.5, 0.9]) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { isIntersecting, sectionRef };
};