# Codebase Summary - Digital Insights Website

## Quick Reference

### Server Information
- **Dev Server:** http://localhost:3000
- **Network Access:** http://10.255.254.55:3000
- **Framework:** Next.js 15.1.4
- **Build Time:** ~12.9s

### Development Commands
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## File Structure Overview

### App Directory (`/app`)
**Purpose:** Next.js App Router - Main application pages

| File/Folder | Purpose | Key Components |
|-------------|---------|----------------|
| `layout.tsx` | Root layout | Navbar, Footer, fonts, metadata |
| `page.tsx` | Homepage | Hero, Globe, Stats, Services, Testimonials |
| `globals.css` | Global styles | Tailwind, custom animations |
| `about/` | About page | Company info, mission, values |
| `services/` | Services page | 8 cybersecurity services |
| `ai-solutions/` | AI Solutions | AI-powered security offerings |
| `blog/` | Blog system | Post listing + dynamic routes |
| `blog/[slug]/` | Individual posts | Dynamic blog post pages |
| `contact/` | Contact page | Contact form, office locations |

### Components Directory (`/components`)
**Purpose:** Reusable React components

#### Layout Components
- `Navbar.tsx` - Sticky navigation with dropdown menus
- `Footer.tsx` - Footer with links, contact info, social media
- `PageTransition.tsx` - Page transition animations wrapper

#### Section Components
- `HeroSection.tsx` - Hero banner with CTA
- `ServicesSection.tsx` - Services overview cards
- `AIServicesSection.tsx` - AI services showcase
- `StatsSection.tsx` - Statistics display with animations
- `TestimonialsSection.tsx` - Client testimonials carousel
- `ContactSection.tsx` - Contact form component

#### Feature Components
- `VideoModal.tsx` - Modal popup for video playback
- `LoadingScreen.tsx` - Loading animation
- `ParallaxStars.tsx` - Parallax star background
- `ThreatIntelGlobe.tsx` - 3D threat intelligence globe

#### UI Components (`/components/ui`)
- `globe.tsx` - Interactive 3D globe (Three.js)
- `line-waves.tsx` - Wave animation effects
- `red-line-wave.tsx` - Red wave variant
- `svg-wave-lines.tsx` - SVG wave animations
- `svg-wave-lines-secondary.tsx` - Secondary wave variant
- `vortex.tsx` - Vortex animation effect

### Library Directory (`/lib`)
- `utils.ts` - Helper utilities (cn function for classnames)

### Public Directory (`/public`)
- `images/` - Company logos and local images
  - `mainlogo.png` - Main company logo
  - `newlogoblack.png` - Black variant logo
  - `minilogo.png` - Compact logo version
  - `transperentlogo.png` - Transparent background logo
  - `background_1.jpg` - Background image
- `partners/` - Partner company logos

---

## Technology Stack Details

### Core Framework
```json
{
  "next": "15.1.4",
  "react": "19.2.0",
  "typescript": "5.9.3"
}
```

### Styling & UI
```json
{
  "tailwindcss": "3.4.18",
  "framer-motion": "12.23.24",
  "lucide-react": "0.548.0",
  "clsx": "2.1.1",
  "tailwind-merge": "3.3.1"
}
```

### 3D Graphics
```json
{
  "three": "0.180.0",
  "@react-three/fiber": "9.4.0",
  "@react-three/drei": "10.7.6",
  "three-globe": "2.44.1",
  "simplex-noise": "4.0.3",
  "topojson-client": "3.1.0"
}
```

---

## Key Features Implementation

### 3D Visualizations
- **Globe Component:** Interactive 3D globe using Three.js
- **Threat Intelligence Globe:** Real-time threat visualization
- **Wave Animations:** Multiple wave effect components
- **Vortex Effect:** Animated vortex backgrounds

### Animation System
- **Framer Motion:** Smooth page transitions and scroll animations
- **Tailwind Animations:** Custom keyframe animations
  - `float` - 6s floating effect
  - `glow` - 2s glowing shadow
  - `slide-up` - 0.5s slide entrance
  - `fade-in` - 0.6s fade effect

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Hamburger menu for mobile navigation
- Responsive grid layouts

---

## Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `app/page.tsx` | Homepage with all sections |
| `/services` | `app/services/page.tsx` | Services listing |
| `/ai-solutions` | `app/ai-solutions/page.tsx` | AI offerings |
| `/about` | `app/about/page.tsx` | Company information |
| `/blog` | `app/blog/page.tsx` | Blog post listing |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Individual blog post |
| `/contact` | `app/contact/page.tsx` | Contact form |

---

## Configuration Files

### `next.config.js`
- Image optimization settings
- Remote patterns for Unsplash
- AVIF and WebP support
- Responsive image sizes

