import PageHero from "@/components/PageHero";
import ResellerIntro from "@/components/ResellerIntro";
import ResellerFeatures from "@/components/ResellerFeatures";
import Pricing from "@/components/Pricing";
import WebHostingCTA from "@/components/WebHostingCTA";
import Footer from "@/components/Footer";

export default function ResellerHosting() {
  return (
    <main className="min-h-screen relative bg-white">
      <PageHero 
        title="Reseller Hosting"
        badge="Enterprise-Grade Reseller Hosting"
        subtitle={
          <>Start Your Own Web Hosting Business <span className="text-[#E00C15] font-bold">Today..</span></>
        }
        features={[
          "State-of-the-Art Hosting Infrastructure",
          "45-Days Money-Back Guarantee",
          "FREE WHMCS Client Management Software"
        ]}
      />
      
      <ResellerIntro />
      <ResellerFeatures />
      
      {/* Reusing standard pricing component to give them pricing options. */}
      <Pricing />
      
      <WebHostingCTA />
      <Footer />
    </main>
  );
}
