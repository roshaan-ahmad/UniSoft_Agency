// src/app/ceo/page.jsx   (server component)
import Image from "next/image";
import Link from "next/link";
import "../../app/ceo/ceo.css";
import SeoSchema from "../components/SeoSchema";
import { ceoSchema, breadcrumbSchema } from "../lib/schema";

/* =========================================================
   TRUST SWITCHES
   These sections contain claims I could not verify and that have no proof
   links (awards, press, talks, research, testimonials). They are OFF by default.
   Turn one ON only after adding a real, checkable source for every item in it
   (article URL, award page, conference page, DOI, named client who agrees).
========================================================= */
const SHOW = {
  awards: false,
  speaking: false,
  media: false,
  research: false,
  testimonials: false,
};

// Use "Dr." only if Roshaan actually holds a doctorate. Keep the name identical on every page.
const NAME = "Roshaan Ahmad";

// TODO: one source of truth. Make these match the homepage, About and Portfolio pages
// (currently: home 100+ projects / 50+ clients, About 50+ / 30+, this page 50+ / 500+).
const STATS = { projects: "50+", clients: "500+", countries: "10+", years: "5+" };

const title = `${NAME} – Founder & CEO`; // layout.js title template adds " | UniSoft"
const description =
  "Roshaan Ahmad is the founder and CEO of UniSoft, a software development, SEO and AI automation agency. Read his background and the projects he has led.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "https://unisoftpvt.com/ceo" },
  openGraph: {
    type: "profile",
    firstName: "Roshaan",
    lastName: "Ahmad",
    siteName: "UniSoft",
    title: `${title} | UniSoft`,
    description,
    url: "https://unisoftpvt.com/ceo",
    // Absolute URL: a relative path resolves to localhost unless metadataBase is set.
    // Tip: a 1200x630 image crops better on social cards than this portrait.
    images: [
      {
        url: "https://unisoftpvt.com/assets/ceo.jpeg",
        width: 420,
        height: 500,
        alt: `${NAME}, Founder & CEO of UniSoft`,
      },
    ],
  },
};

const skills = [
  { icon: "ri-code-s-slash-line", label: "Full-Stack Development", level: 95 },
  { icon: "ri-search-line", label: "SEO & Digital Marketing", level: 92 },
  { icon: "ri-robot-line", label: "AI & Automation", level: 88 },
  { icon: "ri-layout-4-line", label: "UI/UX Design", level: 85 },
  { icon: "ri-line-chart-line", label: "Business Strategy", level: 90 },
  { icon: "ri-cloud-line", label: "Cloud & DevOps", level: 80 },
];

// TODO: use real, linkable employer names. These read as placeholders to Google and to visitors.
const experience = [
  {
    year: "2022 — Present",
    role: "Founder & CEO",
    company: "UniSoft Pvt Ltd",
    desc: `Founded and scaled UniSoft into a full-service software & digital marketing agency serving clients globally. Led ${STATS.projects} successful projects across web development, SEO, and automation.`,
  },
  {
    year: "2020 — 2022",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    desc: "Led development of enterprise-grade web applications using React, Node.js, and cloud infrastructure. Managed a team of 8 developers.",
  },
  {
    year: "2018 — 2020",
    role: "SEO & Growth Specialist",
    company: "Digital Ventures",
    desc: "Drove organic traffic growth of 300% for 20+ clients through technical SEO, content strategy, and link building campaigns.",
  },
  {
    year: "2016 — 2018",
    role: "Junior Web Developer",
    company: "StartUp Hub",
    desc: "Built responsive websites and e-commerce platforms. Gained expertise in JavaScript, PHP, and WordPress development.",
  },
];

const achievements = [
  { icon: "ri-trophy-line", title: `${STATS.projects} Projects Delivered`, desc: `Successfully delivered ${STATS.projects} software and digital marketing projects globally.` },
  { icon: "ri-user-star-line", title: `${STATS.clients} Clients Served`, desc: `Helped ${STATS.clients} businesses grow their online presence and revenue.` },
  { icon: "ri-global-line", title: `${STATS.countries} Countries Reached`, desc: `UniSoft services are trusted by clients across ${STATS.countries} countries worldwide.` },
  { icon: "ri-star-line", title: "98% Client Satisfaction", desc: "Consistently maintained a 98% client satisfaction rate across all projects." },
];

