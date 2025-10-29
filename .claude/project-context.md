# Digital Insights UAE - Website Project Context

## Project Overview
Modern, multi-page cybersecurity website for Digital Insights Consultancy, operating in UK and UAE. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion with amazing animations and transitions.

## Business Information

### Company
**Digital Insights Consultancy** - Cybersecurity and Digital Forensics firm
**Tagline:** "Keep Companies Safe From Cyber Attacks"
**Mission:** "We are committed to deliver outstanding, cutting edge cyber solutions that add real value to your organisation"

### Locations

#### United Kingdom Office
- Address: Acorn House, 381 Midsummer Boulevard, Milton Keynes MK9 3HP
- Cyber Attack Helpline (24/7): +44 777 110 2970
- General Enquiries: +44 203 130 1723
- Email: contact@dic-uk.com, cmo@digitalinsights-uae.com

#### UAE Office
- Address: Office 211D & 211E, Ibn Battuta Gate Offices, Dubai, UAE
- P.O. Box: 128909
- Cyber Attack Helpline (24/7): +971 4 2415888
- General Enquiries: +44 203 130 1723
- Email: info@digitalinsights-uae.com

## Core Services Offered

### Cybersecurity Services
1. **Digital Forensics & Incident Response**
   - Advanced cloning techniques for evidence recovery
   - 24/7 incident response
   - Court-admissible evidence collection

2. **Security Operations Centre (SOC)**
   - WatchTower365 platform
   - 24/7/365 monitoring
   - SIEM tools integration
   - Real-time threat detection

3. **Penetration Testing**
   - Vulnerability scanning
   - Manual penetration testing
   - Web application testing
   - Network security testing

4. **Security Assessments**
   - Risk analysis
   - Compliance gap analysis (ISO 27001, PCI DSS)
   - Security architecture review

5. **Cybersecurity Consultancy**
   - SOC readiness assessments
   - GDPR data protection advisory
   - Security strategy development

6. **Cybersecurity Training**
   - Phishing awareness training
   - Management training
   - First responder training
   - AWS certification courses
   - Cisco certification courses

7. **Platform Engineering**
   - DevSecOps as a Service
   - Managed Kubernetes & Service Mesh
   - Cloud migration services
   - Site Reliability Engineering (SRE)
   - CI/CD pipeline implementation

8. **Cloud Security & Infrastructure**
   - Cloud auditing and compliance
   - Managed cloud infrastructure (AWS, Azure, GCP)
   - HashiCorp tooling
   - Multi-cloud security

### AI-Powered Services (New Offerings)
1. Machine Learning Security Solutions
2. AI Threat Detection
3. Predictive Analytics
4. Computer Vision for Security
5. Natural Language Processing
6. AI Consulting & Strategy

## Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind
- **Framer Motion** - Advanced animations library
- **Lucide React** - Beautiful icon set

### Project Structure
```
/app
  /page.tsx                 # Homepage with hero, video modal, stats
  /layout.tsx               # Root layout with Navbar & Footer
  /globals.css              # Global styles and animations
  /blog
    /page.tsx               # Blog listing
    /[slug]/page.tsx        # Individual blog posts
  /services
    /page.tsx               # All 8 services detailed
  /ai-solutions
    /page.tsx               # AI services showcase
  /about
    /page.tsx               # Company info, mission, values
  /contact
    /page.tsx               # Contact form, office locations

/components
  /Navbar.tsx               # Sticky navigation with dropdowns
  /Footer.tsx               # Footer with links and social
  /HeroSection.tsx          # Original hero component
  /ServicesSection.tsx      # Original services component
  /AIServicesSection.tsx    # Original AI services component
  /StatsSection.tsx         # Statistics display
  /TestimonialsSection.tsx  # Client testimonials
  /ContactSection.tsx       # Contact form component
  /VideoModal.tsx           # Video popup modal
  /PageTransition.tsx       # Page transition wrapper

/content                    # Future: MDX blog posts
/public                     # Static assets
```

## Key Features Implemented

### UI/UX Features
- ✅ Dark theme (slate-900 background throughout)
- ✅ Background images on all sections
- ✅ Video modal popup
- ✅ Smooth scroll animations
- ✅ Hover effects (lift, scale, glow)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated stats cards
- ✅ Grid overlay effects
- ✅ Gradient text effects

### Navigation
- ✅ Multi-page structure (not single-page)
- ✅ Sticky header on scroll
- ✅ Dropdown menus for Services & AI Solutions
- ✅ Mobile hamburger menu
- ✅ Smooth page transitions ready

### Animations
- ✅ Framer Motion throughout
- ✅ Scroll-triggered animations
- ✅ Hover animations (cards, buttons)
- ✅ Page load animations
- ✅ Stagger animations for lists

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

