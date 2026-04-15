/**
 * SectionLabel Component
 * Stylized label for section headers
 * Supports multiple color variants
 */

'use client';

import { SectionLabelProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SectionLabel({ children, variant = 'gold', className = '' }: SectionLabelProps) {
  const variantStyles = {
    gold: 'text-[var(--color-gold)] border-[var(--color-gold)]',
    blue: 'text-[var(--color-blue)] border-[var(--color-blue)]',
    rose: 'text-[var(--color-rose)] border-[var(--color-rose)]',
    white: 'text-white border-white',
  };

  return (
    <div
      className={cn(
        'inline-block px-4 py-2 border font-label text-xs tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
