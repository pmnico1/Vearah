export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  tagline: string;
  images: string[];
  technologies?: string[];
  year?: string;
  client?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'lumo',
    title: 'Lumo AI-Powered Learning Assistant',
    subtitle: 'AI-Powered Learning Assistant',
    heroImage: '/images/portfolio/1.png',
    description: 'Lumo is a personalized AI-powered learning assistant that helps students understand complex topics, track their learning goals, and retain information through adaptive content.',
    tagline: 'your intelligent and ever-evolving AI study companion — not just a feature, but the heart and soul of your learning journey. Designed to feel more like a trusted mentor than a machine, Lumo brings a warm, approachable personality that adapts to every student\'s pace, mood, and learning style.',
    images: [
      '/images/portfolio/1.png',
      '/images/portfolio/1.png',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    client: 'Lumo Education',
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getAllProjects(): ProjectData[] {
  return projectsData;
}
