"use client";
import { motion } from "framer-motion";

export default function WebHostingIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4B4B4B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#4B4B4B] mb-8 tracking-tighter">
            Get Started Quickly & Easily
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Our web hosting packages are perfect for businesses requiring high uptime web hosting with 24x7 support and individuals & bloggers that require a reliable web hosting platform. Whether you're starting your first web site or need a solution for your business, our web hosting packages are designed to fully accommodate from the most basic to the most complex requirements.
            </p>
            <p className="font-medium text-[#4B4B4B]">
              Our Web Hosting Package comes with a <span className="text-[#E00C15]">FREE Migration</span>, Scripts installations and <span className="text-[#E00C15]">45 Days Money Back Guarantee..</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
