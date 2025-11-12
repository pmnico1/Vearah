export interface Project {
  id: string;
  title: string;
  subtitle: string;
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
    images: [
      '/projects/lumo/1.jpg',
      '/projects/lumo/2.jpg',
      '/projects/lumo/3.jpg',
      '/projects/lumo/4.jpg',
      '/projects/lumo/5.jpg',
      '/projects/lumo/6.jpg',
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
  {
    id: 'urganz',
    title: 'Urganz - A SaaS EHR System',
    subtitle: 'A SaaS EHR System',
    images: [
      '/projects/urganz/1.jpg',
      '/projects/urganz/2.jpg',
      '/projects/urganz/3.jpg',
      '/projects/urganz/4.jpg',
      '/projects/urganz/5.jpg',
      '/projects/urganz/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
  {
    id: 'ox',
    title: 'Ox - A Metaverse Banking App',
    subtitle: 'A Metaverse Banking App',
    images: [
      '/projects/ox/1.jpg',
      '/projects/ox/2.jpg',
      '/projects/ox/3.jpg',
      '/projects/ox/4.jpg',
      '/projects/ox/5.jpg',
      '/projects/ox/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
  {
    id: 'trade-heaven',
    title: 'Trade Haven - NFT marketplace',
    subtitle: 'NFT marketplace',
    images: [
      '/projects/tradeheaven/1.jpg',
      '/projects/tradeheaven/2.jpg',
      '/projects/tradeheaven/3.jpg',
      '/projects/tradeheaven/4.jpg',
      '/projects/tradeheaven/5.jpg',
      '/projects/tradeheaven/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
  {
    id: 'minswap',
    title: 'Minswap - DEX',
    subtitle: 'DEX',
    images: [
      '/projects/minswap/1.jpg',
      '/projects/minswap/2.jpg',
      '/projects/minswap/3.jpg',
      '/projects/minswap/4.jpg',
      '/projects/minswap/5.jpg',
      '/projects/minswap/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
  {
    id: 'swallow',
    title: 'Swallow',
    subtitle: 'DEX',
    images: [
      '/projects/swallow/1.jpg',
      '/projects/swallow/2.jpg',
      '/projects/swallow/3.jpg',
      '/projects/swallow/4.jpg',
      '/projects/swallow/5.jpg',
      '/projects/swallow/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
  {
    id: '3dcarconfigurator',
    title: 'BraBus - 3D Car Configurator',
    subtitle: '3D Car Configurator',
    images: [
      '/projects/3dcarconfigurator/1.jpg',
      '/projects/3dcarconfigurator/2.jpg',
      '/projects/3dcarconfigurator/3.jpg',
      '/projects/3dcarconfigurator/4.jpg',
      '/projects/3dcarconfigurator/5.jpg',
      '/projects/3dcarconfigurator/6.jpg',
    ],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview: "A SaaS EHR system with interoperable capabilities driven with AI whereas patients, physicians are able to access health records anywhere and anytime.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Our mission is to take an holistic approach to good health using state-of-the-art technology and treatments to carefully curate unique users needs:",
    challenges: ["Lack of structure and oversight – no unified data on students or Mallams.", "Limited funding transparency – government and NGOs find it hard to track impact.", "Low digital literacy – children are left behind in today’s knowledge economy.", "Poor integration with formal education – no bridge to secondary or vocational learning."],
    visionTitle: "Our approach to designing Urganz stems from a deeper understanding of the health sector, clients information, project objectives and extensive research.",
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
