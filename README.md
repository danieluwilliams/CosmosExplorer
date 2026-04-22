LINK TO THE SITE => https://danieluwilliams.github.io/CosmosExplorer/


# Cosmos Explorer

An interactive, visually immersive web experience that allows users to explore planets, nebulae, galaxies, and other astronomical objects — complete with dynamic rendering, real NASA imagery, and live search capabilities.


## Features

* **Animated Starfield Background**
  Smooth, parallax starfield rendered with HTML5 Canvas.

* **Custom Planet Rendering Engine**
  Procedurally drawn planets (Earth, Mars, Jupiter, Saturn, etc.) using Canvas — no images required.

* **Live Space Object Search**

  * Search real exoplanets and space objects
  * Data fetched from NASA + Exoplanet Archive APIs
  * Dynamically adds new objects to the page

* **AI-Generated Descriptions**

  * Each searched object gets a real-time generated scientific description
  * Streamed directly into the UI

* **NASA Image Integration**

  * Automatically fetches high-quality images from NASA’s image API

* **Smooth UI/UX**

  * Scroll-based reveal animations
  * Custom cursor with physics-based motion
  * Responsive design (works on mobile)

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Graphics:** HTML5 Canvas API
* **APIs:**

  * NASA Image API
  * NASA Exoplanet Archive
  * Anthropic API (for AI-generated descriptions)

---

## How It Works

* Predefined space objects are rendered on load
* Each object is drawn dynamically using Canvas (no static images)
* NASA API is queried to fetch real images
* Search feature:

  * Queries NASA + Exoplanet Archive
  * Merges results
  * Allows users to inject new objects into the experience
* AI descriptions are streamed into the UI for realism

---

## Key Highlights

* Built a **custom rendering system** for planets instead of using images
* Integrated **multiple external APIs simultaneously**
* Implemented **real-time streaming text generation**
* Designed a **high-performance animated UI** with smooth interactions

---

## Why This Project Matters

This project demonstrates:

* Strong JavaScript fundamentals
* API integration skills
* Frontend performance optimization
* Creative UI/UX design
* Ability to use AI to make projects more efficiently via prompt engineering

---

## Future Improvements

* Add user accounts to save favorite objects
* Improve mobile performance further
* Add 3D rendering (WebGL / Three.js)
* Expand dataset with more astronomical objects

---


Daniel Williams
GitHub: https://github.com/danieluwilliams
