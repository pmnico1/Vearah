import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import { Lenis } from "lenis/react";

export default function Home() {
  return (
    // <Lenis root>
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Portfolio />
      <Footer />
    </div>
    // </Lenis>
  );
}
