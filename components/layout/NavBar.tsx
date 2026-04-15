/**
 * NavBar Component
 * Persistent navigation with scroll-triggered active section highlighting
 * Responsive with mobile menu support
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection, cn } from '@/lib/utils';

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY, isAtTop } = useScrollPosition();
  const activeSection = useActiveSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const isScrolled = scrollY > 50;

  return (
    <motion.nav
      initial={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[var(--z-fixed)] transition-all duration-300',
        isScrolled
          ? 'bg-black/90 backdrop-blur shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="font-display text-2xl text-[var(--color-gold)] tracking-wide hover:text-[var(--color-gold-light)] transition-colors"
          >
            American Dream
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.section}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.section);
                }}
                className={cn(
                  'font-label text-xs tracking-wider uppercase transition-colors relative py-2',
                  activeSection === item.section
                    ? 'text-[var(--color-gold)]'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {item.label}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-[var(--color-gold)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur border-t border-[var(--color-gray-800)]"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.section}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.section);
                    }}
                    className={cn(
                      'font-label text-sm tracking-wider uppercase transition-colors py-2',
                      activeSection === item.section
                        ? 'text-[var(--color-gold)]'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
