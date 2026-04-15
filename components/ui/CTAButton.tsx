/**
 * CTAButton Component
 * Call-to-action button with multiple variants and sizes
 * Fully accessible with keyboard navigation
 */

'use client';

import { CTAButtonProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ariaLabel,
  type = 'button',
  context,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-headline tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-light)] focus-visible:ring-[var(--color-gold)] shadow-lg hover:shadow-[var(--shadow-gold)]',
    secondary:
      'bg-[var(--color-blue)] text-black hover:bg-[var(--color-blue-light)] focus-visible:ring-[var(--color-blue)] shadow-lg hover:shadow-[var(--shadow-blue)]',
    outline:
      'border-2 border-white text-white hover:bg-white hover:text-black focus-visible:ring-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], disabledStyles, className);

  if (href && !disabled) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      data-context={context}
    >
      {children}
    </button>
  );
}
