"use client";
import { motion } from "framer-motion";

export default function VPSIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4B4B4B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>
      
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
              Experience Ultimate Control and Performance
            </h2>
            <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Our VPS hosting provides the perfect bridge between shared hosting and a dedicated server. With guaranteed resources, full root access, and enterprise-grade NVMe SSD storage, your applications will run faster and more securely than ever.
              </p>
              <div className="bg-[#F8F8F8] p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="font-semibold text-[#4B4B4B]">
                  Every VPS plan includes a <span className="text-[#E00C15]">FREE Dedicated IP</span>, instant provisioning, and our <span className="text-[#E00C15]">99.9% Uptime SLA.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B4B4B] mb-6 tracking-tighter leading-tight">
              Built for Scale and Reliability
            </h2>
            <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Whether you're hosting resource-intensive applications, high-traffic websites, or multiple client projects, our VPS infrastructure is built to scale seamlessly with your needs. Enjoy completely isolated environments meaning neighboring users will never impact your server's performance.
              </p>
              <p>
                Upgrade your CPU, RAM, and Storage with zero downtime. Combined with our 24/7/365 expert technical support, you have all the tools necessary to power your most demanding web projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
