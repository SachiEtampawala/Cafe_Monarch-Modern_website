<<<<<<< HEAD
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
=======
MONARCH — Modern Cafe Website ☕
<p align="center"> <strong>Coffee for the moments that matter.</strong> </p>

MONARCH is a modern café website concept designed around the atmosphere of a premium coffee experience. It combines rich coffee-inspired colours, elegant typography, café photography, cinematic video, and subtle interactions to create a warm, immersive online presence.

✨ Features
Multi-page website with Home, Menu, Our Story, Visit Us, and Contact pages
Cinematic homepage hero featuring café video and a poster image
Coffee and menu showcases for signature drinks, refreshing beverages, tea, and café bites
Atmospheric photography and video throughout the website
Coffee-inspired visual identity using espresso brown, warm neutrals, and soft highlights
Responsive layouts designed for desktop, tablet, and mobile screens
Reusable React components for shared interface elements
Client-side navigation between pages using React Router
Scroll-to-top behaviour when navigating between pages
Motion and interaction details, including reveal animations and interactive card effects
Dedicated contact and visit sections for a complete café website experience

🛠️ Built With
Technology	Purpose
React	Building reusable UI components
Vite	Development server and production build
JavaScript (ES Modules)	Website logic and interactions
JSX	Defining React page and component layouts
CSS	Styling, responsive layouts, transitions, and animations
React Router	Navigation between website pages
ESLint	Code quality and linting

📄 Website Pages
Home — introduces the MONARCH café experience and featured coffee
Menu — presents drinks and food categories with supporting media
Our Story — shares the café philosophy and coffee-making journey
Visit Us — provides the café visit section
Contact — provides the contact and enquiry section
>>>>>>> 217d64e67cee0ee265f0fdf3a786c69a8e6b7627

📁 Project Structure
Cafe_Monarch-Modern_website/
├── public/
<<<<<<< HEAD
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
=======
│   ├── images/              # Café, coffee, and menu images
│   ├── videos/              # Hero and menu-category videos
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Source assets
│   ├── components/          # Shared React components
│   ├── data/                # Menu data
│   ├── pages/               # Home, Menu, Story, Visit, and Contact
│   ├── styles/              # Shared or additional styles
│   ├── App.jsx              # Routes and page setup
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
>>>>>>> 217d64e67cee0ee265f0fdf3a786c69a8e6b7627
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

<<<<<<< HEAD
Most page and component styles are kept in CSS files alongside their related components or pages.

=======
>>>>>>> 217d64e67cee0ee265f0fdf3a786c69a8e6b7627
🎨 Design Direction
MONARCH uses a contemporary café aesthetic with a focus on:
Deep espresso and chocolate tones
Warm beige and creamy neutral surfaces
Elegant typography and generous spacing
Rich coffee imagery and atmospheric video
Subtle glass-inspired surfaces and interactive details
A balance between visual character, readability, and usability
The goal is to make the website feel polished and inviting while keeping the café experience at the centre.

<<<<<<< HEAD
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
=======
🖼️ Media Assets
Website images are stored in public/images/, and video files are stored in public/videos/.
When adding or replacing an asset, keep its filename consistent with the path used in the relevant component. Optimise large images and videos to help the website load smoothly. Decorative videos should be muted where appropriate and should not prevent visitors from using the site.

📱 Responsive Design and Accessibility
When updating the website, check layouts at desktop, tablet, and mobile sizes. Keep text readable, provide meaningful alternative text for informative images, maintain sufficient colour contrast, and ensure that navigation and interactive controls are usable with a keyboard. Respect reduced-motion preferences where practical.

🔮 Possible Future Improvements
Further refine page transitions and scroll-based animations
Continue improving mobile navigation and responsive details
Optimise video and image loading performance
Complete accessibility and cross-browser testing
Add verified café location, opening hours, and contact information if the concept becomes a real business website

<p align="center"> Made with ☕ and code. </p>
>>>>>>> 217d64e67cee0ee265f0fdf3a786c69a8e6b7627
