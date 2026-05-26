"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-[#F3F3F2] text-[#4B4B4B] font-sans antialiased border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Block: Core Content Panel (7 Columns) */}
          <div className="lg:col-span-7 bg-[#EAEAEA] p-8 rounded-2xl border border-neutral-300/60 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#E00C15]">
                Who We Are
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 max-w-xl leading-tight">
                Your Trusted Partner in Premium Web Hosting
              </h2>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-600 font-normal leading-relaxed">
                <p>
                  Rank Mantra is a dedicated team of professionals with frontline competencies in website design, development, and high-performance hosting infrastructure.
                </p>
                <p>
                  Having worked for a multitude of clients globally, we have developed robust expertise in delivering lightning-fast, secure, and scalable solutions for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Metrics Grid Stack (5 Columns) */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-5">
            
            {/* Experience Card */}
            <div className="bg-[#EAEAEA] p-6 rounded-2xl border border-neutral-300/60 flex items-center justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#E00C15]" />
              <div>
                <span className="text-xs text-neutral-500 font-medium">Years of Experience</span>
              </div>
              <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                10<span className="text-[#E00C15] font-light text-xl ml-0.5">+</span>
              </div>
            </div>

            {/* Projects Card */}
            <div className="bg-[#EAEAEA] p-6 rounded-2xl border border-neutral-300/60 flex items-center justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#E00C15]" />
              <div>
                <span className="text-xs text-neutral-500 font-medium">Projects Delivered</span>
              </div>
              <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                500<span className="text-[#E00C15] font-light text-xl ml-0.5">+</span>
              </div>
            </div>

          </div>

          {/* Full-Span Image Box (12 Columns) */}
          <div className="lg:col-span-12 relative h-64 rounded-2xl overflow-hidden border border-neutral-300/80 shadow-sm bg-neutral-200 mt-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#E00C15] z-20" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Agency Team" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}