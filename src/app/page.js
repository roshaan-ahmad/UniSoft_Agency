// src/app/page.js   (SERVER component: do NOT add "use client" here)
//
// Main.jsx is a client component, so it cannot export metadata or be the place
// the homepage canonical/schema live. This wrapper can.

import Main from "./components/Main"; // <-- change to wherever your Main component file actually lives
import SeoSchema from "./components/SeoSchema";
import { homepageSchema } from "./lib/schema";

const title = "UniSoft – Software Development, SEO & AI Automation Agency";
const description =
  "UniSoft builds custom software, websites and AI automation systems, and runs SEO and digital marketing for startups and growing businesses worldwide.";

export const metadata = {
  // absolute: skips the layout's " | UniSoft" title template on the homepage
  title: { absolute: title },
  description,
  // IMPORTANT: once you remove the canonical from layout.js, the homepage needs its own.
  alternates: { canonical: "https://unisoftpvt.com" },
  openGraph: {
    type: "website",
    url: "https://unisoftpvt.com",
    siteName: "UniSoft",
    title,
    description,
    images: ["https://unisoftpvt.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://unisoftpvt.com/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <SeoSchema schema={homepageSchema} />
      <Main />
    </>
  );
}