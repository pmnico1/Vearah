import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Lenis from "lenis/react";

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
        <Footer />
      </Lenis>
    </div>
  );
}
