# Raza Abidi Portfolio

A premium personal portfolio website for Raza Abidi, built with React, TypeScript, Vite, Tailwind CSS, and React Router. The site presents an editorial-style portfolio with project work, experience, skills, and contact details.

## Live Preview

This project is intended to be published on GitHub Pages or any static hosting provider.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- next-themes

## Features

- Minimal editorial portfolio design
- Light and dark theme support
- Responsive layout for desktop and mobile
- Dedicated project archive route
- Project cards with live preview support and graceful fallback states
- Social links and contact section

## Project Structure

```bash
src/
  components/
  data/
  App.tsx
  main.tsx
  index.css
public/
  blacklogo.png
  blacklogo.ico
  whitelogo.png
  whitelogo.ico
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Type-check and build production bundle
npm run preview  # Preview the production build locally
npm run lint     # Run lint checks
```

## Production Build

```bash
npm run build
```

This creates the production-ready static files in the `dist/` folder.

## Publishing to GitHub

This project is a static Vite app, so it is suitable for GitHub Pages.

### Option 1: GitHub Pages via repository settings

1. Push the project to GitHub.
2. In GitHub, open the repository.
3. Go to Settings > Pages.
4. Select the branch and folder used to publish.
5. For a Vite static site, deploy the generated `dist/` output from GitHub Actions or upload the built files from the branch used for hosting.

### Option 2: GitHub Actions deployment

You can also configure a GitHub Actions workflow to build and deploy the site automatically.

Example flow:

```bash
npm install
npm run build
```

Then publish the contents of `dist/` to GitHub Pages.

## Portfolio Content

The portfolio contains:

- personal branding and identity
- selected project work
- experience timeline
- skill groups
- contact information and social links

## Notes

This portfolio was created to reflect Raza Abidi's engineering profile and product-focused work, with a dark/light theme and a polished editorial visual style.

## License

This project is for personal portfolio use. Please check with the owner before reusing it commercially.
