"use client";
import { motion } from "framer-motion";

export default function SwitchHost() {
  return (
    <section className="relative py-32 w-full flex items-center justify-center overflow-hidden border-b border-gray-200">
      {/* Background Image Banner with CSS Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')` }}
      >
        {/* Overlay with the custom #4B4B4B color */}
        <div className="absolute inset-0 bg-[#4B4B4B]/85 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            <span className="border-b-4 border-[#E00C15]">Switching</span> From Another Host?
          </h2>
          
          <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed font-medium">
            Our dedicated Migrations Team is standing by to transfer your existing content from your prior host and configure it to perform optimally on our platform. We can also transfer domain registrations from other registrars in order to provide you complete management of your entire online portfolio all in one place!
          </p>

          <button className="bg-[#007BFF] text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-[#0056b3] transition-colors shadow-md">
            Read More..
          </button>
        </motion.div>
      </div>
    </section>
  );
}
