import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { organizationSchema, websiteSchema } from "./lib/schema.js";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1056662588590287"
          crossorigin="anonymous"></script>
        <title>UniSoft - Software Development, SEO & Digital Marketing Agency</title>

        <meta
          name="description"
          content="UniSoft is a professional software development company offering web development, SEO services, UI/UX design, automation, and digital marketing solutions to grow your business online."
        />

        <meta
          name="keywords"
          content="software development company, web development, SEO agency, digital marketing services, UI UX design, automation solutions, Next.js development, React developers"
        />

        <link rel="canonical" href="https://unisoftpvt.com" />

        {/* Open Graph (Facebook / LinkedIn SEO) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UniSoft - Software & Digital Growth Agency" />
        <meta
          property="og:description"
          content="We build scalable software, SEO systems, and automation tools to grow businesses globally."
        />
        <meta property="og:url" content="https://unisoftpvt.com" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UniSoft - Software Development Company" />
        <meta
          name="twitter:description"
          content="Grow your business with UniSoft software, SEO, and automation services."
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <NavBar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
        <a
          href="https://wa.me/923148588707"
          target="_blank"
          rel="noopener noreferrer"
          className="waFloatBtn"
          aria-label="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-fill"></i>
          <span className="waFloatLabel">Chat with us</span>
        </a>
      </body>
    </html>
  );
}