"use client";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Calendar, History, Rss, Ticket, Bell, Book, Download, Activity, FileText } from "lucide-react";
import Link from "next/link";

export default function Announcements() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <PageHero 
        title="Announcements"
        badge="Latest News"
        subtitle={
          <>Stay up to date with our <span className="text-[#E00C15] font-bold">latest updates</span></>
        }
      />

      <div className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            {/* By Month */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">By Month</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#0066CC] transition-colors">
                    <Calendar size={18} />
                    <span className="text-sm">May 2026</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#0066CC] transition-colors">
                    <History size={18} />
                    <span className="text-sm">Older Announcements...</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#0066CC] transition-colors">
                    <Rss size={18} />
                    <span className="text-sm">View RSS Feed</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0066CC] hover:bg-gray-50 rounded-md transition-colors">
                    <Ticket size={18} className="text-gray-400" />
                    <span className="text-sm">My Support Tickets</span>
                  </a>
                </li>
                <li>
                  <a href="/announcements" className="flex items-center gap-3 px-3 py-2 text-[#0066CC] font-medium border-l-2 border-[#0066CC] bg-blue-50/50 rounded-r-md transition-colors">
                    <Bell size={18} className="text-[#0066CC]" />
                    <span className="text-sm">Announcements</span>
                  </a>
                </li>
                <li>
                  <Link href="/knowledgebase" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0066CC] hover:bg-gray-50 rounded-md transition-colors">
                    <Book size={18} className="text-gray-400" />
                    <span className="text-sm">Knowledgebase</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0066CC] hover:bg-gray-50 rounded-md transition-colors">
                    <Download size={18} className="text-gray-400" />
                    <span className="text-sm">Downloads</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0066CC] hover:bg-gray-50 rounded-md transition-colors">
                    <Activity size={18} className="text-gray-400" />
                    <span className="text-sm">Network Status</span>
                  </a>
                </li>
                <li>
                  <Link href="/open-ticket" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0066CC] hover:bg-gray-50 rounded-md transition-colors">
                    <FileText size={18} className="text-gray-400" />
                    <span className="text-sm">Open Ticket</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grow max-w-3xl">
            <article className="border-b border-gray-100 pb-8">
              <time className="text-sm text-gray-500 mb-2 block">2nd May 2026</time>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Thank you for choosing WHMCS!
              </h1>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Welcome to WHMCS! You have made a great choice and we want to help you get up and running as quickly as possible. This is a sample announcement. Announcements are a great way to keep your customers informed about news and special offers. You can edit or delete this announcement by logging into the admin area and navigating to Support {'>'} ...
                </p>
              </div>
            </article>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
