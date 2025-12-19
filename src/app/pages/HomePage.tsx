import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Shield, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';


// Hero Background
const HERO_IMAGE = "https://images.unsplash.com/photo-1758304481516-36a98d9595b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWMlMjBjYWJsZXMlMjBmYWN0b3J5JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2NTk0ODk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Founder photo
const FOUNDER_IMAGE = "https://i.postimg.cc/8kmvpF3m/ramm.jpg";

export const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Industrial Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-20 bg-[#FFD600]" />
              <span className="text-[#FFD600] uppercase font-bold tracking-widest text-sm">Since 1995</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Oswald'] text-white leading-tight mb-8 uppercase">
              Powering The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] to-[#FF6B35]">Nation</span><br />
              With Safe Connections
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl font-light">
              Premium quality wires and cables engineered for safety, durability, and efficiency. Trusted by industries across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-[#FFD600] text-black font-bold font-['Oswald'] uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-bold font-['Oswald'] uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFD600] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '1M+', label: 'Meters Cabling' },
              { number: '100%', label: 'Safety Certified' },
            ].map((stat, index) => (
              <div key={index} className="text-center border-r last:border-0 border-black/10">
                <div className="text-4xl md:text-5xl font-black font-['Oswald'] text-black mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-wider text-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 md:py-32 bg-[#F5F5F7] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFD600]/5 -skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-[20px] border-[#FF6B35]/5 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-b-8 border-[#FFD600]">
                 {/* Use ImageWithFallback but with the imported asset directly as src */}
                <img
                  src={FOUNDER_IMAGE}
                  alt="Ram Awadh Jaiswal"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            
                 </div>
              {/* Image Backdrops */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#1A1A1A] z-0" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD600] z-20 flex items-center justify-center p-4">
                <span className="font-['Oswald'] font-bold text-3xl leading-none text-center">EST.<br/>1995</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-1 w-16 bg-[#FF6B35]" />
                 <span className="text-[#FF6B35] uppercase font-bold tracking-widest text-sm">Founder's Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-8 text-[#1A1A1A] uppercase">
                Building Trust Through <br/>
                <span className="text-[#FFD600] bg-black px-2 inline-block -rotate-1">Quality & Safety</span>
              </h2>
              <blockquote className="text-xl md:text-2xl text-gray-600 italic font-light mb-8 border-l-4 border-[#FFD600] pl-6 py-2">
                "We don't just manufacture cables; we build the lifelines of modern infrastructure. Safety isn't an option, it's our promise."
              </blockquote>
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-['Oswald'] text-[#1A1A1A]">Ram Awadh Jaiswal</h3>
                <p className="text-gray-500 uppercase tracking-wider text-sm">Founder & Chairman</p>
              </div>
              <div className="flex flex-col gap-4">
                {['Visionary Leadership', 'Commitment to Excellence', '30+ Years Industry Expertise'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[#FF6B35]" size={20} />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#FFD600] uppercase font-bold tracking-widest text-sm mb-4 block">Why Choose Volcab</span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] uppercase">Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] to-[#FF6B35]">Performance</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#222] p-8 rounded-sm border-t-4 border-[#FFD600] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#FFD600]/10 rounded-full flex items-center justify-center mb-6 text-[#FFD600]">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold font-['Oswald'] mb-4 uppercase">Maximum Safety</h3>
              <p className="text-gray-400">Flame retardant and heat resistant technology ensures your property stays protected against electrical hazards.</p>
            </div>
            
            <div className="bg-[#222] p-8 rounded-sm border-t-4 border-[#FF6B35] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold font-['Oswald'] mb-4 uppercase">Energy Efficient</h3>
              <p className="text-gray-400">99.9% pure copper conductors minimize transmission losses, saving you money on electricity bills.</p>
            </div>
            
            <div className="bg-[#222] p-8 rounded-sm border-t-4 border-[#FFD600] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#FFD600]/10 rounded-full flex items-center justify-center mb-6 text-[#FFD600]">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold font-['Oswald'] mb-4 uppercase">ISO Certified</h3>
              <p className="text-gray-400">Manufactured in state-of-the-art facilities adhering to stringent national and international standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col items-center mb-16">
              <span className="text-[#FF6B35] uppercase font-bold tracking-widest text-sm mb-4">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] uppercase text-center text-[#1A1A1A]">
                Milestones of <span className="relative inline-block">
                  Growth
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFD600] -z-10 opacity-60"></span>
                </span>
              </h2>
           </div>

           <div className="max-w-4xl mx-auto relative">
             {/* Central Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
             
             {[
               { year: '1995', title: 'Inception', desc: 'Started with a small manufacturing unit in Kolkata.' },
               { year: '2005', title: 'Expansion', desc: 'Expanded production capacity to 5000MT per annum.' },
               { year: '2012', title: 'ISO Certification', desc: 'Achieved ISO 9001:2008 certification for quality management.' },
               { year: '2018', title: 'New Plant', desc: 'Inaugurated state-of-the-art facility for HV cables.' },
               { year: '2023', title: 'Global Reach', desc: 'Started exporting to Middle East and African markets.' },
             ].map((item, index) => (
               <div key={index} className={`flex flex-col md:flex-row items-center justify-between mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="hidden md:block w-5/12"></div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#FFD600] rounded-full border-4 border-white shadow-md z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                 </div>
                 <div className="w-full md:w-5/12 bg-gray-50 p-6 rounded-sm border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                   <span className="text-4xl font-bold font-['Oswald'] text-gray-200 absolute right-4 top-2">{item.year}</span>
                   <h3 className="text-xl font-bold font-['Oswald'] mb-2 relative z-10">{item.title}</h3>
                   <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#FFD600] uppercase font-bold tracking-widest text-sm mb-2 block text-shadow-sm bg-black px-2 w-fit">Knowledge Hub</span>
              <h2 className="text-4xl font-bold font-['Oswald'] uppercase">Latest <span className="text-[#FF6B35]">Insights</span></h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 font-bold uppercase hover:text-[#FF6B35] transition-colors">
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Why Copper is Better than Aluminum for Home Wiring", date: "Oct 15, 2023", cat: "Technical" },
               { title: "Understanding FRLS vs ZHFR Cables", date: "Nov 02, 2023", cat: "Guide" },
               { title: "Electrical Safety Tips for Monsoon Season", date: "Dec 10, 2023", cat: "Safety" },
             ].map((post, i) => (
               <div key={i} className="bg-white group cursor-pointer">
                 <div className="h-48 bg-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-800 group-hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-500">
                      {/* Placeholder for blog image */}
                      <span className="text-4xl font-black opacity-20 uppercase font-['Oswald']">Blog {i+1}</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-[#FFD600] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {post.cat}
                    </div>
                 </div>
                 <div className="p-6 border-b-4 border-transparent group-hover:border-[#FF6B35] transition-colors">
                   <div className="text-gray-400 text-xs font-bold uppercase mb-3">{post.date}</div>
                   <h3 className="text-xl font-bold font-['Oswald'] leading-tight mb-4 group-hover:text-[#FF6B35] transition-colors">
                     {post.title}
                   </h3>
                   <span className="text-sm font-bold uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                     Read More <ArrowRight size={14} />
                   </span>
                 </div>
               </div>
             ))}
          </div>
          
          <Link to="/blog" className="md:hidden mt-8 flex items-center justify-center gap-2 font-bold uppercase hover:text-[#FF6B35] transition-colors w-full bg-white py-4 border border-gray-200">
              View All Posts <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] uppercase mb-8">Ready to <span className="text-[#FFD600]">Power Up?</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Get custom quotes for bulk orders or consult with our experts for your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link 
                to="/contact" 
                className="px-10 py-5 bg-[#FFD600] text-black font-bold font-['Oswald'] uppercase tracking-widest hover:bg-[#FF6B35] hover:text-white transition-all text-lg shadow-xl hover:shadow-2xl"
              >
                Get a Quote
              </Link>
              <Link 
                to="/products" 
                className="px-10 py-5 border-2 border-white text-white font-bold font-['Oswald'] uppercase tracking-widest hover:bg-white hover:text-black transition-all text-lg"
              >
                Browse Catalog
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
