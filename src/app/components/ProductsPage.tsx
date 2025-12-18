import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { EnquiryDialog } from './EnquiryDialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState<{
    productName: string;
    details: string;
  }>({ productName: '', details: '' });

  // Product configuration state
  const [productConfig, setProductConfig] = useState({
    size: '1.5',
    length: '90',
    color: 'red',
  });

  const sizes = [
    '0.5',
    '0.75',
    '1.0',
    '1.5',
    '2.5',
    '4.0',
    '6.0',
    '10.0',
    '16.0',
    '25.0',
    '35.0',
    '50.0',
    '70.0',
  ];

  const lengths = [
    { value: '45', label: '45m' },
    { value: '90', label: '90m' },
    { value: '180', label: '180m' },
  ];

  const colors = [
    { name: 'Red', value: 'red', hex: '#DC2626' },
    { name: 'Green', value: 'green', hex: '#16A34A' },
    { name: 'Yellow', value: 'yellow', hex: '#FFD600' },
    { name: 'Black', value: 'black', hex: '#1A1A1A' },
    { name: 'Blue', value: 'blue', hex: '#2563EB' },
  ];

  const products = [
    {
      id: 1,
      name: 'Single Core FR Copper Wire',
      category: 'single',
      description: 'Fire retardant single core copper wire with ISI certification',
      features: ['99.97% Pure Copper', 'Fire Retardant', 'BIS ISI 694 Certified'],
      image: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyZSUyMGNvbG9yc3xlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Multi Core Copper Wire',
      category: 'multi',
      description: 'Heavy duty multi core wire for industrial applications',
      features: ['High Conductivity', 'Durable', 'Long Lasting'],
      image: 'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwY29wcGVyJTIwd2lyZXxlbnwxfHx8fDE3NjU4OTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Flexible Copper Wire',
      category: 'flexible',
      description: 'Maximum flexibility for complex installations',
      features: ['Highly Flexible', 'Easy Installation', 'Premium Quality'],
      image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMGNyb3NzJTIwc2VjdGlvbnxlbnwxfHx8fDE3NjU4OTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Aluminium Wire',
      category: 'aluminium',
      description: 'Cost-effective solution for various applications',
      features: ['Lightweight', 'Cost-Effective', 'Reliable'],
      image: 'https://images.unsplash.com/photo-1764636760258-a6ffd5ba416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIweWVsbG93fGVufDF8fHx8MTc2NTg5NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate price based on size and length (color doesn't affect price)
  const calculatePrice = () => {
    const basePrice = 100; // Base price per meter
    const sizeMultiplier = parseFloat(productConfig.size);
    const lengthValue = parseInt(productConfig.length);
    const price = basePrice * sizeMultiplier * lengthValue;
    return price.toFixed(2);
  };

  const handleEnquiry = (product: any) => {
    const details = `Size: ${productConfig.size} sq.mm, Length: ${productConfig.length}m, Color: ${colors.find(c => c.value === productConfig.color)?.name}`;
    setEnquiryDetails({
      productName: product.name,
      details: details,
    });
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="mb-4">Our Products</h1>
          <p className="text-gray-400">
            Browse our complete range of premium electrical wires and cables
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#FFD600]" />
                <h3>Filters</h3>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">Category</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === 'all'
                        ? 'bg-[#FFD600] text-black'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => setSelectedCategory('single')}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === 'single'
                        ? 'bg-[#FFD600] text-black'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Single Core
                  </button>
                  <button
                    onClick={() => setSelectedCategory('multi')}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === 'multi'
                        ? 'bg-[#FFD600] text-black'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Multi Core
                  </button>
                  <button
                    onClick={() => setSelectedCategory('flexible')}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === 'flexible'
                        ? 'bg-[#FFD600] text-black'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Flexible Wire
                  </button>
                  <button
                    onClick={() => setSelectedCategory('aluminium')}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === 'aluminium'
                        ? 'bg-[#FFD600] text-black'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Aluminium Wire
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {selectedProduct ? (
              /* Product Detail View */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <Button
                  variant="outline"
                  onClick={() => setSelectedProduct(null)}
                  className="mb-6"
                >
                  ← Back to Products
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <ImageWithFallback
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <div
                          key={index}
                          className="bg-[#FFD600] text-black px-3 py-2 rounded text-center text-sm"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4">{selectedProduct.name}</h2>
                    <p className="text-gray-600 mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Step 1: Size Selection */}
                    <div className="mb-6">
                      <label className="block mb-2">
                        Step 1: Select Size (sq.mm)
                      </label>
                      <Select
                        value={productConfig.size}
                        onValueChange={(value) =>
                          setProductConfig({ ...productConfig, size: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size} sq.mm
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Step 2: Length Selection */}
                    <div className="mb-6">
                      <label className="block mb-2">Step 2: Select Length</label>
                      <div className="grid grid-cols-3 gap-3">
                        {lengths.map((length) => (
                          <button
                            key={length.value}
                            onClick={() =>
                              setProductConfig({
                                ...productConfig,
                                length: length.value,
                              })
                            }
                            className={`px-4 py-3 rounded-lg border-2 transition ${
                              productConfig.length === length.value
                                ? 'border-[#FFD600] bg-[#FFD600] text-black'
                                : 'border-gray-300 hover:border-[#FFD600]'
                            }`}
                          >
                            {length.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Color Selection */}
                    <div className="mb-6">
                      <label className="block mb-2">
                        Step 3: Select Color (No price change)
                      </label>
                      <div className="flex gap-3">
                        {colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() =>
                              setProductConfig({
                                ...productConfig,
                                color: color.value,
                              })
                            }
                            className={`relative w-12 h-12 rounded-full border-4 transition ${
                              productConfig.color === color.value
                                ? 'border-[#FF6B35] scale-110'
                                : 'border-gray-300 hover:scale-105'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {productConfig.color === color.value && (
                              <span className="absolute inset-0 flex items-center justify-center text-white">
                                ✓
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Display */}
                    <div className="bg-gray-100 rounded-lg p-6 mb-6">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">
                            Estimated Price
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-[#FF6B35]">₹</span>
                            <span className="text-[#FF6B35]">{calculatePrice()}</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 text-right">
                          * Prices may vary
                          <br />
                          Contact for latest quote
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleEnquiry(selectedProduct)}
                        className="flex-1 bg-[#FFD600] text-black hover:bg-[#FF6B35] hover:text-white"
                      >
                        Get Latest Quote
                      </Button>
                      <Button
                        onClick={() => handleEnquiry(selectedProduct)}
                        variant="outline"
                        className="flex-1"
                      >
                        Enquire Now
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Note: This is a catalog mode. Prices fluctuate daily based on
                      copper rates.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Products Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-[#FFD600] text-black px-3 py-1 rounded-full text-xs">
                        ISI Certified
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-[#1A1A1A] text-white hover:bg-[#FFD600] hover:text-black"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && !selectedProduct && (
              <div className="text-center py-16">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <EnquiryDialog
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={enquiryDetails.productName}
        productDetails={enquiryDetails.details}
      />
    </div>
  );
}
