/**
 * Footer Component
 * Site footer with links and social media
 */

'use client';

import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[var(--color-gray-900)] border-t border-[var(--color-gray-800)] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Visit */}
          <div>
            <h3 className="font-headline text-white text-lg mb-4 tracking-wide uppercase">Visit</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.visit.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-headline text-white text-lg mb-4 tracking-wide uppercase">Business</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.business.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-headline text-white text-lg mb-4 tracking-wide uppercase">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-headline text-white text-lg mb-4 tracking-wide uppercase">Connect</h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm flex items-center gap-2"
                  >
                    {link.platform} <span className="text-xs text-white/40">{link.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-gray-800)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} American Dream. All rights reserved.
            </p>
            <div className="flex gap-6">
              {FOOTER_LINKS.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-white/60 transition-colors text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
