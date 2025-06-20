import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'montre' | 'lunette';
  rating: number;
  isNew?: boolean;
}

interface ProductShowcaseProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Montre Royale Or',
    price: '12,500.00',
    image: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    name: 'Lunettes Prestige',
    price: '3,200.00',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 5,
  },
  {
    id: 3,
    name: 'Montre Élégance',
    price: '8,900.00',
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Lunettes Aviateur Luxe',
    price: '2,800.00',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 5,
    name: 'Montre Diamant',
    price: '25,000.00',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 5,
    isNew: true,
  },
  {
    id: 6,
    name: 'Lunettes Sport Luxe',
    price: '4,500.00',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 4.7,
  },
  {
    id: 7,
    name: 'Montre Chronographe',
    price: '15,800.00',
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 8,
    name: 'Lunettes Cat Eye',
    price: '3,900.00',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Montre Automatique',
    price: '18,500.00',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 5,
  },
  {
    id: 10,
    name: 'Lunettes Vintage',
    price: '2,600.00',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 4.6,
  },
  {
    id: 11,
    name: 'Montre Smart Luxe',
    price: '22,000.00',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'montre',
    rating: 4.7,
    isNew: true,
  },
  {
    id: 12,
    name: 'Lunettes Polarisées',
    price: '5,200.00',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lunette',
    rating: 4.9,
  },
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onAddToCart }) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewedProducts, setViewedProducts] = useState<number[]>([]);
  
  const montres = products.filter(p => p.category === 'montre');
  const lunettes = products.filter(p => p.category === 'lunette');

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const viewProduct = (productId: number) => {
    setViewedProducts(prev => 
      prev.includes(productId) ? prev : [...prev, productId]
    );
    // Here you could open a product detail modal
    console.log('Viewing product:', productId);
  };

  const scrollToCollection = () => {
    const element = document.getElementById('montres');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateY: 5 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-neutral-900 to-luxury-obsidian rounded-2xl shadow-2xl overflow-hidden group relative border border-luxury-gold/20"
    >
      {product.isNew && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute top-4 left-4 z-10 bg-luxury-gold text-luxury-obsidian px-3 py-1 rounded-full text-sm font-bold shadow-lg"
        >
          Nouveau
        </motion.div>
      )}
      
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=600';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4 flex flex-col space-y-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleFavorite(product.id)}
            className={`p-2 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg ${
              favorites.includes(product.id)
                ? 'bg-luxury-gold text-white'
                : 'bg-white/90 text-luxury-obsidian hover:bg-luxury-gold hover:text-white'
            }`}
          >
            <Heart size={18} className={favorites.includes(product.id) ? 'fill-current' : ''} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => viewProduct(product.id)}
            className="p-2 bg-white/90 backdrop-blur-sm text-luxury-obsidian rounded-full hover:bg-luxury-gold hover:text-white transition-colors duration-300 shadow-lg"
          >
            <Eye size={18} />
          </motion.button>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          className="absolute bottom-4 left-4 w-8 h-8 bg-luxury-gold/20 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />

        {/* 3D Responsive Model Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0, rotateY: -90 }}
          whileHover={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32 relative">
            {product.category === 'montre' ? (
              <motion.div
                className="w-full h-full border-4 border-luxury-gold rounded-full relative shadow-2xl bg-luxury-obsidian/80 backdrop-blur-sm"
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0, -15, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-luxury-gold rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-luxury-gold rounded-full"></div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-luxury-gold rounded-full"></div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-luxury-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-luxury-gold rounded-full"></div>
              </motion.div>
            ) : (
              <motion.div
                className="w-full h-16 relative"
                animate={{ 
                  rotateZ: [0, 10, -10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-12 h-12 border-4 border-luxury-gold rounded-full bg-luxury-obsidian/80 backdrop-blur-sm"></div>
                  <div className="w-4 h-1 bg-luxury-gold rounded-full"></div>
                  <div className="w-12 h-12 border-4 border-luxury-gold rounded-full bg-luxury-obsidian/80 backdrop-blur-sm"></div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-neutral-800 to-luxury-obsidian">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-playfair font-bold text-white">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            <span className="text-sm text-luxury-gold font-semibold">{product.rating}</span>
          </div>
        </div>
        <p className="text-2xl font-bold text-luxury-gold mb-4">{product.price} DH</p>
        
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAddToCart(product)}
          className="w-full bg-luxury-gold text-luxury-obsidian py-3 rounded-full font-bold hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl relative overflow-hidden"
        >
          <ShoppingCart size={18} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="relative z-10">Ajouter au Panier</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div id="collections" className="py-20 bg-gradient-to-br from-neutral-900 via-luxury-obsidian to-neutral-900">
      {/* Collection Header */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 20px rgba(212, 175, 55, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Collections Exclusives
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez notre sélection premium de montres et lunettes de luxe, 
              choisies avec soin pour l'élite marocaine
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCollection}
              className="bg-luxury-gold text-luxury-obsidian px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Découvrir la Collection</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Montres Section */}
      <section id="montres" className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 20px rgba(212, 175, 55, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Montres de Luxe
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre collection exclusive de montres suisses et françaises, 
              symboles d'excellence et de raffinement
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {montres.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lunettes Section */}
      <section id="lunettes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 20px rgba(212, 175, 55, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              Lunettes de Prestige
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Protection et style s'unissent dans notre gamme de lunettes de soleil et de vue, 
              conçues pour l'élite marocaine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lunettes.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;