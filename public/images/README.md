# Image Optimization Guide

## Required Placeholder Images

For optimal performance, add the following optimized images to this directory:

### Hero Section
- `hero-poster.jpg` (1920x1080, optimized, <200KB)
  - Use as poster for hero video
  - Compress with tools like TinyPNG or ImageOptim

### Section Images
- `retail-placeholder.jpg` (1200x800, optimized)
- `luxury-placeholder.jpg` (1200x800, optimized)
- `dining-placeholder.jpg` (1200x800, optimized)
- `attractions-placeholder.jpg` (1200x800, optimized)
- `events-placeholder.jpg` (1200x800, optimized)

## Image Optimization Tips

1. **Format Selection:**
   - Use WebP/AVIF for modern browsers (Next.js handles this automatically)
   - Provide JPEG fallbacks
   - Use PNG only for images requiring transparency

2. **Compression:**
   - Target file sizes: <200KB for hero images, <100KB for section images
   - Use tools: TinyPNG, ImageOptim, Squoosh
   - Maintain quality between 75-85%

3. **Dimensions:**
   - Hero: 1920x1080 (16:9)
   - Sections: 1200x800 (3:2)
   - Thumbnails: 600x400 (3:2)

4. **Next.js Image Component:**
   All images will be automatically optimized by Next.js when using the `<Image>` component:
   - Automatic WebP/AVIF conversion
   - Responsive image sizes
   - Lazy loading by default
   - Blur placeholders

## Current Status
⚠️ Placeholder images needed - Add optimized images following the guidelines above.
