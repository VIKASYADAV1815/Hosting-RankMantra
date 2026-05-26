import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, Users, Trophy } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      <PageHero 
        title="About Us"
        badge="Who We Are"
        subtitle={
          <>Empowering your online journey with <span className="text-[#E00C15] font-bold">cutting-edge solutions</span></>
        }
      />

      <div className="pt-16 pb-8">
        <About />
      </div>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl text-[#0066CC] mb-2">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide accessible, high-performance, and secure web hosting solutions that empower individuals and businesses to establish and grow their online presence without technical hurdles.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Reliable 99.9% Uptime Guarantee",
                  "24/7 Expert Technical Support",
                  "Affordable Enterprise-Grade Hardware"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#0066CC]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-rose-50 rounded-xl text-[#E00C15] mb-2">
                <Trophy size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the global leader in digital infrastructure, setting new standards in speed, security, and customer-centric innovations that shape the future of the internet.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-[#0066CC] mb-1">10k+</div>
                  <div className="text-sm font-medium text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-[#0066CC] mb-1">99.9%</div>
                  <div className="text-sm font-medium text-gray-600">Server Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 bg-gray-50">
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}