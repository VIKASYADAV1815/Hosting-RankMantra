"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Clean, high-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Pure hardware-accelerated background parallax vector mapping
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#2D2D2D]"
    >
      {/* Background Image Track */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%]" 
        style={{ y: yBg, willChange: "transform" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
          alt="Premium Server Infrastructure" 
          className="w-full h-full object-cover"
        />
        {/* Adjusted solid opacity overlays so text has massive contrast */}
        <div className="absolute inset-0 bg-black/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A] via-black/40 to-black/50" />
      </motion.div>

      {/* Content Layer (Keeps Your Exact Original Text, Font Weights, and Tags) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center mt-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E00C15]/25 border border-[#E00C15]/60 text-sm font-bold text-white mb-6 backdrop-blur-md shadow-lg">
            <ShieldCheck size={18} className="text-[#E00C15]" />
            Enterprise-Grade Infrastructure
          </div>
          
          {/* High-Visibility Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-md">
            High-Performance <br />
            <span className="text-[#E00C15]">Web Hosting.</span>
          </h1>
          
          {/* Solid Subtitle */}
          <p className="text-base md:text-xl text-white mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
            Experience lightning-fast load times with our NVMe SSD storage and 99.9% uptime guarantee. Built for scale, designed for speed.
          </p>

          {/* High-Contrast Search Box Console */}
          <div className="flex w-full max-w-2xl bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 mb-8 focus-within:ring-4 focus-within:ring-[#E00C15]/40 transition-all duration-200">
             <div className="pl-4 flex items-center justify-center text-[#4B4B4B]">
               <Search size={20} />
             </div>
             <input 
               type="text" 
               placeholder="Find your perfect domain name..." 
               className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-[#4B4B4B] placeholder:text-gray-400 font-bold text-base w-full"
             />
             <button className="bg-[#E00C15] text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-[#c00a12] active:scale-[0.98] transition-all shadow-md">
               Search
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}