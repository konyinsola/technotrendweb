import About from "@/components/About";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";

import TelecomProducts from "@/components/TelecomProducts";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TelecomProducts />
      <CTA />
      <Footer />
     
    </>
  );
}
