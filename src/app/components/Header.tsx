import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const PRODUCTS = {
  Wires: [
    { name: 'FR PVC Insulated Cables', href: '/products?category=fr-pvc' },
    { name: 'FRLS PVC Insulated Cables', href: '/products?category=frls-pvc' },
    { name: 'ZHFR PVC Insulated Cables', href: '/products?category=zhfr-pvc' },
    { name: 'Multicore Round Cables', href: '/products?category=multicore' },
  ],
  Cables: [
    { name: 'Submersible Flat Cables', href: '/products?category=submersible' },
    { name: 'Coaxial Cables', href: '/products?category=coaxial' },
    { name: 'LAN Cables', href: '/products?category=lan' },
    { name: 'CCTV Cables', href: '/products?category=cctv' },
  ]
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] text-white border-b-4 border-[#FFD600] shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#000000] py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-gray-400">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-[#FFD600] transition-colors cursor-pointer">
              <Phone size={14} className="text-[#FFD600]" /> +91 87770 22997
            </span>
            <span className="flex items-center gap-2 hover:text-[#FFD600] transition-colors cursor-pointer">
              <Mail size={14} className="text-[#FFD600]" /> info@volcab.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#FFD600]" />
            5/1A Picnc Garden Road, Kolkata, 700039
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-bold font-['Oswald'] tracking-wider flex items-center gap-2">
            <div className="bg-[#FFD600] text-black w-10 h-10 flex items-center justify-center rounded-sm font-black">
              V
            </div>
            VOLCAB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium font-['Oswald'] tracking-wide">
            <Link to="/" className="hover:text-[#FFD600] transition-colors uppercase">Home</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#FFD600] transition-colors uppercase py-4">
                Products <ChevronDown size={16} />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white text-black shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t-4 border-[#FFD600]">
                <div className="grid grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-[#FFD600] border-b-2 border-gray-100 pb-2 uppercase">Wires</h3>
                    <ul className="space-y-2">
                      {PRODUCTS.Wires.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href} className="block text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors text-sm">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-[#FF6B35] border-b-2 border-gray-100 pb-2 uppercase">Cables</h3>
                    <ul className="space-y-2">
                      {PRODUCTS.Cables.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href} className="block text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors text-sm">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 text-center text-xs text-gray-500 font-sans">
                  Industrial Grade Quality • ISO 9001:2015 Certified
                </div>
              </div>
            </div>

            <Link to="/about" className="hover:text-[#FFD600] transition-colors uppercase">Company</Link>
            <Link to="/contact" className="hover:text-[#FFD600] transition-colors uppercase">Contact</Link>
            
            <Link to="/contact" className="bg-[#FFD600] text-black px-6 py-2 rounded-sm font-bold hover:bg-white hover:text-black transition-all uppercase text-sm">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white hover:text-[#FFD600]">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4 font-['Oswald']">
              <Link to="/" onClick={toggleMenu} className="text-xl hover:text-[#FFD600] py-2 border-b border-gray-800">Home</Link>
              
              <div className="py-2 border-b border-gray-800">
                <button 
                  onClick={() => setActiveSubmenu(activeSubmenu === 'products' ? null : 'products')}
                  className="flex justify-between items-center w-full text-xl hover:text-[#FFD600]"
                >
                  Products <ChevronDown size={20} className={clsx("transition-transform", activeSubmenu === 'products' ? "rotate-180" : "")} />
                </button>
                
                <AnimatePresence>
                  {activeSubmenu === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-4 space-y-4"
                    >
                      <div className="text-[#FFD600] text-sm uppercase font-bold mb-2">Wires</div>
                      {PRODUCTS.Wires.map(item => (
                        <Link key={item.name} to={item.href} onClick={toggleMenu} className="block text-gray-400 hover:text-white text-sm pl-2 border-l-2 border-gray-700 hover:border-[#FFD600] transition-colors">
                          {item.name}
                        </Link>
                      ))}
                      <div className="text-[#FF6B35] text-sm uppercase font-bold mt-4 mb-2">Cables</div>
                      {PRODUCTS.Cables.map(item => (
                        <Link key={item.name} to={item.href} onClick={toggleMenu} className="block text-gray-400 hover:text-white text-sm pl-2 border-l-2 border-gray-700 hover:border-[#FF6B35] transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" onClick={toggleMenu} className="text-xl hover:text-[#FFD600] py-2 border-b border-gray-800">Company</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-xl hover:text-[#FFD600] py-2 border-b border-gray-800">Contact</Link>
              
              <div className="pt-4 flex flex-col gap-4 text-gray-400 text-sm font-sans">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#FFD600]" /> +91 87770 22997
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#FFD600]" /> 5/1A Picnc Garden Road, Kolkata
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
