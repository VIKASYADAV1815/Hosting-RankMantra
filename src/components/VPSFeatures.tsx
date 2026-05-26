"use client";
import { useState } from "react";
import { Server, Zap, ShieldCheck, Activity, Cpu, Key, Clock, HardDrive } from "lucide-react";

const features = [
  { icon: Cpu, title: "Dedicated Resources", desc: "Guaranteed CPU and RAM allocated specifically for your server." },
  { icon: HardDrive, title: "NVMe SSD Storage", desc: "Enterprise-grade solid state drives for maximum I/O performance." },
  { icon: Key, title: "Full Root Access", desc: "Complete administrative control to install and configure any software." },
  { icon: Zap, title: "Instant Provisioning", desc: "Your server is deployed and ready to use in seconds after payment." },
  { icon: Activity, title: "Unmetered Bandwidth", desc: "No artificial limits on your data transfer or incoming traffic." },
  { icon: ShieldCheck, title: "DDoS Protection", desc: "Advanced network-level mitigation to keep your server online." },
  { icon: Server, title: "Multiple OS Choices", desc: "Choose from AlmaLinux, Ubuntu, Debian, CentOS, and more." },
  { icon: Clock, title: "99.9% Uptime SLA", desc: "Financially backed guarantee for your server's network availability." },
];

export default function VPSFeatures() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Editorial Tech Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0000005_1px,transparent_1px),linear-gradient(to_bottom,#f0000005_1px,transparent_1px)] bg-size-[3rem_3rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-center text-center pb-12 mb-12 border-b-2 border-[#4B4B4B]/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#4B4B4B] sm:text-4xl uppercase">
              Premium VPS Features
            </h2>
          </div>
        </div>

        {/* The Focus Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {features.map((feature, idx) => {
            const isHovered = hoveredIdx === idx;
            const anyHovered = hoveredIdx !== null;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="bg-white hover:bg-linear-to-br hover:from-white hover:to-[#E00C15]/4 p-8 relative overflow-hidden transition-all duration-300 flex flex-col items-center text-center group min-h-65 cursor-default"
                style={{
                  opacity: anyHovered && !isHovered ? 0.6 : 1,
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  zIndex: isHovered ? 20 : 10,
                  boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.06)" : "none",
                }}
              >
                {/* Active Accent Border Corners */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-[#E00C15] transition-transform duration-300 origin-left scale-x-0 ${isHovered ? "scale-x-100" : ""}`} />
                <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-[#E00C15] transition-transform duration-300 origin-right scale-x-0 ${isHovered ? "scale-x-100" : ""}`} />

                {/* Icon */}
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#4B4B4B] mb-5 group-hover:bg-[#E00C15] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Title & Desc */}
                <h4 className="text-lg font-bold text-[#4B4B4B] tracking-tight mb-2 transition-colors duration-200">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
