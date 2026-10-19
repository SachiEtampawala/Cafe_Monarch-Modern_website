<div align="center">

<img src="public/images/logo.png" alt="MONARCH logo" width="110" />

# MONARCH — Modern Café Website

**Coffee for the moments that matter.**

A contemporary café website concept built with React, Vite, and CSS, combining cinematic visuals, an editorial-inspired menu, and a warm, premium digital experience.

[Overview](#overview) · [Visual Highlights](#visual-highlights) · [Features](#key-features) · [Pages](#website-pages) · [Technology](#technology-stack) · [Roadmap](#planned-enhancements)

</div>

---

## Overview

MONARCH is a multi-page café website concept designed around a refined coffee-house identity. Its visual direction pairs espresso-inspired tones and warm neutrals with café photography, atmospheric video, spacious layouts, and subtle motion.

Visitors can discover the café concept, explore its menu, learn about its philosophy, find visit information, and contact the team.

- **Project type:** Front-end web development
- **Status:** In development
- **Concept location:** Colombo, Sri Lanka

## Visual Highlights

<p align="center">
  <img src="public/images/hero-poster.jpg" alt="MONARCH homepage café visual" width="100%" />
</p>
<p align="center"><em>Homepage visual direction — cinematic café atmosphere and coffee-inspired styling.</em></p>

<table>
  <tr>
    <td width="50%">
      <img src="public/images/signature-hot-coffees.jpg" alt="Signature coffee menu imagery" width="100%" />
      <p align="center"><strong>Menu & Coffee Selection</strong></p>
    </td>
    <td width="50%">
      <img src="public/images/visit-cafe.jpg" alt="Café visit page imagery" width="100%" />
      <p align="center"><strong>Visit Us</strong></p>
    </td>
  </tr>
</table>

## Key Features

- **Cinematic homepage:** atmospheric café video with a poster image fallback.
- **Category-based menu:** espresso classics, signature hot coffees, iced coffee creations, tea and botanical infusions, refreshing drinks, sweet treats, and savoury bakes.
- **Five dedicated pages:** Home, Menu, Our Story, Visit Us, and Contact.
- **Visual storytelling:** café photography, category-specific video content, and image-led sections.
- **Interactive details:** reveal-on-scroll effects, hover treatments, and tilt-card styling.
- **Responsive navigation:** collapsible mobile menu, scroll-aware header styling, and keyboard support for closing the menu with Escape.
- **Reusable React components:** shared navigation, footer, hero, coffee cards, menu media, and story sections.
- **Menu browsing:** category jump links, descriptions, imagery, and displayed prices.
- **Contact form interface:** required name, email, subject, and message fields with a submission confirmation.
- **Client-side navigation:** React Router routes and scroll-to-top behaviour between pages.
- **Café-focused visual identity:** deep coffee tones, warm neutrals, expressive headings, and contemporary layouts.

## Website Pages

| Page | Route | What visitors can explore |
|---|---|---|
| Home | `/` | Café introduction, featured coffee cards, roasting story, and coffee experience sections |
| Menu | `/menu` | Menu categories, descriptions, prices, images, and related video content |
| Our Story | `/story` | Café philosophy and the values behind the MONARCH concept |
| Visit Us | `/visit` | Location details, opening hours, café imagery, and a link to the contact page |
| Contact | `/contact` | Contact information and a message form |

## Technology Stack

- **React** — component-based user interface
- **Vite** — development server and production build tooling
- **JavaScript (ES Modules) and JSX** — application logic and page structure
- **CSS** — responsive layouts, styling, transitions, and visual effects
- **React Router** — client-side navigation between pages
- **HTML5 Video** — atmospheric homepage and menu-category video
- **ESLint** — code-quality and consistency checks

## Project Structure

```text
Cafe_Monarch-Modern_website/
├── public/
│   ├── images/                  # Logo, café photography, menu and page images
│   └── videos/                  # Homepage and menu-category videos
├── src/
│   ├── components/
│   │   ├── CoffeeCards.jsx
│   │   ├── CoffeeExperience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MenuMedia.jsx
│   │   ├── MenuPhotoStrip.jsx
│   │   ├── Navbar.jsx
│   │   ├── Reveal.jsx
│   │   ├── RoastingStory.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── TiltCard.jsx
│   ├── data/
│   │   └── menuData.js           # Menu category and item data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Story.jsx
│   │   ├── Visit.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                   # Application routes
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

Component and page-specific CSS files sit alongside their related JSX files.

## Planned Enhancements

- **Google Maps directions:** add a clear **Get Directions** link on the Visit Us page, opening Google Maps with the café location.
- **Contact form integration:** connect the current front-end form to a service or backend so messages can be delivered instead of only showing a confirmation.
- **Further refinement:** continue improving accessibility, responsive behaviour, and the overall visitor experience.

---

<div align="center">

**MONARCH** · A modern café website concept

</div>
