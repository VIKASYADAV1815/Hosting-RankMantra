"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="RankMantra" width={180} height={50} className="h-10 w-auto" />
            </Link>
            <p className="max-w-sm text-gray-500 leading-relaxed mb-8">
              High-performance hosting infrastructure built for scale. Reliable, fast, and secure.
            </p>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <a href="mailto:info@rankmantra.com" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Mail size={16} /> info@rankmantra.com
              </a>
              <a href="tel:+918979249912" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Phone size={16} /> +91 8979249912
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Shyam Tower, Shimla Bypass Road, Dehradun 248171
              </span>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">Hosting</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/web-hosting" className="hover:text-red-600 transition-colors">Web Hosting</Link></li>
              <li><Link href="/reseller-hosting" className="hover:text-red-600 transition-colors">Reseller Hosting</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-red-600 transition-colors">VPS Servers</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Dedicated Servers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="#" className="hover:text-red-600 transition-colors">Domain Search</Link></li>
              <li><Link href="/knowledgebase" className="hover:text-red-600 transition-colors">Knowledgebase</Link></li>
              <li><Link href="/open-ticket" className="hover:text-red-600 transition-colors">Open Ticket</Link></li>
              <li><Link href="/announcements" className="hover:text-red-600 transition-colors">Announcements</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about-us" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} RankMantra. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-400 transition-all duration-300 rounded-lg shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}