import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Footer />
    </div>
  );
}
