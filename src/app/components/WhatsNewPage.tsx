import { motion } from 'motion/react';
import { Calendar, Award, Zap, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhatsNewPage() {
  const events = [
    {
      id: 1,
      type: 'Achievement',
      title: 'BIS ISI 694 Certification Received',
      date: 'March 2023',
      description:
        'Volcab successfully achieved the prestigious BIS ISI 694 certification, validating our commitment to quality and safety standards.',
      image: 'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwY29wcGVyJTIwd2lyZXxlbnwxfHx8fDE3NjU4OTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Award,
    },
    {
      id: 2,
      type: 'Innovation',
      title: 'New Fire Retardant Technology',
      date: 'October 2024',
      description:
        'Introduced advanced fire retardant coating technology that exceeds industry standards for electrical safety.',
      image: 'https://images.unsplash.com/photo-1764636760258-a6ffd5ba416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIweWVsbG93fGVufDF8fHx8MTc2NTg5NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Zap,
    },
    {
      id: 3,
      type: 'Expansion',
      title: 'Production Capacity Increased by 40%',
      date: 'August 2024',
      description:
        'Expanded our manufacturing facility with new machinery to meet growing demand and serve more customers.',
      image: 'https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1ODk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: TrendingUp,
    },
    {
      id: 4,
      type: 'Product Launch',
      title: 'Premium Flexible Wire Series',
      date: 'June 2024',
      description:
        'Launched our new premium flexible wire series designed for complex installations requiring maximum flexibility.',
      image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMGNyb3NzJTIwc2VjdGlvbnxlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Zap,
    },
    {
      id: 5,
      type: 'Event',
      title: 'Participation in Electrical Expo 2024',
      date: 'February 2024',
      description:
        'Showcased our latest products and innovations at the National Electrical Equipment & Technology Expo in Mumbai.',
      image: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyZSUyMGNvbG9yc3xlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Calendar,
    },
    {
      id: 6,
      type: 'Achievement',
      title: 'Sustainable Manufacturing Initiative',
      date: 'November 2023',
      description:
        'Launched comprehensive sustainability program focusing on eco-friendly materials and waste reduction.',
      image: 'https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1ODk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Award,
    },
  ];

  const innovations = [
    {
      title: '99.97% Pure Copper',
      description:
        'Using the highest grade copper for superior conductivity and longevity',
      icon: '⚡',
    },
    {
      title: 'Advanced Insulation',
      description:
        '100% virgin PVC with enhanced fire retardant properties',
      icon: '🛡️',
    },
    {
      title: 'Quality Testing',
      description:
        'Rigorous quality checks at every stage of production',
      icon: '✓',
    },
    {
      title: 'Eco-Friendly',
      description:
        'Sustainable manufacturing practices and recyclable materials',
      icon: '♻️',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4">What's New</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with our latest events, innovations, and achievements
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Events & Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest happenings and achievements at Volcab
            </p>
          </div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                </div>

                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-[#FF6B35]">{event.type}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Innovations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuous innovation to deliver the best quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{innovation.icon}</div>
                <h3 className="mb-2">{innovation.title}</h3>
                <p className="text-gray-600 text-sm">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Stay Connected</h2>
          <p className="text-gray-400 mb-8">
            Follow us on social media to stay updated with our latest news,
            events, and product launches
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center text-black hover:bg-[#FF6B35] transition text-xl"
            >
              📷
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center text-black hover:bg-[#FF6B35] transition text-xl"
            >
              💼
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center text-black hover:bg-[#FF6B35] transition text-xl"
            >
              👍
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
