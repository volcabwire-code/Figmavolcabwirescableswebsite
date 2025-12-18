import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  Award,
  Factory,
  Flame,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Volcab: Powering India since 2010',
      subtitle: 'Premium Electrical Wires & Cables',
      image: 'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwY29wcGVyJTIwd2lyZXxlbnwxfHx8fDE3NjU4OTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: '99.97% Pure Copper',
      subtitle: 'Superior Conductivity & Durability',
      image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMGNyb3NzJTIwc2VjdGlvbnxlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Made in Kolkata',
      subtitle: 'Quality Manufacturing Since 2010',
      image: 'https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1ODk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const productCategories = [
    {
      name: 'Single Core Wire',
      description: 'Fire Retardant, ISI Certified',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyZSUyMGNvbG9yc3xlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Multi Core Wire',
      description: 'Heavy Duty Applications',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwY29wcGVyJTIwd2lyZXxlbnwxfHx8fDE3NjU4OTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Flexible Wire',
      description: 'Maximum Flexibility',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMGNyb3NzJTIwc2VjdGlvbnxlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Aluminium Wire',
      description: 'Cost-Effective Solution',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1764636760258-a6ffd5ba416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIweWVsbG93fGVufDF8fHx8MTc2NTg5NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <div className="relative h-[600px] bg-black overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
              <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white mb-4 max-w-2xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#FFD600] text-2xl mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-[#FFD600] text-black px-6 py-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      <span>BIS ISI 694 Certified</span>
                    </div>
                  </div>
                  <div className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>99.97% Pure Copper</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => onNavigate('products')}
                  className="bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white w-fit"
                >
                  Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? 'bg-[#FFD600]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-[#1A1A1A] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-[#FFD600]">100% Virgin PVC</h3>
                <p className="text-sm text-gray-400">Premium Quality Material</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-[#FFD600]">Fire Retardant</h3>
                <p className="text-sm text-gray-400">Safety First Approach</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0">
                <Factory className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-[#FFD600]">Made in Kolkata</h3>
                <p className="text-sm text-gray-400">Supporting Local Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Spotlight */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD600] rounded-full opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1656221007870-dbb3900d6d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg5NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mr. Ram Awadh Jaiswal"
                  className="relative rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B35] rounded-full opacity-20"></div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#FFD600] text-black px-4 py-2 rounded-full mb-4">
                Founder's Story
              </div>
              <h2 className="mb-6">A Legacy of Hard Work</h2>
              <h3 className="text-[#FF6B35] mb-4">Mr. Ram Awadh Jaiswal</h3>
              <p className="text-gray-700 mb-4">
                From humble beginnings in Ayodhya to leading Kolkata's wire
                industry. A journey started at age 13, fueled by determination,
                integrity, and an unwavering commitment to quality.
              </p>
              <p className="text-gray-700 mb-6">
                With over a decade of experience, Mr. Jaiswal built Volcab on
                the foundation of trust, innovation, and delivering excellence
                to every customer.
              </p>
              <Button
                onClick={() => onNavigate('about')}
                variant="outline"
                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
              >
                Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Product Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality wires and cables for all your electrical needs.
              BIS ISI 694 certified and made with 99.97% pure copper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => onNavigate('products')}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center mb-3">
                        <product.icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-white mb-2">{product.name}</h3>
                      <p className="text-gray-300 text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('products')}
              className="bg-[#1A1A1A] text-white hover:bg-[#FFD600] hover:text-black"
            >
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Power Your Projects?</h2>
          <p className="text-gray-400 mb-8">
            Get the latest quotes for our premium wires and cables. Our team is
            ready to assist you with your requirements.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white"
          >
            Contact Us Today <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
