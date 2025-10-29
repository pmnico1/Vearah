export interface PromotionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const promotionCards: PromotionCard[] = [
  {
    id: 'art-intelligence',
    title: 'The Fusion of Art + Intelligence',
    description: 'You don\'t have to "stitch" multiple partners together. With us, vision - experience - technology flows seamlessly under one roof.',
    image: '/images/feature/2.jpg',
    imageAlt: 'Art and intelligence fusion'
  },
  {
    id: 'future-proof',
    title: 'Future-Proof Technology Integration',
    description: 'We build products scalable for today and adaptable for tomorrow, ensuring clients stay ahead of disruption.',
    image: '/images/feature/3.jpg',
    imageAlt: 'Future-proof technology'
  },
  {
    id: 'partnership',
    title: 'Partnership Beyond Projects',
    description: 'We stay to optimize, scale, and evolve products with clients. to help create long-term trust and measurable ROI.',
    image: '/images/feature/4.jpg',
    imageAlt: 'Partnership illustration'
  }
];
