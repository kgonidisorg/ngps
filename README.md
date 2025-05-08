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
- [Project Structure](#project-structure)

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
git clone https://github.com/your-org/ngps
cd ngps
npm run dev
```
or

```bash
yarn dev
Visit http://localhost:3000 to see the NGPS analytics overlay.
```

# Project Structure

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
