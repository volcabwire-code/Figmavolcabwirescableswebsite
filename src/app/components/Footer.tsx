import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t-8 border-[#FFD600]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold font-['Oswald'] tracking-wider flex items-center gap-2">
              <div className="bg-[#FFD600] text-black w-10 h-10 flex items-center justify-center rounded-sm font-black">
                V
              </div>
              VOLCAB
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Volcab Wires & Cables is a leading manufacturer of high-quality industrial and domestic cables. Committed to safety, durability, and innovation since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-[#FFD600] hover:text-black w-10 h-10 flex items-center justify-center rounded-full transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD600] hover:text-black w-10 h-10 flex items-center justify-center rounded-full transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD600] hover:text-black w-10 h-10 flex items-center justify-center rounded-full transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD600] hover:text-black w-10 h-10 flex items-center justify-center rounded-full transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-['Oswald'] uppercase mb-6 text-[#FFD600]">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Blog', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-[#FF6B35]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold font-['Oswald'] uppercase mb-6 text-[#FFD600]">Our Products</h4>
            <ul className="space-y-3">
              {['FR PVC Insulated Cables', 'FRLS PVC Cables', 'ZHFR Cables', 'Multicore Round Cables', 'Submersible Cables'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-[#FF6B35]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold font-['Oswald'] uppercase mb-6 text-[#FFD600]">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <MapPin size={20} className="text-[#FF6B35] shrink-0 mt-1 group-hover:text-[#FFD600] transition-colors" />
                <span>5/1A Picnc Garden Road,<br />Kolkata, India 700039</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group">
                <Phone size={20} className="text-[#FF6B35] shrink-0 group-hover:text-[#FFD600] transition-colors" />
                <div className="flex flex-col">
                  <span>+91 87770 22997 (Primary)</span>
                  <span>+91 79800 47529 (Secondary)</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group">
                <Mail size={20} className="text-[#FF6B35] shrink-0 group-hover:text-[#FFD600] transition-colors" />
                <span>info@volcab.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Volcab Wires & Cables. All rights reserved.</p>
          <p>Designed with safety & power.</p>
        </div>
      </div>
    </footer>
  );
};
