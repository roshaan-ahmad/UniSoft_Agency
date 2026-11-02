// app/blogs/page.js   (server component)
import Link from "next/link";
import { blogs } from "./data.js";
import SeoSchema from "../components/SeoSchema";
import { blogIndexSchema, breadcrumbSchema } from "../lib/schema";
import { getExcerpt, formatDate } from "./utils";

const description =
  "Practical guides on Next.js, web development, SEO, UI/UX design and AI automation for businesses, written by the UniSoft team.";

// This page had no metadata, so it inherited the homepage canonical/title.
export const metadata = {
  title: "Blog – Web Development, SEO & AI Insights",
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    siteName: "UniSoft",
    title: "UniSoft Blog – Web Development, SEO & AI Insights",
    description,
    images: ["/og-image.jpg"],
  },
};

export default function BlogsPage() {
  return (
    <section className="blogSection">
      <SeoSchema schema={blogIndexSchema(blogs)} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ])}
      />

      <div className="blogBgGlow"></div>

      <div className="blogContainer">
        <div className="blogHeader">
          <h1>UniSoft Blogs</h1>
          <p>Web Development, SEO & Software Insights</p>
        </div>

        <div className="blogGrid">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              className="blogCard"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="blogCardInner">
                  {/* real category instead of the hard-coded "Article" */}
                  <div className="blogTag">{blog.category}</div>

                  <h2>{blog.title}</h2>

                  {/* clean excerpt: no "##", no mid-word cut-off */}
                  <p>{getExcerpt(blog, 140)}</p>

                  <div className="blogFooter">
                    {blog.date && (
                      <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                    )}
                    <span>Read article →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}