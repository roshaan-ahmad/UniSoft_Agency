"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion, AnimatePresence } from "framer-motion"
import Loading from '../components/Loading'
import SeoSchema from '../components/SeoSchema'
import { contactSchema } from '../lib/schema'
import "../styles.css"

// ─── Animation tokens ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
}

// ─── Validation ──────────────────────────────────────────────────────────────
// BUG FIX: added "service" validation and kept all fields consistent
const validationSchema = Yup.object({
  name:             Yup.string().trim().required('Name is required'),
  email:            Yup.string().email('Enter a valid email').required('Email is required'),
  organizationName: Yup.string().trim().required('Organization name is required'),
  estimatedBudget:  Yup.string().required('Estimated budget is required'),
  service:          Yup.string().required('Please select a service'),
  message:          Yup.string().trim().min(20, 'Tell us a bit more (20+ chars)').required('Message is required'),
})

// ─── Static data ────────────────────────────────────────────────────────────
const infoCards = [
  { icon: "ri-mail-send-line",  label: "Email Us",       value: "unisoftpvt@gmail.com",      href: "mailto:unisoftpvt@gmail.com", color: "#38bdf8" },
  { icon: "ri-phone-line",      label: "Call / WhatsApp", value: "+92 (314) 858-8707",        href: "tel:+923148588707",           color: "#22c55e" },
  { icon: "ri-map-pin-line",    label: "Headquarters",   value: "Wyoming, USA · Worldwide",   href: "#",                           color: "#a855f7" },
  { icon: "ri-time-line",       label: "Office Hours",   value: "Mon – Sat, 9 am – 8 pm PKT", href: "#",                           color: "#f59e0b" },
]

const whyPoints = [
  { icon: "ri-rocket-line",            text: "On-time delivery, every sprint"   },
  { icon: "ri-code-s-slash-line",      text: "Clean, maintainable codebase"     },
  { icon: "ri-customer-service-2-line",text: "24 / 7 engineering support"       },
  { icon: "ri-bar-chart-line",         text: "Outcomes measured, never assumed" },
  { icon: "ri-trophy-line",            text: "50 + projects shipped"           },
  { icon: "ri-lock-line",              text: "NDA & full confidentiality"       },
]

const socials = [
  { icon: "ri-linkedin-fill",  label: "LinkedIn",  color: "#0077b5", href: "https://www.linkedin.com/in/roshaan-ahmad-35056b41b/" },
  { icon: "ri-facebook-fill",  label: "Facebook",  color: "#1877f2", href: "https://www.facebook.com/profile.php?id=61568003026936" },
  { icon: "ri-instagram-line", label: "Instagram", color: "#e1306c", href: "https://www.instagram.com/unisoftpvt" },
  { icon: "ri-github-fill",    label: "GitHub",    color: "#e2e8f0", href: "https://github.com/roshaan-ahmad" },
]

const trustBadges = [
  { icon: "ri-shield-keyhole-line", label: "SSL Secured" },
  { icon: "ri-eye-off-line",        label: "No Spam, Ever" },
  { icon: "ri-file-lock-line",      label: "Data Protected" },
]

