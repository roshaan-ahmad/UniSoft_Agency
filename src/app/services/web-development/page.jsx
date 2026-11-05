// app/services/web-development/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES APPLIED:
// 1. Added keywords array
// 2. Added openGraph.images with explicit dimensions
// 3. Added twitter card metadata
// 4. Added breadcrumbSchema rendered in JSX
// 5. Added explicit robots directive
// ─────────────────────────────────────────────────────────────────────────────

import ServiceTemplate from "@/app/components/ServiceTemplate";
import SeoSchema from "@/app/components/SeoSchema";
import { webDevelopmentSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/web-development`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "Web Development Services | UniSoft";
const description =
  "Professional web development services by UniSoft. We build fast, responsive, SEO-optimized websites and web applications using React, Next.js, and modern technologies.";

export const metadata = {
  title,
  description,
  keywords: [
    "web development company",
    "Next.js web development",
    "React website development",
    "e-commerce website development",
    "responsive web design",
    "SEO-optimized websites",
    "web development agency Pakistan",
    "custom website development",
    "CMS website development",
    "fast website development",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title,
    description,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Web Development Services by UniSoft – React, Next.js & E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unisoftpvt",
    creator: "@unisoftpvt",
    title,
    description,
    images: [OG_IMAGE],
  },
};

const data = {
  badge: "🌐 WEB DEVELOPMENT",
  title: "High-Performance Websites & Web Apps Built to Convert",
  shortTitle: "Web Development",
  icon: "ri-global-line",
  intro:
    "We design and develop blazing-fast, SEO-optimized, and visually stunning websites that not only look great but drive real business results through superior user experience.",

  benefits: [
    { icon: "ri-speed-line", title: "Lightning Fast Speed", desc: "Optimized for Core Web Vitals with sub-2-second load times for maximum SEO and UX." },
    { icon: "ri-smartphone-line", title: "Fully Responsive", desc: "Pixel-perfect on every device — desktop, tablet, and mobile." },
    { icon: "ri-search-line", title: "SEO-Ready", desc: "Built with SEO best practices from day one for maximum organic visibility." },
    { icon: "ri-shield-check-line", title: "Secure & Reliable", desc: "SSL, HTTPS, and security hardening included in every project." },
    { icon: "ri-palette-line", title: "Custom Design", desc: "Unique designs tailored to your brand identity and target audience." },
    { icon: "ri-settings-line", title: "Easy to Manage", desc: "CMS integration so you can update content without technical knowledge." },
  ],

  features: [
    { title: "Custom Website Design", desc: "Unique, brand-aligned designs that stand out from template-based competitors." },
    { title: "Next.js & React Development", desc: "Server-side rendering for maximum performance and SEO optimization." },
    { title: "E-Commerce Development", desc: "Full-featured online stores with cart, checkout, and payment processing." },
    { title: "CMS Integration", desc: "WordPress, Sanity, or custom CMS for easy content management." },
    { title: "Performance Optimization", desc: "Image optimization, lazy loading, caching, and CDN setup." },
    { title: "Analytics & Tracking", desc: "Google Analytics, Tag Manager, and conversion tracking setup." },
  ],

  process: [
    { title: "Discovery Call", desc: "Understanding your goals, target audience, and design preferences." },
    { title: "Wireframing", desc: "Creating low-fidelity wireframes to map out page structure and user flow." },
    { title: "Design Mockups", desc: "High-fidelity Figma designs for your approval before development begins." },
    { title: "Development", desc: "Clean, semantic code development with regular progress updates." },
    { title: "Testing", desc: "Cross-browser, cross-device testing and performance optimization." },
    { title: "Launch & Handover", desc: "Smooth deployment with training on how to manage your new website." },
  ],

  technologies: [
    { icon: "ri-reactjs-line", name: "React.js" },
    { icon: "ri-nextjs-line", name: "Next.js" },
    { icon: "ri-css3-line", name: "Tailwind CSS" },
    { icon: "ri-wordpress-line", name: "WordPress" },
    { icon: "ri-javascript-line", name: "JavaScript" },
    { icon: "ri-code-box-line", name: "TypeScript" },
    { icon: "ri-database-2-line", name: "MongoDB" },
    { icon: "ri-cloud-line", name: "Vercel/AWS" },
  ],

  pricing: [
    {
      name: "Landing Page", price: "$499",
      desc: "Perfect for startups and product launches.",
      features: ["1-5 pages", "Mobile responsive", "SEO optimized", "Contact form", "1 month support"],
      popular: false,
    },
    {
      name: "Business Website", price: "$1,499",
      desc: "Complete website for established businesses.",
      features: ["Up to 15 pages", "CMS integration", "Blog setup", "Analytics", "Speed optimization", "3 months support"],
      popular: true,
    },
    {
      name: "E-Commerce", price: "$2,999",
      desc: "Full online store with payment processing.",
      features: ["Unlimited products", "Payment gateway", "Inventory management", "Order tracking", "Admin dashboard", "6 months support"],
      popular: false,
    },
  ],

  industries: [
    { icon: "ri-store-line", name: "Retail" },
    { icon: "ri-briefcase-line", name: "Professional Services" },
    { icon: "ri-hospital-line", name: "Healthcare" },
    { icon: "ri-graduation-cap-line", name: "Education" },
    { icon: "ri-building-line", name: "Real Estate" },
    { icon: "ri-restaurant-line", name: "Food & Beverage" },
    { icon: "ri-hotel-line", name: "Hospitality" },
    { icon: "ri-government-line", name: "Non-Profit" },
  ],

  portfolio: [
    { tag: "E-Commerce", title: "LuxeStyle Fashion Store", desc: "Modern e-commerce store with 500+ products, Stripe payments, and inventory management.", tech: ["Next.js", "Stripe", "MongoDB"] },
    { tag: "Corporate", title: "ProLegal Law Firm", desc: "Professional law firm website with appointment booking and case management portal.", tech: ["Next.js", "Tailwind", "Sanity CMS"] },
    { tag: "SaaS", title: "TaskFlow Dashboard", desc: "Feature-rich SaaS dashboard with real-time data, charts, and team collaboration tools.", tech: ["React", "Node.js", "PostgreSQL"] },
  ],

  caseStudies: [
    {
      industry: "E-Commerce", client: "LuxeStyle Fashion",
      challenge: "Old WordPress site was slow (8s load time) and losing customers to competitors.",
      solution: "Rebuilt with Next.js, optimized images, and implemented CDN for global performance.",
      results: [{ value: "0.8s", label: "Load Time" }, { value: "65%", label: "Bounce Rate Drop" }, { value: "220%", label: "Conversions" }],
    },
    {
      industry: "Professional Services", client: "ProLegal Law Firm",
      challenge: "No online presence and losing potential clients to competitors with modern websites.",
      solution: "Built professional website with SEO, appointment booking, and client portal.",
      results: [{ value: "150%", label: "More Inquiries" }, { value: "#1", label: "Local Ranking" }, { value: "40%", label: "Cost Savings" }],
    },
  ],

  testimonials: [
    { name: "Emma Wilson", role: "Owner, LuxeStyle Fashion", text: "Our new website loads in under a second and our sales have tripled. UniSoft exceeded every expectation." },
    { name: "David Park", role: "Partner, ProLegal", text: "Professional, fast, and exactly what we needed. Our online inquiries increased by 150% within 2 months." },
    { name: "Lisa Chen", role: "CEO, TaskFlow", text: "The dashboard UniSoft built is beautiful and our users love it. Conversion rate improved by 40%." },
  ],

  faqs: [
    { q: "How long does a website take to build?", a: "A landing page takes 1-2 weeks. A full business website takes 3-6 weeks. E-commerce projects typically take 6-10 weeks depending on complexity." },
    { q: "Will my website be mobile-friendly?", a: "Yes, every website we build is fully responsive and tested on all major devices and screen sizes." },
    { q: "Do you provide website hosting?", a: "We can set up hosting on Vercel, AWS, or any provider you prefer. We also offer managed hosting packages." },
    { q: "Can I update the website myself?", a: "Yes, we integrate CMS solutions so you can easily update content, add blog posts, and manage products without coding." },
    { q: "Do you redesign existing websites?", a: "Absolutely. We specialize in website redesigns that improve performance, design, and conversion rates." },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={webDevelopmentSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}