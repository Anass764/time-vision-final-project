import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Smartphone, MapPin, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentComplete: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  isOpen, 
  onClose, 
  totalAmount, 
  onPaymentComplete 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'mobile' | 'cash'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    phoneNumber: '',
    address: '',
    city: 'Casablanca',
    postalCode: '',
  });

  const paymentMethods = [
    {
      id: 'card',
      name: 'Carte Bancaire',
      icon: CreditCard,
      description: 'Visa, Mastercard, CIB',
    },
    {
      id: 'mobile',
      name: 'Paiement Mobile',
      icon: Smartphone,
      description: 'Orange Money, inwi money',
    },
    {
      id: 'cash',
      name: 'Paiement à la Livraison',
      icon: MapPin,
      description: 'Espèces à la réception',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      onPaymentComplete();
      onClose();
      setIsSuccess(false);
    }, 2000);
  };

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
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 bg-luxury-obsidian text-white rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-playfair font-bold">Finaliser la Commande</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-luxury-gold mt-2">
                  Total: <span className="text-2xl font-bold">{totalAmount.toLocaleString('fr-MA')} DH</span>
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle size={80} className="text-success-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-playfair font-bold text-luxury-obsidian mb-4">
                    Commande Confirmée!
                  </h3>
                  <p className="text-neutral-600 text-lg">
                    Votre commande a été traitée avec succès. Vous recevrez un email de confirmation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Payment Methods */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-luxury-obsidian mb-4">
                      Méthode de Paiement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {paymentMethods.map((method) => (
                        <motion.button
                          key={method.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedMethod(method.id as any)}
                          className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                            selectedMethod === method.id
                              ? 'border-luxury-gold bg-luxury-gold/10'
                              : 'border-neutral-200 hover:border-luxury-gold/50'
                          }`}
                        >
                          <method.icon 
                            size={24} 
                            className={`mb-2 ${
                              selectedMethod === method.id ? 'text-luxury-gold' : 'text-neutral-600'
                            }`} 
                          />
                          <h4 className="font-semibold text-luxury-obsidian">{method.name}</h4>
                          <p className="text-sm text-neutral-600">{method.description}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  {selectedMethod === 'card' && (
                    <div className="mb-6 space-y-4">
                      <h4 className="text-lg font-semibold text-luxury-obsidian">
                        Informations de la Carte
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                            Nom sur la carte
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                            placeholder="Nom complet"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                            Numéro de carte
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                            Date d'expiration
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'mobile' && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-luxury-obsidian mb-4">
                        Paiement Mobile
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                          placeholder="+212 6XX-XXXXXX"
                        />
                      </div>
                    </div>
                  )}

                  {/* Delivery Address */}
                  <div className="mb-6 space-y-4">
                    <h4 className="text-lg font-semibold text-luxury-obsidian">
                      Adresse de Livraison
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                          Adresse complète
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                          placeholder="Rue, numéro, quartier"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                          Ville
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                        >
                          <option value="Casablanca">Casablanca</option>
                          <option value="Rabat">Rabat</option>
                          <option value="Marrakech">Marrakech</option>
                          <option value="Fès">Fès</option>
                          <option value="Tanger">Tanger</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-obsidian mb-2">
                          Code postal
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                          placeholder="20000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isProcessing}
                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    className="w-full bg-luxury-gold text-luxury-obsidian py-4 rounded-xl font-bold text-lg hover:bg-luxury-darkGold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-luxury-obsidian border-t-transparent rounded-full"
                        />
                        <span>Traitement en cours...</span>
                      </>
                    ) : (
                      <span>Confirmer la Commande</span>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;