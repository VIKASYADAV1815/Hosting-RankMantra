"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "RankMantra has completely transformed our online presence. Their hosting is incredibly fast and support is always there.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    content: "The migration process was seamless. We experienced zero downtime and our site speed improved by 40%. Highly recommended!",
    author: "Michael Chen",
    role: "E-commerce Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    content: "We've tried many hosting providers, but none offer the same level of reliability and expert support. Truly premium service.",
    author: "Emma Williams",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    content: "Blown away by the uptime and backend performance. Our core web vitals shot straight to green within days.",
    author: "Arjun Mehta",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    content: "Customer support handled our custom SSL structure setup within minutes. Exceptional service quality.",
    author: "Sofia Rodriguez",
    role: "DevOps Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  }
];

const doubleTestimonials = [...testimonials, ...testimonials];

export default function InfiniteTestimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden w-full">
      {/* Crisp background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="text-center mb-16 px-4 relative z-10">
        <h2 className="text-3xl font-bold text-[#4B4B4B] tracking-tight md:text-4xl">
          What our <span className="text-[#E00C15]">customers</span> say
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex w-full overflow-hidden items-center z-10">
        {/* Soft edge masking layers */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* 120FPS Accelerated Container */}
        <motion.div
          className="flex gap-6 pr-6 flex-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 32, // Controlled pace for optimal text scanning
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {doubleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[350px] shrink-0 bg-white border-2 border-gray-200 hover:border-[#4B4B4B] rounded-xl p-6 shadow-sm flex flex-col justify-between transition-colors duration-200 group"
            >
              <div>
                <Quote className="w-6 h-6 text-[#E00C15]/20 mb-4 transition-colors duration-200 group-hover:text-[#E00C15]/40" />
                {/* Increased Content Font Size */}
                <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed font-medium min-h-[90px]">
                  "{item.content}"
                </p>
              </div>

              {/* Author Segment */}
              <div className="flex items-center gap-3.5 pt-4 mt-5 border-t border-gray-100">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-gray-100"
                />
                <div className="flex flex-col min-w-0">
                  {/* Enhanced Author Hierarchy */}
                  <h4 className="font-bold text-[#4B4B4B] text-sm sm:text-base tracking-tight truncate">
                    {item.author}
                  </h4>
                  <span className="text-gray-500 font-medium text-xs truncate">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}