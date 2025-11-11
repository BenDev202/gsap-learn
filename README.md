# GSAP Learn

Learn the GreenSock Animation Platform (GSAP) from first principles to advanced production techniques with runnable React examples. Built with Vite for fast dev and easy deployment.

## What you'll learn

- GSAP tweens: `to`, `from`, `fromTo`, easing, staggering
- Timelines for sequencing and orchestration
- ScrollTrigger for scroll-driven animations, pinning, and scrubbing
- Flip for stateful layout transitions
- MotionPath for path-based animation
- React-specific patterns: refs, lifecycles, `gsap.context` cleanup

## Quick start

Prereqs: Node 18+

```bash
git clone https://github.com/your-username/gsap-learn.git
cd gsap-learn
npm install
npm run dev
```

Open `http://localhost:5173` and explore the navigation.

## Structure

- `src/App.jsx` – routes and layout
- `src/components/Nav.jsx` – navigation
- `src/pages/*` – each GSAP topic with a runnable demo
- `src/styles.css` – minimal styling

## Pages overview

- Intro – What is GSAP? First tween demo
- Basics – `to`, `from`, `fromTo`, stagger, easing
- Timelines – sequencing, control methods (play/pause/reverse, timeScale)
- ScrollTrigger – section reveals, pinning, scrubbed animation
- Flip – animate DOM layout changes smoothly
- MotionPath – animating along SVG paths

## React + GSAP best practices

- Use `useRef` to reference DOM elements; avoid querying the whole document when possible
- Wrap animations in `gsap.context(() => {...}, scope)` and call `ctx.revert()` in cleanup to prevent leaks
- Prefer composing timelines for complex sequences
- Keep state changes minimal in highly animated components

## Production tips

- Use `will-change` and GPU-friendly transforms (translate/scale/rotate) over layout-affecting properties
- Avoid animating large shadows/filters unless necessary; consider layering
- For ScrollTrigger-heavy pages, throttle expensive work and prefer simple DOM structures

## Deploy

### Vercel

1. Push to GitHub
2. Import the repo in Vercel, framework: Vite
3. Ensure these settings (already provided in `vercel.json`):
   - Build command: `npm run build`
   - Output: `dist`
   - SPA fallback route to `/index.html`

### Netlify

1. Push to GitHub
2. New site from Git, select repo
3. Build: `npm run build` Publish: `dist`
4. SPA fallback is configured in `netlify.toml`

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview built app locally

## License

MIT © Your Name
