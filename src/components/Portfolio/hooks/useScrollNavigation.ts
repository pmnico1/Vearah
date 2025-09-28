/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

interface UseScrollNavigationProps {
  isInProjectSection: boolean;
  showMainContent: boolean;
  currentProject: number;
  totalProjects: number;
  onProjectChange: (index: number) => void;
  onScrollToNext: () => void;
}

export const useScrollNavigation = ({
  isInProjectSection,
  showMainContent,
  currentProject,
  totalProjects,
  onProjectChange,
  onScrollToNext
}: UseScrollNavigationProps) => {
  const lastScrollTimeRef = useRef(0);
  const scrollAccumulatorRef = useRef(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInProjectSection || !showMainContent) return;

      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      const deltaY = e.deltaY;

      // Accumulate scroll delta
      scrollAccumulatorRef.current += deltaY;

      // Throttle the project changes
      if (now - lastScrollTimeRef.current > 800) {
        const threshold = 100;

        if (Math.abs(scrollAccumulatorRef.current) >= threshold) {
          if (scrollAccumulatorRef.current > 0) {
            // Scrolling down - next project
            if (currentProject < totalProjects - 1) {
              onProjectChange(currentProject + 1);
              lastScrollTimeRef.current = now;
              scrollAccumulatorRef.current = 0;
            } else {
              // At last project, allow scrolling to next section
              onScrollToNext();
              // Use Lenis scroll instead of window.scrollBy
              const lenis = (window as any).lenis;
              if (lenis) {
                lenis.scrollTo(window.innerHeight, { duration: 1 });
              } else {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
            }
          } else {
            // Scrolling up - previous project
            if (currentProject > 0) {
              onProjectChange(currentProject - 1);
              lastScrollTimeRef.current = now;
              scrollAccumulatorRef.current = 0;
            }
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInProjectSection || !showMainContent) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentProject < totalProjects - 1) {
          onProjectChange(currentProject + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentProject > 0) {
          onProjectChange(currentProject - 1);
        }
      }
    };

    if (isInProjectSection && showMainContent) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInProjectSection, showMainContent, currentProject, totalProjects, onProjectChange, onScrollToNext]);
};