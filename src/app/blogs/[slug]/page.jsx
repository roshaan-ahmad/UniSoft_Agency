// app/blogs/[slug]/page.js   (server component)
// npm i react-markdown remark-gfm remark-breaks

import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { blogs } from "../data";
import SeoSchema from "../../components/SeoSchema";
import { articleSchema, breadcrumbSchema } from "../../lib/schema";
import {
  getDescription,
  normalizeContent,
  formatDate,
  SERVICE_LINKS,
} from "../utils";
import "../blogs.css";
// Pre-build every post and 404 anything else
export const dynamicParams = false;
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

// Keep your existing CSS classes on the rendered markdown
const mdComponents = {
  p: ({ node, ...props }) => <p className="blog-p" {...props} />,
  li: ({ node, ...props }) => <li className="blog-li" {...props} />,
  h3: ({ node, ...props }) => <h3 className="blog-h3" {...props} />,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return { title: "Article not found", robots: { index: false } };

  const description = getDescription(blog);
  const url = `/blogs/${slug}`;
  const image = blog.image || "/og-image.jpg";
  // Titles over ~55 chars get cut off in Google. Add a short `seoTitle` to long posts.
  // (Assumes layout.js has title.template "%s | UniSoft"; if not, append " | UniSoft" here.)
  const title = blog.seoTitle || blog.title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "UniSoft",
      title,
      description,
      images: [image],
      ...(blog.date && { publishedTime: blog.date }),
      ...((blog.updated || blog.date) && { modifiedTime: blog.updated || blog.date }),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const description = getDescription(blog);
  const service = SERVICE_LINKS[blog.category] || SERVICE_LINKS.Company;

  const related = [
    ...blogs.filter((b) => b.slug !== slug && b.category === blog.category),
    ...blogs.filter((b) => b.slug !== slug && b.category !== blog.category),
  ].slice(0, 3);

  const author = blog.author
    ? { type: "Person", name: blog.author }
    : { type: "Organization", name: "UniSoft", url: "https://unisoftpvt.com" };

  return (
    <section className="blogPage">
      <div className="blogGlow" />

      <SeoSchema
        schema={articleSchema({
          title: blog.title,
          description,
          slug,
          datePublished: blog.date,
          dateModified: blog.updated || blog.date,
          author,
        })}
      />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: blog.title, path: `/blogs/${slug}` },
        ])}
      />

      <article className="blogWrapper">
        {/* HEADER */}
        <header className="blogHeader">
          <span className="blogBadge">{blog.category}</span>

          <h1 id="blogTitle">{blog.title}</h1>

          <p className="blogMeta">
            {blog.author ? (
              <>
                By <strong>{blog.author}</strong> at{" "}
              </>
            ) : (
              "Published by "
            )}
            <strong>
              <Link href="/">UniSoft</Link>
            </strong>
            {blog.date && (
              <>
                {" "}
                • <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              </>
            )}
            {blog.updated && blog.updated !== blog.date && (
              <>
                {" "}
                • Updated <time dateTime={blog.updated}>{formatDate(blog.updated)}</time>
              </>
            )}
            {blog.readTime && <> • {blog.readTime}</>}
          </p>
        </header>

        {/* CONTENT: real markdown -> real h2/h3/ul/ol/pre */}
        <div className="blogContent">
          <Markdown remarkPlugins={[remarkGfm, remarkBreaks]} components={mdComponents}>
            {normalizeContent(blog.content)}
          </Markdown>
        </div>

        {/* INTERNAL LINKS: service page + conversion page */}
        <aside className="blogCta">
          <h2>Ready to put this into practice?</h2>
          <p>
            See our <Link href={service.href}>{service.label}</Link> or{" "}
            <Link href="/quote">get a free consultation</Link>.
          </p>
        </aside>

        {/* RELATED POSTS */}
        <nav className="blogRelated" aria-label="Related articles">
          <h2>Keep reading</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blogs/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>

      <footer className="blogFooter">
        © {new Date().getFullYear()} UniSoft. All rights reserved.
      </footer>
    </section>
  );
}