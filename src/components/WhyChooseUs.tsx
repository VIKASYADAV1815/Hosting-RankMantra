"use client";
import { motion } from "framer-motion";
import { Server, Grid, Sliders, Shield, Headphones, CircleDollarSign } from "lucide-react";

const features = [
  {
    title: "Fast load time",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Server
  },
  {
    title: "Included Apps",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Grid
  },
  {
    title: "Flexibility",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Sliders
  },
  {
    title: "Total Secure",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Shield
  },
  {
    title: "Great Support",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Headphones
  },
  {
    title: "30 Days Money Back",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: CircleDollarSign
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4B4B] tracking-tight">
            Why get online <span className="border-b-4 border-[#E00C15]">with us?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50 group-hover:border-[#E00C15] group-hover:bg-[#E00C15]/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#4B4B4B] group-hover:text-[#E00C15] transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4B4B4B] mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
