"use client";

// app/about/AboutClient.jsx  (your original UI, moved here so page.js can export metadata)

import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

function AboutClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="aboutSection">
      {/* BACKGROUND */}
      <div className="aboutGlow" />
      <div className="aboutGrid" />

      <div className="aboutContainer">
        {/* HERO INTRO */}
        <motion.div
          className="aboutHero"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="badge">ABOUT UNISOFT</span>

          {/* Keyword-bearing H1 (was: "We Build Digital Products That Drive Growth") */}
          <h1>We Build Software, SEO Systems &amp; AI Automation That Drive Growth</h1>

          <p>
            UniSoft delivers modern software, scalable web applications,
            and intelligent digital solutions that help businesses grow,
            automate, and succeed in the digital era.
          </p>
        </motion.div>

        {/* CORE CARDS (now with internal links) */}
        <div className="aboutGridCards">
          {[
            {
              title: "Who We Are",
              desc:
                "A team of passionate engineers and designers building scalable digital products with modern technologies.",
              icon: "ri-team-line",
              href: "/teams",
              linkText: "Meet the team",
            },
            {
              title: "What We Do",
              desc:
                "We create websites, web apps, SEO systems, and automation tools that improve business performance.",
              icon: "ri-code-s-slash-line",
              href: "/services",
              linkText: "Explore our services",
            },
            {
              title: "Why Choose Us",
              desc:
                "We combine strategy, design, and engineering to deliver powerful digital solutions that actually grow businesses.",
              icon: "ri-rocket-line",
              href: "/portfolio",
              linkText: "See our work",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="aboutCard"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <i className={item.icon} aria-hidden="true"></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={item.href}>{item.linkText} →</Link>
            </motion.div>
          ))}
        </div>

        {/* MISSION + VISION */}
        <div className="aboutSplit">
          <motion.div
            className="splitCard"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              Empower businesses with scalable, reliable, and innovative
              software solutions that accelerate digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="splitCard"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2>Our Vision</h2>
            <p>
              To become a global technology partner delivering impactful
              digital experiences and intelligent automation systems.
            </p>
          </motion.div>
        </div>

        {/* TECHNOLOGIES */}
        <motion.div
          className="techStack"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2>Technologies We Use</h2>

          <div className="techTags">
            {["React", "Next.js", "Node.js", "MongoDB", "Python", "Tailwind", "AWS", "WordPress"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              )
            )}
          </div>
        </motion.div>

        {/* STATS: TODO make these match the homepage/portfolio (they say 100+ projects, 50+ clients) */}
        <div className="statsGrid">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="statCard"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="aboutCTA"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2>Let’s Build Something Powerful Together</h2>
          <p>Start your digital transformation with UniSoft today.</p>

          <Link href="/quote" className="ctaBtn">
            Get In Touch
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutClient;