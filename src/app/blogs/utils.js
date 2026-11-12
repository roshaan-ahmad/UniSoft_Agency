// app/blogs/utils.js  (shared by the blog list page and the blog detail page)

// Markdown -> plain text (for excerpts / meta descriptions)
const stripMarkdown = (s) =>
  s
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

// Cut at a word boundary instead of mid-word
export function truncate(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 40 ? cut.slice(0, lastSpace) : cut;
  return base.replace(/[,.;:–—-]\s*$/, "") + "…";
}

// Uses blog.excerpt when present, else the first real paragraph of the content
export function getExcerpt(blog, max = 140) {
  if (blog.excerpt) return truncate(blog.excerpt, max);
  const firstParagraph = blog.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^[#\-\d`]/.test(p));
  return truncate(stripMarkdown(firstParagraph || blog.content), max);
}

export const getDescription = (blog) => getExcerpt(blog, 155);

// Cleans small markdown problems in the existing posts so they render correctly:
//  - closing code fence stuck to the last code line (}```)  -> own line
//  - "Step 1: ..." lines                                      -> ordered list
export function normalizeContent(content) {
  return content
    .replace(/([^\n`])```/g, "$1\n```")
    .replace(/^Step (\d+):\s*/gm, "$1. ")
    .trim();
}

export function formatDate(iso) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Category -> the service page each post should link to (internal linking)
export const SERVICE_LINKS = {
  "Web Development": { href: "/services/web-development", label: "web development services" },
  SEO: { href: "/services/seo", label: "SEO services" },
  "UI/UX Design": { href: "/services/ui-ux-design", label: "UI/UX design services" },
  "AI & Automation": { href: "/services/automation", label: "AI automation solutions" },
  "Software Development": { href: "/services/software-development", label: "software development services" },
  Company: { href: "/services", label: "services" },
};