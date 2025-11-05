import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ReactLenis from 'lenis/react'
import React from 'react'
import Layout from './layout'

export default function CaseStudy() {
  return (
    <div className="md:w-full w-screen">
      <ReactLenis
        root
        options={{
          wheelMultiplier: 1,
          touchMultiplier: 2,
          smoothWheel: true,
        }}
      >
        <Header />
        <Layout />
        <div className="h-[150px]" />
        <Footer />
      </ReactLenis>
    </div>)
}
