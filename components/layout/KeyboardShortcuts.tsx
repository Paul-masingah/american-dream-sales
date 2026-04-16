/**
 * KeyboardShortcuts Component
 * Overlay showing navigation hotkeys
 * Triggered by '?' key press
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { scrollToSection, prefersReducedMotion } from '@/lib/utils';

interface Shortcut {
  key: string;
  description: string;
  action?: () => void;
}

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Toggle shortcuts modal with '?' key
    if (e.key === '?' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
      return;
    }

    // Close with Escape
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setIsOpen(false);
      return;
    }

    // Number keys 1-8 for navigation (only when modal is closed)
    if (!isOpen && e.key >= '1' && e.key <= '8' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const index = parseInt(e.key) - 1;
      if (index < NAV_ITEMS.length) {
        e.preventDefault();
        scrollToSection(NAV_ITEMS[index].section);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const shortcuts: Shortcut[] = [
    {
      key: '?',
      description: 'Toggle keyboard shortcuts',
      action: () => setIsOpen(!isOpen),
    },
    {
      key: 'Esc',
      description: 'Close modals and overlays',
    },
    ...NAV_ITEMS.map((item, index) => ({
      key: `${index + 1}`,
      description: `Jump to ${item.label}`,
      action: () => {
        scrollToSection(item.section);
        setIsOpen(false);
      },
    })),
  ];

  const reducedMotion = typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.95, y: reducedMotion ? 0 : 20 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="keyboard-shortcuts-title"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[var(--z-modal)] w-full max-w-2xl mx-4"
          >
            <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-gray-800)]">
                <div className="flex items-center gap-3">
                  <Keyboard className="text-[var(--color-gold)]" size={24} aria-hidden="true" />
                  <h2
                    id="keyboard-shortcuts-title"
                    className="font-headline text-xl text-white tracking-wider"
                  >
                    KEYBOARD SHORTCUTS
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                  aria-label="Close keyboard shortcuts"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Shortcuts List */}
              <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                <div className="space-y-3">
                  {shortcuts.map((shortcut, index) => (
                    <div
                      key={`${shortcut.key}-${index}`}
                      className="flex items-center justify-between py-2 border-b border-[var(--color-gray-800)] last:border-0"
                    >
                      <span className="text-white/80 font-body text-sm">
                        {shortcut.description}
                      </span>
                      <kbd className="px-3 py-1.5 bg-[var(--color-gray-800)] border border-[var(--color-gray-700)] rounded text-[var(--color-gold)] font-label text-xs tracking-wider shadow-sm min-w-[3rem] text-center">
                        {shortcut.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[var(--color-gray-800)]/50 border-t border-[var(--color-gray-800)]">
                <p className="text-white/50 font-label text-xs text-center">
                  Press <kbd className="px-2 py-1 bg-[var(--color-gray-700)] rounded text-[var(--color-gold)]">?</kbd> anytime to toggle this menu
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