// TODO: add a credential/verification URL for each.
const certifications = [
  { icon: "ri-google-line", title: "Google Analytics Certified", org: "Google", year: "2023" },
  { icon: "ri-award-line", title: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2022" },
  { icon: "ri-medal-line", title: "Meta Digital Marketing", org: "Meta Blueprint", year: "2023" },
  { icon: "ri-code-box-line", title: "Full-Stack Web Development", org: "freeCodeCamp", year: "2021" },
];

// TODO: link each project to a live URL or a /portfolio case study, and source the "200%" claim.
const projects = [
  {
    title: "UniSoft Agency Platform",
    tag: "SaaS",
    desc: "Built a full-scale agency management platform with client portals, project tracking, and automated reporting.",
    tech: ["Next.js", "MongoDB", "Node.js"],
  },
  {
    title: "E-Commerce SEO Suite",
    tag: "SEO Tool",
    desc: "Developed an AI-powered SEO audit and optimization tool that increased client rankings by 200% on average.",
    tech: ["React", "Python", "OpenAI API"],
  },
  {
    title: "Business Automation System",
    tag: "Automation",
    desc: "Created an end-to-end business automation system integrating CRM, invoicing, and email marketing workflows.",
    tech: ["Node.js", "Zapier API", "MongoDB"],
  },
  {
    title: "Multi-Vendor Marketplace",
    tag: "E-Commerce",
    desc: "Designed and developed a scalable multi-vendor marketplace with real-time inventory and payment processing.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

/* ---- Unverified sections (hidden unless SHOW.<name> = true) ---- */

const awards = [
  { icon: "ri-trophy-fill", title: "Best Tech Startup 2023", org: "Pakistan Tech Awards" },
  { icon: "ri-star-fill", title: "Top Digital Agency 2022", org: "Digital Excellence Awards" },
  { icon: "ri-medal-2-fill", title: "Innovation Leader Award", org: "South Asia Business Summit" },
];

const speaking = [
  { event: "Pakistan Tech Summit 2023", topic: "AI & The Future of Software Development", location: "Lahore, Pakistan" },
  { event: "Digital Marketing Conference 2022", topic: "SEO Strategies for 2023 and Beyond", location: "Karachi, Pakistan" },
  { event: "Startup Expo 2022", topic: "Building a Tech Agency from Scratch", location: "Islamabad, Pakistan" },
];

const media = [
  { outlet: "Dawn News Tech", title: "UniSoft CEO on Pakistan's Growing Tech Industry", year: "2023" },
  { outlet: "The News International", title: "Young Entrepreneurs Transforming Digital Pakistan", year: "2023" },
  { outlet: "TechJuice", title: "UniSoft: A Rising Star in Software Development", year: "2022" },
];

const testimonials = [
  {
    name: "James Carter",
    role: "CEO, TechVentures USA",
    text: "Roshaan's expertise in software development and SEO transformed our business. Our organic traffic grew by 400% in just 6 months.",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, E-Shop UK",
    text: "Working with Roshaan was a game-changer. His team delivered a world-class e-commerce platform on time and within budget.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Director, Gulf Digital Solutions",
    text: "Exceptional leadership and technical knowledge. Roshaan understands business needs and delivers solutions that actually work.",
  },
];

// Needs a real URL (DOI / journal page) for every entry; "#" links are broken links.
const research = [
  {
    title: "AI-Driven SEO: The Next Frontier in Digital Marketing",
    journal: "International Journal of Digital Innovation",
    year: "2023",
    link: "#",
  },
  {
    title: "Scalable Architecture Patterns for Modern Web Applications",
    journal: "Software Engineering Review",
    year: "2022",
    link: "#",
  },
];

const journey = [
  { year: "2016", title: "The Beginning", desc: "Started coding at age 18, self-taught web development and fell in love with building digital products." },
  { year: "2018", title: "First Professional Role", desc: "Joined a startup as a junior developer, quickly rising through the ranks due to exceptional problem-solving skills." },
  { year: "2020", title: "SEO Mastery", desc: "Discovered the power of SEO and digital marketing, helping businesses achieve 10x organic growth." },
  { year: "2022", title: "Founded UniSoft", desc: "Launched UniSoft Pvt Ltd with a vision to provide world-class software and digital marketing services." },
  { year: "2023", title: "Global Expansion", desc: `Expanded UniSoft's reach to ${STATS.countries} countries, serving ${STATS.clients} clients with a team of expert professionals.` },
  { year: "2024", title: "AI Integration", desc: "Pioneered AI-powered automation solutions, positioning UniSoft at the forefront of the next tech revolution." },
];

export default function CEOPage() {
  return (
    <>
      <SeoSchema schema={ceoSchema} />
      <SeoSchema
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: NAME, path: "/ceo" },
        ])}
      />

      <main className="ceoPage">
        {/* BACKGROUND */}
        <div className="ceoGradient" />
        <div className="ceoGridBg" />

        <div className="ceoContainer">

          {/* ── HERO ── */}
          <section className="ceoHero">
            <div className="ceoHeroLeft">
              <span className="ceoBadge">👨‍💼 FOUNDER & CEO — UNISOFT PVT LTD</span>
              <h1>{NAME}</h1>
              <p className="ceoTagline">
                Visionary Tech Entrepreneur · Software Architect · SEO Expert · Digital Transformation Leader
              </p>
              <p className="ceoIntro">
                Founder and CEO of UniSoft Pvt Ltd, {NAME} is a passionate technologist and
                business strategist who has helped {STATS.clients} businesses worldwide pursue digital excellence
                through cutting-edge software, SEO, and automation solutions.
              </p>
              <div className="ceoSocials">
                <a href="https://www.linkedin.com/in/roshaan-ahmad-35056b41b/" target="_blank" rel="me noopener noreferrer" className="socialBtn linkedin">
                  <i className="ri-linkedin-fill" aria-hidden="true" /> LinkedIn
                </a>
                <a href="https://github.com/roshaan-ahmad" target="_blank" rel="me noopener noreferrer" className="socialBtn github">
                  <i className="ri-github-fill" aria-hidden="true" /> GitHub
                </a>
                {/* was an external link to your own homepage; now a real internal link */}
                <Link href="/portfolio" className="socialBtn portfolio">
                  <i className="ri-global-line" aria-hidden="true" /> Portfolio
                </Link>
              </div>
              <div className="ceoStats">
                {[[STATS.projects, "Projects"], [STATS.clients, "Clients"], [STATS.countries, "Countries"], [STATS.years, "Years Exp"]].map(([n, l]) => (
                  <div className="ceoStatItem" key={l}>
                    <strong>{n}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ceoHeroRight">
              <div className="ceoImgWrapper">
                <Image
                  src="/assets/ceo.jpeg"
                  alt={`${NAME}, Founder & CEO of UniSoft`}
                  width={420}
                  height={500}
                  className="ceoPhoto"
                  priority
                />
                <div className="ceoImgGlow" />
              </div>
            </div>
          </section>

          {/* ── BIOGRAPHY ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-user-line" aria-hidden="true" /> Biography</div>
            <div className="bioGrid">
              <div className="bioCard">
                <h2>About {NAME}</h2>
                <p>
                  {NAME} is a technology entrepreneur and the driving force behind
                  UniSoft Pvt Ltd. With over {STATS.years} years of hands-on experience in software engineering,
                  digital marketing, and business strategy, he has established himself as
                  an innovative tech leader.
                </p>
                {/* TODO: name the degree and university. "Academic background in Computer Science" is unverifiable as written. */}
                <p>
                  His academic background in Computer Science, combined with real-world expertise in
                  full-stack development, SEO, and AI automation, enables him to bridge the gap between
                  technology and business outcomes. Roshaan believes that technology should be
                  accessible, impactful, and transformative for businesses of all sizes.
                </p>
                <p>
                  Under his leadership, UniSoft has grown from a small startup to an
                  agency serving clients across {STATS.countries} countries, delivering measurable results through
                  innovative digital solutions.
                </p>
                <p>
                  Explore the <Link href="/services">services UniSoft offers</Link>, see
                  recent <Link href="/portfolio">portfolio projects</Link>, or read the
                  team's <Link href="/blogs">latest articles</Link>.
                </p>
              </div>
              <div className="missionVisionGrid">
                <div className="mvCard mission">
                  <i className="ri-focus-3-line" aria-hidden="true" />
                  <h3>Mission</h3>
                  <p>To empower businesses worldwide with innovative software solutions, data-driven SEO strategies, and intelligent automation that drive sustainable growth and digital excellence.</p>
                </div>
                <div className="mvCard vision">
                  <i className="ri-eye-line" aria-hidden="true" />
                  <h3>Vision</h3>
                  <p>To become the world's most trusted technology partner, transforming how businesses operate and compete in the digital age through cutting-edge software and AI-powered solutions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── JOURNEY ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-map-pin-time-line" aria-hidden="true" /> Journey</div>
            <h2 className="sectionTitle">The Road to UniSoft</h2>
            <div className="timeline">
              {journey.map((item) => (
                <div className="timelineItem" key={item.year}>
                  <div className="timelineYear">{item.year}</div>
                  <div className="timelineDot" />
                  <div className="timelineContent">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-briefcase-line" aria-hidden="true" /> Professional Experience</div>
            <h2 className="sectionTitle">Work History</h2>
            <div className="expGrid">
              {experience.map((exp) => (
                <div className="expCard" key={exp.role}>
                  <span className="expYear">{exp.year}</span>
                  <h3>{exp.role}</h3>
                  <span className="expCompany"><i className="ri-building-line" aria-hidden="true" /> {exp.company}</span>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-tools-line" aria-hidden="true" /> Skills</div>
            <h2 className="sectionTitle">Technical Expertise</h2>
            <div className="skillsGrid">
              {skills.map((s) => (
                <div className="skillCard" key={s.label}>
                  <div className="skillTop">
                    <i className={s.icon} aria-hidden="true" />
                    <span>{s.label}</span>
                    <strong>{s.level}%</strong>
                  </div>
                  <div className="skillBar">
                    <div className="skillFill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ACHIEVEMENTS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-trophy-line" aria-hidden="true" /> Achievements</div>
            <h2 className="sectionTitle">Key Milestones</h2>
            <div className="achieveGrid">
              {achievements.map((a) => (
                <div className="achieveCard" key={a.title}>
                  <i className={a.icon} aria-hidden="true" />
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-award-line" aria-hidden="true" /> Certifications</div>
            <h2 className="sectionTitle">Professional Certifications</h2>
            <div className="certGrid">
              {certifications.map((c) => (
                <div className="certCard" key={c.title}>
                  <i className={c.icon} aria-hidden="true" />
                  <div>
                    <h4>{c.title}</h4>
                    <span>{c.org} · {c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-code-box-line" aria-hidden="true" /> Projects</div>
            <h2 className="sectionTitle">Featured Projects</h2>
            <div className="projectsGrid">
              {projects.map((p) => (
                <div className="projectCard" key={p.title}>
                  <span className="projectTag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="techTags">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── AWARDS (off until verified) ── */}
          {SHOW.awards && (
            <section className="ceoSection">
              <div className="sectionLabel"><i className="ri-medal-line" aria-hidden="true" /> Awards</div>
              <h2 className="sectionTitle">Recognition & Honors</h2>
              <div className="awardsGrid">
                {awards.map((a) => (
                  <div className="awardCard" key={a.title}>
                    <i className={a.icon} aria-hidden="true" />
                    <h3>{a.title}</h3>
                    <span>{a.org}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── SPEAKING (off until verified) ── */}
          {SHOW.speaking && (
            <section className="ceoSection">
              <div className="sectionLabel"><i className="ri-mic-line" aria-hidden="true" /> Speaking Engagements</div>
              <h2 className="sectionTitle">Conferences & Talks</h2>
              <div className="speakingList">
                {speaking.map((s) => (
                  <div className="speakingCard" key={s.event}>
                    <i className="ri-presentation-line" aria-hidden="true" />
                    <div>
                      <h4>{s.event}</h4>
                      <p>“{s.topic}”</p>
                      <span><i className="ri-map-pin-line" aria-hidden="true" /> {s.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── MEDIA (off until verified) ── */}
          {SHOW.media && (
            <section className="ceoSection">
              <div className="sectionLabel"><i className="ri-newspaper-line" aria-hidden="true" /> Media Mentions</div>
              <h2 className="sectionTitle">Press & Media</h2>
              <div className="mediaGrid">
                {media.map((m) => (
                  <div className="mediaCard" key={m.title}>
                    <span className="mediaOutlet">{m.outlet}</span>
                    <h4>{m.title}</h4>
                    <span className="mediaYear">{m.year}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── RESEARCH (off until every entry has a real link) ── */}
          {SHOW.research && (
            <section className="ceoSection">
              <div className="sectionLabel"><i className="ri-file-paper-2-line" aria-hidden="true" /> Research</div>
              <h2 className="sectionTitle">Publications & Research</h2>
              <div className="researchList">
                {research.map((r) => (
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="researchCard" key={r.title}>
                    <i className="ri-article-line" aria-hidden="true" />
                    <div>
                      <h4>{r.title}</h4>
                      <span>{r.journal} · {r.year}</span>
                    </div>
                    <i className="ri-external-link-line researchArrow" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ── TESTIMONIALS (off until real, named, approved) ── */}
          {SHOW.testimonials && (
            <section className="ceoSection">
              <div className="sectionLabel"><i className="ri-chat-quote-line" aria-hidden="true" /> Testimonials</div>
              <h2 className="sectionTitle">What Clients Say</h2>
              <div className="testimonialsGrid">
                {testimonials.map((t) => (
                  <div className="testimonialCard" key={t.name}>
                    <i className="ri-double-quotes-l quoteIcon" aria-hidden="true" />
                    <p>“{t.text}”</p>
                    <div className="testimonialAuthor">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── CTA ── */}
          <section className="ceoCTA">
            <h2>Let’s Build Something Great Together</h2>
            <p>Ready to transform your business with world-class software and digital solutions?</p>
            <div className="ctaBtns">
              <Link href="/contact" className="ctaPrimary">
                <i className="ri-mail-line" aria-hidden="true" /> Get In Touch
              </Link>
              <Link href="/services" className="ctaSecondary">
                <i className="ri-arrow-right-line" aria-hidden="true" /> Explore Services
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}