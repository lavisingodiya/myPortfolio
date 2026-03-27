# Lavi Singodiya - Senior Cloud Engineer Portfolio

A production-grade, highly responsive, and architecturally inspired portfolio built to showcase enterprise cloud engineering experience.

Designed utilizing the **Luminous Architect** design system—a brutalist, asymmetrical, dark-monolithic aesthetic utilizing neon cyan accents and floating technical modules.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** [@vercel/analytics](https://vercel.com/docs/analytics)
- **Deployment:** [Vercel](https://vercel.com)

---

## 🎨 Design System: Luminous Architect

This portfolio intentionally avoids generic SaaS templates in favor of a "Technical Editorial" look:
- **Base Layer:** Deep Navy (`#0e131e`)
- **Primary Accent:** Neon Cyan (`#00E5FF`)
- **Typography:** **Space Grotesk** (Structural/Headers) & **Manrope** (Functional/Prose)
- **The "No-Line" Rule:** Separations are achieved via tonal shifts and glassmorphism (layered `backdrop-blur`) instead of standard borders.
- **Elevation:** Relies on Luminescence (Neon glow shadows) rather than dark drop shadows.

---

## ⚡ Features

- **Asymmetrical Layouts:** Off-axis grids and floating containers for a high-end, 3D architectural depth.
- **Smooth Scroll & Reveal:** Powered by `framer-motion` to fade in and slide elements naturally as they enter the viewport.
- **Data-Driven Architecture:** All portfolio content (Experience, Projects, Skills) is decoupled from the UI and natively mapped through `src/lib/data.ts`.
- **Live Vercel Analytics:** Built-in visitor tracking through Vercel's Edge network.
- **Resume Download:** Integrated fast-download for the most recent professional resume. 

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/lavisingodiya/myPortfolio.git
   cd myPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
myPortfolio/
├── public/                 # Static assets (Resume PDF, Images)
├── src/
│   ├── app/                # Next.js App Router (layout, globals.css, main page)
│   ├── components/         # React Components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/             # Reusable shadcn-ui components
│   └── lib/                # Utilities and centralized Data (data.ts)
├── tailwind.config.ts      # Tailwind configuration (if applicable fallback)
└── package.json            # Project dependencies and metadata
```

---

## 📬 Contact

**Lavi Singodiya**  
Senior Cloud Engineer  
[lavisaini322@gmail.com](mailto:lavisaini322@gmail.com) | [GitHub](https://github.com/lavisingodiya) | [LinkedIn](https://linkedin.com/in/lavisingodiya)
