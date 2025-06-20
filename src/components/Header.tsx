import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User, Phone, Minus, Plus, Trash2, LogIn } from 'lucide-react';

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
      // Scroll to products section and highlight matching products
      const element = document.getElementById('montres');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogin = (provider: string) => {
    // Simulate login process
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
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T&V</span>
              </div>
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:text-luxury-gold transition-colors duration-300"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:text-luxury-gold transition-colors duration-300"
                onClick={() => setIsLoginOpen(true)}
              >
                <User size={20} />
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
              </motion.button>
              
              {/* Contact Direct */}
              <motion.a
                href="tel:+212771948034"
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex items-center space-x-2 bg-luxury-gold text-luxury-obsidian px-4 py-2 rounded-full hover:bg-white transition-colors duration-300 font-semibold"
              >
                <Phone size={16} />
                <span className="text-sm">+212 771-948034</span>
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

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-96 max-w-[90vw]"
            >
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-luxury-obsidian mb-4">
                  Rechercher
                </h3>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher montres, lunettes..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent pr-12"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-gold hover:text-luxury-darkGold"
                    >
                      <Search size={20} />
                    </button>
                  </div>
                </form>
                <div className="mt-4 text-sm text-neutral-600">
                  Suggestions: Montre Royale, Lunettes Prestige, Montre Diamant
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsLoginOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-96 max-w-[90vw]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-luxury-obsidian">
                    Connexion
                  </h3>
                  <button
                    onClick={() => setIsLoginOpen(false)}
                    className="p-2 hover:bg-neutral-100 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLogin('google')}
                    className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-neutral-200 hover:border-luxury-gold py-3 rounded-xl transition-colors duration-300"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
                    <span className="font-semibold text-luxury-obsidian">Continuer avec Google</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLogin('facebook')}
                    className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors duration-300"
                  >
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                    <span className="font-semibold">Continuer avec Facebook</span>
                  </motion.button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-neutral-500">ou</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-luxury-gold text-luxury-obsidian py-3 rounded-xl font-bold hover:bg-luxury-darkGold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <LogIn size={20} />
                    <span>Créer un Compte</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-neutral-200 bg-luxury-obsidian text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-playfair font-bold">Panier</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-luxury-gold mt-1">{totalItems} article(s)</p>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag size={48} className="mx-auto text-neutral-300 mb-4" />
                    <p className="text-neutral-500">Votre panier est vide</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-xl"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-luxury-obsidian">{item.name}</h3>
                          <p className="text-luxury-gold font-bold">{item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateCartItem(item.id, Math.max(0, item.quantity - 1))}
                              className="p-1 hover:bg-neutral-100 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItem(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-neutral-100 rounded"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-error-500 hover:bg-error-50 rounded-full transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-luxury-gold">
                      {totalPrice.toLocaleString('fr-MA')} DH
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCheckout}
                    className="w-full bg-luxury-gold text-luxury-obsidian py-4 rounded-xl font-bold text-lg hover:bg-luxury-darkGold transition-colors duration-300"
                  >
                    Procéder au Paiement
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