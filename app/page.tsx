import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Products from "@/components/Products";
import TelecomProducts from "@/components/TelecomProducts";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6ef]">
      <Navbar />
      <Hero />
      <Stack />
      <About />
      <Services />
      <Clients />
      <Products />
      <TelecomProducts />
      <Partners />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
