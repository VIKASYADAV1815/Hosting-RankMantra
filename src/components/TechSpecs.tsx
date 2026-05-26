"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const specs = [
  {
    title: "Web Hosting Features",
    content: [
      "Guaranteed Disk Space and Bandwidth",
      "Flexible, Easy to Use Control Panel",
      "Unlimited Sub Domains, FTP Accounts, and Database",
      "99.9% Uptime Guarantee",
      "No Contract with a 45 Day Money Back Guarantee"
    ]
  },
  {
    title: "Free With Each Hosting Plan",
    content: [
      "Free Website Builder and Website Building Tools",
      "Free Global Sign's Private Domain SSL Certificate",
      "370+ Free scripts can be instantly installed on your account with a few clicks",
      "Free Website Transfer including Domain, Script and Database"
    ]
  },
  {
    title: "cPanel Control Panel",
    content: [
      "Latest cPanel Control Panel",
      "AWStats, Webalizer, Raw Log Manager, Referrer and Error Logs",
      "Instant Shopping Carts, Blogs, Portals, Forums, Counters, and Formmail",
      "Password Protected Directories and Custom Error Pages",
      "Web Based File Manager, Hotlink Protection, IP Deny Manager, Redirect URL"
    ]
  },
  {
    title: "Programming & Databases",
    content: [
      "Unlimited MySQL Databases with phpMyAdmin Access",
      "CGI, Fast CGI, PHP 5, Ruby on Rails, Perl, Python, SSL",
      "Curl, CPAN, GD Library, ImageMagick",
      "Cron Job Scheduling"
    ]
  },
  {
    title: "Email Features",
    content: [
      "POP3 Email Accounts with SMTP",
      "WebMail Access: Horde, SquirrelMail, RoundCube",
      "Receive your email to your phone via IMAP Support",
      "Prevent spam with SpamAssassin",
      "Unlimited Autoresponders, Mail Forwards, Email Aliases, Mailing Lists"
    ]
  },
  {
    title: "Premium Support",
    content: [
      "24/7/365 Premium Support via Phone, Live Chat, and Ticket System",
      "Automatic Weekly Off-Site Data Backups",
      "24/7/365 Server Monitoring",
      "Online Support Portal with Video Tutorials and Help Articles"
    ]
  }
];

export default function TechSpecs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative border-b border-gray-200">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#4B4B4B_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4B4B] tracking-tight">Technical Specifications</h2>
          <p className="text-gray-600 mt-4 text-lg">Everything you need to power your website, included out of the box.</p>
        </div>

        <div className="space-y-4">
          {specs.map((spec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Dot pattern inside boxes on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(#4B4B4B_1px,transparent_1px)] [background-size:16px_16px] opacity-0 pointer-events-none group-hover:opacity-[0.03] transition-opacity"></div>
              
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none relative z-10"
              >
                <span className="font-bold text-lg text-[#4B4B4B]">
                  {spec.title}
                </span>
                <ChevronDown className={`text-[#4B4B4B] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <ul className="space-y-3">
                        {spec.content.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#E00C15] shrink-0" />
                            <span className="text-gray-600 text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}