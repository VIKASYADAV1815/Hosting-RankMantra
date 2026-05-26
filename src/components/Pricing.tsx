"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const plans = [
  {
    name: "Startup",
    options: {
      "1": { price: "1499", oldPrice: "1999", save: "25%", link: "https://hosting.rankmantra.com/cart.php?a=add&pid=1&billingcycle=annually" },
      "2": { price: "2900", oldPrice: "3999", save: "27%", link: "https://hosting.rankmantra.com/order.php?pid=1&billingcycle=biennially" },
      "3": { price: "3800", oldPrice: "5999", save: "36%", link: "https://hosting.rankmantra.com/order.php?pid=1&billingcycle=triennially" },
    },
    features: [
      "1 Website",
      "Unlimited GB NVMe SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain (worth ₹999/yr)",
      "Free SSL (worth ₹950/yr)",
      "Free Weekly Backup (worth ₹999/yr)",
      "Website Builder",
      "WordPress Optimized",
      "10 Email Accounts",
      "3 MySQL Database",
    ]
  },
  {
    name: "Power",
    isPopular: true,
    options: {
      "1": { price: "2999", oldPrice: "3999", save: "25%", link: "https://hosting.rankmantra.com/order.php?pid=2&billingcycle=annually" },
      "2": { price: "4300", oldPrice: "5999", save: "28%", link: "https://hosting.rankmantra.com/order.php?pid=2&billingcycle=biennially" },
      "3": { price: "6400", oldPrice: "8999", save: "28%", link: "https://hosting.rankmantra.com/order.php?pid=2&billingcycle=triennially" },
    },
    features: [
      "5 Website",
      "Unlimited GB NVMe SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain (worth ₹999/yr)",
      "Free SSL (worth ₹950/yr)",
      "Free Weekly Backup (worth ₹999/yr)",
      "Website Builder",
      "WordPress Optimized",
      "Unlimited Email Accounts",
      "Unlimited MySQL Database",
    ]
  },
  {
    name: "Power Plus",
    options: {
      "1": { price: "3999", oldPrice: "4999", save: "20%", link: "https://hosting.rankmantra.com/order.php?pid=3&billingcycle=annually" },
      "2": { price: "5700", oldPrice: "7999", save: "28%", link: "https://hosting.rankmantra.com/order.php?pid=3&billingcycle=biennially" },
      "3": { price: "7800", oldPrice: "10999", save: "29%", link: "https://hosting.rankmantra.com/order.php?pid=3&billingcycle=triennially" },
    },
    features: [
      "10 Website",
      "Unlimited GB NVMe SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain (worth ₹999/yr)",
      "Free SSL (worth ₹950/yr)",
      "Free Weekly Backup (worth ₹999/yr)",
      "Website Builder",
      "WordPress Optimized",
      "Unlimited Email Accounts",
      "Unlimited MySQL Database",
    ]
  }
];

type PlanType = {
  name: string;
  isPopular?: boolean;
  options: Record<string, { price: string; oldPrice: string; save: string; link: string }>;
  features: string[];
};

