"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: React.ReactNode;
  badge?: string;
  features?: string[];
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  features,
  bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
}: PageHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  // Clean, high-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Pure hardware-accelerated background parallax vector mapping
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[300px] md:min-h-[350px] py-16 flex items-center justify-center overflow-hidden bg-[#2D2D2D]"
    >
      {/* Background Image Track */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%]" 
        style={{ y: yBg, willChange: "transform" }}
      >
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Adjusted solid opacity overlays so text has massive contrast */}
        <div className="absolute inset-0 bg-black/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A] via-black/40 to-black/50" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col items-center mt-8"
        >
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E00C15]/25 border border-[#E00C15]/60 text-xs md:text-sm font-bold text-white mb-4 backdrop-blur-md shadow-lg">
              <ShieldCheck size={16} className="text-[#E00C15]" />
              {badge}
            </div>
          )}
          
          {/* High-Visibility Header */}
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight drop-shadow-md">
            {title}
          </h1>
          
          {/* Solid Subtitle */}
          {subtitle && (
            <div className="text-base md:text-xl text-white mb-6 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
              {subtitle}
            </div>
          )}
          
          {features && features.length > 0 && (
            <ul className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 text-center mx-auto text-white text-sm md:text-base font-medium drop-shadow-sm mt-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="text-[#E00C15] flex-shrink-0" size={18} />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
