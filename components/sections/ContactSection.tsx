/**
 * ContactSection Component
 * Contact form and quick contact options
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactSectionProps, ContactContext } from '@/lib/types';
import { CONTACT_CONTEXTS, LOCATION_DATA } from '@/lib/constants';
import { SectionLabel } from '../ui/SectionLabel';
import { CTAButton } from '../ui/CTAButton';
import { ContactModal } from '../layout/ContactModal';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '@/lib/utils';

export function ContactSection({ id, initialContext = 'general', className = '' }: ContactSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContext, setSelectedContext] = useState<ContactContext>(initialContext);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  const openModal = (context: ContactContext) => {
    setSelectedContext(context);
    setModalOpen(true);
  };

  const contactOptions: { label: string; context: ContactContext; icon: React.ReactNode }[] = [
    { label: 'Retail Leasing', context: 'retail-leasing', icon: <Mail size={24} /> },
    { label: 'Luxury Leasing', context: 'luxury-leasing', icon: <Mail size={24} /> },
    { label: 'F&B Leasing', context: 'dining-leasing', icon: <Mail size={24} /> },
    { label: 'Events', context: 'events-inquiry', icon: <Mail size={24} /> },
    { label: 'Partnerships', context: 'attractions-sponsorship', icon: <Mail size={24} /> },
    { label: 'General Inquiry', context: 'general', icon: <Mail size={24} /> },
  ];

  return (
    <>
      <section id={id} className={`section bg-[var(--color-gray-900)] ${className}`}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="container mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <SectionLabel variant="gold" className="mb-6 mx-auto">
              Get In Touch
            </SectionLabel>
            <h2 className="text-headline-1 text-white mb-6">
              Let's Start
              <span className="text-gradient-gold"> The Conversation</span>
            </h2>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Ready to join America's premier retail and entertainment destination?
              Our team is here to help you explore opportunities.
            </p>
          </motion.div>

          {/* Contact Options Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {contactOptions.map((option, index) => {
              const info = CONTACT_CONTEXTS[option.context];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-black border border-[var(--color-gray-800)] p-6 rounded-lg hover:border-[var(--color-gold)] transition-colors group cursor-pointer"
                  onClick={() => openModal(option.context)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[var(--color-gold)]">{option.icon}</div>
                    <h3 className="font-headline text-lg text-white tracking-wide uppercase">
                      {option.label}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{info.description}</p>
                  <div className="flex items-center gap-2 text-[var(--color-gold)] text-sm font-label group-hover:gap-3 transition-all">
                    <span>Contact {info.team}</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Location & Hours */}
          <motion.div
            variants={fadeInUp}
            className="bg-black border border-[var(--color-gray-800)] rounded-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <MapPin className="text-[var(--color-gold)]" size={32} />
                <div>
                  <div className="font-headline text-white text-lg mb-2 tracking-wide uppercase">Address</div>
                  <p className="text-white/60 text-sm">{LOCATION_DATA.address}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Phone className="text-[var(--color-gold)]" size={32} />
                <div>
                  <div className="font-headline text-white text-lg mb-2 tracking-wide uppercase">Phone</div>
                  <a
                    href="tel:+12019358500"
                    className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm"
                  >
                    +1 (201) 935-8500
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Mail className="text-[var(--color-gold)]" size={32} />
                <div>
                  <div className="font-headline text-white text-lg mb-2 tracking-wide uppercase">Email</div>
                  <a
                    href="mailto:sales@americandream.com"
                    className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm"
                  >
                    sales@americandream.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context={selectedContext} />
    </>
  );
}
