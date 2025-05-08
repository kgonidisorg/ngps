# NGPS Dashboard (DEMO)

> **⚠️ Demo Only**  
> This is a showcase/demo. For production usage & enterprise details, contact me.

---

## 📖 Table of Contents

- [NGPS Dashboard (DEMO)](#ngps-dashboard-demo)
  - [📖 Table of Contents](#-table-of-contents)
  - [🔥 Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
  - [📋 Prerequisites](#-prerequisites)
  - [🚀 Getting Started](#-getting-started)
    - [1. Clone the Repo](#1-clone-the-repo)
- [or](#or)
- [or](#or-1)
- [or](#or-2)

---

## 🔥 Features

- **Interactive Charts** (line, pie, histograms, heatmaps) powered by Recharts  
- **Metrics Cards** for LiDAR, Radar, IMU, and more  
- **Semi-transparent overlay** with backdrop-blur for seamless map integration  
- **SCSS modular architecture** for variables, mixins, and partials  
- **Responsive layout** with Tailwind CSS + CSS Modules  

---

## 🛠 Tech Stack

- Next.js  
- Sass/SCSS (`dart-sass`)  
- Recharts  
- Tailwind CSS  
- React Hooks & CSS Modules  

---

## 📋 Prerequisites

- Node.js ≥ 16.x  
- npm ≥ 8.x (or Yarn ≥ 1.22)  

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-org/ngps-dashboard.git
cd ngps-dashboard
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. SCSS Setup
Install Sass

bash
Copy
Edit
npm install --save-dev sass
# or
yarn add --dev sass
Import global SCSS in pages/_app.tsx:

ts
Copy
Edit
// pages/_app.tsx
import "../assets/scss/globals.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
Organize NGPS styles under src/assets/scss/ngps/ with leading underscores on partials:

scss
Copy
Edit
// src/assets/scss/ngps.scss
@import "./ngps/variables";
@import "./ngps/mixins";
@import "./ngps/buttons";
/* …etc. */
(Optional) includePaths in next.config.js for load-path imports:

js
Copy
Edit
// next.config.js
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "assets", "scss")],
  },
};
4. Run the Dev Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 to see the NGPS analytics overlay.

📁 Project Structure
lua
Copy
Edit
src/
├─ assets/
│  └─ scss/
│     ├─ globals.scss
│     ├─ ngps.scss
│     └─ ngps/
│        ├─ _variables.scss
│        ├─ _mixins.scss
│        └─ buttons.scss
├─ components/
│  ├─ Analytics.tsx
│  └─ … other charts & cards …
└─ pages/
   ├─ _app.tsx
   └─ index.tsx
next.config.js
