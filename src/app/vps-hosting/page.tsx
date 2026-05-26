import PageHero from "@/components/PageHero";
import VPSIntro from "@/components/VPSIntro";
import VPSFeatures from "@/components/VPSFeatures";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WebHostingCTA from "@/components/WebHostingCTA";
import Footer from "@/components/Footer";

const vpsFaqs = [
  {
    question: "What is a Virtual Private Server (VPS)?",
    answer: "A Virtual Private Server (VPS) is an isolated virtual machine that provides dedicated resources (CPU, RAM, Storage) on a shared physical server. It bridges the gap between shared hosting and dedicated servers, giving you complete control, full root access, and reliable performance without the cost of a full physical server."
  },
  {
    question: "Do I get full root access?",
    answer: "Yes! All our VPS plans come with full root access, allowing you to install custom software, configure server settings, and have complete administrative control over your environment."
  },
  {
    question: "Can I upgrade my VPS later?",
    answer: "Absolutely! Our VPS infrastructure is highly scalable. You can easily upgrade your CPU, RAM, and storage resources at any time directly from your control panel without experiencing any data loss or significant downtime."
  },
  {
    question: "Is your VPS hosting managed or unmanaged?",
    answer: "Our standard VPS hosting plans are unmanaged, meaning you have total control and responsibility for server configuration and software updates. However, we do offer fully Managed VPS add-ons if you prefer our expert team to handle server maintenance, security patching, and optimizations."
  },
  {
    question: "What operating systems do you support?",
    answer: "We support a wide range of popular Linux distributions, including Ubuntu, CentOS, Debian, AlmaLinux, and Rocky Linux. You can easily install or reinstall your preferred OS with a single click from the control panel."
  }
];

export default function VPSHosting() {
  return (
    <main className="min-h-screen relative bg-white">
      <PageHero 
        title="VPS Hosting"
        badge="High-Performance Virtual Servers"
        subtitle={
          <>Powerful, scalable, and secure <span className="text-[#E00C15] font-bold">Virtual Private Servers.</span></>
        }
        features={[
          "Full Root Access",
          "Dedicated Resources",
          "99.9% Uptime Guarantee"
        ]}
      />
      
      <VPSIntro />
      <VPSFeatures />
      
      {/* Reusing standard pricing component to give them pricing options. */}
      <Pricing />
      
      <FAQ faqs={vpsFaqs} title="VPS Hosting FAQs" subtitle="Common questions about our Virtual Private Server solutions." />
      
      <WebHostingCTA />
      <Footer />
    </main>
  );
}
