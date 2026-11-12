"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import "../styles.css"

const services = [
  { name: "Software Development", href: "/services/software-development", icon: "ri-code-s-slash-line" },
  { name: "Web Development", href: "/services/web-development", icon: "ri-global-line" },
  { name: "SEO Services", href: "/services/seo", icon: "ri-line-chart-line" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: "ri-megaphone-line" },
  { name: "UI/UX Design", href: "/services/ui-ux-design", icon: "ri-palette-line" },
  { name: "Automation Solutions", href: "/services/automation", icon: "ri-cpu-line" },
]

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
      return (
    <>
        <nav className="navbar">
        <div className="logo">
          <div className=""><Link href="/"><Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} /></Link></div>
          <div className="title"><Link href="/"><h2>UniSoft</h2></Link></div>
        </div>
            <div className="navLinks">
              <Link className="navItem" href="/">Home</Link>
              <div className="navDropdownWrapper">
                <span className="navItem">
                  About <i className="ri-arrow-down-s-line navArrow" />
                </span>
                <div className="navDropdownMenu">
                  <div className="">
                    <Link href="/about" className="navDropdownItem">
                      <i className="fa-solid fa-building"></i>
                      <span>Company</span>
                    </Link>
                  </div>
                    <div className="">
                    <Link href="/ceo" className="navDropdownItem">
                      <i className="fa-solid fa-user-tie"></i>
                      <span>CEO</span>
                    </Link>
                  </div>
                  </div>
              </div>
              {/* SERVICES DROPDOWN — pure CSS hover */}
              <div className="navDropdownWrapper">
                <Link className='links navDropTrigger' href="/services">
                  Services <i className="ri-arrow-down-s-line navArrow" />
                </Link>
                <div className="navDropdownMenu">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="navDropdownItem">
                      <i className={s.icon} />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="navDropdown">
                <span className="navItem">
                  More <i className="ri-arrow-down-s-line navArrow" />
                </span>
                <div className="megaMenu">
                  <div className="menuColumn">
                    <h4>Company</h4>
                    <Link href="/teams">Our Team</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/solutions">Solutions</Link>
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Resources</h4>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/chatbot">AI ChatBot</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Legal</h4>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/contact">Contact</Link>
                  </div>

                </div>
              </div>

            </div>
        {nav && <div className="navLinksNav" >
          <i className='fa fa-close closeBtnNav' onClick={() => setNav(false)}></i>

          <Link className="mobileNavItem" href="/" onClick={() => setNav(false)}>Home</Link>

          {/* About Dropdown */}
          <div className="mobileDropdown">
            <div className="mobileDropdownTrigger" onClick={() => setAboutOpen(!aboutOpen)}>
              <span>About</span>
              <i className={`ri-arrow-down-s-line ${aboutOpen ? 'rotated' : ''}`} />
            </div>
            {aboutOpen && (
              <div className="mobileDropdownMenu">
                <Link href="/about" className="mobileDropdownItem" onClick={() => setNav(false)}>
                  <i className="fa-solid fa-building"></i><span>UniSoft Agency</span>
                </Link>
                <Link href="/ceo" className="mobileDropdownItem" onClick={() => setNav(false)}>
                  <i className="fa-solid fa-user-tie"></i><span>CEO</span>
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="mobileDropdown">
            <div className="mobileDropdownTrigger" onClick={() => setServicesOpen(!servicesOpen)}>
              <span>Services</span>
              <i className={`ri-arrow-down-s-line ${servicesOpen ? 'rotated' : ''}`} />
            </div>
            {servicesOpen && (
              <div className="mobileDropdownMenu">
                <Link href="/services" className="mobileDropdownItem" onClick={() => setNav(false)}>
                  <i className="ri-briefcase-line"></i><span>All Services</span>
                </Link>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="mobileDropdownItem" onClick={() => setNav(false)}>
                    <i className={s.icon}></i><span>{s.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div className="mobileDropdown">
            <div className="mobileDropdownTrigger" onClick={() => setMoreOpen(!moreOpen)}>
              <span>More</span>
              <i className={`ri-arrow-down-s-line ${moreOpen ? 'rotated' : ''}`} />
            </div>
            {moreOpen && (
              <div className="mobileDropdownMenu">
                <Link href="/portfolio" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-briefcase-4-line"></i><span>Portfolio</span></Link>
                <Link href="/solutions" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-tools-line"></i><span>Solutions</span></Link>
                <Link href="/teams" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-team-line"></i><span>Our Team</span></Link>
                <Link href="/pricing" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-price-tag-3-line"></i><span>Pricing</span></Link>
                <Link href="/blogs" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-article-line"></i><span>Blogs</span></Link>
                <Link href="/chatbot" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-robot-line"></i><span>AI ChatBot</span></Link>
                <Link href="/privacy-policy" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-shield-line"></i><span>Privacy Policy</span></Link>
                    <Link href="/contact" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-mail-line"></i><span>Contact</span></Link>
                    {/* <Link href="/scanner" className="mobileDropdownItem" onClick={() => setNav(false)}><i className="ri-mail-line"></i><span>Attendance Scanner</span></Link> */}
              </div>
            )}
          </div>

          <Link href="/quote" className="mobileConsultBtn" onClick={() => setNav(false)}>
            <i className="ri-customer-service-2-line"></i> Get Free Consultation
          </Link>
        </div>}
            <Link href="/quote" aria-label="Get a free software consultation from UniSoft"><button className="navBtn">Get Free Consultation</button></Link>
        <div className="hamBurger" onClick={() => setNav(!nav)}><i className='fa fa-bars' id='bars'></i></div>
      </nav>
    </>
  )
}

export default NavBar