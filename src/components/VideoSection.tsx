import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      src: '/video1.mp4',
      title: 'L\'Art de l\'Horlogerie Suisse',
      description: 'Découvrez les secrets de fabrication des montres de luxe',
      thumbnail: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      src: '/video2.mp4',
      title: 'Excellence Optique',
      description: 'L\'artisanat derrière nos lunettes de prestige',
      thumbnail: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // Auto-play the video when loaded
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      // Restart the video for infinite loop
      video.currentTime = 0;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo]);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const switchVideo = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-luxury-obsidian relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* 3D Rotating Watch */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border-2 border-luxury-gold rounded-full relative"
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
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-luxury-gold rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-luxury-gold rounded-full"></div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-luxury-gold rounded-full"></div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-luxury-gold rounded-full"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-luxury-gold rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* 3D Floating Glasses */}
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-12 relative"
          animate={{ 
            rotateZ: [0, 10, -10, 0],
            y: [0, -20, 0],
            rotateY: [0, 15, 0, -15, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 border-2 border-luxury-gold rounded-full"></div>
            <div className="w-3 h-1 bg-luxury-gold rounded-full"></div>
            <div className="w-8 h-8 border-2 border-luxury-gold rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-luxury-gold"
          animate={{ 
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 1],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Enhanced 3D Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-luxury-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              rotateZ: [0, 180, 360],
              rotateY: [0, 180, 360],
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
          {/* Enhanced Video Player with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              className="aspect-video bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/20 rounded-2xl overflow-hidden relative border border-luxury-gold/30 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videos[currentVideo].src}
                muted={isMuted}
                playsInline
                preload="metadata"
                autoPlay
                loop
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(console.error);
                }}
              />
              
              {/* Custom Video Controls Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-luxury-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center text-luxury-obsidian shadow-2xl"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </motion.button>

                {/* Control Bar */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  {/* Progress Bar */}
                  <div 
                    className="w-full h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                    onClick={handleProgressClick}
                  >
                    <motion.div 
                      className="h-full bg-luxury-gold rounded-full"
                      style={{ width: `${progress}%` }}
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleVideo}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-luxury-gold hover:text-luxury-obsidian transition-colors"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={restartVideo}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-luxury-gold hover:text-luxury-obsidian transition-colors"
                      >
                        <RotateCcw size={16} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-luxury-gold hover:text-luxury-obsidian transition-colors"
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </motion.button>

                      <span className="text-white text-sm font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleFullscreen}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-luxury-gold hover:text-luxury-obsidian transition-colors"
                    >
                      <Maximize size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* 3D Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-luxury-gold/50 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  rotateY: [0, 180, 360],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />

              {/* Video Title Overlay */}
              <motion.div
                className="absolute top-4 left-4 bg-luxury-obsidian/80 backdrop-blur-sm px-4 py-2 rounded-full border border-luxury-gold/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-luxury-gold font-semibold text-sm">
                  {videos[currentVideo].title}
                </h4>
              </motion.div>
            </motion.div>

            {/* Enhanced Video Selection */}
            <div className="mt-6 flex space-x-4">
              {videos.map((video, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => switchVideo(index)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group ${
                    currentVideo === index
                      ? 'border-luxury-gold bg-luxury-gold/10 shadow-lg shadow-luxury-gold/20'
                      : 'border-neutral-600 hover:border-luxury-gold/50'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover rounded-lg mb-3 shadow-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <h4 className="text-white font-semibold text-sm mb-1">{video.title}</h4>
                    <p className="text-neutral-400 text-xs">{video.description}</p>
                  </div>

                  {/* Selection Indicator */}
                  {currentVideo === index && (
                    <motion.div
                      className="absolute top-2 right-2 w-3 h-3 bg-luxury-gold rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Content with 3D Effects */}
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
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-luxury-gold/20 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <motion.div
                    className="text-3xl font-bold text-luxury-gold mb-2 relative z-10"
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
                  <div className="text-neutral-300 text-sm relative z-10">{stat.label}</div>
                  
                  {/* 3D Floating Sparkle */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.2, 0.8],
                      rotateY: [0, 180, 360],
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
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                rotateY: 3,
              }}
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
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;