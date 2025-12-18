import { motion } from 'motion/react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Wire Gauge Sizes: A Complete Guide',
      excerpt:
        'Learn how to choose the right wire gauge for your electrical projects and why it matters for safety and efficiency.',
      date: 'December 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyZSUyMGNvbG9yc3xlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technical Guide',
    },
    {
      id: 2,
      title: 'Why Pure Copper Matters in Electrical Wiring',
      excerpt:
        'Discover the benefits of using 99.97% pure copper wires and how it affects conductivity, durability, and safety.',
      date: 'December 5, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMGNyb3NzJTIwc2VjdGlvbnxlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Industry Insights',
    },
    {
      id: 3,
      title: 'Fire Safety in Electrical Installations',
      excerpt:
        'Essential fire safety tips and why fire-retardant wiring is crucial for protecting your home and business.',
      date: 'November 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1764636760258-a6ffd5ba416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIweWVsbG93fGVufDF8fHx8MTc2NTg5NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Safety',
    },
    {
      id: 4,
      title: 'BIS ISI Certification: What It Means for You',
      excerpt:
        'Understanding the importance of BIS ISI 694 certification and how it ensures quality and safety standards.',
      date: 'November 20, 2024',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwY29wcGVyJTIwd2lyZXxlbnwxfHx8fDE3NjU4OTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Standards',
    },
    {
      id: 5,
      title: 'Choosing Between Single Core and Multi Core Wires',
      excerpt:
        'A comprehensive comparison to help you decide which type of wire is best suited for your electrical needs.',
      date: 'November 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1ODk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technical Guide',
    },
    {
      id: 6,
      title: 'Maintenance Tips for Electrical Wiring',
      excerpt:
        'Keep your electrical system running smoothly with these essential maintenance tips and best practices.',
      date: 'November 8, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyZSUyMGNvbG9yc3xlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Maintenance',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4">Blog & Resources</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest insights, guides, and news from the
              electrical wiring industry
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFD600] text-black px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-3 group-hover:text-[#FF6B35] transition">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                <Button
                  variant="ghost"
                  className="group-hover:text-[#FF6B35] p-0"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Get weekly updates on industry news, technical guides, and product
            announcements
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FFD600]"
            />
            <Button className="bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