// ─── Component ───────────────────────────────────────────────────────────────
function Contact() {
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [toast,     setToast]     = useState(null)   // { type: 'success'|'error', msg: string }
  const toastTimer = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Cleanup timer on unmount
  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const showToast = (type, msg) => {
    setToast({ type, msg })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 5000)
  }

  /**
   * BUG FIX: original onSubmit only forwarded name/email/message.
   * organizationName, estimatedBudget, and service were silently dropped.
   * Now all six fields are included in the request body.
   */
  const onSubmit = async (values, { resetForm }) => {
    setLoading(true)
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxCxIA7BZlP5BDiJgnoEr_CZfMh8Dg9_cXY6X0OovSopNZt-ZZ5ffIZeUaUEaJzB92eQg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            name:             values.name,
            email:            values.email,
            organizationName: values.organizationName,
            estimatedBudget:  values.estimatedBudget,
            service:          values.service,
            message:          values.message,
          }),
        }
      )

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || "Submission failed — please try again.")
      }

      resetForm()
      setSubmitted(true)
      showToast('success', "Message sent! We'll get back to you within 2 hours.")
      setTimeout(() => setSubmitted(false), 5000)

    } catch (error) {
      console.error("Contact form error:", error)
      showToast('error', error.message || "Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SeoSchema schema={contactSchema} />
      {loading && <Loading />}

      {/* ── Toast notification ───────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`ctToast ctToast--${toast.type}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <i className={toast.type === 'success' ? "ri-checkbox-circle-line" : "ri-alert-line"} />
            <span>{toast.msg}</span>
            <button onClick={() => setToast(null)} className="ctToastClose">
              <i className="ri-close-line" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ctPage">
        {/* Background layers */}
        <div className="ctBg1" />
        <div className="ctBg2" />
        <div className="ctGrid" />

        <div className="ctInner">

          {/* ── Header ─────────────────────────────────────────────────── */}
          <motion.div
            className="ctHeader"
            initial="hidden" whileInView="show"
            viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp} className="ctEyebrow">
              <i className="ri-chat-3-line" /> Get In Touch
            </motion.span>

            <motion.h1 variants={fadeUp} className="ctTitle">
              Let&apos;s Build Something <span className="ctGrad">Amazing Together</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="ctSubtitle">
              Have a project in mind? Tell us about it — we reply within 2 business hours.
            </motion.p>

            {/* Stats bar */}
            <motion.div variants={fadeUp} className="ctStats">
              {[
                { n: "50+",  label: "Projects delivered" },
                { n: "98%",   label: "Client satisfaction" },
                { n: "<2 hr", label: "Avg. response time"  },
                { n: "3+ yrs", label: "In business"         },
              ].map((s) => (
                <div key={s.label} className="ctStat">
                  <strong>{s.n}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Info cards ─────────────────────────────────────────────── */}
          <motion.div
            className="ctInfoGrid"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {infoCards.map((c) => (
              <motion.a key={c.label} href={c.href} variants={fadeUp} className="ctInfoCard">
                <div className="ctInfoIcon" style={{ background: `${c.color}18`, border: `1px solid ${c.color}35` }}>
                  <i className={c.icon} style={{ color: c.color, fontSize: 22 }} />
                </div>
                <div>
                  <span className="ctInfoLabel">{c.label}</span>
                  <p className="ctInfoVal">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Main grid ──────────────────────────────────────────────── */}
          <div className="ctMainGrid">

            {/* Form card */}
            <motion.div
              className="ctFormCard"
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
            >
              <div className="ctFormHeader">
                <h2>Send Us a Message</h2>
                <p>All fields marked * are required. We reply within 2 business hours.</p>
              </div>

              <Formik
                initialValues={{
                  name: '', email: '', organizationName: '',
                  estimatedBudget: '', service: '', message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="ctForm" noValidate>

                    <div className="ctFormRow">
                      {/* Name */}
                      <div className="ctField">
                        <label htmlFor="name">Full Name *</label>
                        <div className="ctInputWrap">
                          <i className="ri-user-line" />
                          <Field id="name" name="name" placeholder="Jane Smith" className="ctInput" />
                        </div>
                        <ErrorMessage name="name" component="p" className="ctError" />
                      </div>

                      {/* Email */}
                      <div className="ctField">
                        <label htmlFor="email">Work Email *</label>
                        <div className="ctInputWrap">
                          <i className="ri-mail-line" />
                          <Field id="email" name="email" type="email" placeholder="jane@company.com" className="ctInput" />
                        </div>
                        <ErrorMessage name="email" component="p" className="ctError" />
                      </div>

                      {/* Organization */}
                      <div className="ctField">
                        <label htmlFor="organizationName">Organization *</label>
                        <div className="ctInputWrap">
                          <i className="ri-building-line" />
                          <Field id="organizationName" name="organizationName" placeholder="Acme Corp" className="ctInput" />
                        </div>
                        <ErrorMessage name="organizationName" component="p" className="ctError" />
                      </div>

                      {/* Budget */}
                      <div className="ctField">
                        <label htmlFor="estimatedBudget">Estimated Budget *</label>
                        <div className="ctInputWrap">
                          <i className="ri-money-dollar-circle-line" />
                          <Field as="select" id="estimatedBudget" name="estimatedBudget" className="ctInput ctSelect">
                            <option value="">Select a range…</option>
                            <option value="Under $1k">Under $1,000</option>
                            <option value="$1k – $5k">$1,000 – $5,000</option>
                            <option value="$5k – $15k">$5,000 – $15,000</option>
                            <option value="$15k – $50k">$15,000 – $50,000</option>
                            <option value="$50k+">$50,000+</option>
                            <option value="To be discussed">Prefer to discuss</option>
                          </Field>
                        </div>
                        <ErrorMessage name="estimatedBudget" component="p" className="ctError" />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="ctField">
                      <label htmlFor="service">Service Needed *</label>
                      <div className="ctInputWrap">
                        <i className="ri-settings-3-line" />
                        <Field as="select" id="service" name="service" className="ctInput ctSelect">
                          <option value="">Select a service…</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Software Development">Software Development</option>
                          <option value="Mobile App">Mobile App Development</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="UI/UX Design">UI / UX Design</option>
                          <option value="Other">Other</option>
                        </Field>
                      </div>
                      <ErrorMessage name="service" component="p" className="ctError" />
                    </div>

                    {/* Message */}
                    <div className="ctField">
                      <label htmlFor="message">Your Message *</label>
                      <div className="ctInputWrap ctTextareaWrap">
                        <i className="ri-message-3-line" />
                        <Field
                          as="textarea" id="message" name="message" rows={5}
                          placeholder="Describe your project, goals, and any relevant details…"
                          className="ctInput ctTextarea"
                        />
                      </div>
                      <ErrorMessage name="message" component="p" className="ctError" />
                    </div>

                    {/* Trust badges */}
                    <div className="ctTrustRow">
                      {trustBadges.map((b) => (
                        <span key={b.label} className="ctTrustBadge">
                          <i className={b.icon} /> {b.label}
                        </span>
                      ))}
                    </div>

                    <button type="submit" className="ctSubmitBtn" disabled={isSubmitting || loading}>
                      {isSubmitting ? (
                        <><i className="ri-loader-4-line ctSpin" /> Sending…</>
                      ) : (
                        <><i className="ri-send-plane-line" /> Send Message</>
                      )}
                    </button>

                    <p className="ctPrivacyNote">
                      <i className="ri-lock-line" /> Your information is private and never shared with third parties.
                    </p>

                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          className="ctSuccess"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <i className="ri-checkbox-circle-fill" />
                          <div>
                            <strong>Message received!</strong>
                            <span>We&apos;ll get back to you within 2 business hours.</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </Form>
                )}
              </Formik>
            </motion.div>

            {/* Side panel */}
            <motion.div
              className="ctSide"
              initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}
            >

              {/* Why UniSoft */}
              <div className="ctSideCard">
                <h3><i className="ri-shield-check-line" style={{ color: "#38bdf8" }} /> Why Choose UniSoft?</h3>
                <ul className="ctWhyList">
                  {whyPoints.map((w) => (
                    <li key={w.text}>
                      <i className={w.icon} style={{ color: "#38bdf8" }} />
                      <span>{w.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process steps */}
              <div className="ctSideCard">
                <h3><i className="ri-route-line" style={{ color: "#22c55e" }} /> What Happens Next</h3>
                <ol className="ctProcessList">
                  <li><strong>We review your brief</strong><span>Within 2 business hours</span></li>
                  <li><strong>Discovery call</strong><span>30-min scoping session</span></li>
                  <li><strong>Proposal sent</strong><span>Detailed roadmap & quote</span></li>
                  <li><strong>Kick-off</strong><span>Sprint 1 starts on day 1</span></li>
                </ol>
              </div>

              {/* Socials */}
              <div className="ctSideCard">
                <h3><i className="ri-share-line" style={{ color: "#a855f7" }} /> Follow Our Work</h3>
                <div className="ctSocials">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                       className="ctSocialBtn" style={{ borderColor: `${s.color}40` }}>
                      <i className={s.icon} style={{ color: s.color }} />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response badge */}
              <div className="ctResponseBadge">
                <i className="ri-time-line" style={{ color: "#22c55e", fontSize: 22 }} />
                <div>
                  <strong>Avg. response time</strong>
                  <span>Under 2 hours on business days</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact