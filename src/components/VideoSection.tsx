import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-luxury-obsidian relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border-2 border-luxury-gold rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 border-2 border-luxury-gold rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-luxury-gold rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* 3D Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-luxury-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            L'Art du Luxe
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers exclusif de Time & Vision et découvrez 
            le savoir-faire artisanal derrière chaque création
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-video bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/20 rounded-2xl overflow-hidden relative border border-luxury-gold/30 shadow-2xl">
              {/* Working Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=800"
                muted
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
              </video>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center cursor-pointer shadow-2xl group-hover:shadow-luxury-gold/50 transition-all duration-300 relative"
                  onClick={toggleVideo}
                >
                  {isPlaying ? (
                    <Pause className="text-luxury-obsidian w-8 h-8" />
                  ) : (
                    <Play className="text-luxury-obsidian w-8 h-8 ml-1" />
                  )}
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-luxury-gold rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-luxury-gold/80 transition-colors duration-300"
                  >
                    <Volume2 size={18} />
                  </motion.button>
                </div>
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                  {isPlaying ? 'En cours...' : 'Cliquez pour lire'}
                </div>
              </div>

              {/* 3D Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-luxury-gold/50 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* Video Title */}
            <div className="mt-6">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-2">
                Savoir-Faire Artisanal
              </h3>
              <p className="text-neutral-300">
                Découvrez les secrets de fabrication de nos montres suisses
              </p>
            </div>
          </motion.div>

          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-3xl font-playfair font-bold text-white mb-4"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(212, 175, 55, 0.3)',
                    '0 0 20px rgba(212, 175, 55, 0.6)',
                    '0 0 10px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Excellence Marocaine
              </motion.h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Depuis notre atelier de Casablanca, nous sélectionnons avec soin 
                les plus belles pièces horlogères et optiques du monde entier pour 
                offrir à notre clientèle marocaine le summum du luxe et de l'élégance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '150+', label: 'Modèles Exclusifs' },
                { number: '25+', label: 'Marques de Prestige' },
                { number: '5000+', label: 'Clients Satisfaits' },
                { number: '15', label: 'Années d\'Excellence' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-luxury-gold/20 relative overflow-hidden group"
                >
                  <motion.div
                    className="text-3xl font-bold text-luxury-gold mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-neutral-300 text-sm">{stat.label}</div>
                  
                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-luxury-gold" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('apropos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-luxury-gold text-luxury-obsidian px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Découvrir Notre Histoire</span>
              <motion.div
                className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;