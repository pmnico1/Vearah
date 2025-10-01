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
        <Process />
        <Promotion />
        <FAQ />
        <Team />
        <Footer />
      </Lenis>
    </div>
  );
}
