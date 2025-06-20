import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Eye, Lock, Users } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, type }) => {
  const privacyContent = {
    title: 'Politique de Confidentialité',
    sections: [
      {
        icon: Shield,
        title: 'Protection des Données',
        content: 'Chez Time & Vision, nous nous engageons à protéger vos données personnelles. Nous collectons uniquement les informations nécessaires pour vous offrir nos services de luxe.'
      },
      {
        icon: Eye,
        title: 'Collecte d\'Informations',
        content: 'Nous collectons vos informations lorsque vous passez commande, créez un compte ou nous contactez. Ces données incluent votre nom, email, adresse et préférences.'
      },
      {
        icon: Lock,
        title: 'Sécurité',
        content: 'Vos données sont cryptées et stockées de manière sécurisée. Nous utilisons les dernières technologies de sécurité pour protéger vos informations personnelles.'
      },
      {
        icon: Users,
        title: 'Partage des Données',
        content: 'Nous ne vendons jamais vos données à des tiers. Nous partageons uniquement les informations nécessaires avec nos partenaires de livraison et de paiement.'
      }
    ]
  };

  const termsContent = {
    title: 'Conditions d\'Utilisation',
    sections: [
      {
        icon: Shield,
        title: 'Utilisation du Site',
        content: 'En utilisant notre site, vous acceptez de respecter nos conditions d\'utilisation et de ne pas utiliser le site à des fins illégales ou non autorisées.'
      },
      {
        icon: Eye,
        title: 'Commandes et Paiements',
        content: 'Toutes les commandes sont soumises à notre acceptation. Les prix sont en dirhams marocains et incluent la TVA. Le paiement doit être effectué au moment de la commande.'
      },
      {
        icon: Lock,
        title: 'Garanties',
        content: 'Tous nos produits sont garantis selon les conditions du fabricant. Nous offrons également une garantie de satisfaction de 30 jours sur tous nos articles.'
      },
      {
        icon: Users,
        title: 'Responsabilités',
        content: 'Time & Vision s\'engage à fournir des produits de qualité. Notre responsabilité est limitée au prix d\'achat du produit en cas de défaut ou de problème.'
      }
    ]
  };

  const content = type === 'privacy' ? privacyContent : termsContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 bg-luxury-obsidian text-white rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-playfair font-bold">{content.title}</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-luxury-gold mt-2">
                  Time & Vision - Montres et Lunettes de Luxe
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-8">
                  {content.sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-neutral-50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-luxury-gold rounded-xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-playfair font-semibold text-luxury-obsidian mb-3">
                          {section.title}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Information */}
                <div className="mt-8 p-6 bg-luxury-gold/10 rounded-xl border border-luxury-gold/20">
                  <h3 className="text-xl font-playfair font-semibold text-luxury-obsidian mb-4">
                    Contact
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Pour toute question concernant {type === 'privacy' ? 'notre politique de confidentialité' : 'nos conditions d\'utilisation'}, 
                    n'hésitez pas à nous contacter à l'adresse email : 
                    <a href="mailto:contact@timeandvision.ma" className="text-luxury-gold font-semibold ml-1">
                      contact@timeandvision.ma
                    </a> ou par téléphone au 
                    <a href="tel:+212771948034" className="text-luxury-gold font-semibold ml-1">
                      +212 771-948034
                    </a>.
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-neutral-500">
                    Dernière mise à jour : Janvier 2025
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="mt-4 bg-luxury-gold text-luxury-obsidian px-8 py-3 rounded-full font-bold hover:bg-luxury-darkGold transition-colors duration-300"
                  >
                    J'ai Compris
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;