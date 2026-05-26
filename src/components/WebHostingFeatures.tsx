"use client";
import { useState } from "react";
import { Server, HeadphonesIcon, ShieldCheck, Zap, AppWindow, Globe } from "lucide-react";

const features = [
  { icon: Server, title: "Fast Servers", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: HeadphonesIcon, title: "Best Support", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: ShieldCheck, title: "ActivGuard Security", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: Zap, title: "Fast load time", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: AppWindow, title: "Included Apps", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: Globe, title: "Private Domain", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

export default function WebHostingFeatures() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#FAFAFA] relative overflow-hidden">
      {/* Editorial Tech Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0000005_1px,transparent_1px),linear-gradient(to_bottom,#f0000005_1px,transparent_1px)] bg-size-[3rem_3rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-center text-center pb-12 mb-16 border-b-2 border-[#4B4B4B]/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-[#4B4B4B] sm:text-5xl uppercase">
              The Best Features At The Best Price!
            </h2>
          </div>
        </div>

        {/* The Focus Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {features.map((feature, idx) => {
            const isHovered = hoveredIdx === idx;
            const anyHovered = hoveredIdx !== null;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="bg-linear-to-br from-white to-[#E00C15]/4 p-8 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group min-h-65 cursor-pointer"
                style={{
                  opacity: anyHovered && !isHovered ? 0.4 : 1,
                  transform: isHovered ? "scale(1.01)" : "scale(1)",
                  zIndex: isHovered ? 20 : 10,
                  boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.06)" : "none",
                }}
              >
                {/* Active Accent Border Corners */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-[#E00C15] transition-transform duration-300 origin-left scale-x-0 ${isHovered ? "scale-x-100" : ""}`} />
                <div className={`absolute top-0 right-0 w-0.5 h-full bg-[#E00C15] transition-transform duration-300 origin-top scale-y-0 ${isHovered ? "scale-y-100" : ""}`} />

                <div>
                  {/* Card Upper Metadata Layout */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-[#4B4B4B] group-hover:text-[#E00C15] transition-colors duration-200">
                      <feature.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Clean Content Stack */}
                  <h4 className="text-lg font-bold text-[#4B4B4B] tracking-tight mb-3 transition-colors duration-200">
                    {feature.title}
                  </h4>
                  <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Tactical Technical Data Footer */}
                <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center justify-end font-medium text-sm text-gray-500">
                  <span className="opacity-0 group-hover:opacity-100 text-[#E00C15] transition-opacity duration-300 flex items-center gap-1 font-bold">
                    Read More <span className="text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
