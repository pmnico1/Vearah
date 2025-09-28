'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/components/Portfolio/hooks/useIntersectionObserver';
import { useScrollNavigation } from '@/components/Portfolio/hooks/useScrollNavigation';
import { projects, statisticsFrames } from '@/components/Portfolio/data';
import SectionTitle from '@/components/Portfolio/components/SectionTitle';
import ProjectCard from '@/components/Portfolio/components/ProjectCard';
import ProjectTags from '@/components/Portfolio/components/ProjectTags';
import ProjectNavigation from '@/components/Portfolio/components/ProjectNavigation';
import StatisticsFrames from '@/components/Portfolio/components/StatisticsFrames';
import ClientLogos from '@/components/Portfolio/components/ClientLogos';
import Background from '@/components/Portfolio/components/Background';

export default function ProjectSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [canScrollToNext, setCanScrollToNext] = useState(false);

  const { isIntersecting, sectionRef } = useIntersectionObserver();

  // Animation sequence when section comes into view
  useEffect(() => {
    if (isIntersecting) {
      setShowTitle(true);
      setTitleOpacity(1);

      // After 1 second, show content and fade title slightly
      const timer1 = setTimeout(() => {
        setShowMainContent(true);
        setTitleOpacity(0.1);
      }, 1000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isIntersecting]);

  const handleProjectChange = (index: number) => {
    setCurrentProject(index);
  };

  const handleScrollToNext = () => {
    setCanScrollToNext(true);
  };

  useScrollNavigation({
    isInProjectSection: isIntersecting,
    showMainContent,
    currentProject,
    totalProjects: projects.length,
    onProjectChange: handleProjectChange,
    onScrollToNext: handleScrollToNext,
  });

  const currentProjectData = projects[currentProject];

  return (
    <section
      ref={sectionRef}
      id="project-section"
      className="h-screen relative bg-[#010101] snap-start overflow-hidden"
    >
      <Background />
      <SectionTitle titleOpacity={titleOpacity} />

      <ProjectTags
        project={currentProjectData}
        showMainContent={showMainContent}
        showTags={showTags}
      />

      <ProjectNavigation
        currentProject={currentProject}
        totalProjects={projects.length}
        showMainContent={showMainContent}
      />

      <ProjectCard
        project={currentProjectData}
        showMainContent={showMainContent}
        onMouseEnter={() => setShowTags(true)}
        onMouseLeave={() => setShowTags(false)}
      />

      <StatisticsFrames
        statisticsFrames={statisticsFrames}
        showMainContent={showMainContent}
      />

      <ClientLogos
      />
    </section>
  );
}