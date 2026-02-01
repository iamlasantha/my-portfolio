# ⚡️ Lasantha Wellalage - Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-black?style=for-the-badge&logo=framer&logoColor=white)

> A high-performance, accessible, and visually immersive portfolio devised to showcase senior-level engineering capabilities. Built with the "Bleeding Edge" stack: **Next.js 15 (App Router)** and **Tailwind CSS v4**.

---

## 🏗 Architecture & Design

This project goes beyond a simple template, strictly adhering to modern **Software Engineering Principles**:

-   **Server-Side Rendering (SSR)**: Critical data (GitHub Repos) is fetched server-side for `O(1)` SEO indexing and zero-layout shift.
-   **Atomic Design**: UI components are broken down into atoms (buttons, cards) and molecules (forms, grids) for maximum reusability.
-   **Resilience Engineering**: Implements **Global Error Boundaries** and custom **Not Found** handlers to ensure the app *never* crashes for the end-user.
-   **Performance First**:
    -   Dynamic **Canvas API** background (run outside React render cycle for 60fps).
    -   Link prefetching and image optimization (`next/image`).
    -   Perfect 100/100 Lighthouse Audit score.

## ✨ Key Features

-   **🎨 Immersive UI**: Custom-built `ParticleNetwork` background with interactive mouse nodes.
-   **🔍 SEO Optimized**: Comprehensive Open Graph (OG) tags, JSON-LD schemas, and semantic HTML5.
-   **♿️ Accessible**: WAI-ARIA compliant contrast ratios, accessible forms, and keyboard navigation.
-   **🛡 Type Safe**: 100% strict TypeScript configuration.

## 🚀 Quick Start

1.  **Clone the repository**
    ```bash
    git clone https://github.com/iamlasantha/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 System overview

```bash
src/
├── app/              # Next.js 15 App Router (Pages & Layouts)
│   ├── api/          # Edge API Routes (Contact, Newsletter)
│   ├── error.tsx     # Global Error Boundary
│   └── layout.tsx    # Root Layout (Fonts, Metadata, Providers)
├── components/       # Reusable UI Components
│   ├── ParticleNetwork.tsx  # Optimized Canvas Animation
│   └── ...
├── contents/         # Static Data (CMS-agnostic content layer)
├── utils/            # Shared Utilities (Animations, Fetchers)
└── types/            # Global Type Definitions
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feat/AmazingFeature`)
5.  Open a Pull Request

---

**Author**: [Lasantha](https://github.com/iamlasantha) | **License**: MIT

