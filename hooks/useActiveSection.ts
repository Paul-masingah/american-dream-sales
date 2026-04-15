/**
 * useActiveSection Hook
 * Determines which section is currently active in viewport
 * Used for navbar active state highlighting
 */

import { useEffect, useState } from 'react';
import { SectionId } from '@/lib/types';
import { NAV_ITEMS } from '@/lib/constants';
import { throttle } from '@/lib/utils';

export function useActiveSection(): SectionId | null {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const NAVBAR_HEIGHT = 100; // Offset for navbar
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT;

      // Get all section elements
      const sections = NAV_ITEMS.map((item) => ({
        id: item.section as SectionId,
        element: document.getElementById(item.section),
      })).filter((section) => section.element !== null);

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            return;
          }
        }
      }

      // If we're at the very top, set to hero
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
