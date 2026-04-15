/**
 * ContactModal Component
 * Modal form for contact inquiries with context pre-filling
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ContactContext } from '@/lib/types';
import { CONTACT_CONTEXTS } from '@/lib/constants';
import { CTAButton } from '../ui/CTAButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: ContactContext;
}

export function ContactModal({ isOpen, onClose, context = 'general' }: ContactModalProps) {
  const contactInfo = CONTACT_CONTEXTS[context];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend)
    console.log('Form submitted:', { ...formData, context });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
          >
            <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="border-b border-[var(--color-gray-800)] p-6 flex justify-between items-start">
                <div>
                  <h2 className="font-headline text-2xl text-white tracking-wide uppercase mb-2">
                    {contactInfo.title}
                  </h2>
                  <p className="text-white/60 text-sm">{contactInfo.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-[var(--color-gray-800)]/50 p-6 border-b border-[var(--color-gray-800)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                  <div>
                    <div className="font-label text-xs text-white/40 mb-1">Team</div>
                    <div className="text-white text-sm">{contactInfo.team}</div>
                  </div>
                  <div>
                    <div className="font-label text-xs text-white/40 mb-1">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-[var(--color-gold)] text-sm hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div>
                    <div className="font-label text-xs text-white/40 mb-1">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-[var(--color-gold)] text-sm hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="font-label text-xs text-white/60 mb-2 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-label text-xs text-white/60 mb-2 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="font-label text-xs text-white/60 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-label text-xs text-white/60 mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="font-label text-xs text-white/60 mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-label text-xs text-white/60 mb-2 block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black border border-[var(--color-gray-800)] rounded px-4 py-3 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <CTAButton type="submit" variant="primary" size="md" className="flex-1">
                    Send Inquiry
                  </CTAButton>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border border-[var(--color-gray-700)] text-white hover:bg-white/5 transition-colors rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
