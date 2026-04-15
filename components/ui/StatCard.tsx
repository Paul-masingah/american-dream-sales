/**
 * StatCard Component
 * Displays animated statistics with optional trends
 * Used in analytics/data dashboard sections
 */

'use client';

import { StatCardProps } from '@/lib/types';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '@/lib/utils';

export function StatCard({ label, value, prefix, suffix, decimals, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn('bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] p-6 rounded-lg', className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="font-label text-xs text-[var(--color-gray-500)] tracking-wider uppercase">{label}</div>
        {icon && <div className="text-[var(--color-gold)]">{icon}</div>}
      </div>

      <div className="font-display text-4xl text-white mb-2">
        {typeof value === 'number' ? (
          <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          value
        )}
      </div>

      {trend && (
        <div className="flex items-center gap-2 font-label text-xs">
          <span className={trend.direction === 'up' ? 'text-green-500' : 'text-red-500'}>
            {trend.direction === 'up' ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-[var(--color-gray-500)]">{trend.label}</span>
        </div>
      )}
    </div>
  );
}
