import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, X, ShoppingCart, Check, Info } from 'lucide-react';
import { useLocation } from 'react-router-dom';
// import frImage from 'figma:asset/a0b70875bc85d5749bb508f08acc0d5ad585ec5e.png';
// import frlsImage from 'figma:asset/b899cea5c6513ab96b3972f75ad1c51d9dd1859d.png';
// import multicoreImage from 'figma:asset/dba957405fb5a93250a44a8c23ed202faf8bc952.png';

// Types
interface Product {
  id: string;
  name: string;
  category: 'Wires' | 'Cables';
  type: string;
  basePrice: number;
  image: string;
  description: string;
  features: string[];
}

// Mock Data
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'FR PVC Insulated Cable',
    category: 'Wires',
    type: 'fr-pvc',
    basePrice: 850,
    // image: frImage,
    description: 'Flame Retardant (FR) PVC insulated cables designed for superior protection against fire.',
    features: ['High Insulation Resistance', 'Flame Retardant', 'Energy Efficient']
  },
  {
    id: '2',
    name: 'FRLS PVC Insulated Cable',
    category: 'Wires',
    type: 'frls-pvc',
    basePrice: 950,
    // image: frlsImage,
    description: 'Flame Retardant Low Smoke (FRLS) cables that ensure low smoke emission during fire.',
    features: ['Low Smoke Emission', 'High Oxygen Index', 'Self Extinguishing']
  },
  {
    id: '3',
    name: 'ZHFR PVC Insulated Cable',
    category: 'Wires',
    type: 'zhfr-pvc',
    basePrice: 1100,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    description: 'Zero Halogen Flame Retardant (ZHFR) cables for eco-friendly and safe wiring.',
    features: ['Zero Halogen', 'Non-Toxic Smoke', 'High Heat Resistance']
  },
  {
    id: '4',
    name: 'Submersible Flat Cable',
    category: 'Cables',
    type: 'submersible',
    basePrice: 2500,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy duty flat cables designed for submersible pumps and motors.',
    features: ['Water Resistant', 'Tough Outer Sheath', 'Flexible']
  },
  {
    id: '5',
    name: 'Multicore Round Cable',
    category: 'Wires',
    type: 'multicore',
    basePrice: 1800,
    // image: multicoreImage,
    description: 'Flexible multicore cables for industrial appliances and machinery.',
    features: ['Flexible', 'Durable', 'Oil Resistant']
  },
  {
    id: '6',
    name: 'Coaxial Cable',
    category: 'Cables',
    type: 'coaxial',
    basePrice: 600,
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800',
    description: 'High quality coaxial cables for clear signal transmission in TV and data.',
    features: ['Low Signal Loss', 'High Bandwidth', 'Weather Proof']
  }
];

// Configuration Options
const SIZES = [
  { label: '0.75 Sq mm', value: 0.75, multiplier: 1 },
  { label: '1.0 Sq mm', value: 1.0, multiplier: 1.2 },
  { label: '1.5 Sq mm', value: 1.5, multiplier: 1.5 },
  { label: '2.5 Sq mm', value: 2.5, multiplier: 2.2 },
  { label: '4.0 Sq mm', value: 4.0, multiplier: 3.5 },
  { label: '6.0 Sq mm', value: 6.0, multiplier: 5.2 },
];

const LENGTHS = [
  { label: '90m Coil', value: 90, multiplier: 1 },
  { label: '180m Coil', value: 180, multiplier: 2 },
];

const COLORS = [
  { name: 'Red', hex: '#EF4444' },
  { name: 'Yellow', hex: '#FFD600' },
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Black', hex: '#111111' },
  { name: 'Green', hex: '#22C55E' },
];

export const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category'); // e.g., 'fr-pvc'

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !initialCategory || initialCategory === 'all' || product.type === initialCategory || !initialCategory;
      
      // If initialCategory is present, we might want to override activeCategory logic slightly differently
      // But for simplicity:
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, initialCategory]);

  return (
    <div className="bg-[#F5F5F7] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#1A1A1A] text-white py-12 px-4 border-b-4 border-[#FFD600]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-['Oswald'] uppercase mb-4">Product Catalog</h1>
          <p className="text-gray-400">Explore our range of industrial grade wires and cables.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-sm shadow-sm sticky top-24">
              <div className="flex items-center gap-2 font-bold font-['Oswald'] text-xl mb-6 uppercase border-b border-gray-100 pb-2">
                <Filter size={20} className="text-[#FF6B35]" /> Filters
              </div>

              <div className="mb-8">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FFD600] outline-none transition-all rounded-sm text-sm"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase text-gray-500 mb-4 tracking-wider">Categories</h4>
                <div className="space-y-2">
                  {['All', 'Wires', 'Cables'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-sm text-sm font-medium transition-all flex justify-between items-center group ${
                        activeCategory === cat 
                          ? 'bg-[#1A1A1A] text-[#FFD600]' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layoutId={`product-${product.id}`}
                  className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
                >
                  <div className="h-56 overflow-hidden relative bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#FFD600] text-black text-xs font-bold px-3 py-1 uppercase rounded-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold font-['Oswald'] mb-2 group-hover:text-[#FF6B35] transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-auto">
                       <div className="text-sm text-gray-400 mb-1">Starts from</div>
                       <div className="flex justify-between items-end">
                          <span className="text-2xl font-bold font-['Oswald']">₹{product.basePrice}</span>
                          <button 
                            onClick={() => setSelectedProduct(product)}
                            className="bg-[#1A1A1A] text-white p-3 rounded-sm hover:bg-[#FFD600] hover:text-black transition-all"
                          >
                            <ShoppingCart size={20} />
                          </button>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <Info size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Modal Component
const ProductDetailModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  const [size, setSize] = useState(SIZES[0]);
  const [length, setLength] = useState(LENGTHS[0]);
  const [color, setColor] = useState(COLORS[0]);

  // Dynamic Price Calculation
  const totalPrice = Math.round(product.basePrice * size.multiplier * length.multiplier);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div 
        layoutId={`product-${product.id}`}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative z-10 flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 min-h-[300px] md:min-h-full relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
             <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FFD600] mb-2">
               <Check size={16} /> In Stock
             </div>
             <p className="text-xs opacity-80">Images are for representation purpose only.</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
          <div className="mb-6">
            <span className="text-[#FF6B35] font-bold uppercase text-xs tracking-widest">{product.category}</span>
            <h2 className="text-3xl font-bold font-['Oswald'] text-[#1A1A1A] mt-1 mb-3">{product.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-6 mb-8 flex-grow">
            {/* Size Selector */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-500 mb-3 block">Select Size</label>
              <div className="grid grid-cols-3 gap-2">
                {SIZES.map(s => (
                  <button
                    key={s.label}
                    onClick={() => setSize(s)}
                    className={`px-3 py-2 text-sm border rounded-sm transition-all ${
                      size.value === s.value 
                        ? 'border-[#FFD600] bg-[#FFD600]/10 font-bold text-black' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Length Selector */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-500 mb-3 block">Select Length</label>
              <div className="flex gap-4">
                {LENGTHS.map(l => (
                  <button
                    key={l.label}
                    onClick={() => setLength(l)}
                    className={`flex-1 px-4 py-3 text-sm border rounded-sm transition-all ${
                      length.value === l.value 
                        ? 'border-[#FF6B35] bg-[#FF6B35]/10 font-bold text-black' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-500 mb-3 block">Select Color</label>
              <div className="flex gap-3">
                {COLORS.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      color.name === c.name 
                        ? 'border-gray-900 scale-110 shadow-md' 
                        : 'border-transparent hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 font-medium">Selected: {color.name}</div>
            </div>
          </div>

          {/* Pricing Footer */}
          <div className="border-t border-gray-100 pt-6 mt-auto">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase">Total Estimate</span>
                <div className="text-4xl font-bold font-['Oswald'] text-[#1A1A1A]">₹{totalPrice.toLocaleString()}</div>
                <span className="text-xs text-gray-400">*Excluding GST</span>
              </div>
            </div>
            
            <button className="w-full bg-[#1A1A1A] text-white font-bold font-['Oswald'] uppercase tracking-widest py-4 hover:bg-[#FFD600] hover:text-black transition-all flex items-center justify-center gap-2">
              Add to Inquiry List <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
