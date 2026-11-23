// app/services/automation-solutions/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES:
// 1. Added openGraph with image dimensions (social shares now show preview image)
// 2. Added twitter card metadata
// 3. Added keywords
// 4. Added breadcrumbSchema in JSX (rich snippet eligible)
// 5. Added explicit robots directive
// ─────────────────────────────────────────────────────────────────────────────

import ServiceTemplate from "@/app/components/ServiceTemplate";
import SeoSchema from "@/app/components/SeoSchema";
import { automationSchema, breadcrumbSchema } from "@/app/lib/schema";

const BASE = "https://unisoftpvt.com";
const PAGE_URL = `${BASE}/services/automation-solutions`;
const OG_IMAGE = `${BASE}/og-image.jpg`;
const title = "Business Automation Solutions | UniSoft";
const description =
  "AI-powered business automation, workflow optimization, CRM automation, and smart systems by UniSoft to save time and scale operations.";

export const metadata = {
  title,
  description,
  keywords: [
    "business automation solutions",
    "AI workflow automation",
    "CRM automation",
    "process automation",
    "robotic process automation",
    "automation agency Pakistan",
    "Zapier Make automation",
    "workflow optimization",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    // ← was missing image object
    type: "website",
    url: PAGE_URL,
    title,
    description,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Business Automation Solutions by UniSoft",
      },
    ],
  },
  twitter: {
    // ← was missing entirely
    card: "summary_large_image",
    site: "@unisoftpvt",
    title,
    description,
    images: [OG_IMAGE],
  },
};

