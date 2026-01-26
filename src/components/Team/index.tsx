'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from './TeamCard'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    id: 1,
    name: "Ryan Faulkner",
    title: "CEO",
    company: "InnovateTech",
    quote: "We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients.",
    avatar: "/images/feedback/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Chang",
    title: "Product Director",
    company: "Digital Solutions Pro",
    quote: "Their expertise in building scalable products and their partnership approach has transformed how we deliver value to our customers.",
    avatar: "/images/feedback/2.jpg",
  },
  {
    id: 3,
    name: "Liam Torres",
    title: "CTO",
    company: "Future Dynamics",
    quote: "Working with this team means getting both exceptional technical execution and strategic vision. They've become an extension of our team.",
    avatar: "/images/feedback/3.jpg",
  }
]

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const cards = cardsContainerRef.current?.children
    const section = sectionRef.current
    const title = titleRef.current
    if (!cards || !section) return

    // Animate title
    if (title) {
      gsap.fromTo(title,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // Set initial state for cards - scale down, rotate, blur, and positioned differently
    gsap.set(cards, {
      opacity: 0,
      scale: 0.5,
      rotation: 15,
      filter: "blur(10px)",
      y: 100
    })

    // Animate cards with more dynamic effect
    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      filter: "blur(0px)",
      y: 0,
      stagger: {
        amount: 0.8,
        from: "random"
      },
      duration: 1.2,
      ease: "back.out(1.7)",
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

  return (
    <div ref={sectionRef} className='flex flex-col justify-center items-center w-full text-white text-center my-40 px-4'>
      <p className="text-sm font-medium mb-4">What people say about us</p>
      <p ref={titleRef} className='text-[40px] max-w-[500px] mx-auto px-2 mb-16 font-medium'>
        Here is what people are saying about us
      </p>
      <div ref={cardsContainerRef} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-20 mx-auto'>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            title={member.title}
            company={member.company}
            quote={member.quote}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  )
}
