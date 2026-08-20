# SurgiCare Next.js + Tailwind CSS + animate.css

## Included
- Next.js App Router
- Tailwind CSS v4
- animate.css
- Lucide React
- React Icons
- Responsive design
- SEO metadata, sitemap, robots and JSON-LD

## Install
```bash
npm install
npm run dev
```

## Tailwind
Tailwind v4 is enabled with `@import "tailwindcss";` in `src/app/globals.css` and `@tailwindcss/postcss` in `postcss.config.mjs`.

You can use classes such as:
```jsx
<div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">Hello</div>
```

## animate.css
It is globally imported in `src/app/layout.js`. Example:
```jsx
<div className="animate__animated animate__fadeInUp">Content</div>
```

## Important
Replace the placeholder company name, phone, email, address, social links and `https://www.example.com` with your real business information before production.
