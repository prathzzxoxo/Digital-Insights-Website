# Implementation Guide for Digital Insights Website Updates

## Quick Fixes Needed

### 1. Fix Logo Path in Navbar
File: `components/Navbar.tsx`
Line 72: Change `/images/logo.png` to `/images/mainlogo.png`
Line 23: Move `{ name: "About", href: "/about" },` to line 24 (after Home)

### 2. Update News Ticker with Hardcoded News
File: `components/NewsTicker.tsx`
Replace the `newsItems` state initialization and remove NewsAPI fetch with:

```typescript
const [newsItems] = useState<NewsItem[]>([
  {
    iconName: "AlertCircle",
    text: "10 npm Packages Caught Stealing Developer Credentials on Windows, macOS, and Linux",
    severity: "critical",
    url: "https://thehackernews.com/"
  },
  {
    iconName: "Shield",
    text: "Google Unveils Guide for Defenders to Monitor Privileged User Accounts",
    severity: "info",
    url: "https://cybersecuritynews.com/"
  },
  {
    iconName: "Bug",
    text: "Top 25 cyber threats in the world",
    severity: "high",
    url: "https://www.reuters.com/technology/cybersecurity/"
  },
  {
    iconName: "Globe",
    text: "Bleeping Computer | Cybersecurity & Technology News",
    severity: "medium",
    url: "https://www.bleepingcomputer.com/"
  },
]);
```

Remove the entire `useEffect` block that fetches from NewsAPI.

### 3. Add Loading Spinner CSS
File: `app/globals.css`
Add at the end:

```css
/* Loading Spinner */
.loader {
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c),var(--c),var(--c),var(--c),var(--c),var(--c),var(--c);
  background-size: calc(1ch + 1px) 100%;
  border-bottom: 10px solid #0000;
  position: relative;
  animation: l8-0 3s infinite linear;
  clip-path: inset(-20px 0);
}
.loader::before {
  content:"Loading";
}
.loader::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 14px;
  background: #C7462F;
  left: -10px;
  bottom: 100%;
  animation: l8-1 3s infinite linear;
}
@keyframes l8-0{
   0%, 12.5% {background-position: calc(0*100%/6) 0, calc(1*100%/6) 0, calc(2*100%/6) 0, calc(3*100%/6) 0, calc(4*100%/6) 0, calc(5*100%/6) 0, calc(6*100%/6) 0}
   25%   {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 0, calc(2*100%/6) 0, calc(3*100%/6) 0, calc(4*100%/6) 0, calc(5*100%/6) 0, calc(6*100%/6) 0}
   37.5% {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 0, calc(3*100%/6) 0, calc(4*100%/6) 0, calc(5*100%/6) 0, calc(6*100%/6) 0}
   50%   {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 40px, calc(3*100%/6) 0, calc(4*100%/6) 0, calc(5*100%/6) 0, calc(6*100%/6) 0}
   62.5% {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 40px, calc(3*100%/6) 40px, calc(4*100%/6) 0, calc(5*100%/6) 0, calc(6*100%/6) 0}
   75%   {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 40px, calc(3*100%/6) 40px, calc(4*100%/6) 40px, calc(5*100%/6) 0, calc(6*100%/6) 0}
   87.4% {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 40px, calc(3*100%/6) 40px, calc(4*100%/6) 40px, calc(5*100%/6) 40px, calc(6*100%/6) 0}
   100%  {background-position: calc(0*100%/6) 40px, calc(1*100%/6) 40px, calc(2*100%/6) 40px, calc(3*100%/6) 40px, calc(4*100%/6) 40px, calc(5*100%/6) 40px, calc(6*100%/6) 40px}
}
@keyframes l8-1{
  100% {left:115%}
}
```

### 4. Complete About Page Rewrite Needed
Create new file: `app/about/page.tsx` with the full content structure.

## Commands to Run

1. Stop the dev server (Ctrl+C)
2. Make the above changes
3. Run `npm run dev` again

All changes are documented above for manual implementation.
