import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVideo = () => {
    const element = document.querySelector('section:has(video)');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-luxury-obsidian via-neutral-900 to-luxury-obsidian relative">
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-luxury-gold rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* 3D Watch Animation */}
          <motion.div
            className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
            animate={{ 
              rotateY: [0, 360],
              rotateX: [0, 15, 0, -15, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <div className="w-64 h-64 relative">
              <div className="w-full h-full border-4 border-luxury-gold rounded-full relative shadow-2xl">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-luxury-gold rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-luxury-gold rounded-full"></div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-2 bg-luxury-gold rounded-full"></div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-2 bg-luxury-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-luxury-gold rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* 3D Glasses Animation */}
          <motion.div
            className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-10"
            animate={{ 
              rotateZ: [0, 10, -10, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-48 h-24 relative">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 border-4 border-luxury-gold rounded-full"></div>
                <div className="w-8 h-2 bg-luxury-gold rounded-full"></div>
                <div className="w-16 h-16 border-4 border-luxury-gold rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Background Overlay */}
      <div className="absolute inset-0 z-5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* 3D Brand Name with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-white to-luxury-gold mb-4 transform-gpu"
            style={{
              textShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(212, 175, 55, 0.4)',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            }}
            animate={{
              rotateX: [0, 5, 0, -5, 0],
              rotateY: [0, 3, 0, -3, 0],
              scale: [1, 1.02, 1, 1.02, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            MONTRES
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center space-x-8 my-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent w-32"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-luxury-gold text-4xl" />
            </motion.div>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent w-32"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-white to-luxury-gold mt-4 transform-gpu"
            style={{
              textShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(212, 175, 55, 0.4)',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            }}
            animate={{
              rotateX: [0, -5, 0, 5, 0],
              rotateY: [0, -3, 0, 3, 0],
              scale: [1, 1.02, 1, 1.02, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            LUNETTES
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-white font-light mb-8 max-w-4xl mx-auto leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
        >
          Découvrez l'excellence du luxe marocain avec notre collection exclusive de montres et lunettes de prestige
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCollection}
            className="bg-luxury-gold text-luxury-obsidian px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-luxury-gold/50 group relative overflow-hidden"
          >
            <span className="relative z-10">Découvrir la Collection</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToVideo}
            className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-luxury-gold hover:text-luxury-obsidian transition-all duration-300 flex items-center space-x-2 group shadow-2xl"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Voir la Vidéo</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-luxury-gold cursor-pointer"
            onClick={() => {
              const element = document.getElementById('collections');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;