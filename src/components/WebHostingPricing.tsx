"use client";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Startup",
    price: "3800.00",
    save: "15%",
    oldPrice: "4,497.00",
    isPopular: false,
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
    price: "6400.00",
    save: "29%",
    oldPrice: "8,997.00",
    isPopular: true,
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
    price: "7800.00",
    save: "35%",
    oldPrice: "11,997.00",
    isPopular: false,
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

export default function WebHostingPricing() {
  return (
    <section className="py-24 bg-[#F8F8F8] text-[#4B4B4B] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Engine */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 mb-6">
            Choose Your Web Hosting Plan
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-normal leading-relaxed">
            Get your business online with our powerful and reliable web hosting plans.
          </p>
        </div>

        {/* Master Console Segment (The clean layout structure from your home page) */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
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
                  
                  {/* Dropdown Box for Term & Save Badge */}
                  <div className={`flex items-center justify-between border rounded-md px-3 py-2 mb-4 mt-6 ${
                    plan.isPopular ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-200 bg-gray-50'
                  }`}>
                    <span className={`text-sm ${plan.isPopular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      3 Years @
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#E00C15] text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                        Save {plan.save}
                      </span>
                      <svg className={`w-4 h-4 ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-neutral-400 line-through">₹{plan.oldPrice} INR</span>
                    </div>
                    <div className="flex items-baseline font-normal">
                      <span className={`text-4xl font-semibold tracking-tight ${
                        plan.isPopular ? 'text-white' : 'text-neutral-900'
                      }`}>
                        <span className="text-[#E00C15]">₹</span>{plan.price}
                      </span>
                      <span className="text-xs ml-1 text-neutral-400">INR</span>
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">Triennially</div>
                  </div>

                  {/* Wide Action Buttons */}
                  <button
                    className={`w-full py-3.5 px-4 font-bold text-sm rounded-lg transition-all mb-10 ${
                      plan.isPopular
                        ? 'bg-[#007BFF] text-white hover:bg-[#0056b3]'
                        : 'bg-[#007BFF] text-white hover:bg-[#0056b3]'
                    }`}
                  >
                    Order Now
                  </button>

                  {/* Minimalistic Inline Feature Items */}
                  <div className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm">
                        <span className="text-xs font-semibold select-none shrink-0 text-[#E00C15]">
                          +
                        </span>
                        <span className={plan.isPopular ? 'text-neutral-300' : 'text-neutral-600'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subbar Footer Info Line */}
          <div className="bg-white border-t border-neutral-200 py-4 text-center text-xs text-neutral-400 font-normal flex items-center justify-center gap-1.5">
            <span className="text-[#E00C15]">⚡</span> Automated provisioning. Instant setup.
          </div>
        </div>
      </div>
    </section>
  );
}