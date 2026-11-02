// app/about/page.js  (SERVER component: no "use client" here)
import AboutClient from "./AboutClient";
import SeoSchema from "../components/SeoSchema";
import { aboutSchema, breadcrumbSchema } from "../lib/schema";

const description =
  "UniSoft is a software development and digital growth agency building web apps, SEO systems and AI automation for businesses worldwide. Meet our team and see how we work.";

export const metadata = {
  title: "About UniSoft – Software, SEO & AI Automation",
  description,
  alternates: { canonical: "/about" },
  // Setting openGraph here replaces the layout's openGraph object, so repeat the image.
  openGraph: {
    type: "website",
    url: "/about",
    title: "About UniSoft – Software, SEO & AI Automation",
    description,
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <SeoSchema schema={aboutSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutClient />
    </>
  );
}