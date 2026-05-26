"use client";
import { motion } from "framer-motion";

export default function WebHostingCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[400px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')",
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-black/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#4B4B4B]/80 to-[#E00C15]/20" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter drop-shadow-md">
            Not sure which hosting plan to chose?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-sm font-medium">
            No problem. Send us a ticket with your hosting needs and we'll get back to you with a quote. Free of charge.
          </p>
          <button className="bg-[#E00C15] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c00a12] transition-colors shadow-[0_10px_30px_rgba(224,12,21,0.3)] hover:shadow-[0_15px_40px_rgba(224,12,21,0.4)] hover:-translate-y-1 transform duration-200">
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
