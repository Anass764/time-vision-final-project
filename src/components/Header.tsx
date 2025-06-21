import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User, Phone, Minus, Plus, Trash2, LogIn, Sparkles, Eye } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface HeaderProps {
  cartItems: CartItem[];
  updateCartItem: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  onCheckout: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, updateCartItem, removeFromCart, onCheckout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Montres', href: '#montres' },
    { name: 'Lunettes', href: '#lunettes' },
    { name: 'Collections', href: '#collections' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const element = document.getElementById('montres');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    setIsLoginOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-luxury-obsidian/95 backdrop-blur-md shadow-2xl border-b border-luxury-gold/20' 
            : 'bg-gradient-to-r from-luxury-obsidian/80 to-neutral-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 30px rgba(212, 175, 55, 0.6)',
                    '0 0 20px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold text-xl relative z-10">T&V</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-playfair font-bold text-white">
                  Time & Vision
                </h1>
                <p className="text-sm text-luxury-gold font-medium">
                  Montres et Lunettes
                </p>
              </div>
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-luxury-gold transition-colors duration-300 font-medium relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:text-luxury-gold transition-colors duration-300 relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full border border-luxury-gold/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:text-luxury-gold transition-colors duration-300 relative"
                onClick={() => setIsLoginOpen(true)}
              >
                <User size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full border border-luxury-gold/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.button>
              
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:text-luxury-gold transition-colors duration-300 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-luxury-gold text-luxury-obsidian text-xs rounded-full flex items-center justify-center font-bold"
                  >
                    {totalItems}
                  </motion.span>
                )}
                <motion.div
                  className="absolute inset-0 rounded-full border border-luxury-gold/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.button>
              
              {/* Contact Direct */}
              <motion.a
                href="tel:+212771948034"
                whileHover={{ scale: 1.05, y: -2 }}
                className="hidden md:flex items-center space-x-2 bg-luxury-gold text-luxury-obsidian px-4 py-2 rounded-full hover:bg-white transition-colors duration-300 font-semibold relative overflow-hidden group"
              >
                <Phone size={16} />
                <span className="text-sm relative z-10">+212 771-948034</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 text-white hover:text-luxury-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-luxury-obsidian/95 backdrop-blur-md border-t border-luxury-gold/20 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-luxury-gold transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+212771948034"
                  className="flex items-center space-x-2 bg-luxury-gold text-luxury-obsidian px-4 py-3 rounded-full hover:bg-white transition-colors duration-300 w-fit font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Phone size={16} />
                  <span className="text-sm">+212 771-948034</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Search Modal - Centered */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-2xl z-50 w-[600px] max-w-[90vw] border border-luxury-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <motion.h3 
                    className="text-4xl font-playfair font-bold text-luxury-obsidian"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(212, 175, 55, 0.3)',
                        '0 0 20px rgba(212, 175, 55, 0.6)',
                        '0 0 10px rgba(212, 175, 55, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Rechercher
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-3 hover:bg-luxury-gold/10 rounded-full transition-colors"
                  >
                    <X size={24} className="text-luxury-obsidian" />
                  </motion.button>
                </div>
                
                <form onSubmit={handleSearch} className="mb-8">
                  <div className="relative">
                    <motion.input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher montres, lunettes..."
                      className="w-full px-6 py-5 bg-white border-2 border-luxury-gold/30 rounded-2xl focus:ring-4 focus:ring-luxury-gold/20 focus:border-luxury-gold transition-all duration-300 pr-16 text-lg"
                      autoFocus
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-luxury-gold text-white rounded-xl hover:bg-luxury-darkGold transition-colors"
                    >
                      <Search size={20} />
                    </motion.button>
                  </div>
                </form>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-luxury-obsidian mb-4">Suggestions populaires</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Montre Royale', 'Lunettes Prestige', 'Montre Diamant', 'Lunettes Aviateur'].map((suggestion, index) => (
                      <motion.button
                        key={suggestion}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          handleSearch(new Event('submit') as any);
                        }}
                        className="px-6 py-3 bg-luxury-gold/10 text-luxury-obsidian rounded-full hover:bg-luxury-gold hover:text-white transition-all duration-300 font-medium border border-luxury-gold/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Login Modal - Centered */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsLoginOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-2xl z-50 w-[500px] max-w-[90vw] border border-luxury-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <motion.h3 
                      className="text-4xl font-playfair font-bold text-luxury-obsidian"
                      animate={{ 
                        textShadow: [
                          '0 0 10px rgba(212, 175, 55, 0.3)',
                          '0 0 20px rgba(212, 175, 55, 0.6)',
                          '0 0 10px rgba(212, 175, 55, 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Connexion
                    </motion.h3>
                    <p className="text-neutral-600 mt-2 text-lg">Accédez à votre espace privilégié</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsLoginOpen(false)}
                    className="p-3 hover:bg-luxury-gold/10 rounded-full transition-colors"
                  >
                    <X size={24} className="text-luxury-obsidian" />
                  </motion.button>
                </div>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLogin('google')}
                    className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-neutral-200 hover:border-luxury-gold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
                    <span className="font-semibold text-luxury-obsidian relative z-10">Continuer avec Google</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLogin('facebook')}
                    className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">f</span>
                    </div>
                    <span className="font-semibold relative z-10">Continuer avec Facebook</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-neutral-500 font-medium">ou</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white py-4 rounded-2xl font-bold hover:from-luxury-darkGold hover:to-luxury-gold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <LogIn size={20} />
                    <span className="relative z-10">Créer un Compte</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              initial={{ x: '100%', rotateY: -15 }}
              animate={{ x: 0, rotateY: 0 }}
              exit={{ x: '100%', rotateY: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-96 bg-gradient-to-br from-white to-neutral-50 shadow-2xl z-50 flex flex-col border-l border-luxury-gold/20"
            >
              <div className="p-6 border-b border-neutral-200 bg-gradient-to-r from-luxury-obsidian to-neutral-800 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h2 className="text-2xl font-playfair font-bold">Panier</h2>
                    <p className="text-luxury-gold mt-1">{totalItems} article(s)</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ShoppingBag size={64} className="mx-auto text-neutral-300 mb-4" />
                    </motion.div>
                    <p className="text-neutral-500 text-lg">Votre panier est vide</p>
                    <p className="text-neutral-400 text-sm mt-2">Découvrez nos collections exclusives</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-xl shadow-md"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=400';
                            }}
                          />
                          <motion.div
                            className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-gold rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                        <div className="flex-1 relative z-10">
                          <h3 className="font-semibold text-luxury-obsidian">{item.name}</h3>
                          <p className="text-luxury-gold font-bold">{item.price} DH</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateCartItem(item.id, Math.max(0, item.quantity - 1))}
                              className="p-1 hover:bg-luxury-gold/10 rounded-lg transition-colors"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="w-8 text-center font-semibold bg-luxury-gold/10 rounded-lg py-1">{item.quantity}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateCartItem(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-luxury-gold/10 rounded-lg transition-colors"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-error-500 hover:bg-error-50 rounded-full transition-colors relative z-10"
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-neutral-200 bg-gradient-to-r from-neutral-50 to-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-lg font-semibold">Total:</span>
                    <motion.span 
                      className="text-2xl font-bold text-luxury-gold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {totalPrice.toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DH
                    </motion.span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCheckout}
                    className="w-full bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white py-4 rounded-2xl font-bold text-lg hover:from-luxury-darkGold hover:to-luxury-gold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">Procéder au Paiement</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;