// app/about/page.jsx  (SERVER component — no "use client")
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES:
// 1. canonical was "/about" (relative) → absolute URL required for reliability
// 2. openGraph.url was "/about" (relative) → absolute URL
// 3. Added twitter card metadata
// 4. Added keywords
// 5. Added explicit robots directive
// ─────────────────────────────────────────────────────────────────────────────

import AboutClient from "./AboutClient";
import SeoSchema from "../components/SeoSchema";
import { aboutSchema, breadcrumbSchema } from "../lib/schema";

const description =
  "UniSoft is a software development and digital growth agency building web apps, SEO systems and AI automation for businesses worldwide. Meet our team and see how we work.";
const ogImage = "https://unisoftpvt.com/og-image.jpg";

export const metadata = {
  title: "About UniSoft – Software, SEO & AI Automation Agency",
  description,
  keywords: [
    "about UniSoft",
    "software development company",
    "SEO agency",
    "AI automation",
    "digital marketing agency",
    "web development team",
  ],
  alternates: {
    canonical: "https://unisoftpvt.com/about",   // ← was relative "/about"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://unisoftpvt.com/about",          // ← was relative "/about"
    title: "About UniSoft – Software, SEO & AI Automation Agency",
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "About UniSoft – Software Development Agency" }],
  },
  twitter: {                                        // ← was missing entirely
    card: "summary_large_image",
    site: "@unisoftpvt",
    title: "About UniSoft – Software, SEO & AI Automation Agency",
    description,
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <>
      <SeoSchema schema={aboutSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about"},
        ])}
      />
      <AboutClient />
    </>
  );
}