import { motion } from 'motion/react';
import {
  Award,
  Target,
  Eye,
  Shield,
  Factory,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const timeline = [
    {
      year: '2010',
      title: 'Company Started',
      description: 'Founded by Mr. Ram Awadh Jaiswal in Kolkata',
      icon: Factory,
    },
    {
      year: '2017',
      title: 'Company Registered',
      description: 'Officially registered as Volcab Wires & Cables',
      icon: Award,
    },
    {
      year: '2023',
      title: 'BIS ISI Certification',
      description: 'Achieved BIS ISI 694 certification for quality standards',
      icon: Shield,
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To deliver premium quality electrical wires and cables that exceed industry standards while maintaining affordability and accessibility for all.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To become India\'s most trusted name in electrical wiring solutions, known for innovation, quality, and customer satisfaction.',
    },
    {
      icon: Shield,
      title: 'Quality Policy',
      description:
        'We are committed to using 99.97% pure copper, 100% virgin PVC, and maintaining strict quality control at every stage of production.',
    },
    {
      icon: Users,
      title: 'Our Philosophy',
      description:
        'Built on the foundation of integrity, hard work, and customer-first approach. Every wire we manufacture carries our commitment to excellence.',
    },
  ];

  const clients = [
    'Major Electrical Contractors',
    'Construction Companies',
    'Industrial Manufacturers',
    'Residential Builders',
    'Government Projects',
    'Infrastructure Developers',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4">About Volcab</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A legacy of trust, quality, and innovation in electrical wiring
              solutions since 2010
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in electrical
              wiring
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD600]"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    } text-center md:text-inherit`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-[#FF6B35] mb-2">{item.year}</div>
                      <h3 className="mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Factory</h2>
              <p className="text-gray-700 mb-4">
                Located in the heart of Kolkata's industrial area, our
                state-of-the-art manufacturing facility is equipped with modern
                machinery and follows strict quality control protocols.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                  <span>Advanced manufacturing equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                  <span>Strict quality control at every stage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                  <span>Trained and experienced workforce</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                  <span>Eco-friendly manufacturing processes</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1ODk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volcab Factory"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Sustainability</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are committed to sustainable manufacturing practices that
              protect our environment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-400">
                Using recyclable and sustainable materials in production
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="mb-2">Energy Efficiency</h3>
              <p className="text-gray-400">
                Optimizing energy consumption in our manufacturing processes
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="mb-2">Waste Management</h3>
              <p className="text-gray-400">
                Proper waste disposal and recycling programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations across various sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-[#FFD600] transition-all"
              >
                <p>{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
