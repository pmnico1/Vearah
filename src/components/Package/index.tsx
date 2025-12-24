'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Package {
  id: string;
  title: string;
  description: string;
  applicable: string;
  deliverables: string[];
}

const packages: Package[] = [
  {
    id: 'product-redesign',
    title: 'Product Redesign',
    description:
      "This is usually for clients who have a product, but doesn't feel modern, intuitive, or competitive. In ~6-8 weeks, <span class='text-[#A0FF7B]'> Vearah </span> can transform your entire product into a user-centered experience that increases activation, retention, and revenue.",
    applicable: 'SaaS, AI, Fintech, B2B, eCommerce etc.',
    deliverables: [
      'Complete Modern UI design',
      'High-Fidelity Clickable Prototype',
      'Developer ready-assets',
      'Full heuristic evaluation',
      'User journ ey breakdown',
    ],
  },
  {
    id: 'mvp-build',
    title: 'MVP Build Package',
    description:
      'This is <span class="text-[#A0FF7B]"> Vearah’s </span> flagship design + engineering accelerator, where we develop a beautiful, fully functional, launch-ready product for new or existing company, we will take your project from an idea through a refine process to a working product. <br /> For: Funded startups, founders launching a product, innovation teams and more.',
    applicable: 'Startups, New ventures, Product launches',
    deliverables: [
      'Product User Flow',
      'Complete Modern UI design',
      'High-Fidelity Clickable Prototype',
      'MVP Feature fully Developed',
      'Design Systems/Design Guides',
    ],
  },
  {
    id: 'full-website',
    title: 'Design & Develop Full New Websites',
    description:
      'A comprehensive solution for businesses looking to establish or revamp their online presence. We create stunning, high-performance websites that convert visitors into customers.',
    applicable: 'Businesses, Agencies, E-commerce, Corporate',
    deliverables: [
      'Custom website design',
      'Full-stack development',
      'SEO optimization',
      'Performance optimization',
      'Content management system',
    ],
  },
  {
    id: 'web3-design',
    title: 'Web3 Experience Design',
    description:
      'Specialized design services for blockchain and Web3 projects. We create intuitive experiences for complex decentralized applications, making crypto accessible to everyone.',
    applicable: 'DeFi, NFT platforms, DAOs, Crypto wallets',
    deliverables: [
      'Web3-native UI/UX design',
      'Wallet integration design',
      'Smart contract interaction flows',
      'Blockchain data visualization',
      'Community-focused features',
    ],

  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'End-to-end mobile application development for iOS and Android platforms. <span class="text-[#A0FF7B]"> Vearah </span> crafts beautiful, performant native and cross-platform mobile apps that deliver exceptional user experiences and drive engagement.',
    applicable: 'Startups, Enterprises, Consumer apps, Business apps',
    deliverables: [
      'Native iOS & Android development',
      'Cross-platform solutions (React Native/Flutter)',
      'App Store & Play Store deployment',
      'Push notifications & analytics',
      'Backend API integration',
    ],
  },
  {
    id: 'ai-agent-development',
    title: 'AI Agent Development',
    description:
      'Build intelligent AI-powered agents and automation solutions tailored to your business needs. <span class="text-[#A0FF7B]"> Vearah </span> develops custom AI agents that can handle complex tasks, interact naturally with users, and integrate seamlessly with your existing systems.',
    applicable: 'SaaS, Customer service, Automation, Enterprise',
    deliverables: [
      'Custom AI agent development',
      'Natural language processing',
      'Multi-platform integration',
      'Training & fine-tuning',
      'Performance monitoring & optimization',
    ],
  },
];

export default function Package() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[0]);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([]);

  const handlePackageChange = (pkg: Package) => {
    setSelectedPackage(pkg);
    setSelectedDeliverables([]); // Clear selections when switching packages
  };

  const toggleDeliverable = (deliverable: string) => {
    setSelectedDeliverables(prev =>
      prev.includes(deliverable)
        ? prev.filter(item => item !== deliverable)
        : [...prev, deliverable]
    );
  };

  const handleSelectPackage = () => {
    const message = `Package: ${selectedPackage.title}\n\nSelected Deliverables:\n${selectedDeliverables.map(item => `- ${item}`).join('\n')}`;
    router.push(`/contact?message=${encodeURIComponent(message)}`);
  };

  return (
    <section className="min-h-screen bg-black text-white">


      <div className="flex flex-col lg:flex-row gap-2 justify-center">

        <div className="lg:px-[150px] lg:py-[100px] py-10 w-full px-5 lg:w-1/2 flex flex-col gap-10 justify-between">
          <h2 className="lg:text-[40px] text-[24px] font-light">
            Explore Our Package Offer
          </h2>
          <div>
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => handlePackageChange(pkg)}
                className={`text-left lg:text-[40px] text-[24px] font-extralight transition-all py-[6px] duration-300 block w-full text-nowrap ${selectedPackage.id === pkg.id
                  ? 'text-[#A0FF7B] px-5'
                  : 'hover:text-white text-gray-400'
                  }`}
              >
                {pkg.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Package details */}
        <div className="lg:px-[150px] lg:py-[100px] py-10 px-5 w-full lg:w-1/2">
          <div className="text-right text-white text-lg font-light mb-8">
            {selectedPackage.title}
          </div>

          <div className="py-[6px]">
            <h3 className="text-2xl md:text-3xl font-light mb-[6px]">
              What is this Package
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              <span dangerouslySetInnerHTML={{ __html: selectedPackage.description }} />
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-[50px]">
              <span className="text-white">Applicable: </span>
              {selectedPackage.applicable}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-3">
              Deliverables
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6">
              These would typically be the deliverables but other things such
              as brand guidelines, New/update Design system would also be
              discussed.
            </p>
            <ul className="space-y-4">
              {selectedPackage.deliverables.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 cursor-pointer group"
                  onClick={() => toggleDeliverable(item)}
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedDeliverables.includes(item)
                      ? 'bg-[#A0FF7B] border-[#A0FF7B]'
                      : 'border-gray-400 group-hover:border-[#A0FF7B]'
                      }`}>
                      {selectedDeliverables.includes(item) && (
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className={`text-base md:text-lg transition-colors ${selectedDeliverables.includes(item)
                    ? 'text-white'
                    : 'text-gray-300 group-hover:text-white'
                    }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-32 justify-center items-center flex w-full">
            <button
              onClick={handleSelectPackage}
              disabled={selectedDeliverables.length === 0}
              className={`w-full max-w-[360px] bg-[#64D3FF] text-black font-medium text-lg py-4 px-8 rounded-lg transition-all duration-300 ${selectedDeliverables.length === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-[#9BDEF8] hover:scale-105'
                }`}
            >
              Select Package ({selectedDeliverables.length})
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
