export interface Project {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  images: string[];
  technologies?: string[];
  year?: string;
  client?: string;
  services: string;
  challengeTitle: string;
  challenges: string[];
  visionTitle: string;
  visions: string[];
  feature: ProjectFeature[];
  goalTitle: string;
  goals: string[];
}

interface ProjectFeature {
  title: string;
  contents: string[];
}

export const projectsData: Project[] = [
  {
    id: 'lumo',
    title: 'Lumo AI-Powered Learning Assistant',
    subtitle: 'AI-Powered Learning Assistant',
    heroImage: '/images/portfolio/1.jpg',
    images: [
      '/images/portfolio/1.jpg',
      '/images/portfolio/1.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "Lumo is a digital learning and management platform designed to reform and modernize the ancient education system across Nigeria and other West African countries. It combines data-driven administration, gamified learning, and community engagement to help Teachers, students, and government bodies collaborate toward one goal empowering the next generation of learners through structured, modern education.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "The accient educational system, though culturally rooted and widespread, faces severe challenges:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "To transform the ancient educational ecosystem into a digitally inclusive, self-sustaining learning network that:",
    visions: ["Recognizes every Student.", "Supports every Teacher.", "Connects every donor and policymaker through transparent data and outcomes."],
    feature: [{
      title: "Student Profiles & Learning Pods",
      contents: ["Tracks progress, attendance, and engagement.", "Learning Pods group students into gamified teams to encourage collaboration.", "Progress translates into rewards (badges, recognition, and opportunities)."]
    }, {
      title: "Government & NGO Analytics Portal",
      contents: ["View data by region, age group, or literacy level.", "Evaluate policy impact.", "Manage funding and measure educational outcomes."]
    }],
    goalTitle: "Student Profiles & Learning Pods",
    goals: ["Digitize 100,000 student across Nigeria.", "Empower 1 million learners with basic literacy, numeracy, and digital skills.", "Create economic pathways for Teachers through verified teaching credentials.", "Enable transparent funding and impact tracking for governments and NGOs."]
  },
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  return projectsData;
}
