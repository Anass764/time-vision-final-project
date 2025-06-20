import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      id: 'mg6Gf7v455c',
      title: 'L\'Art de l\'Horlogerie Suisse',
      description: 'Découvrez les secrets de fabrication des montres de luxe',
      thumbnail: 'https://img.youtube.com/vi/mg6Gf7v455c/maxresdefault.jpg'
    },
    {
      id: 'aHNEZg35ok8',
      title: 'Excellence Optique',
      description: 'L\'artisanat derrière nos lunettes de prestige',
      thumbnail: 'https://img.youtube.com/vi/aHNEZg35ok8/maxresdefault.jpg'
    }
  ];

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

  const switchVideo = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
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
              {/* YouTube Embed */}
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
                title={videos[currentVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
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

            {/* Video Selection */}
            <div className="mt-6 flex space-x-4">
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => switchVideo(index)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                    currentVideo === index
                      ? 'border-luxury-gold bg-luxury-gold/10'
                      : 'border-neutral-600 hover:border-luxury-gold/50'
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-lg mb-3"
                  />
                  <h4 className="text-white font-semibold text-sm mb-1">{video.title}</h4>
                  <p className="text-neutral-400 text-xs">{video.description}</p>
                </motion.button>
              ))}
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