"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import emailjs from '@emailjs/browser';
import Loading from '../components/Loading';
import BackButton from '../components/BackButton';
import SeoSchema from '../components/SeoSchema';
import { pricingSchema } from '../lib/schema';

<SeoSchema schema={pricingSchema} />
const page = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isPackageSelect, setIsPackageSelect] = useState(false)
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [packagePlane, setPackagePlane] = useState(null)

  const pricingPlans = [
    // {
    //   id: "free",
    //   title: "Tester",
    //   priceTag: "$1",
    //   price: 1,
    //   desc: "Best for small businesses",
    //   features: [
    //     "1-3 Page Website",
    //     "Responsive Design",
    //   ],
    //   packageName: "Tester Package",
    //   popular: false
    // },
    // {
    //   id:"starter",
    //   title: "Starter",
    //   priceTag: "$149",
    //   price: 149,
    //   desc: "Best for small businesses",
    //   features: [
    //     "1-3 Page Website",
    //     "Basic SEO Setup",
    //     "Responsive Design",
    //     "Email Integration"
    //   ],
    //   packageName: "Starter Package",
    //   popular: false
    // },

    {
      id:"professional",
      title: "Professional",
      priceTag: "$399",
      price: 399,
      desc: "Perfect for growing brands",
      features: [
        "5-10 Page Website",
        "Advanced SEO",
        "Speed Optimization",
        "Meta Ads Setup",
        "Analytics Integration"
      ],
      packageName: "Professional Package",
      popular: true
    },

    {
      id:"enterprise",
      title: "Enterprise",
      priceTag: "$899+",
      price: 899,
      desc: "For large scale businesses",
      features: [
        "Custom Web App",
        "Full SEO Strategy",
        "Meta + Google Ads",
        "Business Automation",
        "Priority Support"
      ],
      packageName: "Enterprise Package",
      popular: false
    },

    {
      id:"seogrowth",
      title: "SEO Growth",
      priceTag: "$199/mo",
      price: 199,
      desc: "Improve rankings & organic traffic",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Google Search Console",
        "Monthly SEO Reports"
      ],
      packageName: "SEO Growth Package",
      popular: false
    },

    {
      id:"metaadspro",
      title: "Meta Ads Pro",
      priceTag: "$249/mo",
      price: 249,
      desc: "High converting Facebook & Instagram ads",
      features: [
        "Meta Ads Campaign Setup",
        "Audience Targeting",
        "Creative Ad Design",
        "Retargeting Ads",
        "Performance Optimization"
      ],
      packageName: "Meta Ads Package",
      popular: false
    },

    {
      id:"googleadsexpert",
      title: "Google Ads Expert",
      priceTag: "$299/mo",
      price: 299,
      desc: "Generate leads through Google Ads",
      features: [
        "Google Search Ads",
        "Conversion Tracking",
        "Keyword Optimization",
        "Competitor Analysis",
        "ROI Focused Campaigns"
      ],
      packageName: "Google Ads Package",
      popular: false
    },

    {
      id:"businessmanagement",
      title: "Business Management",
      priceTag: "$399/mo",
      price: 399,
      desc: "Complete digital business management",
      features: [
        "Client Management",
        "Social Media Handling",
        "Lead Generation",
        "Business Automation",
        "Monthly Strategy Meetings"
      ],
      packageName: "Business Management Package",
      popular: false
    },

    {
      id:"socialmediagrowth",
      title: "Social Media Growth",
      priceTag: "$179/mo",
      price: 179,
      desc: "Grow your brand on social platforms",
      features: [
        "Content Creation",
        "Instagram & Facebook Management",
        "Post Scheduling",
        "Engagement Strategy",
        "Monthly Insights"
      ],
      packageName: "Social Media Package",
      popular: false
    },

    {
      id:"ecommerce",
      title: "E-Commerce Boost",
      priceTag: "$799", 
      price: 799,
      desc: "Powerful online store solutions",
      features: [
        "Custom Online Store",
        "Payment Gateway Integration",
        "Product Management",
        "SEO Optimized Store",
        "Marketing Integration"
      ],
      packageName: "E-Commerce Package",
      popular: false
    }
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }
  useEffect(() => {
    const items = localStorage.getItem("package-details")
    if (items) {
      const parsedItems = JSON.parse(items)
      setSelectedPackage(parsedItems)
    }
  }, [])
  const initialValues = {
    name: "",
    email: "",
    package: selectedPackage?.packageName || "",
    priceTag: selectedPackage?.priceTag || ""
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string().email("Invalid email").required("Enter your email"),
  })

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)

      await emailjs.sendForm(
        'service_x7b7qei',
        'template_0ds7q6l',
        formRef.current,
        '5NYUNk6egOmHicaIZ'
      )
      alert(`Request Submitted Successfully`)
      setIsPackageSelect(false)
    } catch (error) {
      console.error("Email sending error:", error)
      alert(
        error?.text ||
        error?.message ||
        JSON.stringify(error)
      )
    }
    
    finally {
      setLoading(false)
      handleCheckout(packagePlane)
    }
    resetForm()
    setSelectedPackage(null)
    localStorage.removeItem("package-details")
  }
