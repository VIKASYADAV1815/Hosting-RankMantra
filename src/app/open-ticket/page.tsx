"use client";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Paperclip, Plus, X } from "lucide-react";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function OpenTicket() {
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Subtle Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0066CC 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/50 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <PageHero 
          title="Open Ticket"
          badge="Support Tickets"
          subtitle={
            <>Submit a new support request to our <span className="text-[#E00C15] font-bold">expert team</span></>
          }
        />

        {/* Ticket Form */}
        <div className="grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 md:p-10 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Name</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Department</label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all font-medium text-gray-700 cursor-pointer">
                  <option>General Enquiries</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Priority</label>
              <div className="flex border border-gray-300 rounded-sm overflow-hidden w-full md:w-auto">
                {['High', 'Medium', 'Low'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPriority(p)}
                    className={`flex-1 md:flex-none px-8 py-2.5 text-sm font-semibold transition-all duration-200 border-r border-gray-300 last:border-r-0 ${
                      priority === p 
                        ? 'bg-[#0066CC] text-white' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 md:p-10 mt-8 space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Subject</label>
              <input type="text" className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all" placeholder="Brief summary of your issue" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800 uppercase tracking-wide">Message</label>
              <div className="border border-gray-300 rounded-sm overflow-hidden bg-white focus-within:border-[#0066CC] focus-within:ring-1 focus-within:ring-[#0066CC] transition-all">
                <ReactQuill 
                  theme="snow" 
                  value={message} 
                  onChange={setMessage} 
                  className="h-64"
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      ['link', 'code-block']
                    ]
                  }}
                />
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">Attachments</h3>
              <div className="flex flex-col gap-4 bg-gray-50 border border-gray-200 p-5 rounded-sm">
                <div className="flex items-center gap-3">
                  <input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.gif,.png,.txt,.pdf"
                  />
                  <div className="grow flex items-center gap-2 bg-white border border-gray-300 rounded-sm px-4 py-2.5 text-sm text-gray-500">
                    <Paperclip size={18} className="text-gray-400" />
                    <span className="truncate">{files.length > 0 ? `${files.length} file(s) selected` : "No file chosen"}</span>
                  </div>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 bg-gray-800 text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gray-900 transition-all"
                  >
                    <Plus size={18} /> Browse
                  </button>
                </div>

                {/* Display selected files */}
                {files.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-white px-4 py-2 rounded-sm border border-gray-200 text-sm">
                        <span className="text-gray-700 font-medium truncate">{file.name}</span>
                        <button 
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-sm hover:bg-red-50 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-3 font-medium ml-1">
                Allowed File Extensions: .jpg, .gif, .jpeg, .png, .txt, .pdf (Max file size: 512MB)
              </p>
            </div>

            <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row gap-3">
              <button className="bg-[#0066CC] text-white px-8 py-3.5 rounded-sm font-bold tracking-wide hover:bg-blue-700 transition-all w-full sm:w-auto">
                SUBMIT TICKET
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-sm font-bold tracking-wide hover:bg-gray-50 transition-all w-full sm:w-auto">
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
