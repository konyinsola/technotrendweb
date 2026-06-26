import About from '@/components/About';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Process from '@/components/Process';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Stack from '@/components/Stack';
import TelecomProducts from '@/components/TelecomProducts';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
