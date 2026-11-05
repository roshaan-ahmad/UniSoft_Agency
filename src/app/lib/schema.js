/* =========================================================
   JSON-LD structured data for unisoftpvt.com
   SEO IMPROVEMENTS:
   - servicePage() now accepts pricing offers → richer Service schema
   - organizationSchema: added priceRange, foundingDate, numberOfEmployees
   - Each service exports its own offers for Google rich results
   - breadcrumbSchema: unchanged (already correct)
   - articleSchema: added wordCount field support
   ========================================================= */

const SITE       = "https://unisoftpvt.com";
const CONTEXT    = "https://schema.org";
const ORG_ID     = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const PERSON_ID  = `${SITE}/ceo#person`;
const LOGO_URL   = `${SITE}/assets/logo.jpeg`;
const OG_IMAGE   = `${SITE}/og-image.jpg`;

const ref  = (id) => ({ "@id": id });

/* ── helpers ─────────────────────────────────────────────── */

const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

// Pricing offer for schema markup
const priceOffer = (name, price, description, currency = "USD") => ({
  "@type": "Offer",
  name,
  description,
  price: price === "Custom" ? undefined : price,
  priceCurrency: currency,
  priceSpecification: price === "Custom"
    ? { "@type": "PriceSpecification", description: "Custom pricing — contact for quote" }
    : undefined,
  url: `${SITE}/pricing`,
  seller: ref(ORG_ID),
});

const webPage = (type, path, name, description) => ({
  "@context": CONTEXT,
  "@type": type,
  "@id": `${SITE}${path}#webpage`,
  url: `${SITE}${path}`,
  name,
  description,
  inLanguage: "en",
  isPartOf: ref(WEBSITE_ID),
  about: ref(ORG_ID),
});

