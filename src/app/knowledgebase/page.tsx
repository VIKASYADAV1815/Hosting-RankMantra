"use client";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { 
  Ticket, 
  Bell, 
  Book, 
  Download, 
  Activity, 
  FileText,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Knowledgebase() {
  const [searchQuery, setSearchQuery] = useState("");

  const supportOptions = [
    { name: "My Support Tickets", icon: Ticket, href: "#", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Announcements", icon: Bell, href: "/announcements", color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Knowledgebase", icon: Book, href: "/knowledgebase", color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Downloads", icon: Download, href: "#", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Network Status", icon: Activity, href: "#", color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Open Ticket", icon: FileText, href: "/open-ticket", color: "text-cyan-500", bg: "bg-cyan-50" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <PageHero 
        title="Knowledgebase"
        subtitle={
          <>Find answers to your questions or <span className="text-[#E00C15] font-bold">search our database</span></>
        }
      />

      <div className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Support Options Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              const isActive = option.name === "Knowledgebase";
              return (
                <Link 
                  key={index} 
                  href={option.href}
                  className={`flex flex-col items-center p-6 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    isActive 
                      ? 'bg-white border-[#0066CC] shadow-sm ring-1 ring-[#0066CC]' 
                      : 'bg-white border-gray-200 hover:border-[#0066CC]'
                  }`}
                >
                  <div className={`p-3 rounded-full mb-3 ${isActive ? 'bg-blue-100 text-[#0066CC]' : option.bg + ' ' + option.color}`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-sm font-medium text-center ${isActive ? 'text-[#0066CC]' : 'text-gray-700'}`}>
                    {option.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto w-full">
          {/* Search Box */}
          <div className="bg-[#004b99] rounded-lg p-6 md:p-8 mb-6 shadow-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#0066CC]" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-md border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 placeholder-gray-400 bg-white text-base"
                placeholder="How can we help today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* No Articles Found Box */}
          <div className="bg-[#e6f0fa] border border-[#b3d4f5] rounded-md p-6 text-center text-[#004b99] font-medium shadow-sm">
            No Articles Found
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
