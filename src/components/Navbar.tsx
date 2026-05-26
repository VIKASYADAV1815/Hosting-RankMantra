"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, User, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'Web Hosting', href: '/web-hosting' },
      { name: 'Reseller Hosting', href: '/reseller-hosting' },
    ],
  },
  {
    name: 'Support',
    href: '#',
    dropdown: [
      { name: 'Open Ticket', href: '/open-ticket' },
      { name: 'Announcements', href: '/announcements' },
      { name: 'Knowledgebase', href: '/knowledgebase' },
    ],
  },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="bg-dark text-white text-xs py-2 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-1 hover:text-red-400 transition-colors"><Phone size={14}/> +91-89792 49912</a>
          <a href="#" className="flex items-center gap-1 hover:text-red-400 transition-colors"><Mail size={14}/> paras.a@rankmantra.com</a>
        </div>
        <div className="flex gap-4 items-center font-medium">
           <span>English | ₹ INR</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center">
              <Image src="/logo.png" alt="RankMantra" width={180} height={50} className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className="flex items-center text-dark hover:text-red-600 font-semibold transition-colors py-2 text-[15px]"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1 opacity-70" />}
                </Link>
                
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-15 left-0 w-56 bg-white shadow-xl border border-gray-100 overflow-hidden rounded-2xl"
                      >
                        <div className="p-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-dark hover:bg-gray-50 hover:text-red-600 transition-colors font-medium rounded-xl"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2.5 border border-gray-200 text-dark hover:bg-gray-50 transition-colors rounded-full">
              <User size={18} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-base font-bold text-dark hover:text-red-600 hover:bg-gray-50 rounded-xl"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
