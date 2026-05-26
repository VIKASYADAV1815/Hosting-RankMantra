import PageHero from "@/components/PageHero";
import WebHostingIntro from "@/components/WebHostingIntro";
import WebHostingFeatures from "@/components/WebHostingFeatures";
import WebHostingCTA from "@/components/WebHostingCTA";
import TechSpecs from "@/components/TechSpecs";
import Footer from "@/components/Footer";

export default function WebHosting() {
  return (
    <main className="min-h-screen relative bg-white">
      <PageHero 
        title="Web Hosting"
        badge="Enterprise-Grade Web Hosting"
        subtitle={
          <>Get a website that works <span className="text-[#E00C15] font-bold">It's quick and easy..</span></>
        }
        features={[
          "State-of-the-Art Hosting Infrastructure",
          "45-Days Money-Back Guarantee",
          "FREE WHMCS Client Management Software"
        ]}
      />
      <WebHostingIntro />
      <WebHostingFeatures />
      <WebHostingCTA />
      
      {/* Tech Specs Section */}
      <TechSpecs />
      
      <Footer />
    </main>
  );
}
