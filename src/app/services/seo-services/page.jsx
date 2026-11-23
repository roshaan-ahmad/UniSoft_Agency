// app/services/seo-services/page.jsx
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
import { seoSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/seo-services`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "SEO Services Agency | UniSoft";
const description =
  "Boost your Google rankings with UniSoft SEO services including technical SEO, local SEO, keyword research, and full optimization strategies.";

export const metadata = {
  title,
  description,
  keywords: [
    "SEO agency",
    "technical SEO services",
    "local SEO optimization",
    "keyword research services",
    "link building agency",
    "Google ranking services",
    "on-page SEO optimization",
    "SEO services Pakistan",
    "search engine optimization company",
    "Google penalty recovery",
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
        alt: "SEO Services Agency by UniSoft – Technical SEO, Local SEO & Link Building",
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
  badge: "📈 SEO SERVICES",
  title: "Rank Higher on Google with Powerful SEO Strategies",
  shortTitle: "SEO Services",
  icon: "ri-line-chart-line",
  intro:
    "We help businesses increase organic traffic, improve search rankings, and generate high-quality leads through advanced SEO optimization techniques proven to deliver measurable results.",

  benefits: [
    { icon: "ri-search-line", title: "Higher Google Rankings", desc: "Dominate search results for your target keywords and outrank competitors consistently." },
    { icon: "ri-user-add-line", title: "More Organic Traffic", desc: "Drive qualified visitors to your website without paying for every click." },
    { icon: "ri-money-dollar-circle-line", title: "Better ROI", desc: "SEO delivers the highest long-term ROI compared to any other digital marketing channel." },
    { icon: "ri-global-line", title: "Brand Authority", desc: "Build trust and credibility as a top-ranking brand in your industry." },
    { icon: "ri-bar-chart-line", title: "Measurable Results", desc: "Transparent monthly reports showing rankings, traffic, and conversion improvements." },
    { icon: "ri-map-pin-line", title: "Local Dominance", desc: "Capture local customers searching for your services in your area." },
  ],

  features: [
    { title: "Technical SEO Audit", desc: "Complete website audit covering speed, crawlability, indexing, and Core Web Vitals." },
    { title: "Keyword Research & Strategy", desc: "Data-driven keyword research targeting high-intent, high-volume search terms." },
    { title: "On-Page Optimization", desc: "Meta tags, headings, content optimization, and internal linking structure." },
    { title: "Link Building", desc: "High-quality backlink acquisition from authoritative domains in your niche." },
    { title: "Content SEO", desc: "SEO-optimized content creation that ranks and converts visitors into customers." },
    { title: "Local SEO", desc: "Google Business Profile optimization and local citation building for map rankings." },
  ],

  process: [
    { title: "SEO Audit", desc: "Comprehensive analysis of your current website performance, rankings, and technical issues." },
    { title: "Competitor Analysis", desc: "Deep dive into competitor strategies to identify opportunities and gaps." },
    { title: "Strategy Development", desc: "Custom SEO roadmap with prioritized actions for maximum impact." },
    { title: "On-Page Optimization", desc: "Implementing all on-page changes including content, meta tags, and structure." },
    { title: "Off-Page & Link Building", desc: "Building high-quality backlinks and brand mentions across the web." },
    { title: "Monitor & Report", desc: "Monthly ranking reports, traffic analysis, and strategy refinements." },
  ],

  technologies: [
    { icon: "ri-google-line", name: "Google Search Console" },
    { icon: "ri-bar-chart-line", name: "Google Analytics" },
    { icon: "ri-search-2-line", name: "Ahrefs" },
    { icon: "ri-spy-line", name: "SEMrush" },
    { icon: "ri-file-search-line", name: "Screaming Frog" },
    { icon: "ri-speed-line", name: "PageSpeed Insights" },
    { icon: "ri-map-2-line", name: "Google My Business" },
    { icon: "ri-code-s-slash-line", name: "Schema Markup" },
  ],

  pricing: [
    {
      name: "Starter SEO", price: "$299/mo",
      desc: "For small businesses starting their SEO journey.",
      features: ["10 target keywords", "On-page optimization", "Monthly report", "Google Search Console setup", "Basic link building"],
      popular: false,
    },
    {
      name: "Growth SEO", price: "$699/mo",
      desc: "For businesses serious about dominating search results.",
      features: ["30 target keywords", "Technical SEO audit", "Content optimization", "Advanced link building", "Local SEO", "Bi-weekly reports"],
      popular: true,
    },
    {
      name: "Enterprise SEO", price: "$1,499/mo",
      desc: "Full-scale SEO for competitive industries.",
      features: ["Unlimited keywords", "Full technical SEO", "Content creation", "PR & digital outreach", "Competitor monitoring", "Weekly reports"],
      popular: false,
    },
  ],

  industries: [
    { icon: "ri-store-line", name: "Retail" },
    { icon: "ri-hospital-line", name: "Healthcare" },
    { icon: "ri-building-line", name: "Real Estate" },
    { icon: "ri-restaurant-line", name: "Restaurants" },
    { icon: "ri-briefcase-line", name: "Legal Services" },
    { icon: "ri-graduation-cap-line", name: "Education" },
    { icon: "ri-car-line", name: "Automotive" },
    { icon: "ri-hotel-line", name: "Travel & Tourism" },
  ],

  portfolio: [
    { tag: "Local SEO", title: "Dental Clinic — 3x Patients", desc: "Took a local dental clinic from page 5 to position 1 for 15 local keywords in 4 months.", tech: ["Local SEO", "GMB", "Citations"] },
    { tag: "E-Commerce SEO", title: "Fashion Store — 400% Traffic", desc: "Grew organic traffic from 2,000 to 10,000 monthly visitors for an online fashion retailer.", tech: ["Technical SEO", "Content", "Links"] },
    { tag: "B2B SEO", title: "SaaS Company — 250% Leads", desc: "Increased qualified leads by 250% through targeted B2B keyword strategy and content SEO.", tech: ["Keyword Research", "Content SEO", "Ahrefs"] },
  ],

  caseStudies: [
    {
      industry: "E-Commerce", client: "StyleHub Fashion",
      challenge: "Website had 500 monthly visitors with zero page-1 rankings despite 3 years online.",
      solution: "Complete technical SEO overhaul, content strategy, and aggressive link building campaign.",
      results: [{ value: "400%", label: "Traffic Growth" }, { value: "47", label: "Page-1 Keywords" }, { value: "180%", label: "Revenue Increase" }],
    },
    {
      industry: "Local Business", client: "ProDent Clinic",
      challenge: "New clinic struggling to appear in local Google searches against established competitors.",
      solution: "Local SEO strategy with GMB optimization, local citations, and review management.",
      results: [{ value: "#1", label: "Local Ranking" }, { value: "3x", label: "New Patients" }, { value: "200%", label: "Call Volume" }],
    },
  ],

  testimonials: [
    { name: "Mark Thompson", role: "Owner, StyleHub Fashion", text: "UniSoft took our website from invisible to page 1 in just 3 months. Our sales have doubled since then." },
    { name: "Dr. Priya Sharma", role: "Owner, ProDent Clinic", text: "We went from 5 new patients a month to 20+ after UniSoft's local SEO work. Absolutely incredible results." },
    { name: "Robert Chen", role: "Marketing Director, TechFlow", text: "The most transparent SEO agency I've worked with. Monthly reports show exactly what's happening and why." },
  ],

  faqs: [
    { q: "How long does SEO take to show results?", a: "SEO typically shows initial results in 3-6 months. Significant ranking improvements and traffic growth are usually visible within 6-12 months of consistent work." },
    { q: "Do you guarantee first page rankings?", a: "No ethical SEO agency can guarantee specific rankings as Google's algorithm is constantly changing. We guarantee consistent improvement and transparent reporting." },
    { q: "What's included in monthly SEO reports?", a: "Reports include keyword ranking changes, organic traffic data, backlink profile updates, technical issues found, and next month's action plan." },
    { q: "Do you do black-hat SEO?", a: "Absolutely not. We only use white-hat, Google-approved SEO techniques that build sustainable long-term rankings without risk of penalties." },
    { q: "Can you help with Google penalty recovery?", a: "Yes, we specialize in Google penalty recovery including manual actions and algorithmic penalties from Panda, Penguin, and core updates." },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={seoSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO Services", path: "/services/seo-services" },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}