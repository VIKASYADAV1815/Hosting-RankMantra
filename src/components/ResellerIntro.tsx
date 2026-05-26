"use client";
import { motion } from "framer-motion";

export default function ResellerIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4B4B4B_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B4B4B] mb-6 tracking-tighter leading-tight">
              Make Money By Hosting Your Own Clients!
            </h2>
            <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Our Reseller Hosting Packages are designed to fully accommodate the demands of web hosts in today's industry. Combined with our 24x7x365 Live support desk, powerful servers, friendly staff & vast array of value added features unmatched by any other host, you can be rest assured that with us, you are fully equipped to provide full hosting solutions to your customers.
              </p>
              <div className="bg-[#F8F8F8] p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="font-semibold text-[#4B4B4B]">
                  All Reseller Package comes with a <span className="text-[#E00C15]">FREE Migration</span>, Scripts installations and <span className="text-[#E00C15]">45 Days Money Back Guarantee.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B4B4B] mb-6 tracking-tighter leading-tight">
              How does Reseller Hosting work?
            </h2>
            <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed">
              <p>
                After signup you will be given access to our reseller control panel, WHM (Web Host Manager). WHM will allow you to manage and provide your customers with their own user control panels (cPanel) which will enable them to create and modify their own web sites. 
              </p>
              <p>
                Once your customer is logged into cPanel they are able to control sub domains, email addresses, passwords and much more without requiring any assistance! In the event that you encounter any difficulties, we're available 24/7/365 to help.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