const data = {
  badge: "⚙️ AUTOMATION SOLUTIONS",
  title: "Smart Business Automation & AI Workflow Systems",
  shortTitle: "Automation Solutions",
  icon: "ri-cpu-line",
  intro:
    "We build intelligent automation systems that eliminate repetitive tasks, reduce manual work, improve efficiency, and scale your business operations using AI and modern cloud technologies.",
  benefits: [
    {
      icon: "ri-time-line",
      title: "Save 40+ Hours/Week",
      desc: "Automate repetitive tasks and free your team to focus on high-value work.",
    },
    {
      icon: "ri-error-warning-line",
      title: "Eliminate Human Error",
      desc: "Automated systems execute tasks perfectly every time without mistakes.",
    },
    {
      icon: "ri-scales-line",
      title: "Scale Without Hiring",
      desc: "Handle 10x more work with the same team through intelligent automation.",
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "Reduce Operational Costs",
      desc: "Cut operational costs by up to 60% by automating manual processes.",
    },
    {
      icon: "ri-speed-line",
      title: "Faster Execution",
      desc: "Automated workflows complete tasks in seconds that take humans hours.",
    },
    {
      icon: "ri-bar-chart-line",
      title: "Better Data & Insights",
      desc: "Automated data collection and reporting for smarter business decisions.",
    },
  ],
  features: [
    {
      title: "AI-Powered Workflow Automation",
      desc: "Intelligent automation that learns and adapts to your business processes over time.",
    },
    {
      title: "CRM & Sales Automation",
      desc: "Automate lead capture, follow-ups, pipeline management, and sales reporting.",
    },
    {
      title: "Email & Marketing Automation",
      desc: "Triggered email sequences, lead nurturing, and automated campaign management.",
    },
    {
      title: "API & System Integration",
      desc: "Connect all your tools and platforms for seamless data flow and automation.",
    },
    {
      title: "Document & Report Automation",
      desc: "Auto-generate invoices, reports, contracts, and business documents.",
    },
    {
      title: "Custom Automation Bots",
      desc: "Purpose-built bots for data scraping, processing, and task execution.",
    },
  ],
  process: [
    {
      title: "Process Audit",
      desc: "Mapping all your current manual processes to identify automation opportunities.",
    },
    {
      title: "ROI Analysis",
      desc: "Calculating time and cost savings for each automation to prioritize implementation.",
    },
    {
      title: "System Design",
      desc: "Designing the automation architecture and selecting the right tools and platforms.",
    },
    {
      title: "Development & Integration",
      desc: "Building and integrating automation systems with your existing tools.",
    },
    {
      title: "Testing & Validation",
      desc: "Thorough testing to ensure automations work correctly in all scenarios.",
    },
    {
      title: "Training & Handover",
      desc: "Team training and documentation so you can manage and expand automations.",
    },
  ],
  technologies: [
    { icon: "ri-robot-line", name: "OpenAI API" },
    { icon: "ri-settings-3-line", name: "Zapier" },
    { icon: "ri-flow-chart", name: "Make (Integromat)" },
    { icon: "ri-cloud-line", name: "AWS Lambda" },
    { icon: "ri-nodejs-line", name: "Node.js" },
    { icon: "ri-python-line", name: "Python" },
    { icon: "ri-database-2-line", name: "MongoDB" },
    { icon: "ri-mail-line", name: "SendGrid" },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$799",
      desc: "Basic automation for small businesses.",
      features: [
        "3 automated workflows",
        "Email automation",
        "CRM integration",
        "Basic reporting",
        "1 month support",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "$2,499",
      desc: "Comprehensive automation for growing businesses.",
      features: [
        "10 workflows",
        "AI integration",
        "Multi-platform sync",
        "Custom bots",
        "Dashboard",
        "3 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale automation for complex operations.",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "ERP integration",
        "24/7 monitoring",
        "Dedicated engineer",
        "12 months support",
      ],
      popular: false,
    },
  ],
  industries: [
    { icon: "ri-store-line", name: "E-Commerce" },
    { icon: "ri-bank-line", name: "Finance" },
    { icon: "ri-hospital-line", name: "Healthcare" },
    { icon: "ri-building-line", name: "Real Estate" },
    { icon: "ri-truck-line", name: "Logistics" },
    { icon: "ri-briefcase-line", name: "Professional Services" },
    { icon: "ri-graduation-cap-line", name: "Education" },
    { icon: "ri-restaurant-line", name: "Food & Beverage" },
  ],
  portfolio: [
    {
      tag: "CRM Automation",
      title: "SalesForce Pro Automation",
      desc: "Automated entire sales pipeline from lead capture to contract signing, saving 30 hours/week.",
      tech: ["Zapier", "HubSpot", "Node.js"],
    },
    {
      tag: "E-Commerce",
      title: "OrderFlow Automation",
      desc: "Automated order processing, inventory updates, and customer notifications for 500+ daily orders.",
      tech: ["Node.js", "MongoDB", "SendGrid"],
    },
    {
      tag: "AI Automation",
      title: "SmartSupport AI Bot",
      desc: "AI-powered customer support bot handling 80% of inquiries automatically with 95% satisfaction.",
      tech: ["OpenAI", "Node.js", "MongoDB"],
    },
  ],
  caseStudies: [
    {
      industry: "E-Commerce",
      client: "OrderFlow Store",
      challenge:
        "Team spending 40 hours/week manually processing orders, updating inventory, and sending notifications.",
      solution:
        "Built end-to-end order automation system integrating Shopify, warehouse, and email systems.",
      results: [
        { value: "40hrs", label: "Saved Weekly" },
        { value: "99.9%", label: "Accuracy" },
        { value: "60%", label: "Cost Reduction" },
      ],
    },
    {
      industry: "Professional Services",
      client: "ConsultPro Agency",
      challenge:
        "Sales team manually following up with 200+ leads per week, missing opportunities due to delays.",
      solution:
        "Implemented AI-powered CRM automation with intelligent follow-up sequences and lead scoring.",
      results: [
        { value: "3x", label: "More Conversions" },
        { value: "0", label: "Missed Follow-ups" },
        { value: "50%", label: "Sales Cycle Shorter" },
      ],
    },
  ],
  testimonials: [
    {
      name: "Tom Richards",
      role: "COO, OrderFlow Store",
      text: "UniSoft's automation saved us 40 hours every week. Our team now focuses on growth instead of manual tasks.",
    },
    {
      name: "Maria Santos",
      role: "CEO, ConsultPro",
      text: "Our sales conversion tripled after implementing UniSoft's CRM automation. Best investment we've made.",
    },
    {
      name: "Kevin Zhang",
      role: "CTO, TechOps Inc",
      text: "The AI automation system UniSoft built handles 80% of our customer support. Incredible technology.",
    },
  ],
  faqs: [
    {
      q: "What processes can be automated?",
      a: "Almost any repetitive process can be automated — email follow-ups, data entry, report generation, order processing, lead management, invoicing, and more.",
    },
    {
      q: "Do I need technical knowledge to use the automations?",
      a: "No. We build user-friendly automation systems with dashboards you can monitor and manage without any technical knowledge.",
    },
    {
      q: "How long does automation setup take?",
      a: "Simple automations take 1-2 weeks. Complex multi-system integrations typically take 4-8 weeks depending on scope.",
    },
    {
      q: "Will automation work with my existing tools?",
      a: "Yes. We integrate with 500+ tools including Salesforce, HubSpot, Shopify, QuickBooks, Slack, Gmail, and most business software.",
    },
    {
      q: "What happens if an automation fails?",
      a: "We build error handling and alerting into every automation. You'll be notified immediately of any issues and we provide rapid support.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <SeoSchema schema={automationSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Automation Solutions",
            path: "/services/automation-solutions",
          },
        ])}
      />
      <ServiceTemplate data={data} />
    </>
  );
}
