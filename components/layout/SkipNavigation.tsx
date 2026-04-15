/**
 * Skip Navigation Link
 * Accessibility feature for keyboard users to skip to main content
 */

export default function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold focus:text-black focus:font-label focus:text-sm focus:uppercase focus:tracking-wider focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
    >
      Skip to Main Content
    </a>
  );
}
