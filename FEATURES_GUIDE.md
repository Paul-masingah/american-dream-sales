# v0.5.0 Features User Guide

## How to Use the New Features

### 🎬 Loading Screen
**Automatic on first visit**
- Opens browser/tab for first time → See branded American Dream intro
- Navigate within site → No loading screen (session-based)
- Refresh page → No loading screen (session-based)
- Clear session storage or new browser session → Loading screen appears again

**Technical Note:** Uses `sessionStorage` to track if user has seen it

---

### ⌨️ Keyboard Shortcuts
**Press `?` to open the shortcuts menu**

Available shortcuts:
- **1** → Jump to Property section
- **2** → Jump to Retail section
- **3** → Jump to Luxury section
- **4** → Jump to Dining section
- **5** → Jump to Attractions section
- **6** → Jump to Events section
- **7** → Jump to Data/Stats section
- **8** → Jump to Contact section
- **Esc** → Close modals
- **?** → Toggle keyboard shortcuts modal

**Pro Tip:** Shortcuts work from anywhere on the page!

---

### 📊 Scroll Progress Bar
**Automatic - no action needed**
- Appears at top of page when you start scrolling
- Gold gradient line shows your reading progress
- Disappears when at very top of page
- Smooth spring animation as you scroll

**Technical Note:** Uses GPU-accelerated `transform: scaleX()` for smooth 60fps performance

---

### 🎯 Navigation Tooltips
**Hover over navigation items (desktop only)**
- Move mouse over any nav link in header
- See tooltip showing section name
- Helps with navigation clarity
- Only visible on desktop (not needed on mobile)

---

### 🔍 SEO Improvements

#### Sitemap
- Visit `/sitemap.xml` to see all indexed pages
- Automatically includes homepage and events page
- Search engines use this for better indexing

#### Robots.txt
- Visit `/robots.txt` to see crawler directives
- Allows all search engines
- Points to sitemap location

#### Favicons
- See American Dream "AD" logo in browser tab
- Works on all devices (desktop, mobile, tablets)
- Shows in bookmarks and home screen icons

---

## ♿ Accessibility Features

### Reduced Motion Support
**System Settings → Accessibility → Reduce Motion**

When enabled:
- Loading screen: Instant fade (no animations)
- Keyboard shortcuts: Instant transitions
- Scroll progress: Less spring effect
- All animations reduced to 0.01ms

**Platforms:**
- macOS: System Preferences → Accessibility → Display → Reduce Motion
- Windows: Settings → Ease of Access → Display → Show animations
- iOS: Settings → Accessibility → Motion → Reduce Motion
- Android: Settings → Accessibility → Remove Animations

### Keyboard Navigation
All features are fully keyboard accessible:
- Tab through all interactive elements
- Enter/Space to activate
- Arrow keys in modals
- Esc to close overlays

---

## 🎨 Design Details

### Color Scheme
- **Gold**: #C9A84C (primary accent)
- **Black**: #000000 (background)
- **White**: #FFFFFF (text)

### Typography
- **Display**: Cormorant Garamond (elegant serif)
- **Headline**: Bebas Neue (bold sans)
- **Body**: DM Sans (readable sans)
- **Labels**: Space Mono (monospace for tech feel)

---

## 🐛 Troubleshooting

### Loading Screen appears every page load
**Solution:** Check if browser is blocking `sessionStorage` (incognito/private mode might clear it)

### Keyboard shortcuts not working
**Solution:** 
- Make sure focus is not in an input field
- Check if another browser extension is intercepting key presses
- Try clicking on the page body first

### Scroll progress bar not showing
**Solution:** Scroll down a bit - it only appears after 1% scroll progress

### Tooltips not appearing
**Solution:** Tooltips only work on desktop (>1024px width). On mobile, tap navigation items directly.

---

## 📱 Browser Support

Tested and working on:
- ✅ Chrome 90+ (desktop & mobile)
- ✅ Safari 14+ (desktop & mobile)
- ✅ Firefox 88+ (desktop & mobile)
- ✅ Edge 90+
- ✅ Samsung Internet 14+

---

## 🚀 Performance Notes

All features are optimized for performance:
- **Loading Screen**: Removed from DOM after playing
- **Scroll Progress**: GPU-accelerated transforms
- **Keyboard Shortcuts**: Lazy-loaded modal
- **Tooltips**: Pure CSS (no JavaScript)

**Expected Impact:**
- Lighthouse Performance: No degradation
- First Contentful Paint: < 50ms impact
- Time to Interactive: No impact
- Total Blocking Time: No impact

---

## 💡 Tips & Tricks

1. **Power Users**: Memorize shortcuts 1-8 for super-fast navigation
2. **Presentations**: Use keyboard shortcuts to jump through sections during demos
3. **Mobile**: Pull down from top to see subtle progress indication
4. **Bookmarking**: Bookmark specific sections using the URL hash (e.g., `#retail`)

---

## 🔄 Updates & Changelog

**Version 0.5.0** (Current)
- ✅ Loading screen with session tracking
- ✅ Full keyboard shortcut system
- ✅ Scroll progress indicator
- ✅ Navigation tooltips
- ✅ Complete favicon set
- ✅ SEO improvements (sitemap, robots.txt)
- ✅ Enhanced accessibility

---

For technical implementation details, see `IMPLEMENTATION_SUMMARY.md`
