// app/services/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES:
// 1. Added canonical URL (was completely missing)
// 2. Added openGraph metadata with image (was missing — social shares showed no image)
// 3. Added twitter card metadata (was missing)
// 4. Fixed SeoSchema: servicesSchema was imported but NEVER rendered in JSX
// 5. Added breadcrumbSchema rendered in JSX
// 6. Improved H1 to include keywords
// 7. Added aria-label to <section>
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import BackButton from "../components/BackButton";
import { servicesSchema, breadcrumbSchema } from "../lib/schema.js";
import SeoSchema from "../components/SeoSchema";

export const metadata = {
  title: "Our Services – Software, SEO, Web Dev & Automation",
  description:
    "UniSoft offers software development, SEO services, web development, UI/UX design, automation, and digital marketing to grow your business online.",
  alternates: {
    canonical: "https://unisoftpvt.com/services",   // ← was missing
  },
  openGraph: {                                        // ← was missing
    type: "website",
    url: "https://unisoftpvt.com/services",
    title: "Our Services – Software, SEO, Web Dev & Automation | UniSoft",
    description:
      "UniSoft delivers high-performance software development, SEO, automation, and digital marketing services designed to scale modern businesses.",
    images: [
      {
        url: "https://unisoftpvt.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UniSoft Services – Software, SEO, Web Development & Automation",
      },
    ],
  },
  twitter: {                                          // ← was missing
    card: "summary_large_image",
    title: "Our Services – Software, SEO, Web Dev & Automation | UniSoft",
    description:
      "Software development, SEO, automation, UI/UX design, and digital marketing — all under one roof at UniSoft.",
    images: ["https://unisoftpvt.com/og-image.jpg"],
  },
};

const services = [
  {
    title: "Software Development",
    href: "/services/software-development",
    desc: "Scalable custom software, SaaS platforms, APIs & enterprise solutions.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "SEO Services",
    href: "/services/seo-services",
    desc: "Rank higher on Google with advanced technical and local SEO strategies.",
    icon: "ri-line-chart-line",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "High-performance websites and web apps built with modern tech stacks.",
    icon: "ri-global-line",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "Lead generation, ads management, and brand growth strategies.",
    icon: "ri-megaphone-line",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Modern, clean, conversion-focused UI/UX designs for web & mobile.",
    icon: "ri-palette-line",
  },
  {
    title: "Automation Solutions",
    href: "/services/automation-solutions",
    desc: "AI-powered workflows and business automation systems.",
    icon: "ri-cpu-line",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* SEO FIX: servicesSchema was imported but never rendered — fixed */}
      <SeoSchema schema={servicesSchema} />

      {/* SEO FIX: breadcrumb schema helps Google understand site hierarchy */}
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="srvSection" aria-label="UniSoft Services">
        <BackButton />
        <div className="srvContainer">

          {/* HEADER */}
          <div className="srvHeader">
            <span className="srvBadge">OUR EXPERT SERVICES</span>

            {/* SEO FIX: H1 now includes primary keywords */}
            <h1>
              Software Development, SEO & Digital Marketing Services to Build,
              Scale & Grow Your Business
            </h1>

            <p>
              We provide high-performance software development, SEO, automation,
              and marketing services designed to scale modern businesses.
            </p>
          </div>

          {/* GRID */}
          <div className="srvGrid">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="srvCard"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="srvTop">
                  <div className="srvIcon">
                    <i className={service.icon} aria-hidden="true"></i>
                  </div>
                  <span className="srvTag">Service</span>
                </div>

                {/* h2 is correct here — one H1 on page, H2s for each card */}
                <h2>{service.title}</h2>
                <p>{service.desc}</p>

                <div className="srvBottom">
                  <span className="srvLink">
                    Explore More <i className="ri-arrow-right-line" aria-hidden="true"></i>
                  </span>
                  <span className="srvNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}