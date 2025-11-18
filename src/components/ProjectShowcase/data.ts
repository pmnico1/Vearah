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
    images: ['/projects/lumo/1.jpg', '/projects/lumo/2.jpg', '/projects/lumo/3.jpg', '/projects/lumo/4.jpg', '/projects/lumo/5.jpg', '/projects/lumo/6.jpg'],
    technologies: ['React Native', 'AI/ML', 'Node.js', 'TypeScript'],
    year: '2024',
    overview:
      "Lumo is an AI-driven learning companion designed to help students understand lessons faster through personalized recommendations, intelligent quizzes, and real-time feedback. It acts as a blended digital tutor, making learning more engaging and accessible for both students and teachers.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Traditional learning environments struggle to provide personalized guidance:",
    challenges: [
      "Students learn at different speeds but receive the same lesson structure.",
      "Teachers lack data-driven insights to support struggling learners.",
      "Low engagement due to non-interactive learning formats.",
      "Limited access to structured learning tools outside classrooms."
    ],
    visionTitle: "Lumo empowers modern learning with intelligent, adaptive technology that:",
    visions: [
      "Understands each learner’s strengths and weaknesses.",
      "Supports teachers with performance analytics and actionable insights.",
      "Encourages engagement through gamified progress and rewards."
    ],
    feature: [
      {
        title: "AI Study Companion",
        contents: [
          "Generates personalized quizzes based on performance.",
          "Explains complex topics using simple, adaptive language.",
          "Tracks mastery levels and suggests targeted improvements."
        ]
      },
      {
        title: "Teacher Insights Dashboard",
        contents: [
          "Real-time performance tracking.",
          "Identifies struggling students early.",
          "Recommends corrective teaching materials."
        ]
      }
    ],
    goalTitle: "Empowering the Next Generation",
    goals: [
      "Improve academic performance by delivering personalized learning paths.",
      "Increase engagement through gamified reward systems.",
      "Enable teachers to make data-driven educational decisions."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: 'urganz',
    title: 'Urganz - A SaaS EHR System',
    subtitle: 'A SaaS EHR System',
    images: ['/projects/urganz/1.jpg', '/projects/urganz/2.jpg', '/projects/urganz/3.jpg', '/projects/urganz/4.jpg', '/projects/urganz/5.jpg', '/projects/urganz/6.jpg'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    year: '2024',
    overview:
      "Urganz is a cloud-based Electronic Health Record (EHR) platform that allows hospitals, clinics, and physicians to securely access, manage, and share patient data in real-time. It simplifies clinical workflows and improves decision-making with AI-powered insights.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "The healthcare industry faces fragmentation and inefficiencies:",
    challenges: [
      "Patient records scattered across multiple systems.",
      "Slow manual workflows and data entry errors.",
      "Difficulties accessing patient history across providers.",
      "Lack of predictive analytics to support clinical decisions."
    ],
    visionTitle: "Urganz aims to build a unified, intelligent healthcare ecosystem that:",
    visions: [
      "Gives providers secure access to complete medical histories.",
      "Streamlines patient onboarding and documentation.",
      "Uses AI to improve diagnostics and treatment accuracy."
    ],
    feature: [
      {
        title: "AI-Powered Patient Records",
        contents: [
          "Centralized patient profiles updated in real-time.",
          "Smart charts summarizing previous visits, tests, and diagnoses.",
          "Predictive alerts for potential health risks."
        ]
      },
      {
        title: "Interoperable Hospital Networking",
        contents: [
          "Cross-clinic data sharing.",
          "Role-based access management.",
          "Secure cloud storage with audit trails."
        ]
      }
    ],
    goalTitle: "Digitizing Healthcare at Scale",
    goals: [
      "Modernize clinics with paperless operations.",
      "Improve patient outcomes through better clinical insights.",
      "Connect providers seamlessly to reduce fragmentation."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: 'ox',
    title: 'Ox - A Metaverse Banking App',
    subtitle: 'A Metaverse Banking App',
    images: ['/projects/ox/1.jpg', '/projects/ox/2.jpg', '/projects/ox/3.jpg', '/projects/ox/4.jpg', '/projects/ox/5.jpg', '/projects/ox/6.jpg'],
    technologies: ['React Native', 'Web3', 'Three.js', 'TypeScript'],
    year: '2024',
    overview:
      "Ox is a metaverse-integrated banking app that merges traditional finance with immersive 3D digital experiences. Users can manage accounts, explore virtual financial districts, and interact with banking services through an avatar-driven environment.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "Modern users expect more engaging, intuitive financial experiences:",
    challenges: [
      "Traditional banking apps lack immersive interaction.",
      "Low financial literacy among young digital users.",
      "Complex Web3 solutions with poor UX.",
      "Limited ways for users to visualize their financial growth."
    ],
    visionTitle: "Ox reimagines banking by blending finance, 3D worlds, and automation:",
    visions: [
      "Enable users to bank inside a virtual universe.",
      "Make financial learning visually interactive.",
      "Offer Web3-enabled, futuristic banking experiences."
    ],
    feature: [
      {
        title: "3D Financial District",
        contents: [
          "Navigate a virtual city representing your finances.",
          "Visit virtual bank branches and investment centers.",
          "Engage with AI-powered financial advisors."
        ]
      },
      {
        title: "Web3 & Wallet Integration",
        contents: [
          "Manage crypto wallets alongside fiat accounts.",
          "Secure blockchain-based transactions.",
          "NFT-based identity and membership tiers."
        ]
      }
    ],
    goalTitle: "The Future of Digital Banking",
    goals: [
      "Make finance accessible through immersive experiences.",
      "Blend Web3 and traditional banking into a unified interface.",
      "Increase financial literacy through gamification."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: 'trade-heaven',
    title: 'Trade Haven - NFT marketplace',
    subtitle: 'NFT marketplace',
    images: ['/projects/tradeheaven/1.jpg', '/projects/tradeheaven/2.jpg', '/projects/tradeheaven/3.jpg', '/projects/tradeheaven/4.jpg', '/projects/tradeheaven/5.jpg', '/projects/tradeheaven/6.jpg'],
    technologies: ['React', 'Web3', 'Solidity', 'TypeScript'],
    year: '2024',
    overview:
      "Trade Haven is a next-generation NFT marketplace designed for creators, collectors, and brands to mint, trade, and showcase digital assets with high performance and intuitive UX.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UX Design, UI Design",
    challengeTitle: "The NFT ecosystem still faces adoption barriers:",
    challenges: [
      "Overly technical minting processes.",
      "High gas fees and slow blockchain interactions.",
      "Poor discovery mechanisms for new artists.",
      "Security risks and marketplace scams."
    ],
    visionTitle: "Trade Haven simplifies and elevates the NFT experience:",
    visions: [
      "Empower creators with easy minting tools.",
      "Enhance discovery through AI-powered recommendations.",
      "Provide secure, transparent trading environments."
    ],
    feature: [
      {
        title: "Creator Launchpad",
        contents: [
          "Simplified minting with low-code deployment.",
          "Royalty management.",
          "Collection and drop scheduling."
        ]
      },
      {
        title: "NFT Marketplace Engine",
        contents: [
          "Live auctions and bidding.",
          "Portfolio tracking.",
          "AI recommendations for collectors."
        ]
      }
    ],
    goalTitle: "Empowering the Digital Creator Economy",
    goals: [
      "Reduce barriers for new NFT creators.",
      "Help brands launch NFT-driven campaigns.",
      "Build a trustworthy Web3 marketplace."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: 'minswap',
    title: 'Minswap - DEX',
    subtitle: 'DEX',
    images: ['/projects/minswap/1.jpg', '/projects/minswap/2.jpg', '/projects/minswap/3.jpg', '/projects/minswap/4.jpg', '/projects/minswap/5.jpg', '/projects/minswap/6.jpg'],
    technologies: ['React', 'Web3', 'Smart Contracts'],
    year: '2024',
    overview:
      "Minswap is a Decentralized Exchange (DEX) enabling users to swap, stake, and provide liquidity for digital assets through a streamlined UI and secure smart-contract architecture.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "UX Design, UI Design",
    challengeTitle: "DEX platforms often intimidate users due to complexity:",
    challenges: [
      "High gas fees and slow transaction speed.",
      "Unclear liquidity pool mechanics.",
      "Cluttered interfaces overwhelming new traders.",
      "Limited portfolio insights."
    ],
    visionTitle: "Minswap provides a simple, efficient, user-first DEX:",
    visions: [
      "Clear, predictable swapping experiences.",
      "Accessible liquidity management.",
      "Transparent fee structures and real-time analytics."
    ],
    feature: [
      {
        title: "Token Swap Engine",
        contents: [
          "Fast, low-fee transactions.",
          "Price impact and slippage indicators.",
          "Smart routing for optimal trades."
        ]
      },
      {
        title: "Liquidity & Farming Dashboard",
        contents: [
          "Pool performance insights.",
          "Rewards tracking.",
          "One-click LP position management."
        ]
      }
    ],
    goalTitle: "Democratizing Decentralized Trading",
    goals: [
      "Make DeFi understandable for everyone.",
      "Offer seamless liquidity tools.",
      "Enable transparent, fully decentralized trading."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: 'swallow',
    title: 'Swallow',
    subtitle: 'DEX',
    images: ['/projects/swallow/1.jpg', '/projects/swallow/2.jpg', '/projects/swallow/3.jpg', '/projects/swallow/4.jpg', '/projects/swallow/5.jpg', '/projects/swallow/6.jpg'],
    technologies: ['React', 'Web3', 'Smart Contracts'],
    year: '2024',
    overview:
      "Swallow is a lightweight, mobile-first decentralized exchange focused on speed and simplicity. It enables quick token swaps and portfolio tracking optimized for mobile users.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "UX Design, UI Design",
    challengeTitle: "Mobile DeFi still lacks seamless user experiences:",
    challenges: [
      "Complex on-chain actions not optimized for small screens.",
      "Slow performance on low-end devices.",
      "No real-time mobile analytics.",
      "Difficult wallet integration."
    ],
    visionTitle: "Swallow brings fast DeFi trading to everyone:",
    visions: [
      "Smooth, frictionless swaps from any device.",
      "Clean UI made for beginners.",
      "Fast syncing and real-time charts."
    ],
    feature: [
      {
        title: "Mobile Swap Engine",
        contents: [
          "Instant token conversion.",
          "Minimal UI for fast trading.",
          "Gas estimation and warnings."
        ]
      },
      {
        title: "Portfolio Tracker",
        contents: [
          "Real-time token balance updates.",
          "Historical graphs.",
          "Alerts for price movement."
        ]
      }
    ],
    goalTitle: "Accessible DeFi for the Masses",
    goals: [
      "Bring decentralized trading to mobile-first regions.",
      "Lower the entry barrier into Web3.",
      "Offer secure, fast, simple token management."
    ]
  },

  // -------------------------------------------------------------------------

  {
    id: '3dcarconfigurator',
    title: 'BraBus - 3D Car Configurator',
    subtitle: '3D Car Configurator',
    images: ['/projects/3dcarconfigurator/1.jpg', '/projects/3dcarconfigurator/2.jpg', '/projects/3dcarconfigurator/3.jpg', '/projects/3dcarconfigurator/4.jpg', '/projects/3dcarconfigurator/5.jpg', '/projects/3dcarconfigurator/6.jpg'],
    technologies: ['Three.js', 'React', 'WebGL', 'TypeScript'],
    year: '2024',
    overview:
      "BraBus is an interactive 3D car configurator allowing users to customize vehicles with real-time rendering, lighting simulation, and a high-fidelity 360° experience.",
    client: 'Vearah Design Studio, Abuja, NG',
    services: "Research, UI/UX Design, 3D Interaction Design",
    challengeTitle: "Car customization tools face several UX and performance issues:",
    challenges: [
      "Slow rendering of high-poly 3D models.",
      "Unintuitive control schemes for casual users.",
      "Difficulty representing colors and materials accurately.",
      "Limited sharing or export features."
    ],
    visionTitle: "BraBus delivers a premium, real-time 3D customization experience:",
    visions: [
      "Photorealistic rendering of cars in real-time.",
      "Easy-to-use controls for all user levels.",
      "Immersive views from interior and exterior modes."
    ],
    feature: [
      {
        title: "Real-Time 3D Engine",
        contents: [
          "HDR lighting and reflections.",
          "Material shaders for glossy, matte, and metallic finishes.",
          "360° rotation and zoom."
        ]
      },
      {
        title: "Customization Suite",
        contents: [
          "Color, wheels, interior, trims, and accessories.",
          "Preset packages and performance kits.",
          "Export configuration to image/PDF."
        ]
      }
    ],
    goalTitle: "Reinventing Digital Vehicle Shopping",
    goals: [
      "Help car brands showcase models interactively.",
      "Enable users to visualize vehicles before purchase.",
      "Provide a premium, immersive digital experience."
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  return projectsData;
}