### `tsconfig.json`
- TypeScript strict mode enabled
- Path alias: `@/*` ’ root directory
- Target: ES2017
- Module: ESNext

### `tailwind.config.ts`
- Custom color palette
- Custom animations
- Font family configuration
- Extended theme settings

### `postcss.config.mjs`
- Tailwind CSS PostCSS plugin
- Autoprefixer for browser compatibility

### `vercel.json`
- Vercel deployment configuration
- Automatic deployment from GitHub

---

## Design System

### Color Palette
```css
/* Primary Colors */
--coral: #C7462F;
--navy-dark: #0E0129;
--navy-medium: #25245E;
--accent-blue: #93C9D8;

/* Background */
--background: #000000;
```

### Typography
- **Rubik** - Primary sans-serif font
- **Roboto** - Secondary sans-serif
- **Roboto Slab** - Serif for headings

### Spacing Scale
- Sections: `py-20` to `py-24` (80px-96px)
- Cards: `p-6` to `p-10` (24px-40px)
- Grid gaps: `gap-6` to `gap-12` (24px-48px)

---

## API & External Services

### Image Sources
- **Unsplash API** - High-quality stock images
- **Local Images** - Company logos in `/public/images`

### Future Integrations (Planned)
- Contact form backend
- CMS (Contentful/Sanity)
- Google Analytics
- Newsletter subscription

---

## Performance Optimizations

### Next.js Features
- Automatic code splitting
- Server-side rendering (SSR)
- Static site generation (SSG) where applicable
- Image optimization with `next/image`

### Loading Strategies
- Lazy loading for 3D components
- Progressive image loading
- Dynamic imports for heavy modules

---

## SEO Configuration

### Metadata (in `layout.tsx`)
- Title: "Digital Insights UAE"
- Description: SEO-optimized company description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- LocalBusiness schema (UK & UAE offices)
- Service schema for offerings

---

## Development Workflow

### File Naming Conventions
- React components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`utils.ts`)
- Routes: kebab-case (`ai-solutions/`)

### Import Patterns
```typescript
// External libraries
import { motion } from 'framer-motion'

// Next.js
import Link from 'next/link'
import Image from 'next/image'

// Internal components
import { Navbar } from '@/components/Navbar'

// Utilities
import { cn } from '@/lib/utils'
```

### Component Structure
```typescript
export default function ComponentName() {
  return (
    <section className="py-20 bg-[#0E0129]">
      {/* Component content */}
    </section>
  )
}
```

---

## Common Code Patterns

### Tailwind Conditional Classes
```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)} />
```

### Framer Motion Animations
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

### Next.js Image Optimization
```typescript
<Image
  src="/images/logo.png"
  alt="Digital Insights Logo"
  width={200}
  height={80}
  priority
/>
```

---

## Git Information

### Current Status
- **Branch:** main
- **Remote:** GitHub (prathzzxoxo/Digital-Insights-Website)
- **Deployment:** Vercel (auto-deploy from main)

### Recent Commits
```
1f7448e - fixing logo orientation
86fbc9a - hero
6f88ded - _news
01dc5eb - __news
bd6ba8c - -news
```

---

## Dependencies Overview

### Production Dependencies (26 total)
- React ecosystem (react, react-dom, next)
- Three.js ecosystem (7 packages)
- Tailwind & styling (4 packages)
- Utilities & tools (6 packages)

### Dev Dependencies (5 total)
- TypeScript types
- ESLint & config
- PostCSS

---

## Troubleshooting Quick Reference

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors
- Check `tsconfig.json` settings
- Verify import paths use `@/` alias
- Ensure all components export properly

### Styling Issues
- Verify Tailwind config in `tailwind.config.ts`
- Check PostCSS setup in `postcss.config.mjs`
- Clear browser cache for CSS updates

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

---

## Testing & Quality

### Linting
```bash
npm run lint
```

### Build Verification
```bash
npm run build
npm run start
```

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Deployment Information

### Vercel Configuration
- **Platform:** Vercel
- **Framework:** Next.js (auto-detected)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Deployment Triggers
- Push to `main` branch ’ Auto-deploy
- Pull request ’ Preview deployment

### Environment Variables (if needed)
```bash
# Create .env.local for local development
# Add to Vercel dashboard for production
NEXT_PUBLIC_API_URL=...
```

---

## Support Resources

### Documentation
- [README.md](../README.md) - Main project documentation
- [PROJECT-SUMMARY.md](../PROJECT-SUMMARY.md) - Quick reference
- [IMPLEMENTATION_GUIDE.md](../IMPLEMENTATION_GUIDE.md) - Implementation instructions

### External Docs
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/docs/)
