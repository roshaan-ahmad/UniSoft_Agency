// app/services/ui-ux-design/page.jsx
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
import { uiuxSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/ui-ux-design`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "UI UX Design Services | UniSoft";
const description =
  "Modern UI UX design services by UniSoft including web design, mobile app design, UX research, wireframing, and conversion-focused interfaces.";

export const metadata = {
  title,
  description,
  keywords: [
    "UI UX design agency",
    "user interface design services",
    "user experience design",
    "Figma design services",
    "mobile app UI design",
    "web design company",
    "wireframing and prototyping",
    "design system creation",
    "conversion-focused design",
    "UI UX design Pakistan",
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
        alt: "UI UX Design Services by UniSoft – Web & Mobile App Design",
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
  badge: "🎨 UI/UX DESIGN",
  title: "Modern UI/UX Design That Converts Visitors Into Customers",
  shortTitle: "UI/UX Design",
  icon: "ri-palette-line",
  intro:
    "We design clean, modern, and conversion-focused user experiences that improve engagement, increase usability, and drive business growth through beautiful and intuitive interfaces.",

  benefits: [
    { icon: "ri-user-smile-line", title: "Better User Experience", desc: "Intuitive designs that users love, reducing friction and increasing satisfaction." },
    { icon: "ri-line-chart-line", title: "Higher Conversions", desc: "Strategic UX design that guides users toward taking action and converting." },
    { icon: "ri-palette-line", title: "Brand Consistency", desc: "Cohesive design systems that strengthen your brand identity across all touchpoints." },
    { icon: "ri-smartphone-line", title: "Mobile-First Design", desc: "Designs optimized for mobile users who make up 60%+ of web traffic." },
    { icon: "ri-time-line", title: "Faster Development", desc: "Detailed design specs and component libraries speed up the development process." },
    { icon: "ri-eye-line", title: "Visual Excellence", desc: "Stunning visuals that make your product stand out from the competition." },
  ],

  features: [
    { title: "UI Design & Visual Design", desc: "Pixel-perfect interfaces with modern aesthetics, typography, and color systems." },
    { title: "UX Research & Strategy", desc: "User interviews, surveys, and behavior analysis to inform design decisions." },
    { title: "Wireframing & Prototyping", desc: "Interactive Figma prototypes for testing and stakeholder approval before development." },
    { title: "Design Systems", desc: "Scalable component libraries and design tokens for consistent product design." },
    { title: "Mobile App Design", desc: "iOS and Android app designs following platform-specific guidelines and best practices." },
    { title: "Usability Testing", desc: "Testing designs with real users to identify and fix usability issues before launch." },
  ],

  process: [
    { title: "Discovery & Research", desc: "Understanding your users, business goals, and competitive landscape through research." },
    { title: "Information Architecture", desc: "Organizing content and navigation for the most intuitive user experience." },
    { title: "Wireframing", desc: "Low-fidelity wireframes to establish layout and user flow before visual design." },
    { title: "Visual Design", desc: "High-fidelity mockups with your brand colors, typography, and visual identity." },
    { title: "Prototyping", desc: "Interactive prototypes in Figma for stakeholder review and user testing." },
    { title: "Handoff to Development", desc: "Detailed design specs, assets, and component documentation for developers." },
  ],

  technologies: [
    { icon: "ri-pen-nib-line", name: "Figma" },
    { icon: "ri-adobe-line", name: "Adobe XD" },
    { icon: "ri-image-line", name: "Adobe Photoshop" },
    { icon: "ri-brush-line", name: "Adobe Illustrator" },
    { icon: "ri-layout-line", name: "Framer" },
    { icon: "ri-smartphone-line", name: "InVision" },
    { icon: "ri-palette-2-line", name: "Sketch" },
    { icon: "ri-video-line", name: "Lottie Animations" },
  ],

  pricing: [
    {
      name: "Landing Page", price: "$299",
      desc: "Single page design for campaigns and launches.",
      features: ["1 page design", "Mobile responsive", "2 revisions", "Figma file", "48hr delivery"],
      popular: false,
    },
    {
      name: "Website Design", price: "$999",
      desc: "Complete website UI/UX design package.",
      features: ["Up to 10 pages", "Design system", "Mobile + desktop", "5 revisions", "Dev handoff", "Prototype"],
      popular: true,
    },
    {
      name: "App Design", price: "$1,999",
      desc: "Full mobile or web app UI/UX design.",
      features: ["Full app screens", "Component library", "User flows", "Usability testing", "Unlimited revisions", "Dev specs"],
      popular: false,
    },
  ],

  industries: [
    { icon: "ri-store-line", name: "E-Commerce" },
    { icon: "ri-smartphone-line", name: "Mobile Apps" },
    { icon: "ri-bank-line", name: "FinTech" },
    { icon: "ri-hospital-line", name: "HealthTech" },
    { icon: "ri-graduation-cap-line", name: "EdTech" },
    { icon: "ri-building-line", name: "SaaS Products" },
    { icon: "ri-game-line", name: "Gaming" },
    { icon: "ri-government-line", name: "Non-Profit" },
  ],

  portfolio: [
    { tag: "SaaS Dashboard", title: "AnalyticsPro Dashboard", desc: "Complex data dashboard redesign that reduced user confusion by 70% and increased daily active users.", tech: ["Figma", "Design System", "Prototyping"] },
    { tag: "Mobile App", title: "FoodieApp — Food Delivery", desc: "End-to-end food delivery app design with seamless ordering flow and 4.8-star App Store rating.", tech: ["Figma", "iOS Design", "User Testing"] },
    { tag: "E-Commerce", title: "LuxeStore Redesign", desc: "E-commerce redesign that increased conversion rate from 1.2% to 4.8% through UX improvements.", tech: ["Figma", "A/B Testing", "CRO"] },
  ],

  caseStudies: [
    {
      industry: "SaaS", client: "AnalyticsPro",
      challenge: "Complex dashboard with 40% user drop-off rate due to confusing navigation and information overload.",
      solution: "Complete UX audit, user interviews, and redesign with simplified navigation and progressive disclosure.",
      results: [{ value: "70%", label: "Less Drop-off" }, { value: "3x", label: "Daily Active Users" }, { value: "4.9★", label: "User Rating" }],
    },
    {
      industry: "E-Commerce", client: "LuxeStore",
      challenge: "Beautiful products but only 1.2% conversion rate due to poor checkout UX and trust signals.",
      solution: "Redesigned product pages, checkout flow, and added social proof elements based on user research.",
      results: [{ value: "4.8%", label: "Conversion Rate" }, { value: "300%", label: "Revenue Growth" }, { value: "55%", label: "Cart Abandonment Drop" }],
    },
  ],

  testimonials: [
    { name: "Alex Turner", role: "CEO, AnalyticsPro", text: "UniSoft's UX redesign transformed our product. User satisfaction scores went from 3.2 to 4.9 stars." },
    { name: "Sophie Laurent", role: "Founder, LuxeStore", text: "Our conversion rate went from 1.2% to 4.8% after UniSoft redesigned our checkout. Absolutely game-changing." },
    { name: "Raj Patel", role: "Product Manager, FoodieApp", text: "The app design UniSoft delivered is stunning. Our users constantly compliment the smooth experience." },
  ],

  faqs: [
    { q: "What design tools do you use?", a: "We primarily use Figma for all UI/UX design work. We also use Adobe Creative Suite for illustrations, icons, and brand assets." },
    { q: "Do you provide the source Figma files?", a: "Yes, upon project completion you receive all Figma source files with organized layers, components, and design tokens." },
    { q: "How many revisions are included?", a: "Revision rounds depend on the package. We work collaboratively to ensure you're 100% satisfied with the final design." },
    { q: "Can you design for both web and mobile?", a: "Absolutely. We design responsive layouts for all screen sizes and can create separate mobile app designs for iOS and Android." },
    { q: "Do you also do development after design?", a: "Yes! UniSoft offers both design and development services. We can take your design from concept to fully functional product." },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={uiuxSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "UI/UX Design", path: "/services/ui-ux-design" },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}