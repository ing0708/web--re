import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import Spectrum from "@/components/Spectrum";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Innovation />
        <Spectrum />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
