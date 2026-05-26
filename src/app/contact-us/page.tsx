"use client";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <PageHero 
        title="Contact Us"
        badge="Get in Touch"
        subtitle={
          <>Have questions or need assistance? Our team is <span className="text-[#E00C15] font-bold">ready to support you</span></>
        }
      />

      <div className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-blue-100/80 text-[#0066CC] rounded-xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                Shyam Tower, Shimla Bypass Road,<br />Dehradun 248171
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-rose-100/80 text-[#E00C15] rounded-xl flex items-center justify-center mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-lg font-medium">
                +91 8979249912
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-emerald-100/80 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-lg font-medium">
                info@rankmantra.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h2>
              <p className="text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-[#0066CC]/10 transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-[#0066CC]/10 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-[#0066CC]/10 transition-all" 
                  placeholder="How can we help you?" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-[#0066CC]/10 transition-all resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="bg-[#E00C15] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c00a12] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}