const handleCheckout = async (plan) => {
  try {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        planId: plan.id.toLowerCase(),
      }),
    });
    
    const data = await res.json();

    if (data?.url) {
      window.location.href = data.url;
    } else {
      alert("Stripe session not created");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  const services = [
  {
    id: "business-development",
    title: "Business Development",
    priceTag: "$300/month",
    price: 300
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    priceTag: "$200 - $800",
    price: 400
  },
  {
    id: "graphic-design-branding",
    title: "Graphic Design & Branding",
    priceTag: "$100 - $700",
    price: 350
  },
  {
    id: "video-ads-editing",
    title: "Video Ads & Editing",
    priceTag: "$150 - $1000",
    price: 500
  },
  {
    id: "social-media-content-design",
    title: "Social Media Content Design",
    priceTag: "$100 - $500",
    price: 300
  },
  {
    id: "ai-chatbots-ai-agents",
    title: "AI Chatbots & AI Agents",
    priceTag: "$500 - $3000",
    price: 1500
  },
  {
    id: "automation-solutions",
    title: "Automation Solutions",
    priceTag: "$300 - $2000",
    price: 1000
  },
  {
    id: "custom-software",
    title: "Custom Software",
    priceTag: "$1000+",
    price: 1000
  },
]
  const handleAdditional = (title, priceTag) => {
    const addtionalServices = {title, priceTag, packageName: `${title} - ${priceTag}`}
    setSelectedPackage(addtionalServices)
    localStorage.setItem("package-details", JSON.stringify(addtionalServices))
    setIsPackageSelect(true)
  }
  const handlePackage = (title, priceTag, plan) => {
    const addtionalServices = { title, priceTag, packageName: `${title}` }
    setSelectedPackage(addtionalServices)
    localStorage.setItem("package-details", JSON.stringify(addtionalServices))
    setIsPackageSelect(true)
    setPackagePlane(plan)
  }

  return (
    <>
      {loading && <Loading />}
      {isPackageSelect && <section className='get-started-form'>
        <Formik
          key={selectedPackage?.packageName}
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          >
          <Form ref={formRef} className='form'>
          <h1>Get Started</h1>
            <div className="inputs-pkg-div">

              <div className="pkg-input">
                <Field type="text" name="name" className="input-field-pkg" placeholder=" " />
                <label className='label'>Your Name</label>
                <ErrorMessage name='name' component="div" className='error' />
              </div>

              <div className="pkg-input">
                <Field type="email" name="email" className="input-field-pkg" placeholder="" />
                <label className='label'>Your Email</label>
                <ErrorMessage name='email' component="div" className='error' />
              </div>

              <div className="pkg-input">
                <Field type="text" name="package" className="input-field-pkg" placeholder=" " readOnly />
                <label className='label'>Selected Package</label>
              </div>

              <div className="pkg-input">
                <Field type="text" name="priceTag" id="priceTag" className="input-field-pkg" placeholder=" " readOnly />
                <label className='label'>Selected Package Price</label>
              </div>

            </div>
            <div className="buttonsDiv">
              <button type='submit' className="btn1">Submit</button>
              <button type='reset' className="btn2" onClick={() => setIsPackageSelect(false)}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </section>} 

      <section className="pricing">
        <BackButton />
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="pricing-header"
        >
          <h2>Our Pricing Plans</h2>
          <p>Flexible pricing tailored for startups, businesses, and enterprises.</p>
        </motion.div>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card ${plan.popular ? "popular" : ""} ${selectedPackage?.title === plan.title ? "active" : ""
                }`}
            >
              {plan.popular && <span className="badge">Most Popular</span>}

              <h3>{plan.title}</h3>
              <h2>{plan.priceTag}</h2>
              <p>{plan.desc}</p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button onClick={() => handlePackage(plan.title, plan.price, plan)}>
                {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="services-table">
  <h3>Additional Services</h3>

  <div className="table">
  {services.map((service, index) => (
    <div key={index} onClick={() => handleAdditional(service.title, service.priceTag)}>
      <span>{service.title}</span>
      <span>{service.priceTag}</span>
    </div>
  ))}
</div>
</div>

      </section>
    </>
  )
}

export default page