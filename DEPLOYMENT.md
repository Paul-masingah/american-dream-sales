# Deployment Guide

Complete deployment instructions for the American Dream Interactive Sales Experience platform.

## 📋 Pre-Deployment Checklist

Before deploying to any environment, ensure:

- [ ] Production build succeeds locally (`npm run build`)
- [ ] All tests pass (if implemented)
- [ ] Environment variables configured
- [ ] Asset optimization complete (images, videos)
- [ ] Security headers configured
- [ ] Analytics tracking added
- [ ] Error tracking configured (optional)
- [ ] Performance audit passing (Lighthouse ≥90)
- [ ] Accessibility audit passing (WCAG 2.1 AA)
- [ ] Cross-browser testing complete
- [ ] Mobile device testing complete

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended hosting platform as it's built by the creators of Next.js and provides optimal performance.

#### Initial Setup

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
# From project root
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? american-dream-sales
# - Directory? ./
# - Override settings? No
```

4. **Production Deployment**:
```bash
vercel --prod
```

#### Configure Project Settings

1. Go to [vercel.com](https://vercel.com) and select your project
2. Navigate to **Settings** → **Environment Variables**
3. Add variables (if any):
   ```
   NEXT_PUBLIC_API_URL=https://api.americandream.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Navigate to **Settings** → **Git**
5. Connect your GitHub repository for automatic deployments

#### Custom Domain

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `sales.americandream.com`)
3. Configure DNS records as instructed:
   ```
   Type: CNAME
   Name: sales
   Value: cname.vercel-dns.com
   ```
4. SSL certificate provisioned automatically

#### Vercel Configuration File

Create `vercel.json` (optional, for advanced config):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Note**: Security headers are already configured in `next.config.ts`, so vercel.json is optional.

---

### Option 2: Netlify

#### Setup

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login**:
```bash
netlify login
```

3. **Initialize**:
```bash
netlify init
```

4. **Deploy**:
```bash
netlify deploy --prod
```

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NEXT_TELEMETRY_DISABLED = "1"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

#### Environment Variables

Add in Netlify dashboard under **Site settings** → **Build & deploy** → **Environment**.

---

### Option 3: AWS Amplify

#### Setup via AWS Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **New app** → **Host web app**
3. Connect your Git repository
4. Configure build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
        - ./ensure-tailwind.sh
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

5. Add environment variables in **App settings** → **Environment variables**

#### Custom Domain

1. Go to **App settings** → **Domain management**
2. Add domain and configure DNS
3. SSL certificate auto-provisioned

---

### Option 4: Self-Hosted (Docker)

#### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat curl
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure Tailwind is installed
RUN chmod +x ./ensure-tailwind.sh && ./ensure-tailwind.sh

# Build application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
      - NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}
    restart: unless-stopped
```

#### Deploy

```bash
# Build image
docker build -t american-dream-sales .

# Run container
docker run -p 3000:3000 american-dream-sales

# Or use docker-compose
docker-compose up -d
```

---

## 🔐 Environment Variables

### Required Variables

None - the application works without environment variables.

### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX           # Google Tag Manager ID

# API Endpoints
NEXT_PUBLIC_API_URL=https://api.americandream.com

# Contact Form Backend
CONTACT_FORM_API_KEY=your-api-key-here
CONTACT_FORM_ENDPOINT=https://api.example.com/contact

# Feature Flags
NEXT_PUBLIC_ENABLE_CHAT=false
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_AUTH_TOKEN=your-auth-token
```

## 🔒 Security Configuration

### Content Security Policy

Already configured in `next.config.ts`. Review and adjust as needed:

```typescript
'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; ..."
```

### Security Headers

The following headers are automatically applied:
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### HTTPS/SSL

All modern hosting providers (Vercel, Netlify, AWS Amplify) provide automatic SSL certificates. For self-hosted:

1. Use Let's Encrypt with certbot
2. Configure reverse proxy (nginx/Apache)
3. Force HTTPS redirects

## 📊 Monitoring & Analytics

### Google Analytics

1. Add GA_ID to environment variables
2. Create `lib/analytics.ts`:

```typescript
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: any) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

3. Add script to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Error Tracking (Sentry)

1. Install Sentry:
```bash
npm install @sentry/nextjs
```

2. Run Sentry wizard:
```bash
npx @sentry/wizard@latest -i nextjs
```

3. Configure as prompted

## 🚀 Performance Optimization

### CDN Configuration

For optimal performance, serve static assets via CDN:

1. **Images**: Upload to Cloudinary, imgix, or AWS S3 + CloudFront
2. **Videos**: Upload to Vimeo, YouTube, or AWS S3 + CloudFront
3. **Fonts**: Already self-hosted via Next.js (optimal)

### Caching Strategy

Headers already configured in `next.config.ts`:
- Static assets: 1 year cache (`max-age=31536000`)
- HTML pages: Dynamic, revalidated per request
- API routes: Configure per endpoint

### Image Optimization

Replace placeholder images with optimized versions:

```bash
# Install sharp for image optimization
npm install sharp

# Convert images to WebP/AVIF
npx @squoosh/cli --webp auto --avif auto public/images/*.jpg
```

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Ensure Tailwind installed
        run: ./ensure-tailwind.sh

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🐛 Troubleshooting

### Build Fails on Deployment

```bash
# Ensure Tailwind script runs before build
./ensure-tailwind.sh && npm run build
```

### Memory Issues During Build

Increase Node.js memory:
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Static Export Issues

This app uses dynamic features and cannot be statically exported. Deploy as a Node.js application.

## 📱 Post-Deployment Verification

1. **Functionality Check**:
   - [ ] All pages load correctly
   - [ ] Navigation works
   - [ ] Forms submit successfully
   - [ ] Contact modal opens
   - [ ] Charts render correctly

2. **Performance Check**:
   - [ ] Run Lighthouse audit (target ≥90)
   - [ ] Check Core Web Vitals in Search Console
   - [ ] Monitor real user metrics

3. **Security Check**:
   - [ ] Verify HTTPS is enforced
   - [ ] Check security headers (securityheaders.com)
   - [ ] Verify CSP is working
   - [ ] Test XSS/injection protection

4. **SEO Check**:
   - [ ] Verify meta tags
   - [ ] Check robots.txt
   - [ ] Verify sitemap.xml
   - [ ] Test structured data (schema.org)
   - [ ] Check Open Graph tags

## 📞 Support

For deployment issues:
1. Check build logs in hosting platform
2. Verify environment variables
3. Test locally with production build
4. Review [Troubleshooting](./README.md#troubleshooting) in README

---

**Deployment Complete!** 🎉

Your American Dream Sales Experience is now live and ready to showcase the property to potential partners.
