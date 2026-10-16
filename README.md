<div align="center">

MONARCH ☕

A Modern Café Website Experience

Coffee for the moments that matter.

A coffee-inspired website concept built with React, Vite, and CSS — combining rich visual storytelling, menu discovery, and a warm, contemporary café identity.

<br />

Overview · Features · Tech Stack · Getting Started · Project Structure

</div>

☕ Overview

MONARCH is a modern café website concept designed to present a premium, welcoming coffee experience online. The design brings together espresso-inspired colours, editorial-style typography, café photography, atmospheric video, and subtle interactive details.

The website is organised into dedicated pages so visitors can explore the café concept, browse its menu, learn about its story, find visit information, and open the contact page.

Project type: Front-end web development project
Status: In development
Location featured in the concept: Colombo, Sri Lanka

✨ Features

Five-page experience — Home, Menu, Our Story, Visit Us, and Contact.

Cinematic home hero — uses a café video with a poster image as a visual fallback.

Menu organised by category — espresso classics, signature hot coffees, iced coffee creations, tea and botanical infusions, refreshing drinks, sweet treats, and savoury bakes.

Dedicated story and visit pages — present the café philosophy and visit-related content.

Contact form interface — includes fields for a visitor's name, email, subject, and message.

Responsive navigation — includes a collapsible mobile menu and closes the menu when Escape is pressed.

Scroll-aware navigation — the header changes appearance after scrolling.

Reusable React components — shared navigation, footer, hero, coffee cards, menu media, and story sections.

Visual interactions — reveal effects, hover treatments, and tilt-card styling.

Coffee-inspired art direction — deep brown tones, warm neutrals, atmospheric photography, and video.

Page navigation — client-side routing with React Router and scroll-to-top behaviour between routes.

🖥️ Website Pages

Page

Route

Purpose

Home

/

Introduces MONARCH and its café atmosphere.

Menu

/menu

Displays menu categories, items, prices, imagery, and video content.

Our Story

/story

Shares the café concept and its philosophy.

Visit Us

/visit

Presents visit-related information and café imagery.

Contact

/contact

Displays contact information and a message form.

🛠️ Technology Stack

Technology

How it is used

React

Builds the interface using reusable components.

Vite

Provides the local development server and production build tooling.

JavaScript (ES Modules)

Implements application logic and interactions.

JSX

Describes React page and component layouts.

CSS

Handles styling, layouts, responsive behaviour, transitions, and visual effects.

React Router

Handles client-side navigation between pages.

ESLint

Helps identify code-quality issues.

HTML5 Video

Displays atmospheric video assets on the website.

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

Install Node.js (a current LTS release is recommended). npm is included with Node.js.

Check that both are installed:

node --version
npm --version

1. Clone the repository

git clone https://github.com/SachiEtampawala/Cafe_Monarch-Modern_website.git

2. Move into the project directory

cd Cafe_Monarch-Modern_website

3. Install dependencies

npm install

4. Start the development server

npm run dev

Vite will print a local address in the terminal. Open that address in your browser to view the website.

5. Build for production

npm run build

The production files are generated in the dist/ directory.

6. Preview the production build

npm run preview

Optional: Run the linter

npm run lint

📁 Project Structure

Cafe_Monarch-Modern_website/
├── public/
│   ├── images/                  # Café, coffee, menu, and page images
│   ├── videos/                  # Hero and menu-category videos
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                  # Source assets
│   ├── components/
│   │   ├── CoffeeCards.jsx      # Featured coffee cards
│   │   ├── CoffeeExperience.jsx # Coffee experience section
│   │   ├── Footer.jsx           # Shared footer
│   │   ├── Hero.jsx             # Homepage hero section
│   │   ├── MenuMedia.jsx        # Menu media presentation
│   │   ├── MenuPhotoStrip.jsx   # Menu photo strip
│   │   ├── Navbar.jsx           # Shared navigation
│   │   ├── Reveal.jsx            # Reveal-on-scroll effect
│   │   ├── RoastingStory.jsx    # Coffee roasting story section
│   │   ├── ScrollToTop.jsx      # Scroll reset on route change
│   │   └── TiltCard.jsx         # Interactive tilt card
│   ├── data/
│   │   └── menuData.js           # Menu categories and item data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Story.jsx
│   │   ├── Visit.jsx
│   │   └── Contact.jsx
│   ├── styles/                   # Additional styles
│   ├── App.jsx                   # Routes and application structure
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Most page and component styles are kept in CSS files alongside their related components or pages.

🎨 Design Direction

MONARCH follows a contemporary café aesthetic:

Colour palette: espresso brown, chocolate, latte, cream, and warm neutral tones.

Typography: expressive headings balanced with readable body text.

Imagery: close-up coffee photography and café atmosphere.

Motion: restrained transitions, reveal effects, and interactive card details.

Layout: spacious sections and clear page hierarchy.

Responsive approach: layouts and navigation intended to adapt to different screen sizes.

The visual goal is to create a refined, immersive café experience without distracting from the menu and essential information.

🎞️ Media Assets

Static images and videos are stored in the public/ directory:

public/images/ — café photography, menu imagery, and page visuals.

public/videos/ — homepage hero video and videos used for menu categories.

Files in public/ are referenced from the site using root-relative paths, for example:

<img src="/images/coffee-experience.jpg" alt="Coffee being prepared" />

When replacing or adding assets, ensure that the filenames and paths match the references in the source code. Compress large media files where possible to improve loading performance.

🧪 Available Scripts

Command

Description

npm run dev

Starts the local development server.

npm run build

Creates an optimised production build in dist/.

npm run preview

Serves the production build locally for review.

npm run lint

Runs ESLint checks.

⚠️ Project Notes

This repository contains a front-end website concept. It does not currently include a server-side application or database.

The contact form currently displays a browser confirmation message; it does not send or store messages.

Contact details and business information shown in the concept should be verified and updated before the site is used by a real café.

The website should be tested on desktop and mobile browsers before deployment.

Some visual details and accessibility improvements may require further testing as development continues.

🔭 Potential Improvements

Connect the contact form to a secure backend or form service.

Add verified location, opening hours, and business contact details.

Improve image and video loading with suitable compression and lazy loading.

Review keyboard navigation, colour contrast, image alternative text, and reduced-motion support.

Test page layouts across common mobile, tablet, and desktop sizes.

Configure and document a deployment workflow.

👩‍💻 Author

Sachi Etampawala
Software Engineering Undergraduate

GitHub: @SachiEtampawala

Project repository: Cafe_Monarch-Modern_website

<div align="center">


MONARCH · Coffee for the moments that matter.

Designed and developed with React, Vite, and CSS.

</div>