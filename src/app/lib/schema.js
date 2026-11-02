/* =========================================================
   JSON-LD structured data for unisoftpvt.com
   - Organization + WebSite go in app/layout.js (sitewide, once)
   - Everything else goes only on the page it describes
========================================================= */

const SITE = "https://unisoftpvt.com";
const CONTEXT = "https://schema.org";
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const PERSON_ID = `${SITE}/ceo#person`;

// The live site loads its logo from /assets/logo.jpeg.
// If /logo.png really exists on your server, you can switch back to it.
const LOGO_URL = `${SITE}/assets/logo.jpeg`;
const OG_IMAGE = `${SITE}/og-image.jpg`;

const ref = (id) => ({ "@id": id });

const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

/* ---------- helpers ---------- */

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

const servicePage = ({ slug, name, serviceType, description }) => ({
  "@context": CONTEXT,
  "@type": "Service",
  "@id": `${SITE}/services/${slug}#service`,
  name,
  serviceType,
  url: `${SITE}/services/${slug}`,
  description,
  provider: ref(ORG_ID),
  areaServed: "Worldwide",
});

/* =========================================================
   SITEWIDE (put in app/layout.js)
========================================================= */

export const organizationSchema = {
  "@context": CONTEXT,
  "@type": "Organization",
  "@id": ORG_ID,
  name: "UniSoft",
  alternateName: ["UniSoft Pvt", "UniSoftPvt"], // helps separate you from other "UniSoft" companies
  url: SITE,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  image: LOGO_URL,
  description:
    "UniSoft is a software development and digital marketing company specializing in web development, SEO, AI automation, UI UX design, and business growth solutions.",
  email: "unisoftpvt@gmail.com", // switch to info@unisoftpvt.com once you have it
  telephone: "+92-314-8588707",
  // Keep this identical to the address/phone shown on your Contact page and footer.
  address: { "@type": "PostalAddress", addressRegion: "WY", addressCountry: "US" },
  // Same @id as the full Person on /ceo, so Google treats them as one entity.
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
  ],
  // Only list profiles that exist. Add LinkedIn here once the page is live.
  sameAs: [
    "https://www.facebook.com/profile.php?id=61568003026936",
    "https://www.instagram.com/unisoftpvt",
    "https://github.com/unisoftpvt",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UniSoft Services",
    itemListElement: [
      offer("MERN Stack Development", "Modern MERN stack applications using MongoDB, Express, React, and Node.js."),
      offer("Next.js Development", "High-performance Next.js web applications with SEO optimization."),
      offer("SEO Optimization Services", "Technical SEO, local SEO, on-page optimization, and ranking improvement services."),
      offer("WordPress Development", "Custom WordPress websites, themes, and business solutions."),
      offer("UI UX Design Services", "Modern user interface and user experience design services."),
      offer("AI Automation Solutions", "AI-powered automation systems and workflow optimization solutions."),
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
  // SearchAction removed: Google retired the sitelinks search box,
  // and your site has no /search page for it to point to.
};

/* =========================================================
   PAGE-SPECIFIC (use only on the matching page)
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
    "UniSoft Services",
    "UniSoft offers software development, SEO services, UI UX design, automation, and digital marketing services."
  ),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      ["software-development", "Software Development"],
      ["web-development", "Web Development"],
      ["seo-services", "SEO Services"],
      ["digital-marketing", "Digital Marketing"],
      ["ui-ux-design", "UI/UX Design"],
      ["automation-solutions", "Automation Solutions"],
    ].map(([slug, name], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: `${SITE}/services/${slug}`,
    })),
  },
};
// Old name kept so existing imports don't break.
export const serviceSchema = servicesSchema;

// Slugs below match your real routes (note: seo-services, automation-solutions)
export const softwareSchema = servicePage({
  slug: "software-development",
  name: "Software Development Services",
  serviceType: "Software Development",
  description: "Custom software development services for startups, enterprises, and growing businesses.",
});

export const webDevelopmentSchema = servicePage({
  slug: "web-development",
  name: "Web Development Services",
  serviceType: "Web Development",
  description: "Responsive website and web application development services using React, Next.js, and modern technologies.",
});

export const seoSchema = servicePage({
  slug: "seo-services",
  name: "SEO Services",
  serviceType: "SEO Services",
  description: "Professional SEO services including technical SEO, local SEO, keyword research, and ranking optimization.",
});

export const digitalMarketingSchema = servicePage({
  slug: "digital-marketing",
  name: "Digital Marketing Services",
  serviceType: "Digital Marketing",
  description: "Digital marketing solutions including social media marketing, paid advertising, and lead generation.",
});

export const uiuxSchema = servicePage({
  slug: "ui-ux-design",
  name: "UI/UX Design Services",
  serviceType: "UI UX Design",
  description: "Modern UI UX design services focused on user experience, engagement, and conversion optimization.",
});

export const automationSchema = servicePage({
  slug: "automation-solutions",
  name: "Automation Solutions",
  serviceType: "Automation Solutions",
  description: "Business automation systems, AI integrations, workflow automation, and smart operational solutions.",
});

export const aboutSchema = webPage(
  "AboutPage",
  "/about",
  "About UniSoft",
  "Learn more about UniSoft, our mission, vision, technologies, and professional digital services."
);

export const contactSchema = webPage(
  "ContactPage",
  "/contact",
  "Contact UniSoft",
  "Contact UniSoft for software development, SEO services, web development, automation, and digital marketing services."
);

// Don't mark up people on this page until they are real, named team members.
// Then add:  employee: [{ "@type": "Person", name, jobTitle, image }]
export const teamSchema = webPage(
  "WebPage",
  "/teams",
  "UniSoft Team",
  "Meet the developers, SEO experts, designers, and digital strategists behind UniSoft."
);

// Only use where these exact Q&As are visible on the page.
// Google no longer shows FAQ rich results for most sites, but valid markup is harmless.
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
        text: "UniSoft uses React, Next.js, Node.js, MongoDB, Tailwind CSS, and modern scalable technologies.",
      },
    },
  ],
};

/* =========================================================
   PRICING
   IMPORTANT: the prices below must match what is visible on /pricing.
   I couldn't load that page, so verify before shipping.
========================================================= */

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
    "UniSoft Pricing Plans",
    "Affordable web development, SEO services, AI automation, and digital marketing pricing plans by UniSoft."
  ),
  mainEntity: {
    "@type": "OfferCatalog",
    name: "UniSoft Pricing Plans",
    itemListElement: [
      plan("Starter Plan", "Perfect for startups and small businesses looking to establish an online presence.", "149"),
      plan("Business Plan", "Advanced business solutions with SEO optimization and automation features.", "499"),
      plan("Enterprise Plan", "Custom enterprise-grade software, AI systems, and full-scale digital transformation.", "999"),
    ],
  },
};

/* =========================================================
   GENERATORS
========================================================= */

// Blog post. Route is /blogs/<slug> (plural), matching your real URLs.
export const articleSchema = ({
  title,
  description,
  slug,
  image = OG_IMAGE,
  datePublished, // ISO 8601, e.g. "2026-03-14"
  dateModified = datePublished,
  // Person by default; pass { type: "Organization", name: "UniSoft", url } for company-written posts
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

// Usage: breadcrumbSchema([{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:"SEO Services",path:"/services/seo-services"}])
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

// Blog index (/blogs): pass the blogs array
export const blogIndexSchema = (posts) => ({
  ...webPage(
    "CollectionPage",
    "/blogs",
    "UniSoft Blog",
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

// /ceo page: ProfilePage wrapping the full Person.
// sameAs must match the profile links visible on the page.
// Add honorificPrefix: "Dr." ONLY if he holds a doctorate.
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