<div align="center">

# Srija Vuppala — Portfolio v2.0

</div>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://srijavuppala.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern, interactive portfolio website built with React and TypeScript — featuring a 3D neural network background, AI-powered chat assistant, dark/light theme toggle, and smooth Framer Motion animations.

---

<div align="center">
  <h3>🌐 Live at <strong><a href="https://srijavuppala.com">srijavuppala.com</a></strong></h3>
  <p><em>Full-Stack Engineer · AI · Cloud — built for performance and clarity</em></p>
</div>

---

## Architecture Overview

```mermaid
graph TB
    A[Portfolio App] --> B[Hero Section]
    A --> C[Experience / About]
    A --> D[Projects Gallery]
    A --> E[Contact Section]

    B --> F[3D Neural Network Bg]
    B --> G[Dynamic Role Typer]

    C --> H[3D Particles Bg]
    C --> I[Experience Timeline]
    C --> J[Education Cards]

    D --> K[Project Filter Tabs]
    D --> L[Project Cards]

    E --> M[Contact Form]
    E --> N[Direct Links]

    A --> O[Navigation]
    O --> P[Theme Toggle Dark/Light]
    O --> Q[Scroll Spy]

    A --> R[AI Chatbot]
    R --> S[Gemini API]
    R --> T[Context Management]

    F --> U[React Three Fiber]
    H --> U
```

## User Experience Flow

```mermaid
journey
    title Portfolio User Journey
    section Landing
      Visit Homepage: 5: User
      Watch Neural Network Animation: 5: User
      Read Hero Intro: 4: User
    section Explore
      Scroll to Experience: 4: User
      Browse Projects: 5: User
      Filter by Category: 4: User
    section Interact
      Toggle Dark/Light Theme: 5: User
      Open AI Chatbot: 4: User
      Ask About Projects: 5: User
    section Contact
      Fill Contact Form: 4: User
      Send Direct Email: 5: User
      Connect on LinkedIn: 3: User
```

## Key Features

### Core Functionality
- **Dark / Light Theme** — toggle with persistent localStorage preference
- **3D Neural Network Background** — interactive Three.js particle constellation in the Hero
- **AI Chat Assistant** — floating chatbot powered by Google Gemini API
- **Project Gallery** — filterable by category (AI/ML, Hackathon, Research, Hardware, Web Apps)
- **Contact Form** — direct email delivery via Web3Forms
- **Scroll Spy Navigation** — active tab updates as you scroll through sections

### Technical Features
- **React 18 + Vite 5** — fast HMR and optimised production builds
- **TypeScript** — fully typed components and hooks
- **Framer Motion** — smooth entrance animations and layout transitions
- **React Three Fiber v8** — lazily loaded 3D backgrounds (zero impact on TTI)
- **Radix UI + shadcn/ui** — accessible, unstyled component primitives
- **Netlify Functions** — serverless backend for chat API proxying
- **SEO + OG Tags** — structured JSON-LD, Open Graph, Twitter Card metadata

## Tech Stack

```mermaid
graph LR
    A[Frontend] --> B[React 18]
    B --> C[TypeScript]
    B --> D[TailwindCSS]
    B --> E[Framer Motion]

    F[3D Graphics] --> G[Three.js]
    G --> H[React Three Fiber v8]
    G --> I[React Three Drei v9]

    J[UI Components] --> K[Radix UI]
    J --> L[shadcn/ui]
    J --> M[Lucide Icons]

    N[AI / Chat] --> O[Google Gemini API]
    N --> P[Netlify Functions]

    Q[Build & Deploy] --> R[Vite 5]
    Q --> S[Netlify]
    Q --> T[GitHub]
```

### Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Animations & transitions |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers & utilities |
| `three` | 3D graphics engine |
| `@google/generative-ai` | Gemini AI for chatbot |
| `@tanstack/react-query` | Async state management |
| `react-hook-form` + `zod` | Form handling & validation |
| `tailwindcss` | Utility-first styling |

---

## Features Deep Dive

### AI Chat Assistant
- Floating chatbot powered by Google Gemini API
- Context-aware responses about projects, experience, and skills
- Smooth open/close animations with message history
- Serverless backend via Netlify Functions for API key security

### 3D Neural Network Background
- ECS-inspired architecture with pre-allocated Float32Array buffers
- O(n²) pairwise particle connection system (~2,300 pairs max)
- Mouse parallax and slow rotation via `useFrame`
- Adaptive particle count (32 mobile / 68 desktop)
- Lazily loaded — zero impact on initial page load

### Theme System
- **Light**: warm cream `#f5f0e8` background with dark teal accents
- **Dark**: near-black `#0a0a0a` background with white text
- CSS custom properties — all components respond instantly
- Preference persisted to `localStorage`

### Projects Gallery
- 15+ projects across AI/ML, Research, Hardware, Hackathon, and Web Apps
- Filter tabs with smooth layout transitions
- Featured badges, category labels, GitHub & Devpost links
- Winner badges for hackathon victories

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx                  # Landing with neural network bg
│   ├── Experience.tsx            # Timeline + education cards
│   ├── Projects.tsx              # Filterable project gallery
│   ├── Contact.tsx               # Contact form + links
│   ├── Navigation.tsx            # Scroll-spy nav + theme toggle
│   ├── Chatbot.tsx               # Floating AI assistant
│   ├── DynamicRoles.tsx          # Animated role typewriter
│   ├── three/
│   │   ├── NeuralNetworkBg.tsx   # Hero 3D constellation
│   │   └── ParticlesBg.tsx       # Section floating dots
│   └── ui/                       # shadcn/ui primitives
├── hooks/
│   ├── useTheme.tsx              # Dark/light theme hook
│   └── use-mobile.tsx
└── index.css                     # CSS custom properties (themes)
netlify/
└── functions/
    └── chat.js                   # Serverless Gemini proxy
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file at the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Deployment

The portfolio is deployed at **[srijavuppala.com](https://srijavuppala.com)** via Netlify with continuous deployment from GitHub.

### Netlify Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy via CLI

```bash
npx netlify deploy --prod
```

## Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ Recommended |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |

## Performance Highlights

- **Lazy-loaded 3D** — Three.js chunks load after initial paint
- **Code-split bundles** — `NeuralNetworkBg` and `ParticlesBg` are separate async chunks
- **Pre-allocated buffers** — zero GC pressure in the Three.js animation loop
- **Adaptive DPR** — canvas clamped to `[1, 1.5]` to limit GPU load on retina displays
- **Optimised fonts** — `Space Grotesk` + `Outfit` via Google Fonts with `display=swap`

---

**Built with React + Vite** | **Powered by Gemini AI** | **Deployed at [srijavuppala.com](https://srijavuppala.com)**
