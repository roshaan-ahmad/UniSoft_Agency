// app/services/digital-marketing/page.jsx
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
import { digitalMarketingSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/digital-marketing`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "Digital Marketing Services | UniSoft";
const description =
  "Grow your business with UniSoft digital marketing services including Google Ads, Meta Ads, social media marketing, and lead generation strategies.";

export const metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency",
    "Google Ads management",
    "Meta Ads agency",
    "Facebook ads management",
    "social media marketing",
    "lead generation services",
    "paid advertising agency",
    "Instagram marketing services",
    "PPC management agency",
    "digital marketing Pakistan",
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
        alt: "Digital Marketing Services by UniSoft – Google Ads, Meta Ads & Lead Generation",
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
  badge: "🚀 DIGITAL MARKETING",
  title: "High-Performance Digital Marketing & Lead Generation",
  shortTitle: "Digital Marketing",
  icon: "ri-megaphone-line",
  intro:
    "We help businesses grow online using powerful marketing strategies, paid ads, SEO, branding, and conversion optimization systems that bring real customers — not just traffic.",

  benefits: [
    { icon: "ri-user-add-line", title: "More Qualified Leads", desc: "Targeted campaigns that attract buyers ready to convert, not just random visitors." },
    { icon: "ri-money-dollar-circle-line", title: "Higher ROI", desc: "Every dollar tracked and optimized for maximum return on ad spend." },
    { icon: "ri-global-line", title: "Brand Awareness", desc: "Build a recognizable brand presence across all major digital platforms." },
    { icon: "ri-bar-chart-line", title: "Data-Driven Decisions", desc: "Real-time analytics and reporting to continuously improve campaign performance." },
    { icon: "ri-speed-line", title: "Fast Results", desc: "Paid campaigns deliver traffic and leads from day one while organic grows." },
    { icon: "ri-focus-3-line", title: "Precise Targeting", desc: "Reach your exact audience by demographics, interests, and behavior." },
  ],

  features: [
    { title: "Google Ads Management", desc: "Search, display, shopping, and YouTube campaigns optimized for maximum conversions." },
    { title: "Meta Ads (Facebook & Instagram)", desc: "Highly targeted social ads with creative testing and audience optimization." },
    { title: "Social Media Marketing", desc: "Content strategy, posting schedule, and community management across all platforms." },
    { title: "Email Marketing", desc: "Automated email sequences, newsletters, and drip campaigns that nurture leads." },
    { title: "Content Marketing", desc: "Blog posts, videos, and infographics that attract and convert your target audience." },
    { title: "Conversion Rate Optimization", desc: "Landing page optimization and A/B testing to maximize your conversion rates." },
  ],

  process: [
    { title: "Audit & Research", desc: "Analyzing your current marketing, competitors, and target audience in depth." },
    { title: "Strategy Development", desc: "Creating a custom multi-channel marketing plan aligned with your business goals." },
    { title: "Campaign Setup", desc: "Building campaigns, creatives, landing pages, and tracking systems." },
    { title: "Launch & Monitor", desc: "Going live with continuous monitoring and real-time optimization." },
    { title: "Optimize & Scale", desc: "A/B testing, budget reallocation, and scaling what works best." },
    { title: "Report & Refine", desc: "Monthly performance reports with insights and next-month strategy updates." },
  ],

  technologies: [
    { icon: "ri-google-line", name: "Google Ads" },
    { icon: "ri-facebook-circle-line", name: "Meta Ads" },
    { icon: "ri-instagram-line", name: "Instagram" },
    { icon: "ri-bar-chart-line", name: "Google Analytics" },
    { icon: "ri-mail-line", name: "Mailchimp" },
    { icon: "ri-video-line", name: "YouTube Ads" },
    { icon: "ri-linkedin-box-line", name: "LinkedIn Ads" },
    { icon: "ri-pie-chart-line", name: "Meta Pixel" },
  ],

  pricing: [
    {
      name: "Starter", price: "$499/mo",
      desc: "For small businesses starting digital marketing.",
      features: ["Google Ads setup", "Facebook Ads", "Monthly report", "Ad spend up to $1k", "2 campaigns"],
      popular: false,
    },
    {
      name: "Growth", price: "$999/mo",
      desc: "For businesses ready to scale their marketing.",
      features: ["Google + Meta Ads", "Social media management", "Email marketing", "Ad spend up to $5k", "Weekly reports", "CRO included"],
      popular: true,
    },
    {
      name: "Enterprise", price: "$2,499/mo",
      desc: "Full-scale marketing for aggressive growth.",
      features: ["All platforms", "Content creation", "Influencer outreach", "Unlimited ad spend", "Dedicated manager", "Daily reports"],
      popular: false,
    },
  ],

  industries: [
    { icon: "ri-store-line", name: "E-Commerce" },
    { icon: "ri-hospital-line", name: "Healthcare" },
    { icon: "ri-building-line", name: "Real Estate" },
    { icon: "ri-restaurant-line", name: "Restaurants" },
    { icon: "ri-graduation-cap-line", name: "Education" },
    { icon: "ri-briefcase-line", name: "B2B Services" },
    { icon: "ri-hotel-line", name: "Travel" },
    { icon: "ri-car-line", name: "Automotive" },
  ],

  portfolio: [
    { tag: "Google Ads", title: "FitLife Gym — 5x Members", desc: "Google Ads campaign that grew gym memberships by 500% in 3 months with $2 cost per lead.", tech: ["Google Ads", "Landing Page", "CRO"] },
    { tag: "Meta Ads", title: "StyleBoutique — $50k Revenue", desc: "Facebook and Instagram ads generated $50,000 in sales with 8x ROAS for a fashion brand.", tech: ["Meta Ads", "Retargeting", "Creative Testing"] },
    { tag: "Social Media", title: "TechStartup — 100k Followers", desc: "Grew LinkedIn and Twitter following from 500 to 100,000 in 6 months through content strategy.", tech: ["LinkedIn", "Twitter", "Content"] },
  ],

  caseStudies: [
    {
      industry: "E-Commerce", client: "StyleBoutique Fashion",
      challenge: "Spending $5,000/month on ads with only 1.5x ROAS and declining sales.",
      solution: "Rebuilt entire Meta Ads strategy with new creatives, audience segmentation, and retargeting funnels.",
      results: [{ value: "8x", label: "ROAS" }, { value: "300%", label: "Revenue Growth" }, { value: "60%", label: "Cost Per Sale Drop" }],
    },
    {
      industry: "Local Business", client: "FitLife Gym",
      challenge: "New gym with zero online presence competing against established chains.",
      solution: "Hyper-local Google Ads and Facebook campaigns targeting fitness enthusiasts within 5km radius.",
      results: [{ value: "500%", label: "New Members" }, { value: "$2", label: "Cost Per Lead" }, { value: "12x", label: "Ad ROI" }],
    },
  ],

  testimonials: [
    { name: "Jessica Brown", role: "Owner, StyleBoutique", text: "UniSoft transformed our Meta Ads from a money pit to our biggest revenue channel. 8x ROAS is incredible." },
    { name: "Mike Johnson", role: "Owner, FitLife Gym", text: "We went from 50 members to 300 in 3 months. UniSoft's digital marketing is simply outstanding." },
    { name: "Rachel Kim", role: "CMO, TechStartup", text: "Our LinkedIn presence exploded. UniSoft's content strategy brought us enterprise clients we never expected." },
  ],

  faqs: [
    { q: "How quickly will I see results from digital marketing?", a: "Paid ads (Google/Meta) deliver results within days. SEO and organic social media typically take 3-6 months to show significant growth." },
    { q: "What is ROAS and what should I expect?", a: "ROAS (Return on Ad Spend) measures revenue per dollar spent on ads. Industry average is 3-4x. We typically achieve 5-10x for our clients." },
    { q: "Do you manage the ad budget or do I pay separately?", a: "Our fee covers management only. Ad spend goes directly to Google/Meta from your account. We recommend a minimum $500/month ad budget." },
    { q: "Which platforms do you advertise on?", a: "We manage Google Ads, Facebook, Instagram, LinkedIn, YouTube, TikTok, and Twitter/X depending on your target audience." },
    { q: "How do you measure campaign success?", a: "We track leads, conversions, ROAS, cost per acquisition, and revenue attribution. Monthly reports cover all key metrics with actionable insights." },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={digitalMarketingSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Digital Marketing", path: "/services/digital-marketing" },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}