"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Globe } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestionClick = (tld: string) => {
    const baseName = query.split('.')[0] || query;
    const newQuery = baseName + tld;
    setQuery(newQuery);
    setShowSuggestions(false);
    setTimeout(() => {
      formRef.current?.submit();
    }, 50);
  };
  
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
      className="relative w-full h-screen min-h-175 flex items-center justify-center overflow-hidden bg-[#2D2D2D]"
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
        <div className="absolute inset-0 bg-linear-to-t from-[#3A3A3A] via-black/40 to-black/50" />
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
          <div className="relative w-full max-w-2xl mb-8 z-20">
            <form 
              ref={formRef}
              action="https://hosting.rankmantra.com/cart.php?a=add&domain=register" 
              method="post"
              target="_blank"
              onSubmit={() => setShowSuggestions(false)}
              className="flex w-full bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 focus-within:ring-4 focus-within:ring-[#E00C15]/40 transition-all duration-200 relative z-20"
            >
               <div className="pl-4 flex items-center justify-center text-[#4B4B4B]">
                 <Search size={20} />
               </div>
               <input 
                 type="text" 
                 name="query"
                 value={query}
                 onChange={(e) => {
                   setQuery(e.target.value);
                   setShowSuggestions(e.target.value.length > 0);
                 }}
                 onFocus={() => setShowSuggestions(query.length > 0)}
                 onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                 placeholder="Find your perfect domain name..." 
                 className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-[#4B4B4B] placeholder:text-gray-400 font-bold text-base w-full"
                 autoComplete="off"
               />
               <button type="submit" className="bg-[#E00C15] text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-[#c00a12] active:scale-[0.98] transition-all shadow-md">
                 Search
               </button>
            </form>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && query && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-10 text-left"
                >
                  <div className="p-2">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Suggested Extensions
                    </div>
                    {['.com', '.in', '.net', '.org', '.co.in'].map((tld) => {
                      const baseName = query.split('.')[0] || query;
                      return (
                        <button
                          key={tld}
                          type="button"
                          onClick={() => handleSuggestionClick(tld)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg group"
                        >
                          <div className="flex items-center gap-3">
                            <Globe size={16} className="text-gray-400 group-hover:text-[#E00C15] transition-colors" />
                            <span className="text-[#4B4B4B] font-bold text-base">
                              {baseName}<span className="text-[#E00C15]">{tld}</span>
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-400 group-hover:text-[#E00C15] transition-colors">
                            Check Availability &rarr;
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}