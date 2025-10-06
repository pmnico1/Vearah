'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import ProjectShowcase from '@/components/ProjectShowcase/index';
import { getProjectById } from '@/components/ProjectShowcase/data';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectShowcase project={project} />;
}