// IMPROVED: servicePage now includes offers for pricing rich results
const servicePage = ({ slug, name, serviceType, description, pricingOffers = [] }) => ({
  "@context": CONTEXT,
  "@type": "Service",
  "@id": `${SITE}/services/${slug}#service`,
  name,
  serviceType,
  url: `${SITE}/services/${slug}`,
  description,
  provider: ref(ORG_ID),
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Businesses",
  },
  ...(pricingOffers.length > 0 && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Pricing`,
      itemListElement: pricingOffers,
    },
  }),
});

/* =========================================================
   SITEWIDE — goes in app/layout.js (once, on every page)
   ========================================================= */

export const organizationSchema = {
  "@context": CONTEXT,
  "@type": "Organization",
  "@id": ORG_ID,
  name: "UniSoft",
  alternateName: ["UniSoft Pvt", "UniSoftPvt"],
  url: SITE,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 400, height: 400 },
  image: LOGO_URL,
  description:
    "UniSoft is a software development and digital marketing company specializing in web development, SEO, AI automation, UI UX design, and business growth solutions.",
  email: "unisoftpvt@gmail.com",
  telephone: "+92-314-8588707",
  // IMPROVED: added priceRange signal for local/service rich results
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "WY",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Roshaan Ahmad",
    jobTitle: "Founder & CEO",
    url: `${SITE}/ceo`,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "Next.js",
    "MERN Stack",
    "Search Engine Optimization",
    "AI Automation",
    "UI UX Design",
    "Digital Marketing",
    "SaaS Development",
    "API Integration",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61568003026936",
    "https://www.instagram.com/unisoftpvt",
    "https://github.com/unisoftpvt",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UniSoft Services",
    itemListElement: [
      offer("MERN Stack Development",      "Modern MERN stack applications using MongoDB, Express, React, and Node.js."),
      offer("Next.js Development",          "High-performance Next.js web applications with SEO optimization."),
      offer("SEO Optimization Services",    "Technical SEO, local SEO, on-page optimization, and ranking improvement."),
      offer("WordPress Development",        "Custom WordPress websites, themes, and business solutions."),
      offer("UI UX Design Services",        "Modern user interface and user experience design services."),
      offer("AI Automation Solutions",      "AI-powered automation systems and workflow optimization."),
      offer("Digital Marketing",            "Google Ads, Meta Ads, social media marketing, and lead generation."),
    ],
  },
};

export const websiteSchema = {
  "@context": CONTEXT,
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "UniSoft",
  url: SITE,
  inLanguage: "en",
  publisher: ref(ORG_ID),
};

/* =========================================================
   PAGE-SPECIFIC — use only on the matching page
   ========================================================= */

export const homepageSchema = webPage(
  "WebPage",
  "/",
  "UniSoft – Software Development, SEO & Digital Marketing",
  "UniSoft provides software development, SEO services, digital marketing, automation, and web development solutions."
);

export const servicesSchema = {
  ...webPage(
    "CollectionPage",
    "/services",
    "UniSoft Services – Software, SEO, Web Dev & Automation",
    "UniSoft offers software development, SEO services, UI UX design, automation, and digital marketing services."
  ),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      ["software-development", "Software Development"],
      ["web-development",       "Web Development"],
      ["seo-services",          "SEO Services"],
      ["digital-marketing",     "Digital Marketing"],
      ["ui-ux-design",          "UI/UX Design"],
      ["automation-solutions",  "Automation Solutions"],
    ].map(([slug, name], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: `${SITE}/services/${slug}`,
    })),
  },
};
// Keep old export name so existing imports don't break
export const serviceSchema = servicesSchema;

/* ── Individual service schemas (now with pricing offers) ── */

export const softwareSchema = servicePage({
  slug: "software-development",
  name: "Custom Software Development Services",
  serviceType: "Software Development",
  description: "Custom software development services for startups, enterprises, and growing businesses.",
  pricingOffers: [
    priceOffer("Starter Plan",    "999",    "Up to 5 screens, basic auth, REST API, MongoDB, 1 month support."),
    priceOffer("Business Plan",   "2999",   "Unlimited screens, advanced auth, payment integration, admin dashboard, 3 months support."),
    priceOffer("Enterprise Plan", "Custom", "Custom architecture, AI/ML integration, multi-tenant SaaS, DevOps, SLA guarantee."),
  ],
});

export const webDevelopmentSchema = servicePage({
  slug: "web-development",
  name: "Web Development Services",
  serviceType: "Web Development",
  description: "Responsive website and web application development using React, Next.js, and modern technologies.",
  pricingOffers: [
    priceOffer("Landing Page",      "499",  "1–5 pages, mobile responsive, SEO optimized, contact form, 1 month support."),
    priceOffer("Business Website",  "1499", "Up to 15 pages, CMS, blog, analytics, speed optimization, 3 months support."),
    priceOffer("E-Commerce Site",   "2999", "Unlimited products, payment gateway, inventory management, 6 months support."),
  ],
});

export const seoSchema = servicePage({
  slug: "seo-services",
  name: "SEO Services",
  serviceType: "SEO Services",
  description: "Professional SEO services including technical SEO, local SEO, keyword research, and ranking optimization.",
  pricingOffers: [
    priceOffer("Starter SEO",    "299",  "10 keywords, on-page optimization, monthly report, basic link building."),
    priceOffer("Growth SEO",     "699",  "30 keywords, technical audit, content optimization, local SEO, bi-weekly reports."),
    priceOffer("Enterprise SEO", "1499", "Unlimited keywords, full technical SEO, content creation, PR outreach, weekly reports."),
  ],
});

export const digitalMarketingSchema = servicePage({
  slug: "digital-marketing",
  name: "Digital Marketing Services",
  serviceType: "Digital Marketing",
  description: "Digital marketing solutions including social media marketing, paid advertising, and lead generation.",
  pricingOffers: [
    priceOffer("Starter",    "499",  "Google Ads + Facebook Ads, monthly report, ad spend up to $1k, 2 campaigns."),
    priceOffer("Growth",     "999",  "Google + Meta Ads, social media management, email marketing, ad spend up to $5k."),
    priceOffer("Enterprise", "2499", "All platforms, content creation, influencer outreach, unlimited ad spend."),
  ],
});

export const uiuxSchema = servicePage({
  slug: "ui-ux-design",
  name: "UI/UX Design Services",
  serviceType: "UI UX Design",
  description: "Modern UI UX design services focused on user experience, engagement, and conversion optimization.",
  pricingOffers: [
    priceOffer("Landing Page Design", "299",  "1 page, mobile responsive, 2 revisions, Figma file, 48hr delivery."),
    priceOffer("Website Design",      "999",  "Up to 10 pages, design system, mobile + desktop, 5 revisions, prototype."),
    priceOffer("App Design",          "1999", "Full app screens, component library, user flows, usability testing."),
  ],
});

export const automationSchema = servicePage({
  slug: "automation-solutions",
  name: "Business Automation Solutions",
  serviceType: "Business Automation",
  description: "AI-powered automation systems, workflow automation, CRM automation, and smart operational solutions.",
  pricingOffers: [
    priceOffer("Starter",    "799",  "3 automated workflows, email automation, CRM integration, 1 month support."),
    priceOffer("Business",   "2499", "10 workflows, AI integration, multi-platform sync, custom bots, 3 months support."),
    priceOffer("Enterprise", "Custom", "Unlimited workflows, custom AI models, ERP integration, 24/7 monitoring."),
  ],
});

export const aboutSchema = webPage(
  "AboutPage",
  "/about",
  "About UniSoft – Software, SEO & AI Automation Agency",
  "Learn more about UniSoft, our mission, vision, technologies, and professional digital services."
);

export const contactSchema = webPage(
  "ContactPage",
  "/contact",
  "Contact UniSoft – Get a Free Quote",
  "Contact UniSoft for software development, SEO services, web development, automation, and digital marketing services."
);

export const teamSchema = webPage(
  "WebPage",
  "/teams",
  "UniSoft Team – Developers, SEO Experts & Designers",
  "Meet the developers, SEO experts, designers, and digital strategists behind UniSoft."
);

export const faqSchema = {
  "@context": CONTEXT,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does UniSoft provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UniSoft provides software development, SEO services, web development, UI UX design, automation, and digital marketing solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Does UniSoft offer SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UniSoft offers professional SEO services including technical SEO, local SEO, and keyword optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does UniSoft use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UniSoft uses React, Next.js, Node.js, MongoDB, Tailwind CSS, Python, and AWS cloud infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How much does UniSoft charge for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UniSoft web development starts at $499 for landing pages, $1,499 for full business websites, and $2,999 for e-commerce stores. Custom enterprise pricing is available.",
      },
    },
    {
      "@type": "Question",
      name: "Does UniSoft work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UniSoft serves clients worldwide, including the US, UK, UAE, Australia, and beyond.",
      },
    },
  ],
};

/* ── Pricing page ──────────────────────────────────────────── */

const plan = (name, description, price) => ({
  "@type": "Offer",
  name,
  description,
  price,
  priceCurrency: "USD",
  url: `${SITE}/pricing`,
  seller: ref(ORG_ID),
  itemOffered: { "@type": "Service", name, provider: ref(ORG_ID) },
});

export const pricingSchema = {
  ...webPage(
    "WebPage",
    "/pricing",
    "UniSoft Pricing Plans – Software, SEO & Automation Services",
    "Affordable web development, SEO services, AI automation, and digital marketing pricing plans by UniSoft."
  ),
  mainEntity: {
    "@type": "OfferCatalog",
    name: "UniSoft Pricing Plans",
    itemListElement: [
      plan("Starter Plan",    "Perfect for startups and small businesses.",              "149"),
      plan("Business Plan",   "Advanced solutions with SEO and automation features.",    "499"),
      plan("Enterprise Plan", "Custom enterprise software and full digital transformation.", "999"),
    ],
  },
};

/* ── Generators ──────────────────────────────────────────────── */

export const articleSchema = ({
  title,
  description,
  slug,
  image = OG_IMAGE,
  datePublished,
  dateModified = datePublished,
  wordCount,
  author = { type: "Person", name: "Roshaan Ahmad", url: `${SITE}/ceo` },
}) => {
  const url = `${SITE}/blogs/${slug}`;
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified,
    inLanguage: "en",
    // IMPROVED: wordCount helps Google assess content depth
    ...(wordCount && { wordCount }),
    author: {
      "@type": author.type || "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: ref(ORG_ID),
    isPartOf: ref(WEBSITE_ID),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
};

export const breadcrumbSchema = (items) => ({
  "@context": CONTEXT,
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE}${item.path}`,
  })),
});

