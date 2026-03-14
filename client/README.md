# 🚀 Developer Portfolio

A clean, fast, and fully responsive **first-year CS student portfolio** built with React, GSAP, Tailwind CSS, and Lucide React icons. It highlights real projects I built while learning HTML, CSS, JavaScript, React, and Node.js basics.

---

## 🆓 Free to Use

> **This code is completely free and open source. Use it however you want.**

- Fork it and use it as your own portfolio
- Customize the design, colors, and content
- Add new sections or remove existing ones
- Deploy it anywhere — Vercel, Netlify, GitHub Pages, etc.

This version now contains real personal project data and ongoing learning progress.

If this saved you time or you liked the design, **please give it a star on GitHub** — it genuinely helps and takes just one click. 🙏

---

## 📸 Page Flow

```
Loader animation → Hero → About → Projects → Coding Stats → Achievements → Contact
```

---

## ✅ Real Data Notice

This portfolio now uses real personal data, actual GitHub repositories, and a real learning timeline.

Current focus:

- First-year Computer Science student journey
- JavaScript as strongest language
- Currently learning Node.js and backend fundamentals
- Working on college projects side by side with personal projects

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v3** | Styling |
| **GSAP** | Animations (loader, hero, scroll triggers) |
| **React Router v7** | Client-side routing |
| **Lucide React** | Icons throughout the UI |

No Radix UI. No shadcn. No Tanstack Query. No TypeScript. Pure JSX.

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Root app with BrowserRouter
├── AppRoutes.jsx              # All route definitions
├── main.jsx                   # React DOM entry point
├── index.css                  # Tailwind + CSS variables + custom classes
│
├── components/
│   ├── Loader.jsx             # Animated intro loader (GSAP canvas)
│   ├── Navbar.jsx             # Fixed navbar with scroll-spy & side dots
│   └── Navlink.jsx            # React Router NavLink wrapper
│
├── sections/
│   ├── Hero.jsx               # Full-screen hero with typing animation
│   ├── About.jsx              # About me + specializations
│   ├── Projects.jsx           # Filterable project cards grid
│   ├── CodingStats.jsx        # GitHub & LeetCode stats
│   ├── Achievements.jsx       # Achievement cards
│   └── Contact.jsx            # Contact form + social links
│
├── pages/
│   ├── Index.jsx              # Home page (assembles all sections)
│   ├── ProjectDetail.jsx      # Individual project case study page
│   └── NotFound.jsx           # 404 page
│
├── hooks/
│   └── useTypingAnimation.jsx # Custom hook for typewriter effect
│
└── data/
    ├── profile.js             # ← Edit this with your info
    └── projects.js            # ← Edit this with your projects
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio/client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

---

## ✏️ How to Customize

### Step 1 — Update your personal info

Edit `src/data/profile.js`:

```js
export const profile = {
  name: "YOUR NAME",
  title: "Your Title Here",
  description: "Your one-liner description.",
  taglines: ["Your tagline 1", "Your tagline 2"],
  about: "Your full about me paragraph.",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "you@yourdomain.com",
  },
};
```

### Step 2 — Add your projects

Edit `src/data/projects.js` — each project object supports:

```js
{
  id: 1,
  title: "Project Name",
  description: "Short description shown on the card.",
  tech: ["Node.js", "Redis", "Docker"],
  github: "https://github.com/you/project",
  demo: "https://your-demo.com",
  category: "Backend", // Backend | DevOps | Fullstack | Cloud | System Design
  featured: true,      // shows Featured badge
  challenge: "...",    // shown on detail page
  solution: "...",
  features: ["Feature 1", "Feature 2"],
  architecture: "...",
  role: "Lead Engineer",
  duration: "3 months",
  team: "2 engineers",
  impact: ["Metric 1", "Metric 2"],
}
```

### Step 3 — Add your profile avatar

Place your image at `src/assets/profile-avatar.png`, then in `src/sections/About.jsx` replace the placeholder div:

```jsx
import profileAvatar from "../assets/profile-avatar.png";

// Replace the placeholder <div> with:
<img src={profileAvatar} alt="Your Name" className="h-full w-full object-cover" />
```

### Step 4 — Update coding stats

In `src/sections/CodingStats.jsx`, update the hardcoded stats with your actual numbers.

### Step 5 — Add your resume

Place your resume PDF at `public/resume.pdf` — the Download Resume button in the Hero section links to it automatically.

### Step 6 — Update the page title

In `index.html`:

```html
<title>Your Name — Your Title</title>
```

---

## 🎨 Theming

All colors are defined as CSS variables in `src/index.css`. The gold accent color is the main brand color:

```css
:root {
  --gold: 45 100% 51%;          /* change this to your accent color */
  --gold-foreground: 0 0% 7%;
  --background: 0 0% 100%;
  --foreground: 0 0% 12%;
  /* ... */
}
```

Change `--gold` to any HSL value to instantly re-theme the entire portfolio.

---

## 🚀 Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.14.2",
    "lucide-react": "^0.577.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.27",
    "postcss": "^8.5.8",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "vite": "^7.3.1"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! If you find a bug, want to improve something, or have a cool feature idea:

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## ❤️ Show Some Love

If this project helped you build your portfolio, saved you time, or you just liked the design — **please star the repository on GitHub!**

Stars help other developers find this project and motivate continued improvements. It only takes a second and it genuinely matters. 🌟

---
