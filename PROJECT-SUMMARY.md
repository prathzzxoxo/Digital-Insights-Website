# Digital Insights UAE Website - Quick Reference

## 🚀 Quick Start

```bash
cd "C:\Users\Prats\Documents\Digital Insights Website"
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Overview

**Type:** Cybersecurity Company Website
**Tech:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
**Deployment:** Vercel (auto-deploy from GitHub)
**Repository:** https://github.com/prathzzxoxo/Digital-Insights-Website

## 🎯 Company Info

**Digital Insights Consultancy**
Cybersecurity & Digital Forensics | UK & UAE

### Emergency Helplines (24/7)
- 🇬🇧 UK: **+44 777 110 2970**
- 🇦🇪 UAE: **+971 4 2415888**

### Office Locations
**UK:** Acorn House, Milton Keynes MK9 3HP
**UAE:** Ibn Battuta Gate Offices, Dubai

## 📄 Pages Structure

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Hero, stats, service preview, video modal |
| Services | `/services` | All 8 cybersecurity services detailed |
| AI Solutions | `/ai-solutions` | 6 AI-powered security services |
| About | `/about` | Company mission, values, team |
| Blog | `/blog` | Cybersecurity insights & news |
| Contact | `/contact` | Contact form, office details |

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Git
git status               # Check changes
git add .                # Stage all files
git commit -m "message"  # Commit changes
git push origin main     # Push & deploy to Vercel
```

## 🎨 Design System

### Colors
- **Primary:** Blue (#0ea5e9)
- **Accent:** Purple (#d946ef)
- **Background:** Slate-900 (#0f172a)
- **Cards:** Slate-800 (#1e293b)
- **Text:** White / Gray-300

### Key Components
- `<Navbar />` - Sticky navigation
- `<Footer />` - Footer with links
- `<VideoModal />` - Video popup
- `<PageTransition />` - Page transitions

## 📝 Quick Edits

### Add New Service
File: `/app/services/page.tsx`
```typescript
{
  id: "service-id",
  icon: ShieldIcon,
  title: "Service Name",
  description: "Brief description",
  image: "https://images.unsplash.com/...",
  features: ["Feature 1", "Feature 2"],
  color: "from-blue-500 to-cyan-500"
}
```

### Add Blog Post
File: `/app/blog/page.tsx`
```typescript
{
  id: "post-slug",
  title: "Post Title",
  excerpt: "Summary...",
  date: "2025-01-15",
  category: "Category",
  image: "https://..."
}
```

### Update Contact Info
File: `/app/contact/page.tsx`
Edit the UK/UAE office sections

## 🎬 Features

- ✅ Dark theme throughout
- ✅ Background images on all sections
- ✅ Video modal popup (Watch Demo button)
- ✅ Smooth scroll animations
- ✅ Hover effects on cards
- ✅ Mobile responsive
- ✅ Fast page loads
- ✅ SEO optimized

## 🔧 Troubleshooting

### Build Fails
1. Check `postcss.config.mjs` uses `@tailwindcss/postcss`
2. Verify all imports use `@/` alias
3. Check for spaces in filenames
4. Run `npm install` again

### Animations Not Working
1. Check `"use client"` directive at top of file
2. Import Framer Motion: `import { motion } from "framer-motion"`
3. Wrap elements in `<motion.div>`

### Images Not Loading
1. Verify Unsplash URL is correct
2. Check image is in `public/` folder if local
3. Add domain to `next.config.js` if external

## 📚 Documentation

- **Full Context:** `.claude/project-context.md`
- **Instructions:** `.claude/instructions.md`
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

## 🚢 Deployment

Every push to `main` branch automatically deploys to Vercel.

**Deployment URL:** Check Vercel dashboard
**Status:** Monitor at https://vercel.com/dashboard

---

## ⚡ Quick Tips

1. **Always test locally** before pushing
2. **Maintain dark theme** (slate-900 background)
3. **Add animations** to new components
4. **Keep mobile responsive** (use Tailwind breakpoints)
5. **Follow existing patterns** when adding new features

## 📞 Need Help?

- Check `.claude/project-context.md` for detailed info
- Check `.claude/instructions.md` for guidelines
- GitHub Issues: https://github.com/prathzzxoxo/Digital-Insights-Website/issues

---

**Last Updated:** January 2025
**Version:** 1.0.0
**Status:** ✅ Production Ready