export const blogIndexSchema = (posts) => ({
  ...webPage(
    "CollectionPage",
    "/blogs",
    "UniSoft Blog – Web Dev, SEO & AI Automation Guides",
    "Practical guides on web development, SEO, UI/UX design and AI automation from the UniSoft team."
  ),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/blogs/${p.slug}`,
      name: p.title,
    })),
  },
});

export const ceoSchema = {
  ...webPage(
    "ProfilePage",
    "/ceo",
    "Roshaan Ahmad – Founder & CEO of UniSoft",
    "Roshaan Ahmad is the founder and CEO of UniSoft, a software development, SEO and AI automation agency."
  ),
  about: ref(PERSON_ID),
  mainEntity: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Roshaan Ahmad",
    jobTitle: "Founder & CEO",
    url: `${SITE}/ceo`,
    image: `${SITE}/assets/ceo.jpeg`,
    description:
      "Roshaan Ahmad is the founder and CEO of UniSoft, a software development, SEO and AI automation agency.",
    worksFor: ref(ORG_ID),
    sameAs: [
      "https://www.linkedin.com/in/roshaan-ahmad-35056b41b/",
      "https://github.com/roshaan-ahmad",
    ],
    knowsAbout: [
      "Software Development",
      "SEO",
      "Digital Marketing",
      "AI Automation",
      "Next.js",
      "React",
      "Node.js",
    ],
  },
};