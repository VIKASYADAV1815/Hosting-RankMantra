import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import SwitchHost from "@/components/SwitchHost";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <Marquee />
      <WhyChooseUs />
      <SwitchHost />
      <Pricing />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
