// app/privacy-policy/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIXES:
// 1. Added openGraph with image (social shares were broken — no image)
// 2. Added twitter card metadata
// 3. Converted keywords from array to comma-separated string (Next.js prefers string)
// 4. Added robots: noindex for legal pages is a valid choice but we keep index
//    so Google can find privacy page (trust signal) — keep as-is
// 5. Added breadcrumbSchema
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import SeoSchema from "../components/SeoSchema";
import { breadcrumbSchema } from "../lib/schema";
import "./privacy.css";

const title       = "Privacy Policy | UniSoft – AI Automation & Software Development";
const description =
  "Learn how UniSoft collects, uses, stores, and protects your information while providing AI automation, software development, web development, UI/UX design, and digital marketing services.";
const ogImage     = "https://unisoftpvt.com/og-image.jpg";

export const metadata = {
  title,
  description,
  keywords:
    "UniSoft Privacy Policy, software company privacy policy, AI automation privacy, data protection, Pakistan software house",
  alternates: {
    canonical: "https://unisoftpvt.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: false,   // legal pages: index but don't follow outbound links for PageRank
  },
  openGraph: {       // ← was missing
    type: "website",
    url: "https://unisoftpvt.com/privacy-policy",
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "UniSoft Privacy Policy" }],
  },
  twitter: {         // ← was missing
    card: "summary",
    site: "@unisoftpvt",
    title,
    description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <main className="policy-page">

        {/* Hero */}
        <section className="policy-hero" aria-labelledby="privacy-hero-heading">
          <div className="policy-hero-content">
            <h1 id="privacy-hero-heading">Privacy Policy</h1>
            <p>
              At <strong>UniSoft</strong>, your privacy is our priority.
              This Privacy Policy explains how we collect, process, store,
              protect, and use your personal information whenever you interact
              with our website, AI solutions, software development services,
              mobile applications, automation systems, and digital platforms.
            </p>
            <div className="policy-meta">
              <span>Effective Date: June 19, 2026</span>
              <span>Version 2.0</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="policy-content" aria-label="Privacy Policy Details">
          <div className="teamGradient" />
          <div className="teamGrid" />

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-shield-alt" aria-hidden="true"></i></div>
            <h2>1. Overview</h2>
            <p>UniSoft is committed to maintaining transparency, protecting customer privacy, and implementing industry-standard security practices.</p>
            <p>This Privacy Policy applies to every visitor, customer, business partner, and user of our website and services.</p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-laptop-code" aria-hidden="true"></i></div>
            <h2>2. Services Covered</h2>
            <ul>
              <li>AI Automation</li>
              <li>AI Agents &amp; Chatbots</li>
              <li>Website Development</li>
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>UI / UX Design</li>
              <li>SEO &amp; Digital Marketing</li>
              <li>Cloud Solutions</li>
              <li>Business Automation</li>
            </ul>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-database" aria-hidden="true"></i></div>
            <h2>3. Information We Collect</h2>
            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Information</li>
              <li>WhatsApp Conversations</li>
              <li>Website Contact Forms</li>
              <li>IP Address</li>
              <li>Browser Information</li>
              <li>Device Information</li>
              <li>Usage Analytics</li>
            </ul>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-chart-line" aria-hidden="true"></i></div>
            <h2>4. How We Use Information</h2>
            <ul>
              <li>Deliver requested services.</li>
              <li>Improve website performance.</li>
              <li>Develop AI-powered solutions.</li>
              <li>Provide customer support.</li>
              <li>Respond to inquiries.</li>
              <li>Prevent fraud.</li>
              <li>Maintain platform security.</li>
              <li>Comply with applicable laws.</li>
            </ul>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-robot" aria-hidden="true"></i></div>
            <h2>5. AI Services</h2>
            <p>
              If you interact with our AI chatbots, AI agents, automation workflows,
              or intelligent software, certain prompts, messages, and uploaded content
              may be processed solely to provide the requested functionality and improve
              service quality.
            </p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-cookie-bite" aria-hidden="true"></i></div>
            <h2>6. Cookies &amp; Tracking</h2>
            <ul>
              <li>Essential Cookies</li>
              <li>Performance Cookies</li>
              <li>Analytics Cookies</li>
              <li>Preference Cookies</li>
              <li>Security Cookies</li>
            </ul>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
            <h2>7. Third-Party Services</h2>
            <p>
              We may integrate with trusted providers including Google Analytics,
              Google Cloud, Meta (WhatsApp), payment gateways, hosting providers,
              AI platforms, and cloud infrastructure services.
            </p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-lock" aria-hidden="true"></i></div>
            <h2>8. Data Security</h2>
            <p>
              We implement encryption, secure authentication, access controls,
              firewall protection, continuous monitoring, and modern cybersecurity
              practices to safeguard your information.
            </p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-clock" aria-hidden="true"></i></div>
            <h2>9. Data Retention</h2>
            <p>
              Personal information is retained only for as long as necessary to
              fulfill contractual obligations, comply with legal requirements,
              resolve disputes, and improve our services.
            </p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-user-shield" aria-hidden="true"></i></div>
            <h2>10. Your Rights</h2>
            <ul>
              <li>Access your personal information.</li>
              <li>Correct inaccurate data.</li>
              <li>Request deletion.</li>
              <li>Withdraw consent.</li>
              <li>Request data portability.</li>
              <li>Object to processing where applicable.</li>
            </ul>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-child" aria-hidden="true"></i></div>
            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed toward children under 13 years of age.
              We do not knowingly collect personal information from children.
            </p>
          </article>

          <article className="policy-card">
            <div className="faq-icon icon"><i className="fa fa-sync-alt" aria-hidden="true"></i></div>
            <h2>12. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Any significant changes
              will be reflected by updating the effective date shown at the top of
              this page.
            </p>
          </article>
        </section>

        <article className="policy-card faq-card">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <div className="faq-icon"><i className="fa fa-shield" aria-hidden="true"></i></div>
            <div className="faq-content">
              <h3>Does UniSoft sell or share my personal information?</h3>
              <p>No. UniSoft does not sell, rent, or trade your personal information. Your data is used solely to provide our services, improve user experience, respond to inquiries, and fulfill legal obligations.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-icon"><i className="fa fa-trash" aria-hidden="true"></i></div>
            <div className="faq-content">
              <h3>Can I request that my personal data be deleted?</h3>
              <p>Yes. You may request access, correction, or permanent deletion of your personal information at any time by contacting our support team.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-icon"><i className="fa fa-lock" aria-hidden="true"></i></div>
            <div className="faq-content">
              <h3>How does UniSoft protect my information?</h3>
              <p>We use encrypted connections (HTTPS), secure cloud infrastructure, access control mechanisms, regular security monitoring, and modern cybersecurity practices.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-icon"><i className="fa fa-robot" aria-hidden="true"></i></div>
            <div className="faq-content">
              <h3>Are conversations with AI chatbots stored?</h3>
              <p>Some interactions may be temporarily processed to provide AI-powered responses and improve system performance. We do not use customer conversations for unrelated purposes without appropriate permission.</p>
            </div>
          </div>
        </article>

      </main>
    </>
  );
}