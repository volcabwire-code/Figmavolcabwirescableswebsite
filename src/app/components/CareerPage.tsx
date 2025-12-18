import { motion } from 'motion/react';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

export function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! We will review and contact you soon.');
    setFormData({ name: '', email: '', phone: '', position: '' });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with experienced professionals in a collaborative environment',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Competitive benefits and supportive work culture',
    },
    {
      icon: Briefcase,
      title: 'Exciting Projects',
      description: 'Be part of innovative manufacturing and quality initiatives',
    },
  ];

  const openPositions = [
    {
      title: 'Production Supervisor',
      department: 'Manufacturing',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Quality Control Inspector',
      department: 'Quality Assurance',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Electrical Engineer',
      department: 'R&D',
      location: 'Kolkata',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Join Our Team</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Build your career with one of Kolkata's leading electrical wire
              manufacturers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Join Volcab?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a dynamic work environment where your skills are valued and
              your growth is supported
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-2">{position.title}</h3>
                    <p className="text-gray-600">{position.department}</p>
                  </div>
                  <div className="bg-[#FFD600] text-black px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>📍 {position.location}</span>
                </div>
                <Button className="w-full bg-[#1A1A1A] text-white hover:bg-[#FFD600] hover:text-black">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Quick Application</h2>
            <p className="text-gray-600">
              Don't see a position that matches? Send us your details and we'll keep
              you in mind for future opportunities
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
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
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

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
              </div>

              <div>
                <Label htmlFor="position">Position Interested In *</Label>
                <Input
                  id="position"
                  required
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  placeholder="e.g., Production Supervisor, Sales Executive"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="resume">Upload Resume (Optional)</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Culture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              At Volcab, we believe in creating an environment where everyone can
              thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="mb-2">Empowerment</h3>
              <p className="text-gray-400">
                We empower our team members to take ownership and make decisions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Working together to achieve common goals and celebrate success
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="mb-2">Excellence</h3>
              <p className="text-gray-400">
                Committed to delivering the highest quality in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
