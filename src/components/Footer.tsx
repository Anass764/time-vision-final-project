import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    collections: [
      { name: 'Montres Homme', href: '#montres' },
      { name: 'Montres Femme', href: '#montres' },
      { name: 'Lunettes Solaire', href: '#lunettes' },
      { name: 'Lunettes Vue', href: '#lunettes' },
    ],
    services: [
      { name: 'Garantie', href: '#' },
      { name: 'Réparation', href: '#' },
      { name: 'Livraison', href: '#' },
      { name: 'SAV', href: '#' },
    ],
    company: [
      { name: 'À Propos', href: '#apropos' },
      { name: 'Notre Histoire', href: '#' },
      { name: 'Carrières', href: '#' },
      { name: 'Presse', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/anas__naji__/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-luxury-obsidian text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T&V</span>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Time & Vision</h3>
                <p className="text-luxury-gold text-sm font-medium">Montres et Lunettes</p>
              </div>
            </div>
            <p className="text-luxury-platinum mb-6 leading-relaxed">
              L'excellence du luxe horloger et optique au service de l'élite marocaine. 
              Découvrez notre collection exclusive à Casablanca.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-playfair font-semibold mb-6">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-playfair font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-playfair font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <a
                  href="tel:+212771948034"
                  className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300"
                >
                  +212 771-948034
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@timeandvision.ma"
                  className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300"
                >
                  contact@timeandvision.ma
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <p className="text-luxury-platinum">
                  BEST INSTITUT<br />
                  95 Bd Mohammed V<br />
                  Casablanca, Maroc
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-luxury-platinum"
            >
              <span>© 2025 Time & Vision. Tous droits réservés.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-luxury-platinum"
            >
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-error-500 fill-current" />
              <span>par Anass Naji, Latifa, Douaa & Yasser</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-6 text-sm text-luxury-platinum"
            >
              <button className="hover:text-luxury-gold transition-colors duration-300">
                Politique de Confidentialité
              </button>
              <button className="hover:text-luxury-gold transition-colors duration-300">
                Conditions d'Utilisation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;