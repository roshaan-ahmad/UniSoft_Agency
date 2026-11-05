// app/layout.js
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIX: Removed ALL manual <title> and <meta> tags from <head>.
// Having those AND page-level `metadata` exports creates DUPLICATE meta tags —
// Google sees two titles/descriptions and can penalise the entire site.
// Next.js App Router handles title/description/OG/Twitter automatically via
// the `metadata` export below + each page's own `metadata` export.
// ─────────────────────────────────────────────────────────────────────────────

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { organizationSchema, websiteSchema } from "./lib/schema.js";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// ── Sitewide metadata defaults ────────────────────────────────────────────────
// `metadataBase` is REQUIRED so that relative URLs in alternates/OG/Twitter
// resolve correctly on every page.
export const metadata = {
  metadataBase: new URL("https://unisoftpvt.com"),

  // `template` appends " | UniSoft" to every page title automatically.
  // `default` is used only when a page doesn't export its own title.
  title: {
    default: "UniSoft – Software Development, SEO & Digital Marketing Agency",
    template: "%s | UniSoft",
  },

  description:
    "UniSoft is a professional software development company offering web development, SEO services, UI/UX design, automation, and digital marketing solutions to grow your business online.",

  keywords: [
    "software development company",
    "web development services",
    "SEO agency Pakistan",
    "digital marketing services",
    "UI UX design",
    "business automation solutions",
    "Next.js development",
    "React developers",
    "MERN stack development",
    "AI automation agency",
  ],

  authors: [{ name: "UniSoft", url: "https://unisoftpvt.com" }],
  creator: "UniSoft",
  publisher: "UniSoft",

  // Prevent browsers auto-linking phone/email strings as tap targets
  formatDetection: { email: false, address: false, telephone: false },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "UniSoft",
    title: "UniSoft – Software Development, SEO & Digital Marketing Agency",
    description:
      "We build scalable software, SEO systems, and automation tools to grow businesses globally.",
    url: "https://unisoftpvt.com",
    images: [
      {
        url: "https://unisoftpvt.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UniSoft – Software Development & Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@unisoftpvt",
    creator: "@unisoftpvt",
    title: "UniSoft – Software Development Company",
    description:
      "Grow your business with UniSoft software, SEO, and automation services.",
    images: ["https://unisoftpvt.com/og-image.jpg"],
  },

  // Uncomment and add your code once verified in Google Search Console
  // verification: { google: "YOUR_VERIFICATION_CODE" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*
          ── DO NOT add <title>, <meta name="description">, <meta property="og:*">,
             or <meta name="twitter:*"> here manually — Next.js injects them from
             the metadata export above. Duplicates hurt SEO.
        */}

        {/* ── Font performance: preconnect first, then load ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"   /* ← was crossorigin (invalid JSX) */
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ── Icon libraries ── */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* ── Google AdSense ── */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1056662588590287"
          crossOrigin="anonymous"
        />

        {/* ── Sitewide JSON-LD: Organization + WebSite (once, on every page) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body>
        <NavBar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />

        {/* ── WhatsApp floating CTA ── */}
        <a
          href="https://wa.me/923148588707"
          target="_blank"
          rel="noopener noreferrer"
          className="waFloatBtn"
          aria-label="Chat with UniSoft on WhatsApp"
        >
          <i className="ri-whatsapp-fill" aria-hidden="true"></i>
          <span className="waFloatLabel">Chat with us</span>
        </a>
      </body>
    </html>
  );
}