## Srija Vuppala — Portfolio (React + Vite + TypeScript)

A modern, fast, single-page portfolio built with React, Vite, TailwindCSS, Radix UI, and Framer Motion.

### Features
- Tabbed single-page layout: Home, About, Projects, Contact (and optional Academic)
- Animated transitions and polished UI components
- Chatbot assistant (toggleable floating button)
- Netlify-ready build output (optional)

### Getting Started
1. Install dependencies:
```
npm install
```
2. Start dev server:
```
npm run dev
```
The app runs on http://localhost:8080 (or next available port).

### Build
```
npm run build
npm run preview
```

### Environment Variables
Create an `.env` locally if needed (not committed):
```
VITE_API_BASE="/api"
```

### Project Structure
```
src/
  components/
    Chatbot.tsx
    Hero.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    ui/...
  hooks/...
  pages/...
public/
  assets/
    profile-photo.png (add your photo)
```

### Deployment
This project can be hosted on Netlify or any static host. Netlify config is ignored by default. Provide your own if deploying there.

### License
MIT
