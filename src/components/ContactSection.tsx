import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 771-948034',
      link: 'tel:+212771948034',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@timeandvision.ma',
      link: 'mailto:contact@timeandvision.ma',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'BEST INSTITUT, 95 Bd Mohammed V, Casablanca',
      link: null,
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Sam: 9h-19h | Dim: 10h-17h',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-800 via-luxury-obsidian to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Contactez-Nous
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-luxury-gold mx-auto mb-6"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour vous accompagner dans votre 
            sélection et répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                Informations de Contact
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-8">
                Visitez notre showroom à Casablanca ou contactez-nous directement. 
                Nous sommes là pour vous offrir une expérience d'achat exceptionnelle.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-luxury-gold rounded-xl flex items-center justify-center group-hover:bg-luxury-darkGold transition-colors duration-300"
                    animate={{ 
                      rotateY: [0, 10, 0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-luxury-gold transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-neutral-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-xl font-playfair font-semibold text-white mb-4">
                Notre Localisation
              </h4>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4742891234567!2d-7.6140597!3d33.5949499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29cd80134ad%3A0xecadd02c09277227!2sBEST%20INSTITUT!5e0!3m2!1sen!2sma!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Time & Vision"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-800 to-luxury-obsidian rounded-2xl shadow-2xl p-8 border border-luxury-gold/20"
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              Envoyez-nous un Message
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-success-500/20 border border-success-500/30 rounded-xl flex items-center space-x-3 text-success-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Votre message a été envoyé avec succès!</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                    placeholder="+212 6XX-XXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="montre">Consultation Montres</option>
                  <option value="lunette">Consultation Lunettes</option>
                  <option value="achat">Processus d'Achat</option>
                  <option value="service">Service Client</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-luxury-gold text-luxury-obsidian py-4 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;