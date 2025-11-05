# Development Guide - Digital Insights Website

## Quick Start

### Access the Website
- **Local Development:** http://localhost:3000
- **Network Access:** http://10.255.254.55:3000

### Start Development Server
```bash
npm run dev
```

---

## Common Development Tasks

### 1. Adding a New Page

**Step 1:** Create the page directory and file
```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

**Step 2:** Create the page component
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main className="min-h-screen bg-[#0E0129] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">New Page</h1>
        <p className="text-gray-300 mt-4">Your content here</p>
      </div>
    </main>
  )
}
```

**Step 3:** Add to navigation in [components/Navbar.tsx](../components/Navbar.tsx)
```typescript
<Link href="/new-page" className="hover:text-[#C7462F]">
  New Page
</Link>
```

---

### 2. Creating a New Component

**Step 1:** Create component file
```bash
touch components/MyComponent.tsx
```

**Step 2:** Define the component
```typescript
// components/MyComponent.tsx
import { motion } from 'framer-motion'

interface MyComponentProps {
  title: string
  description?: string
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-[#25245E] rounded-lg"
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {description && <p className="text-gray-300 mt-2">{description}</p>}
    </motion.div>
  )
}
```

**Step 3:** Import and use it
```typescript
import MyComponent from '@/components/MyComponent'

<MyComponent title="Hello" description="World" />
```

---

### 3. Updating Styles

#### Using Tailwind Classes
```typescript
<div className="bg-[#0E0129] text-white p-6 rounded-lg hover:scale-105 transition-transform">
  Content
</div>
```

#### Custom CSS in globals.css
```css
/* app/globals.css */
@layer utilities {
  .custom-gradient {
    @apply bg-gradient-to-r from-[#C7462F] to-[#93C9D8];
  }
}
```

#### Extending Tailwind Config
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'brand-coral': '#C7462F',
        'brand-navy': '#0E0129',
      },
      animation: {
        'custom-bounce': 'bounce 2s infinite',
      }
    }
  }
}
```

---

### 4. Adding Animations with Framer Motion

#### Basic Animation
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

#### Scroll-triggered Animation
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Appears on scroll
</motion.div>
```

#### Hover Animation
```typescript
<motion.div
  whileHover={{ scale: 1.05, rotate: 2 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Hover me
</motion.div>
```

#### Stagger Children
```typescript
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

### 5. Working with Images

#### Using Next.js Image Component
```typescript
import Image from 'next/image'

<Image
  src="/images/mainlogo.png"
  alt="Digital Insights Logo"
  width={200}
  height={80}
  priority // For above-the-fold images
/>
```

#### Remote Images (Unsplash)
```typescript
<Image
  src="https://images.unsplash.com/photo-example"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

#### Background Images
```typescript
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/background.jpg)' }}
>
  Content
</div>
```

---

### 6. Adding a New Service

**Update:** [app/services/page.tsx](../app/services/page.tsx)

```typescript
const services = [
  // ... existing services
  {
    icon: Shield, // Import from lucide-react
    title: "New Service Name",
    description: "Service description here",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    image: "https://images.unsplash.com/photo-xxx"
  }
]
```

**Update Navigation:** [components/Navbar.tsx](../components/Navbar.tsx)
```typescript
// Add to Services dropdown
<Link href="/services#new-service">
  New Service
</Link>
```

---

### 7. Creating Blog Posts

#### Method 1: Static Blog Post
```typescript
// app/blog/my-post/page.tsx
export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        Blog Post Title
      </h1>
      <p className="text-gray-400 mb-8">Published on Jan 1, 2025</p>
      <div className="prose prose-invert">
        {/* Your content */}
      </div>
    </article>
  )
}
```

#### Method 2: Add to Blog Listing
```typescript
// app/blog/page.tsx
const blogPosts = [
  // ... existing posts
  {
    slug: "new-post",
    title: "New Blog Post",
    excerpt: "Short description",
    date: "2025-01-01",
    author: "Author Name",
    image: "https://images.unsplash.com/..."
  }
]
```

---

### 8. Updating Contact Information

**Update:** [app/contact/page.tsx](../app/contact/page.tsx)

```typescript
const offices = [
  {
    location: "United Kingdom",
    address: "Acorn House, 381 Midsummer Boulevard, Milton Keynes MK9 3HP",
    phone: "+44 777 110 2970",
    email: "contact@dic-uk.com"
  },
  {
    location: "UAE",
    address: "Office 211D & 211E, Ibn Battuta Gate Offices, Dubai, UAE",
    phone: "+971 4 2415888",
    email: "info@digitalinsights-uae.com"
  }
]
```

**Also update:** [components/Footer.tsx](../components/Footer.tsx)

---

### 9. Working with 3D Components

