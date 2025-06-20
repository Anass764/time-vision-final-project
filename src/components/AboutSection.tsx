import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Globe, Sparkles, X, Clock, MapPin, Heart } from 'lucide-react';

const team = [
  {
    name: 'Anass Naji',
    role: 'Développeur & Designer',
    description: 'Architecte de cette expérience digitale exceptionnelle',
    image: 'WZPZ4855.JPG',
  },
  {
    name: 'Latifa',
    role: 'Infographiste',
    description: 'Créatrice des visuels et de l\'identité artistique',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Douaa',
    role: 'Développeur',
    description: 'Experte en développement et optimisation technique',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Yasser',
    role: 'Développeur',
    description: 'Spécialiste en architecture logicielle et performance',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous sélectionnons uniquement les marques les plus prestigieuses du monde horloger et optique.',
  },
  {
    icon: Users,
    title: 'Service Client',
    description: 'Un accompagnement personnalisé pour chaque client, de la sélection à la livraison.',
  },
  {
    icon: Globe,
    title: 'Héritage Marocain',
    description: 'Fiers de représenter le luxe au Maroc avec des standards internationaux.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Toujours à la pointe des dernières tendances en matière de luxe et de technologie.',
  },
];

const storyMilestones = [
  {
    year: '2009',
    title: 'Les Débuts',
    description: 'Fondation de Time & Vision avec une vision claire : apporter l\'excellence horlogère et optique au Maroc.',
    icon: Clock,
  },
  {
    year: '2012',
    title: 'Expansion',
    description: 'Ouverture de notre premier showroom à Casablanca, au cœur du quartier des affaires.',
    icon: MapPin,
  },
  {
    year: '2015',
    title: 'Reconnaissance',
    description: 'Partenariats exclusifs avec les plus grandes marques suisses et françaises de luxe.',
    icon: Award,
  },
  {
    year: '2018',
    title: 'Innovation Digitale',
    description: 'Lancement de notre plateforme en ligne pour une expérience client omnicanale.',
    icon: Sparkles,
  },
  {
    year: '2021',
    title: 'Excellence Reconnue',
    description: 'Prix du "Meilleur Détaillant Luxe" décerné par la Chambre de Commerce de Casablanca.',
    icon: Users,
  },
  {
    year: '2025',
    title: 'Nouvelle Ère',
    description: 'Lancement de notre nouvelle identité digitale et expansion vers de nouveaux horizons.',
    icon: Heart,
  },
];

const AboutSection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return (
    <>
      <section id="apropos" className="py-20 bg-gradient-to-br from-neutral-900 via-luxury-obsidian to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
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
              À Propos de Time & Vision
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Depuis 2009, Time & Vision incarne l'excellence du luxe horloger et optique au Maroc. 
              Notre passion pour la perfection nous guide dans la sélection des plus belles créations 
              pour une clientèle exigeante.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 10 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-luxury-gold/50 transition-all duration-300"
                  animate={{ 
                    rotateY: [0, 10, 0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Notre Équipe Créative
            </h3>
            <motion.div 
              className="w-16 h-1 bg-luxury-gold mx-auto mb-6"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez les talents qui ont donné vie à ce projet exceptionnel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="bg-gradient-to-br from-neutral-800 to-luxury-obsidian rounded-2xl overflow-hidden shadow-2xl hover:shadow-luxury-gold/20 transition-all duration-300 group border border-luxury-gold/20"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 3D Floating Element */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-luxury-gold/30 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-white mb-2">
                    {member.name}
                  </h4>
                  <div className="text-luxury-gold font-medium mb-3 text-sm">
                    {member.role}
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-luxury-gold/10 to-luxury-darkGold/10 rounded-3xl p-12 text-white border border-luxury-gold/30 backdrop-blur-sm"
          >
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Rejoignez l'Excellence
            </h3>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Faites partie de l'élite marocaine qui fait confiance à Time & Vision 
              pour les accompagner dans leur quête de perfection et d'élégance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsStoryModalOpen(true)}
                className="bg-luxury-gold text-luxury-obsidian px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Découvrir Notre Histoire</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-luxury-gold hover:text-luxury-obsidian transition-all duration-300 shadow-lg"
              >
                Nous Contacter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {isStoryModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsStoryModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-2xl z-50 w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto border border-luxury-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-8 border-b border-neutral-200 bg-gradient-to-r from-luxury-obsidian to-neutral-800 text-white rounded-t-3xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <motion.h2 
                      className="text-4xl font-playfair font-bold mb-2"
                      animate={{ 
                        textShadow: [
                          '0 0 20px rgba(212, 175, 55, 0.5)',
                          '0 0 40px rgba(212, 175, 55, 0.8)',
                          '0 0 20px rgba(212, 175, 55, 0.5)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Notre Histoire
                    </motion.h2>
                    <p className="text-luxury-gold text-lg">15 ans d'excellence au service du luxe</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsStoryModalOpen(false)}
                    className="p-3 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-12">
                  {storyMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-start space-x-6 ${
                        index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <motion.div
                        className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-2xl flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        animate={{ 
                          boxShadow: [
                            '0 0 20px rgba(212, 175, 55, 0.3)',
                            '0 0 30px rgba(212, 175, 55, 0.6)',
                            '0 0 20px rgba(212, 175, 55, 0.3)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <milestone.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl shadow-lg border border-luxury-gold/10">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-3xl font-bold text-luxury-gold">{milestone.year}</span>
                            <h3 className="text-2xl font-playfair font-bold text-luxury-obsidian">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-neutral-700 leading-relaxed text-lg">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-12 text-center bg-gradient-to-r from-luxury-gold/10 to-luxury-darkGold/10 rounded-2xl p-8 border border-luxury-gold/20"
                >
                  <h3 className="text-2xl font-playfair font-bold text-luxury-obsidian mb-4">
                    L'Avenir Nous Appartient
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Avec 15 années d'expérience et plus de 5000 clients satisfaits, 
                    Time & Vision continue d'écrire l'histoire du luxe au Maroc. 
                    Notre vision : devenir la référence incontournable du luxe horloger et optique 
                    dans tout le Maghreb.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsStoryModalOpen(false)}
                    className="bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white px-8 py-3 rounded-full font-bold hover:from-luxury-darkGold hover:to-luxury-gold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Fermer
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;