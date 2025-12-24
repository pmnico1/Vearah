import React, { Suspense } from 'react'
import Header from '@/components/Header'
import type { Metadata } from "next";
import Main from './Main'
import Intro from '@/components/Intro'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Vearah - Contact Us",
  description: "Get in touch with Vearah for your next digital project. Fill out our contact form or reach out directly. We're here to help bring your ideas to life.",
  openGraph: {
    title: "Contact Vearah - Creative Digital Agency",
    description: "Get in touch with Vearah for your next digital project. We're here to help bring your ideas to life.",
    url: "https://vearah.com/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Vearah",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]"><div className="text-white">Loading...</div></div>}>
        <Main />
      </Suspense>
      <Intro />
      <Footer />
    </div>
  )
}
