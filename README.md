# Alex Mercer — Developer Portfolio

A premium, cinematic developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

## ✨ Features

- **Loading screen** with animated progress bar
- **Custom cursor** with smooth trailing ring effect
- **Animated navbar** with blur/glass effect on scroll
- **Hero section** with parallax blobs, typing effect, and stagger animations
- **About section** with bento-grid layout and stats
- **Experience timeline** with animated vertical connector
- **Projects section** with 3D tilt cards and image previews
- **Skills section** with categorized pills + infinite marquee
- **Approach section** with animated workflow cards
- **Contact section** with functional form UI and social links
- **Footer** with scroll-to-top

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion + GSAP |
| Icons | Lucide React |
| Fonts | Syne + DM Sans + JetBrains Mono |
| Deploy | Vercel |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, custom cursor, glass effects
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky glass navbar with mobile menu
│   │   └── Footer.tsx       # Minimal modern footer
│   ├── sections/
│   │   ├── HeroSection.tsx       # Fullscreen hero with typing effect
│   │   ├── AboutSection.tsx      # Bento grid about layout
│   │   ├── ExperienceSection.tsx # Animated vertical timeline
│   │   ├── ProjectsSection.tsx   # 3D tilt project cards
│   │   ├── SkillsSection.tsx     # Skills + infinite marquee
│   │   ├── ApproachSection.tsx   # 3-step workflow
│   │   └── ContactSection.tsx    # Contact form + social links
│   └── ui/
│       ├── CustomCursor.tsx  # Custom cursor with dot + ring
│       └── LoadingScreen.tsx # Animated loading screen
└── lib/
    ├── data.ts              # All portfolio content/data
    └── utils.ts             # cn() utility
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Customize content

Edit **`src/lib/data.ts`** to update:
- `personalInfo` — name, bio, location, social links
- `stats` — your personal numbers
- `experiences` — work/internship history
- `projects` — your projects with images and tags
- `skills` — your tech stack
- `workflowSteps` — your process

---

## 📦 Deploy to Vercel

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option B: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Click **Deploy** — Vercel auto-detects Next.js

### Option C: Vercel Dashboard

1. Zip the project folder
2. Drag & drop to [vercel.com/new](https://vercel.com/new)

---

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```ts
neon: {
  purple: "#a855f7",  // Change to your brand color
  blue: "#3b82f6",
  cyan: "#06b6d4",
  pink: "#ec4899",
},
```

### Fonts

Change imports in `src/app/globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YOUR_FONT...");
```

And update `tailwind.config.ts`:

```ts
fontFamily: {
  display: ["'Your Display Font'", "sans-serif"],
  body: ["'Your Body Font'", "sans-serif"],
},
```

### Adding a real profile photo

Replace the avatar placeholder in `AboutSection.tsx`:

```tsx
import Image from "next/image";

<Image src="/your-photo.jpg" alt="Alex Mercer" fill className="object-cover" />
```

Add your photo to `public/your-photo.jpg`.

---

## 📧 Making the contact form work

Currently the form simulates a send. To make it real, integrate an email API:

### Option: Resend (recommended)

```bash
npm install resend
```

Create `src/app/api/contact/route.ts`:

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'you@email.com',
    subject: `New message from ${name}`,
    text: message,
  });
  return Response.json({ success: true });
}
```

Add `RESEND_API_KEY=your_key` to `.env.local`.

---

## ⚡ Performance Tips

- Images are optimized via Next.js `<Image>` component
- Fonts are loaded via Google Fonts with `display=swap`
- Animations use GPU-accelerated transforms only
- `useInView` with `once: true` prevents re-animation

## 📄 License

MIT — free to use for personal portfolios.
