// app/page.js  (SERVER component — no "use client")
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES:
// 1. Added explicit robots directive
// 2. Added `keywords` to metadata
// 3. OG/Twitter images now use absolute URLs with explicit dimensions
// 4. Added `alternates.canonical` explicitly (good practice even with metadataBase)
// ─────────────────────────────────────────────────────────────────────────────

import Main from "./components/Main";
import SeoSchema from "./components/SeoSchema";
import { homepageSchema, breadcrumbSchema } from "./lib/schema";

const title    = "UniSoft – Software Development, SEO & AI Automation Agency";
const description =
  "UniSoft builds custom software, websites and AI automation systems, and runs SEO and digital marketing for startups and growing businesses worldwide.";
const ogImage  = "https://unisoftpvt.com/og-image.jpg";

export const metadata = {
  title: { absolute: title },   // skips the layout's " | UniSoft" template on homepage
  description,
  keywords: [
    "software development agency",
    "SEO services",
    "AI automation",
    "web development company",
    "digital marketing agency",
    "MERN stack developers",
    "Next.js development services",
    "custom software solutions",
    "startup software development",
    "enterprise software development",
    "UI/UX design services",
    "automation solutions",
    "digital marketing services",
    "social media marketing",
    "content marketing",
    "search engine optimization",
    "local SEO services",
    "e-commerce development",
    "mobile app development",
    ".NET development services",
    "React.js development services",
    "Node.js development services",
    "AI-powered software solutions",
    "cloud-based software development",
    "SaaS application development",
    "API development and integration",
    "custom web application development",
    "software consulting services",
    "software maintenance and support",
    "software testing and QA services",
    "software project management",
    "SQL database development",
    "NoSQL database development",
    "DevOps services",
    "continuous integration and deployment",
    "agile software development",
    "scrum methodology",
  ],
  alternates: { canonical: "https://unisoftpvt.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://unisoftpvt.com",
    siteName: "UniSoft",
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "UniSoft – Software Development & AI Automation Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unisoftpvt",
    creator: "@unisoftpvt",
    title,
    description,
    images: [{ url: ogImage, alt: "UniSoft – Software Development & AI Automation Agency" }],
  },
};

export default function HomePage() {
  return (
    <>
      <SeoSchema schema={homepageSchema} />
      {/* Homepage breadcrumb = just Home */}
      <SeoSchema schema={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Main />
    </>
  );
}