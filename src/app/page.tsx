import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Promotion from "@/components/Promotion";
import FAQ from "@/components/FAQ";
import { ReactLenis } from "lenis/react";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import type { Metadata } from "next";
import Image from "next/image";
import Package from "@/components/Package";

export const metadata: Metadata = {
  title: "Vearah - Home",
  description: "Welcome to Vearah - a creative digital agency that transforms ideas into exceptional digital experiences. Discover our innovative web design, development, and digital solutions.",
  openGraph: {
    title: "Vearah - Creative Digital Agency",
    description: "Welcome to Vearah - a creative digital agency that transforms ideas into exceptional digital experiences.",
    url: "https://vearah.com",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vearah Homepage",
      },
    ],
  },
};

export default function Home() {
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
        <Hero />
        <Intro />
        <div className="h-[400px]" />
        <Portfolio />
        <div className="hidden md:block relative h-[200px]" >
          <div className="absolute bottom-0 left-0 w-full">
            <Image src="/footer.png" alt="footer" width={1900} height={300} className='w-full' />
          </div>
        </div>
        <Service />
        <div className="hidden md:block h-[200px]" />
        <Process />
        <div className="h-[200px]" />
        <Promotion />
        <div className="hidden md:block relative h-[200px]" >
          <div className="absolute bottom-0 left-0 w-full">
            <Image src="/footer.png" alt="footer" width={1900} height={300} className='w-full' />
          </div>
        </div>
        <FAQ />
        <div className="md:h-[200px] h-0" />
        <Team />
        <div className="md:h-[200px] h-0" />
        <Contact />
        <div className="md:h-[150px] h-0" />
        <Footer />
      </ReactLenis>
    </div>
  );
}
