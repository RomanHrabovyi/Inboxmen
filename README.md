# INBOXMEN

A one-page marketing site for a freelance Klaviyo and email-retention specialist. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with `npm run build`, then serve it locally with `npm start`.

## Deploy to Vercel

Import this project into Vercel and keep the detected Next.js defaults. Vercel installs dependencies and runs `npm run build` on deployment. No environment variables or external services are required.

## Editing content

- Services and both pricing groups: `lib/data.ts`
- Contact details, form fields, and success message: `components/sections/contact.tsx`
- Profile photo: `public/roman.png`
- Unbranded email design slider: `components/email-design-slider.tsx`
- Generated product photography used by the email previews: `public/email-campaign-contact-sheet.png`
- Section copy and composition: `components/sections/`
- Palette and shared styles: `app/globals.css`

The form validates in the browser and shows a local success state. It does not submit or store data.
