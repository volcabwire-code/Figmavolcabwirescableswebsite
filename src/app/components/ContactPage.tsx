import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    wireType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      wireType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get in touch with our team for enquiries, quotes, or any assistance
              you need
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91-XXXX-XXXXXX"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="wireType">Wire Type Required *</Label>
                <Select
                  value={formData.wireType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, wireType: value })
                  }
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select wire type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single Core FR Copper Wire">
                      Single Core FR Copper Wire
                    </SelectItem>
                    <SelectItem value="Multi Core Copper Wire">
                      Multi Core Copper Wire
                    </SelectItem>
                    <SelectItem value="Flexible Copper Wire">
                      Flexible Copper Wire
                    </SelectItem>
                    <SelectItem value="Aluminium Wire">
                      Aluminium Wire
                    </SelectItem>
                    <SelectItem value="General Enquiry">
                      General Enquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message / Requirements</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Please specify size, length, color, quantity, and any other requirements..."
                  rows={5}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white"
              >
                Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      Industrial Area, Kolkata
                      <br />
                      West Bengal, India - 700001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      +91-XXXX-XXXXXX
                      <br />
                      +91-YYYY-YYYYYY
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      info@volcab.com
                      <br />
                      sales@volcab.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15449993355!2d88.1247889!3d22.6757521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Volcab Location"
                ></iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#1A1A1A] text-white rounded-lg shadow-lg p-8">
              <h3 className="mb-4">Why Choose Volcab?</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>BIS ISI 694 Certified Products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>99.97% Pure Copper Wires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>100% Virgin PVC Insulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>Fire Retardant Technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>Made in Kolkata, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD600] mt-1">✓</span>
                  <span>Competitive Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
