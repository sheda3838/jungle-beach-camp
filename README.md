# Jungle Beach Camp

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://jungle-beach-camp-kohl.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/sheda3838/jungle-beach-camp)

A premium, cinematic single-page landing page designed for a luxury beach camping experience. Built with a focus on immersive storytelling, high-performance animations, and modern UI/UX principles.

## Features

- **Cinematic Hero Section:** Full-screen immersive introduction with parallax and smooth scroll overlays.
- **Smooth Storytelling Transitions:** Native CSS stacking combined with custom momentum scroll (Lenis) for a buttery-smooth narrative flow.
- **Interactive Activities Showcase:** Dynamic, hardware-accelerated image backgrounds that crossfade on interaction.
- **Pre-rendered Meals Experience:** Zero-latency image swapping with hidden RAM preloaders.
- **Accommodation Overview:** Responsive CSS Grid and Flexbox layouts detailing luxury stays.
- **Testimonials Section:** Authentic review presentation with responsive layout behaviors.
- **Mock Contact Form:** Fully styled form with micro-interactions and validation styling.
- **WhatsApp Integration:** Persistent Floating CTA for high-conversion quick bookings.
- **Fully Responsive Design:** Tailored layouts spanning from ultra-wide desktops down to mobile screens.
- **Reusable Architecture:** Component-driven structure prioritizing performance and maintainability.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## Installation

1. Clone the repository to your local machine.
2. Navigate into the project directory and install the dependencies:

```bash
npm install
```

## Running Locally

To start the local development server:

```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the project.

## Build for Production

To create an optimized production build:

```bash
npm run build
```
This command bundles React in production mode and optimizes the build for the best performance. The build artifacts will be stored in the `dist/` directory.


## Folder Structure

```text
src/
├── assets/          # Static assets, global CSS
├── components/      # Main page sections (Hero, About, Activities, etc.)
│   └── common/      # Reusable UI components (Buttons, Cards, Transitions)
├── App.jsx          # Root component and cinematic flow coordinator
└── main.jsx         # React application entry point

public/              # Public facing static images and assets
```

## Credits
Designed and engineered as a modern, high-performance web experience demonstrating advanced scroll dynamics and cinematic UI design.