function PlanCard({ plan }: { plan: PlanType }) {
  const [year, setYear] = useState<"1" | "2" | "3">("1");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentOption = plan.options[year];

  return (
    <div
      className={`p-8 md:p-10 flex flex-col justify-between relative ${
        plan.isPopular 
          ? 'bg-[#141414] text-white' 
          : 'bg-white text-[#4B4B4B]'
      }`}
    >
      <div>
        {/* Title & Info Block */}
        <div className="flex items-start justify-between mb-2">
          <h3 className={`text-2xl font-medium tracking-tight ${
            plan.isPopular ? 'text-white' : 'text-neutral-900'
          }`}>
            {plan.name}
          </h3>
        </div>
        
        {/* Buy & Renewal Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#E00C15]/10 text-[#E00C15] border border-[#E00C15]/20 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            Buy And Renewal At Same Cost...
          </span>
        </div>

        {/* Dropdown Box for Term & Save Badge */}
        <div className="relative mb-4">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`w-full flex items-center justify-between border rounded-md px-3 py-2 transition-colors ${
              plan.isPopular ? 'border-neutral-700 bg-neutral-800 hover:bg-neutral-700' : 'border-neutral-200 bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <span className={`text-sm font-medium ${plan.isPopular ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {year} Year{year !== "1" ? "s" : ""} @
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-[#E00C15] text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                Save {currentOption.save}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''} ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`} />
            </div>
          </button>
          
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`absolute z-10 top-full left-0 mt-1 w-full border rounded-md shadow-lg overflow-hidden ${
                  plan.isPopular ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'
                }`}
              >
                {["1", "2", "3"].map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y as "1" | "2" | "3");
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      plan.isPopular 
                        ? 'text-neutral-300 hover:bg-neutral-700' 
                        : 'text-neutral-700 hover:bg-gray-50'
                    } ${year === y ? (plan.isPopular ? 'bg-neutral-700' : 'bg-gray-50') : ''}`}
                  >
                    {y} Year{y !== "1" ? "s" : ""} @
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Matrix */}
        <div className="mb-8 relative h-[80px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={year}
              initial={{ opacity: 0, filter: "blur(8px)", y: 5 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-neutral-400 line-through">Rs {currentOption.oldPrice} INR</span>
              </div>
              <div className="flex items-baseline font-normal">
                <span className={`text-4xl font-semibold tracking-tight ${
                  plan.isPopular ? 'text-white' : 'text-neutral-900'
                }`}>
                  <span className="text-[#E00C15]">Rs</span>{currentOption.price}
                </span>
                <span className="text-xs font-medium ml-1 text-neutral-400">INR</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wide Action Buttons */}
        <a
          href={currentOption.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full py-3.5 px-4 font-bold text-sm rounded-lg transition-all mb-10 ${
            plan.isPopular
              ? 'bg-[#007BFF] text-white hover:bg-[#0056b3]'
              : 'bg-[#007BFF] text-white hover:bg-[#0056b3]'
          }`}
        >
          Order Now
        </a>

        {/* Minimalistic Inline Feature Items */}
        <div className="space-y-4">
          {plan.features.map((feature: string, fIdx: number) => (
            <div key={fIdx} className="flex items-start gap-3 text-sm">
              <span className="text-xs font-semibold select-none shrink-0 text-[#E00C15]">
                +
              </span>
              <span className={`font-medium ${plan.isPopular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-24 bg-[#F8F8F8] text-[#4B4B4B] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Engine */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 mb-6">
            Pricing
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-medium leading-relaxed">
            Premium hosting features included at the best prices. Crafted for speed and reliability.
          </p>
        </div>

        {/* Master Console Segment (The clean layout structure from your image) */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 items-stretch">
            {plans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>

          {/* Subbar Footer Info Line */}
          <div className="bg-white border-t border-neutral-200 py-4 text-center text-xs text-neutral-400 font-medium flex items-center justify-center gap-1.5">
            <span className="text-[#E00C15]">⚡</span> Automated provisioning. Instant migration deployment setup.
          </div>
        </div>

        {/* Bottom Core Partner Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Badge Frame 1 */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-[#E00C15]/10 px-2 py-0.5 rounded text-[#E00C15] font-medium">Platform</span>
                <h4 className="font-semibold text-sm text-neutral-900">WordPress Optimized Architecture</h4>
              </div>
              <p className="text-xs font-medium text-neutral-400">Trusted setups tuned for high velocity configurations.</p>
            </div>
            <button className="bg-[#E00C15] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#c00a12] transition-colors whitespace-nowrap">
              Learn Infrastructure
            </button>
          </div>

          {/* Badge Frame 2 */}
          <div className="bg-[#141414] rounded-2xl border border-neutral-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-neutral-800 px-2 py-0.5 rounded text-neutral-400 font-medium">Performance</span>
                <h4 className="font-semibold text-sm text-white">NVMe Enterprise Arrays</h4>
              </div>
              <p className="text-xs font-medium text-neutral-500">Fully vetted SSD architecture for low latency response.</p>
            </div>
            <button className="bg-neutral-800 border border-neutral-700 text-white hover:text-[#E00C15] hover:border-[#E00C15]/30 text-xs font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap">
              Review Benchmarks
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