#### Using the Globe Component
```typescript
import Globe from '@/components/ui/globe'

<Globe
  className="w-full h-[600px]"
  // Props for customization
/>
```

#### Adding Three.js Effects
```typescript
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

<Canvas>
  <ambientLight intensity={0.5} />
  <OrbitControls />
  {/* Your 3D objects */}
</Canvas>
```

---

### 10. Managing State

#### Local Component State
```typescript
'use client' // Required for useState in App Router

import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

#### Form Handling
```typescript
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full p-3 bg-[#25245E] text-white rounded"
      />
      {/* More fields... */}
      <button type="submit" className="bg-[#C7462F] text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  )
}
```

---

## Styling Guidelines

### Color Usage
```typescript
// Primary Colors
bg-[#C7462F]     // Coral (primary brand color)
bg-[#0E0129]     // Navy dark (main background)
bg-[#25245E]     // Navy medium (cards, sections)
text-[#93C9D8]   // Accent blue (highlights)

// Text Colors
text-white       // Headings
text-gray-300    // Body text
text-gray-400    // Secondary text
```

### Spacing Standards
```typescript
// Section Padding
py-20            // Standard section (80px)
py-24            // Large section (96px)

// Container
container mx-auto px-4  // Standard container

// Card Padding
p-6              // Small cards (24px)
p-8              // Medium cards (32px)
p-10             // Large cards (40px)
```

### Typography Scale
```typescript
text-7xl         // Hero titles (72px)
text-5xl         // Page titles (48px)
text-4xl         // Section titles (36px)
text-2xl         // Card titles (24px)
text-xl          // Body large (20px)
text-base        // Body normal (16px)
text-sm          // Small text (14px)
```

---

## Best Practices

### 1. TypeScript
- Always define prop interfaces
- Use proper types, avoid `any`
- Export types when reusable

```typescript
interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}
```

### 2. Component Organization
```typescript
// 1. Imports
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

// 2. Types/Interfaces
interface Props {
  title: string
}

// 3. Component
export default function Component({ title }: Props) {
  // 4. State & hooks
  const [state, setState] = useState()

  // 5. Functions
  const handleClick = () => {}

  // 6. Render
  return <div>{title}</div>
}
```

### 3. Performance
- Use `'use client'` only when needed
- Lazy load heavy 3D components
- Optimize images with next/image
- Use proper loading states

```typescript
import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('@/components/ui/globe'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})
```

### 4. Accessibility
- Use semantic HTML
- Add proper aria labels
- Ensure keyboard navigation
- Check color contrast

```typescript
<button
  aria-label="Open menu"
  className="focus:ring-2 focus:ring-[#C7462F]"
>
  Menu
</button>
```

---

## Testing Locally

### Check Different Devices
```bash
# Access from mobile device on same network
http://10.255.254.55:3000
```

### Test Responsive Design
- Chrome DevTools (F12 ’ Device Toolbar)
- Resize browser window
- Test on actual devices

### Test Performance
- Lighthouse in Chrome DevTools
- Check bundle size: `npm run build`
- Monitor console for errors

---

## Deployment

### Deploy to Vercel
```bash
# 1. Commit changes
git add .
git commit -m "feat: add new feature"

# 2. Push to GitHub (triggers auto-deploy)
git push origin main

# 3. Check Vercel dashboard for deployment status
```

### Manual Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows - Kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear everything and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit

# If errors persist, restart TS server in VS Code
Ctrl+Shift+P ’ "TypeScript: Restart TS Server"
```

### Styling Not Updating
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev

# Hard refresh browser
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

## Useful VS Code Extensions

- **ES7+ React/Redux/React-Native snippets** - React snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript Vue Plugin (Volar)** - Better TypeScript support
- **Prettier** - Code formatting
- **ESLint** - Linting

---

## Code Snippets

### React Functional Component (RFC)
```typescript
export default function ComponentName() {
  return (
    <div>
      {/* Content */}
    </div>
  )
}
```

### Animated Section
```typescript
<motion.section
  className="py-20 bg-[#0E0129]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  {/* Section content */}
</motion.section>
```

### Card Component Pattern
```typescript
<div className="group p-6 bg-[#25245E] rounded-lg hover:scale-105 transition-transform cursor-pointer">
  <h3 className="text-2xl font-bold text-white mb-2">Title</h3>
  <p className="text-gray-300">Description</p>
</div>
```

---

## Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **Three.js:** https://threejs.org/docs

### Internal Docs
- [README.md](../README.md)
- [PROJECT-SUMMARY.md](../PROJECT-SUMMARY.md)
- [IMPLEMENTATION_GUIDE.md](../IMPLEMENTATION_GUIDE.md)

### Company Website
- **Live Site:** https://digitalinsights-uae.com
- **GitHub:** https://github.com/prathzzxoxo/Digital-Insights-Website
