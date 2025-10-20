import { Project, StatisticsFrame } from './types';

export const projects: Project[] = [
  {
    title: 'Lumo',
    subtitle: 'AI-Power Learning Assistant',
    image: '/images/portfolio/1.png',
    tags: ['Healthtech & Wearables', 'AI & Edutech', 'Blockchain & Finance', 'AI & Edutech', 'Blockchain & Finance']
  },
  {
    title: 'FinFlow',
    subtitle: 'Smart Financial Dashboard',
    image: '/images/portfolio/1.png',
    tags: ['Blockchain & Finance', 'AI & Edutech', 'Healthtech & Wearables', 'Blockchain & Finance', 'AI & Edutech']
  },
  {
    title: 'MediTrack',
    subtitle: 'Healthcare Management System',
    image: '/images/portfolio/1.png',
    tags: ['Healthtech & Wearables', 'Blockchain & Finance', 'AI & Edutech', 'Healthtech & Wearables', 'AI & Edutech']
  }
];

export const statisticsFrames: StatisticsFrame[] = [
  {
    id: 'experience',
    value: '16',
    label: ['Combined', 'Experience'],
    position: { top: '60vh', left: '5%' },
    delay: 1.5,
    backgroundStyle: {}
  },
  {
    id: 'amazing-projects',
    value: '26',
    label: ['Amazing', 'projects'],
    position: { bottom: '10vh', left: '20%' },
    delay: 1.8,
    backgroundStyle: {
      backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 250 144\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.03368 6.336 -22.009 0.16664 129.28 0.0000077214)\\'><stop stop-color=\\'rgba(129,187,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,147,198,0.75)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(77,106,140,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(51,66,83,0.25)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(25,25,25,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
    }
  },
  {
    id: 'successful-projects',
    value: '129',
    label: ['Successful', 'projects'],
    position: { bottom: '20vh', right: '8%' },
    delay: 2.1,
    backgroundStyle: {
      backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 276 144\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.1666e-14 -3.55 13.614 -0.013471 143.09 144)\\'><stop stop-color=\\'rgba(129,187,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,147,198,0.75)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(77,106,140,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(51,66,83,0.25)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(25,25,25,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
    }
  }
];
