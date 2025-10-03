import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Promotion from "@/components/Promotion";
import FAQ from "@/components/FAQ";
import Lenis from "lenis/react";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import type { Metadata } from "next";

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
    <div className="min-h-screen">
      <Lenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
        <Header />
        <Hero />
        <Intro />
        <Portfolio />
        <Service />
        <Process />
        <Promotion />
        <FAQ />
        <Team />
        <Contact />
        <Footer />
      </Lenis>
    </div>
  );
}
