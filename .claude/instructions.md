# Claude Instructions for Digital Insights Website Project

## Project Identity
You are working on the **Digital Insights UAE website** - a cybersecurity company website built with Next.js 14, TypeScript, and Tailwind CSS.

## Always Remember

### Company Information
- **Name:** Digital Insights Consultancy
- **Industry:** Cybersecurity, Digital Forensics, SOC Services
- **Locations:** UK (Milton Keynes) and UAE (Dubai)
- **Emergency Helplines:** UK: +44 777 110 2970 | UAE: +971 4 2415888

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Framer Motion for animations
- Lucide React for icons

### Key Project Characteristics
1. **Multi-page website** (not single-page application)
2. **Dark theme** throughout (slate-900 background)
3. **Real content** from digitalinsights-uae.com
4. **Amazing animations** using Framer Motion
5. **Background images** on all major sections
6. **Responsive design** for all devices

## When Making Changes

### Always Check
- ✅ File naming: No spaces in filenames
- ✅ Component naming: PascalCase for React components
- ✅ Import paths: Use `@/` alias for imports
- ✅ Tailwind: Uses `@tailwindcss/postcss` not `tailwindcss`
- ✅ Dark theme: Maintain slate-900 background
- ✅ Animations: Add Framer Motion animations to new components

### Before Committing
1. Test locally: `npm run dev`
2. Check build: `npm run build`
3. Stage files: `git add .`
4. Commit with message: `git commit -m "feat: description"`
5. Push to deploy: `git push origin main`

### When Adding New Pages
1. Create in `/app/[page-name]/page.tsx`
2. Add to navigation in `/components/Navbar.tsx`
3. Include hero section with background image
4. Add animations (initial, whileInView)
5. Maintain dark theme consistency
6. Make responsive (mobile-first)

### When Adding Components
1. Create in `/components/ComponentName.tsx`
2. Use TypeScript with proper types
3. Add "use client" if using React hooks
4. Include Framer Motion animations
5. Use Tailwind classes for styling
6. Make responsive with breakpoints

### Styling Guidelines
- **Background:** Always use `bg-slate-900` or `bg-slate-800`
- **Text:** White for headings, gray-300/400 for body
- **Gradients:** Use `from-primary-400 to-accent-400` for highlights
- **Borders:** `border-slate-700` with hover `border-primary-500/50`
- **Spacing:** py-20 for sections, p-8 for cards
- **Rounded:** rounded-2xl for cards, rounded-full for buttons

## Content Guidelines

### Services to Highlight
1. Digital Forensics & Incident Response
2. Security Operations Centre (SOC)
3. Penetration Testing
4. Security Assessments
5. Consultancy
6. Training
7. Platform Engineering
8. Cloud Security

### AI Services
1. Machine Learning Security
2. AI Threat Detection
3. Predictive Analytics
4. Computer Vision
5. Natural Language Processing
6. AI Consulting

### Always Include
- 24/7 emergency helpline numbers
- Both UK and UAE contact information
- Company mission and values
- Professional certifications
- Real service descriptions

## Animation Patterns

### Page Entry
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Scroll Trigger
```typescript
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Hover Effects
```typescript
whileHover={{ y: -10, scale: 1.05 }}
```

### Button Interactions
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## Common Tasks Quick Reference

### Add Blog Post
Edit `/app/blog/page.tsx` - add to `blogPosts` array

### Update Services
Edit `/app/services/page.tsx` - modify `services` array

### Change Contact Info
Edit `/app/contact/page.tsx`

### Update Navigation
Edit `/components/Navbar.tsx` - modify `navItems` array

### Add New Page
1. Create `/app/[name]/page.tsx`
2. Add route to Navbar
3. Follow existing page structure

## Image Guidelines
- Use Unsplash URLs for stock images
- Cybersecurity/technology themed images
- High resolution (1200px+ width)
- Always include background overlay for text readability
- Format: `https://images.unsplash.com/photo-XXXXX?w=1200&q=80`

## Deployment

### Auto-Deploy Process
1. Push to GitHub `main` branch
2. Vercel automatically detects changes
3. Runs `npm install` and `npm run build`
4. Deploys to production
5. Live in ~2 minutes

### If Build Fails
- Check Vercel dashboard for logs
- Common issues:
  - Tailwind PostCSS config
  - Missing dependencies
  - TypeScript errors
  - File naming issues

## Project Structure Reference
```
C:\Users\Prats\Documents\Digital Insights Website\
├── .claude/              # This context folder
├── .git/                 # Git repository
├── app/                  # Next.js App Router
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Root layout
│   ├── globals.css      # Global styles
│   ├── blog/            # Blog pages
│   ├── services/        # Services page
│   ├── ai-solutions/    # AI page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/          # React components
├── Old Website/         # Original site source
├── node_modules/        # Dependencies (gitignored)
├── public/              # Static files
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.mjs   # PostCSS config
├── tailwind.config.ts   # Tailwind config
├── tsconfig.json        # TypeScript config
└── README.md
```

## Helpful Commands
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push and deploy
```

## When User Asks For Help

### "Add a new service"
1. Open `/app/services/page.tsx`
2. Add to `services` array
3. Include: id, icon, title, description, image, features, color
4. Add to navbar dropdowns if needed

### "Update contact info"
1. Open `/app/contact/page.tsx`
2. Update UK or UAE office details
3. Also check `/components/Footer.tsx`

### "Add animation to X"
1. Import Framer Motion: `import { motion } from "framer-motion"`
2. Wrap element in `<motion.div>`
3. Add animation props (see patterns above)

### "Make it responsive"
1. Use Tailwind breakpoints: sm:, md:, lg:, xl:
2. Mobile-first approach
3. Test grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### "Change colors"
1. Edit `tailwind.config.ts`
2. Update `primary` and `accent` color values
3. Rebuild: `npm run build`

## Important Warnings

⚠️ **Never remove:**
- 24/7 helpline numbers
- UK and UAE contact information
- Company mission statements
- Real service descriptions

⚠️ **Always maintain:**
- Dark theme (slate-900/800)
- Smooth animations
- Responsive design
- TypeScript types
- Accessibility

⚠️ **Before pushing:**
- Test locally
- Check for TypeScript errors
- Verify no console errors
- Test responsive design
- Check all links work

## Success Metrics
- ✅ Fast page loads
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ No TypeScript errors
- ✅ Builds successfully
- ✅ Deploys without issues
- ✅ Professional appearance
- ✅ Clear navigation
- ✅ Accessible content

---

**Remember:** This is a professional cybersecurity company website. Maintain a serious, trustworthy tone while showcasing cutting-edge technology and services.