### Platform
**Vercel** - Automatic deployment from GitHub

### GitHub Repository
https://github.com/prathzzxoxo/Digital-Insights-Website

### Deployment Process
1. Push to `main` branch
2. Vercel auto-detects Next.js
3. Runs `npm install` → `npm run build`
4. Deploys to production
5. Live in ~2 minutes

### Environment Setup
- Node.js 18+
- npm 10+
- Git version control

## Content Sources

### Original Website
All content crawled from: https://digitalinsights-uae.com/

### Images
- Unsplash API for high-quality cybersecurity images
- Hero backgrounds
- Service card images
- Section backgrounds

## Design System

### Colors
```javascript
primary: {
  400: '#38bdf8',  // Light blue
  500: '#0ea5e9',  // Primary blue
  600: '#0284c7',  // Dark blue
}

accent: {
  400: '#e879f9',  // Light purple
  500: '#d946ef',  // Accent purple
  600: '#c026d3',  // Dark purple
}

slate: {
  700: '#334155',  // Border color
  800: '#1e293b',  // Card background
  900: '#0f172a',  // Main background
}
```

### Typography
- Font: Inter (from Google Fonts)
- Headings: Bold, 4xl-7xl sizes
- Body: Regular, xl-2xl for large text
- Small text: sm-base

### Spacing
- Sections: py-20 to py-24
- Cards: p-6 to p-10
- Grid gaps: gap-6 to gap-12

## Important Notes

### Tailwind CSS v4 Configuration
- Uses `@tailwindcss/postcss` (not `tailwindcss`)
- PostCSS configured in `postcss.config.mjs`
- Tailwind config in `tailwind.config.ts`

### File Naming
- Use PascalCase for React components
- No spaces in filenames (use camelCase or kebab-case)
- Example: `TestimonialsSection.tsx` not `Testimonials Section.tsx`

### Navigation Links
All navigation uses proper Next.js routing:
- Homepage: `/`
- Services: `/services`
- AI Solutions: `/ai-solutions`
- About: `/about`
- Blog: `/blog`
- Contact: `/contact`

### 24/7 Emergency Helpline
Always prominently display:
- UK: +44 777 110 2970
- UAE: +971 4 2415888

## Training Programs

### AWS Courses
- AWS Cloud Practitioner
- AWS SysOps Administrator Associate
- AWS Certified Security Specialty
- AWS Advanced Networking Specialty
- AWS Solutions Architect Associate

### Cisco Courses
- 200-301 CCNA
- 300-410 Enterprise Advanced Routing
- 350-401 ENCOR

### Cybersecurity Training
- Phishing awareness
- Management training
- First responder training
- End user training

## Certifications & Expertise
- AWS Certified
- ISO 27001
- Kubernetes Certified
- Azure Security Expert
- HashiCorp Tools
- CCSK (Cloud Security)

## Client Testimonial
**APEXX Global (Fintech Payments)**
"Digital Insights has been providing competent and diligent services...24/7 SOC services with SIEM tools, compliance assistance (PCI DSS, ISO 27001)"

## Future Enhancements
- [ ] Add MDX blog system for easier content management
- [ ] Integrate CMS (Contentful/Sanity)
- [ ] Add contact form backend
- [ ] Implement page transitions between routes
- [ ] Add more real testimonials
- [ ] Integrate analytics (Google Analytics)
- [ ] Add case studies page
- [ ] Implement search functionality
- [ ] Add team members page
- [ ] Create training course detail pages

## Git Workflow
```bash
# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: description"

# Push to GitHub (triggers Vercel deployment)
git push origin main
```

## Common Tasks

### Add a new service
1. Update `/app/services/page.tsx`
2. Add to services array with icon, description, image
3. Add to navigation dropdown in `/components/Navbar.tsx`

### Add a new blog post
1. Create file in `/app/blog/[slug]/page.tsx`
2. Or add to blogPosts array in `/app/blog/page.tsx`

### Update contact information
1. Edit `/app/contact/page.tsx`
2. Also update `/components/Footer.tsx` if needed

### Change colors/theme
1. Edit `tailwind.config.ts`
2. Update color variables
3. Rebuild: `npm run build`

## Troubleshooting

### Build Errors
1. Check Tailwind PostCSS setup
2. Ensure `@tailwindcss/postcss` is installed
3. Verify `postcss.config.mjs` uses correct plugin

### File Not Found
1. Check file naming (no spaces)
2. Verify import paths use `@/` alias
3. Ensure file exports default component

### Deployment Issues
1. Check Vercel build logs
2. Verify `package.json` scripts
3. Test build locally: `npm run build`

## Contact for Development
Project managed through GitHub: prathzzxoxo
Deployment platform: Vercel
Framework: Next.js 14 (App Router)
