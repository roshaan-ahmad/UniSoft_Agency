// app/services/software-development/page.jsx
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
import { softwareSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/software-development`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "Custom Software Development Services | UniSoft";
const description =
  "Professional software development services by UniSoft including SaaS applications, enterprise systems, APIs, automation solutions, and scalable business software.";

export const metadata = {
  title,
  description,
  keywords: [
    "custom software development",
    "SaaS development company",
    "enterprise software solutions",
    "API development services",
    "MERN stack development",
    "Next.js development company",
    "software development agency Pakistan",
    "cloud-native application development",
    "scalable software architecture",
    "React Node.js developers",
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
        alt: "Custom Software Development Services by UniSoft – SaaS, APIs & Enterprise Solutions",
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
  badge: "💻 SOFTWARE DEVELOPMENT",
  title: "Custom Software Development Solutions for Modern Businesses",
  shortTitle: "Software Development",
  icon: "ri-code-s-slash-line",
  intro:
    "UniSoft builds powerful, scalable, and secure software solutions designed to streamline operations, automate workflows, and accelerate business growth in the digital era.",

  benefits: [
    { icon: "ri-rocket-line", title: "Faster Time to Market", desc: "Agile development process ensures your product launches quickly without compromising quality." },
    { icon: "ri-shield-check-line", title: "Enterprise-Grade Security", desc: "Built-in security protocols, data encryption, and compliance standards for every project." },
    { icon: "ri-scales-line", title: "Infinitely Scalable", desc: "Architecture designed to grow with your business from startup to enterprise level." },
    { icon: "ri-customer-service-2-line", title: "Dedicated Support", desc: "24/7 post-launch support, maintenance, and continuous improvement services." },
    { icon: "ri-money-dollar-circle-line", title: "Cost Effective", desc: "Competitive pricing with transparent billing and no hidden charges." },
    { icon: "ri-tools-line", title: "Modern Tech Stack", desc: "Latest technologies ensuring your software stays relevant and performant for years." },
  ],

  features: [
    { title: "Custom Business Applications", desc: "Tailored software solutions built specifically for your business workflows and requirements." },
    { title: "SaaS Platform Development", desc: "Scalable subscription-based platforms with user management, billing, and dashboards." },
    { title: "API Development & Integration", desc: "RESTful APIs, GraphQL, and third-party service integrations for seamless connectivity." },
    { title: "Cloud-Native Architecture", desc: "AWS, Azure, and GCP deployments with auto-scaling and high availability." },
    { title: "Database Design & Optimization", desc: "Efficient database architecture with MongoDB, PostgreSQL, and MySQL." },
    { title: "DevOps & CI/CD Pipelines", desc: "Automated testing, deployment pipelines, and continuous integration workflows." },
  ],

  process: [
    { title: "Discovery & Planning", desc: "We analyze your requirements, define scope, and create a detailed project roadmap." },
    { title: "UI/UX Design", desc: "Wireframes and prototypes are designed for optimal user experience before development." },
    { title: "Development Sprints", desc: "Agile 2-week sprints with regular demos and feedback loops to ensure alignment." },
    { title: "Testing & QA", desc: "Comprehensive testing including unit, integration, and user acceptance testing." },
    { title: "Deployment", desc: "Smooth production deployment with zero-downtime strategies and monitoring setup." },
    { title: "Support & Maintenance", desc: "Ongoing support, bug fixes, updates, and feature enhancements post-launch." },
  ],

  technologies: [
    { icon: "ri-reactjs-line", name: "React.js" },
    { icon: "ri-nextjs-line", name: "Next.js" },
    { icon: "ri-nodejs-line", name: "Node.js" },
    { icon: "ri-database-2-line", name: "MongoDB" },
    { icon: "ri-database-line", name: "PostgreSQL" },
    { icon: "ri-cloud-line", name: "AWS" },
    { icon: "ri-docker-line", name: "Docker" },
    { icon: "ri-git-branch-line", name: "Git/GitHub" },
    { icon: "ri-code-box-line", name: "TypeScript" },
    { icon: "ri-server-line", name: "Express.js" },
  ],

  pricing: [
    {
      name: "Starter", price: "$999",
      desc: "Perfect for small businesses and MVPs.",
      features: ["Up to 5 screens", "Basic authentication", "REST API", "MongoDB database", "1 month support"],
      popular: false,
    },
    {
      name: "Business", price: "$2,999",
      desc: "Ideal for growing businesses needing full-featured software.",
      features: ["Unlimited screens", "Advanced auth & roles", "Payment integration", "Admin dashboard", "Cloud deployment", "3 months support"],
      popular: true,
    },
    {
      name: "Enterprise", price: "Custom",
      desc: "Full-scale enterprise solutions with dedicated team.",
      features: ["Custom architecture", "AI/ML integration", "Multi-tenant SaaS", "DevOps setup", "SLA guarantee", "12 months support"],
      popular: false,
    },
  ],

  industries: [
    { icon: "ri-hospital-line", name: "Healthcare" },
    { icon: "ri-shopping-cart-line", name: "E-Commerce" },
    { icon: "ri-bank-line", name: "Finance" },
    { icon: "ri-graduation-cap-line", name: "Education" },
    { icon: "ri-building-line", name: "Real Estate" },
    { icon: "ri-truck-line", name: "Logistics" },
    { icon: "ri-restaurant-line", name: "Food & Beverage" },
    { icon: "ri-hotel-line", name: "Hospitality" },
  ],

  portfolio: [
    { tag: "SaaS", title: "UniSoft Agency Platform", desc: "Full-scale agency management system with client portals and automated reporting.", tech: ["Next.js", "MongoDB", "Node.js"] },
    { tag: "E-Commerce", title: "Multi-Vendor Marketplace", desc: "Scalable marketplace with real-time inventory, payments, and vendor management.", tech: ["React", "Stripe", "PostgreSQL"] },
    { tag: "Enterprise", title: "HR Management System", desc: "Complete HR solution with payroll, attendance, and performance tracking.", tech: ["Next.js", "Node.js", "MySQL"] },
  ],

  caseStudies: [
    {
      industry: "E-Commerce", client: "ShopEase UK",
      challenge: "Legacy system couldn't handle 10,000+ daily orders causing frequent crashes.",
      solution: "Rebuilt entire platform with microservices architecture and auto-scaling on AWS.",
      results: [{ value: "300%", label: "Performance Boost" }, { value: "99.9%", label: "Uptime" }, { value: "2x", label: "Revenue Growth" }],
    },
    {
      industry: "Healthcare", client: "MediTrack USA",
      challenge: "Manual patient record management causing errors and compliance issues.",
      solution: "Built HIPAA-compliant digital records system with role-based access control.",
      results: [{ value: "80%", label: "Error Reduction" }, { value: "5x", label: "Faster Records" }, { value: "100%", label: "Compliance" }],
    },
  ],

  testimonials: [
    { name: "James Carter", role: "CEO, TechVentures USA", text: "UniSoft delivered our SaaS platform 2 weeks ahead of schedule. The code quality and architecture are exceptional." },
    { name: "Sarah Mitchell", role: "CTO, E-Shop UK", text: "Our platform handles 10x more traffic now. UniSoft's team truly understands scalable software development." },
    { name: "Ahmed Al-Rashid", role: "Director, Gulf Digital", text: "Professional team, clean code, and excellent communication throughout the entire project." },
  ],

  faqs: [
    { q: "How long does software development take?", a: "Timeline depends on complexity. A basic app takes 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines after discovery." },
    { q: "Do you provide source code ownership?", a: "Yes, upon project completion and full payment, you receive complete source code ownership with no licensing restrictions." },
    { q: "What technologies do you specialize in?", a: "We specialize in React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and GCP." },
    { q: "Do you offer post-launch support?", a: "Yes, all plans include post-launch support. We offer monthly maintenance packages for ongoing updates and improvements." },
    { q: "Can you work with our existing codebase?", a: "Absolutely. We can audit, refactor, and extend existing codebases regardless of the original technology stack." },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={softwareSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Software Development", path: "/services/software-development" },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}