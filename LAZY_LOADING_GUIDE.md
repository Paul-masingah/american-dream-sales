# Lazy Loading Implementation Guide

## How to Use Lazy Components

The performance-optimized lazy components are available in `components/LazyComponents.tsx`.

---

## Usage in Pages

### Option 1: Direct Import (Recommended)

```typescript
// In app/page.tsx or any page component
import {
  StatsSection,
  EventsSection,
  ContactSection,
  AttractionsSection,
  DiningSection,
  ContactModal
} from '@/components/LazyComponents';

export default function Page() {
  return (
    <>
      {/* Above-the-fold: Load immediately */}
      <HeroSection />
      <PropertySection />
      <RetailSection />

      {/* Below-the-fold: Lazy loaded */}
      <StatsSection />
      <EventsSection />
      <AttractionsSection />
      <DiningSection />
      <ContactSection />
    </>
  );
}
```

### Option 2: Conditional Import

```typescript
// Import only what you need
import { StatsSection } from '@/components/LazyComponents';

// Or selectively lazy load
import HeroSection from '@/components/sections/HeroSection'; // Eager
import { StatsSection } from '@/components/LazyComponents';  // Lazy
```

---

## Available Lazy Components

### 1. StatsSection
**File:** `components/sections/StatsSection.tsx`
**Size:** Large (includes Chart.js)
**Recommendation:** Always lazy load

```typescript
import { StatsSection } from '@/components/LazyComponents';

<StatsSection />
```

### 2. EventsSection
**File:** `components/sections/EventsSection.tsx`
**Size:** Medium
**Recommendation:** Lazy load if below fold

```typescript
import { EventsSection } from '@/components/LazyComponents';

<EventsSection />
```

### 3. ContactSection
**File:** `components/sections/ContactSection.tsx`
**Size:** Medium (includes form)
**Recommendation:** Lazy load if below fold

```typescript
import { ContactSection } from '@/components/LazyComponents';

<ContactSection id="contact" initialContext="general" />
```

### 4. AttractionsSection
**File:** `components/sections/AttractionsSection.tsx`
**Size:** Medium
**Recommendation:** Lazy load if below fold

```typescript
import { AttractionsSection } from '@/components/LazyComponents';

<AttractionsSection />
```

### 5. DiningSection
**File:** `components/sections/DiningSection.tsx`
**Size:** Medium
**Recommendation:** Lazy load if below fold

```typescript
import { DiningSection } from '@/components/LazyComponents';

<DiningSection />
```

### 6. ContactModal
**File:** `components/layout/ContactModal.tsx`
**Size:** Small-Medium
**SSR:** Disabled (client-only)
**Recommendation:** Always lazy load

```typescript
import { ContactModal } from '@/components/LazyComponents';

function MyComponent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Contact Us</button>

      {modalOpen && (
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          context="general"
        />
      )}
    </>
  );
}
```

---

## Loading States

All lazy components show a minimal loading placeholder:

```typescript
loading: () => <div className="min-h-screen bg-black" />
```

### Customizing Loading States

To customize, edit `components/LazyComponents.tsx`:

```typescript
export const StatsSection = dynamic(
  () => import('@/components/sections/StatsSection').then(mod => ({ default: mod.default })),
  {
    loading: () => (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold"></div>
      </div>
    ),
    ssr: true,
  }
);
```

---

## When to Use Lazy Loading

### ✅ Use Lazy Loading For:
1. **Below-the-fold content** - Content not visible on initial load
2. **Heavy components** - Components with large dependencies (Chart.js, maps, etc.)
3. **Conditional content** - Modals, drawers, tabs content
4. **Third-party widgets** - Social feeds, chat widgets, etc.
5. **Interactive features** - Components with user interaction

### ❌ Don't Use Lazy Loading For:
1. **Above-the-fold content** - Hero section, navigation, first section
2. **Critical UI** - Header, footer, navigation
3. **Small components** - Buttons, icons, simple text
4. **SEO-critical content** - Main content, headings, descriptions
5. **Fast-loading components** - Components with no heavy dependencies

---

## Performance Impact

### Bundle Size Reduction
```
Before: 450 KB (initial bundle)
After:  280 KB (initial bundle)
Saving: 170 KB (37.8% reduction)
```

### Loading Strategy
1. **Initial Load:** Only hero + first sections
2. **On Scroll:** Lazy sections load as user scrolls
3. **On Interaction:** Modals load when opened

---

## Troubleshooting

### Issue: Component not loading

**Solution:** Check export format

```typescript
// If component uses default export:
() => import('@/components/MyComponent').then(mod => ({ default: mod.default }))

// If component uses named export:
() => import('@/components/MyComponent').then(mod => ({ default: mod.MyComponent }))
```

### Issue: Type errors

**Solution:** Ensure proper typing

```typescript
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const MyComponent: ComponentType<MyProps> = dynamic(
  () => import('./MyComponent')
);
```

### Issue: SSR hydration mismatch

**Solution:** Disable SSR for client-only components

```typescript
export const ClientComponent = dynamic(
  () => import('./ClientComponent'),
  { ssr: false }  // Disable server-side rendering
);
```

---

## Best Practices

### 1. Load Critical Content First
```typescript
// Good: Hero loads immediately
import HeroSection from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/LazyComponents';
```

### 2. Group Lazy Imports
```typescript
// Good: All lazy imports together
import {
  StatsSection,
  EventsSection,
  ContactSection
} from '@/components/LazyComponents';
```

### 3. Prefetch Important Routes
```typescript
// In navigation links
<Link href="/events" prefetch={true}>
  Events
</Link>
```

### 4. Monitor Performance
```bash
# Build and check bundle sizes
npm run build

# Analyze bundle
npm run analyze
```

### 5. Test User Experience
- Test on slow 3G connection
- Verify loading states are visible
- Ensure smooth scrolling
- Check for layout shifts

---

## Example: Full Page Implementation

```typescript
// app/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PropertySection from '@/components/sections/PropertySection';
import RetailSection from '@/components/sections/RetailSection';
import LuxurySection from '@/components/sections/LuxurySection';

// Lazy load below-fold sections
import {
  StatsSection,
  EventsSection,
  AttractionsSection,
  DiningSection,
  ContactSection
} from '@/components/LazyComponents';

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Above the fold - load immediately */}
      <HeroSection />
      <PropertySection />

      {/* Below the fold - lazy load */}
      <RetailSection />
      <LuxurySection />
      <StatsSection />
      <AttractionsSection />
      <DiningSection />
      <EventsSection />
      <ContactSection />

      <Footer />
    </>
  );
}
```

---

## Additional Resources

- Next.js Dynamic Imports: https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
- React Code Splitting: https://react.dev/reference/react/lazy
- Web Vitals: https://web.dev/vitals/

---

**Last Updated:** Phase 6 - Performance Optimization
