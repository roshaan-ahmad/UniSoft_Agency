"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamSchema } from "../lib/schema";

const teamMembers = [
  {
    id: 1,
    name: "Johnathan Doe",
    role: "Chief Technology Officer",
    short: "CTO",
    img: "member1",
    desc:
      "Leads UniSoft’s technology strategy and software innovation while managing scalable architecture and engineering operations.",
  },

  {
    id: 2,
    name: "Roshaan Ahmad",
    role: "Chief Executive Officer",
    short: "CEO",
    img: "member2",
    desc:
      "Founder and CEO of UniSoft Pvt Ltd, driving company growth, client success, software solutions, SEO, and digital transformation.",
  },

  {
    id: 3,
    name: "Deborah Smith",
    role: "Managing Director",
    short: "MD",
    img: "member3",
    desc:
      "Oversees strategic operations, project delivery, quality assurance, and organizational efficiency across all departments.",
  },
];

const teamsData = [
  {
    title: "Software Development",
    icon: "ri-code-s-slash-line",
    desc:
      "Building scalable web applications, custom software, APIs, and enterprise solutions using modern technologies.",
  },

  {
    title: "SEO & Marketing",
    icon: "ri-line-chart-line",
    desc:
      "Improving search rankings, increasing visibility, and generating leads through advanced digital strategies.",
  },

  {
    title: "UI/UX Design",
    icon: "ri-layout-4-line",
    desc:
      "Creating intuitive user experiences and visually modern interfaces focused on engagement and conversions.",
  },

  {
    title: "Project Management",
    icon: "ri-task-line",
    desc:
      "Ensuring efficient execution, smooth collaboration, and timely project delivery with professional workflows.",
  },

  {
    title: "Quality Assurance",
    icon: "ri-shield-check-line",
    desc:
      "Performing testing and quality analysis to ensure secure, stable, and high-performance solutions.",
  },

  {
    title: "Support & Maintenance",
    icon: "ri-customer-service-2-line",
    desc:
      "Providing continuous support, updates, maintenance, and technical assistance for long-term success.",
  },
];

const googleFormsURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0BVdAiHGeHx99ZovWhXHRlP307WBZp4U6yXh6BLC5ozPW6Q/viewform?usp=publish-editor";

function Teams() {
  const [activeMember, setActiveMember] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="teamsSection" id="teams">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamSchema),
        }}
      />
      {/* BACKGROUND */}
      <div className="teamGradient" />
      <div className="teamGrid" />

      <div className="teamsContainer">

        {/* HEADER */}
        <motion.div
          className="teamsHeader"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="teamBadge">
            MEET OUR PROFESSIONAL TEAM 🚀
          </span>

          <h1>Professional Software Developers, SEO Experts & Digital Growth Team</h1>

          <p>
            UniSoft is a professional software development and digital marketing company specializing in
            web development, SEO optimization, UI/UX design, automation systems, and business growth solutions.
          </p>

          <div className="teams_buttons_div">
            <a
              href={googleFormsURL}
              target="_blank"
              className="joinBtn"
            >
              Join UniSoft Team
              <i className="ri-arrow-right-line"></i>
            </a>
            <button
              className="resumeAuditBtn"
              onClick={() => (window.location.href = '/teams/resume-audit')}
            >
              Get Your Resume Audited by AI
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </motion.div>

        {/* TEAM MEMBERS */}
        <div className="membersGrid">

          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="memberCard"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: member.id * 0.2 }}
              viewport={{ once: true }}
            >

              <div className={`memberImage ${member.img}`}>

                <div className="memberOverlay">
                  <button
                    onClick={() => setActiveMember(member)}
                  >
                    View Profile
                  </button>
                </div>

              </div>

              <div className="memberContent">

                <span>{member.short}</span>

                <h3>{member.name}</h3>

                <p>{member.role}</p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* TEAMS GRID */}
        <motion.div
          className="departments"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="departmentHeader">
            <h2>Our Specialized Departments</h2>

            <p>
              Dedicated teams working together to deliver
              high-performance business solutions.
            </p>
          </div>

          <div className="departmentGrid">

            {teamsData.map((team, index) => (
              <div className="departmentCard" key={index}>

                <i className={team.icon}></i>

                <h3>{team.title}</h3>

                <p>{team.desc}</p>

              </div>
            ))}

          </div>
        </motion.div>
      </div>

      {/* PROFILE MODAL */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="profileModal"
            onClick={() => setActiveMember(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="profileCard"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >

              {/* CLOSE BUTTON */}
              <button
                className="closeBtn"
                onClick={() => setActiveMember(null)}
              >
                ✕
              </button>

              <div className={`profileImage ${activeMember.img}`}></div>

              <span className="profileRole">{activeMember.short}</span>

              <h2>{activeMember.name}</h2>
              <h4>{activeMember.role}</h4>

              <div className="profileBody">
                <p>{activeMember.desc}</p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Teams;