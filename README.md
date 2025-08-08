# Luke Salem Portfolio

This is my personal portfolio website, built with **React**, **TypeScript**, **Vite**, **MUI**, and **Tailwind CSS**. It showcases my projects, skills, and contact information.

## Features

- Fast, modern React app with Vite
- Responsive design using Material UI and Tailwind CSS
- Home, About, Projects, and Contact pages
- Contact form powered by [EmailJS](https://www.emailjs.com/)
- Light/Dark mode toggle

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/lukebike/portfolio.git
cd portfolio
npm install
```

### Development

Start the local dev server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable React components
  - `data/` — Static data (project info, skills, etc.)
  - `layout/` — Layout components (navbar, footer)
  - `pages/` — Page components (Home, About, Projects, Contact)
  - `theme/` — Theme configuration
  - `assets/` — Images and SVGs
  - `types/` — TypeScript type definitions

## Environment Variables

To enable the contact form, set the following in your `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Made with ❤️ by Luke Salem**
