import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isBulkOrder: boolean;
};

export const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Enquiry sent successfully! We will contact you shortly.");
    reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#1A1A1A] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FFD600] opacity-5 -skew-y-3 transform origin-bottom-left scale-150"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Have a question or need a quote? Reach out to our team of experts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-2">Get in <span className="text-[#FF6B35]">Touch</span></h2>
              <div className="h-1 w-20 bg-[#FFD600] mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking for product details, dealership opportunities, or technical support, we're here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-sm flex items-center justify-center shrink-0 text-[#FF6B35]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-['Oswald'] text-lg uppercase mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    5/1A Picnc Garden Road,<br />
                    Kolkata, West Bengal,<br />
                    India - 700039
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-sm flex items-center justify-center shrink-0 text-[#FF6B35]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-['Oswald'] text-lg uppercase mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Primary: <a href="tel:+918777022997" className="hover:text-[#FF6B35] transition-colors font-medium">+91 87770 22997</a></p>
                  <p className="text-gray-600">Secondary: <a href="tel:+917980047529" className="hover:text-[#FF6B35] transition-colors font-medium">+91 79800 47529</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-sm flex items-center justify-center shrink-0 text-[#FF6B35]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-['Oswald'] text-lg uppercase mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@volcab.com" className="hover:text-[#FF6B35] transition-colors">info@volcab.com</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:sales@volcab.com" className="hover:text-[#FF6B35] transition-colors">sales@volcab.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-sm flex items-center justify-center shrink-0 text-[#FF6B35]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-['Oswald'] text-lg uppercase mb-1">Business Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-sm relative overflow-hidden grayscale hover:grayscale-0 transition-all">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.992648767664!2d88.39075731495867!3d22.541944985198274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276a666666667%3A0x6666666666666666!2sPicnic%20Garden%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1616666666666!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 title="Google Map"
               ></iframe>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-sm border-t-4 border-[#FFD600] shadow-lg">
            <h3 className="text-2xl font-bold font-['Oswald'] uppercase mb-6">Send Enquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Your Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Phone Number</label>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Email Address</label>
                <input
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Subject</label>
                <select
                  {...register("subject", { required: "Please select a subject" })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] outline-none transition-all"
                >
                  <option value="">Select Purpose</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Dealership">Dealership</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="bulkOrder"
                  {...register("isBulkOrder")}
                  className="w-5 h-5 text-[#FFD600] focus:ring-[#FFD600] border-gray-300 rounded"
                />
                <label htmlFor="bulkOrder" className="text-sm font-medium text-gray-700">I am interested in placing a bulk order</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A1A1A] text-white font-bold font-['Oswald'] uppercase tracking-wider py-4 hover:bg-[#FFD600] hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
