'use client'
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What exactly does Vearah do?",
    answer: "Vearah is a full-service digital agency specializing in web development, mobile apps, and digital strategy. We help businesses transform their ideas into powerful digital solutions through custom development, UI/UX design, and strategic consulting. From concept to launch, we're your technology partner for growth."
  },
  {
    question: "Who are your ideal clients?",
    answer: "We work with high-growth startups, enterprises, and visionary founders who want to innovate in industries like AI, Fintech, SaaS, Web3, eCommerce, and emerging markets. Our sweet spot is helping businesses that want more than a 'service provider' they want a long-term partner to build, scale, and differentiate."
  },
  {
    question: "What makes Vearah different from other agencies?",
    answer: "Unlike traditional agencies, Vearah combines deep technical expertise with strategic business understanding. We don't just build products—we architect solutions that drive real business results. Our team includes former startup founders, so we understand the challenges of scaling. We're also committed to long-term partnerships, not just project delivery."
  },
  {
    question: "How much does a project with Vearah cost?",
    answer: "Project costs vary based on scope, complexity, and timeline. We offer flexible engagement models from fixed-price projects to ongoing partnerships. Most web applications range from $15,000-$100,000+, while mobile apps typically start at $25,000. We provide detailed proposals after understanding your specific needs and goals."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely! We believe in long-term partnerships. Our post-launch support includes maintenance, updates, performance monitoring, and feature enhancements. We offer monthly retainer packages for ongoing development and 24/7 technical support for critical issues. Many of our clients have been with us for years, growing their platforms together."
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(1) // Second item expanded by default
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const faqItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const faqItems = faqItemsRef.current?.children

    if (!section || !title || !faqItems) return

    // Set initial state for title - scale down with blur
    gsap.set(title, {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    })

    // Set initial state for FAQ items - scale down and blur
    gsap.set(faqItems, {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)',
      x: -50 // Start from left
    })

    // Animate title with scale and blur
    gsap.to(title, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    // Animate FAQ items with scale, blur, and slide from left with stagger
    gsap.to(faqItems, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      x: 0,
      stagger: 0.2, // Increased delay for more dramatic effect
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  const highlightVearah = (text: string) => {
    return text.split('Vearah').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split('Vearah').length - 1 && (
          <span className="text-[#28FF27]">Vearah</span>
        )}
      </React.Fragment>
    ))
  }

  return (
    <div ref={sectionRef} className='flex flex-col justify-center items-center w-full text-center my-40 px-4'>
      <p ref={titleRef} className='text-white text-[40px] max-w-[500px] mx-auto px-10 mb-16 font-medium'>
        What are the questions people keep asking?
      </p>

      <div ref={faqItemsRef} className="w-full max-w-[1000px] space-y-4 text-left">
        {faqData.map((item, index) => (
          <div key={index}
            className={expandedIndex === index
              ? 'p-[1px] bgblue'
              : 'p-[1px] bg-none'
            }
          >
            <div
              className={`relative transition-all duration-300 bg-[#090808] border-y-[2px] border-[#0d0e0d] rounded-[20px] flex flex-col items-start p-10 max-w-[1000px] w-full overflow-hidden ${expandedIndex === index ? 'gap-6' : 'gap-0 '} `}
              onClick={() => toggleExpanded(index)}
            >
              <button
                className={`w-full focus:outline-none flex flex-row justify-between items-center`}
              >
                {/* Question Header */}
                <div className={`flex justify-between items-center w-full h-[29px]`}>
                  <span className="text-white text-2xl font-normal leading-[29px] font-['Urbanist']">
                    {highlightVearah(item.question)}
                  </span>

                  {/* Arrow Icon */}
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-white transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer Content - Always rendered but with conditional height */}
              </button>
              <div
                className={`max-w-[920px] w-full text-left transition-all duration-500 overflow-hidden ${expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-white text-lg leading-7 font-normal font-['Urbanist']">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div >
    </div >
  )
}
