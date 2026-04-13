'use client'
import { useState, useEffect, useRef } from 'react'
import { translations } from './translations'

const projects = [
  {
    id: 'mano',
    title: 'Mano Labs',
    tag: 'Product · Mobile',
    descKey: 'mano_desc',
    year: '2024',
    theme: 'dark',
    bg: 'card-mano',
    url: 'https://www.figma.com/design/dJPG4zVZV6xaBMd7Pge7Ri/Mano-App-Design?node-id=0-1&t=yfox9Z7eA2t4XXdj-1',
  },
  {
    id: 'deepsurf',
    title: 'Deepsurf',
    tag: 'Product · Dashboard',
    descKey: 'deepsurf_desc',
    year: '2025',
    theme: 'dark',
    bg: 'card-deepsurf',
    url: 'https://www.figma.com/design/IHlC0sJwMECBK7KwzozlhM/Deepsurf?node-id=1-14686&p=f&t=WaCGrwRcWZzPNMB3-0',
  },
  {
    id: 'chamomile',
    title: 'Chamomile',
    tag: 'Product · Web3',
    descKey: 'chamomile_desc',
    year: '2025–2026',
    theme: 'dark',
    bg: 'card-chamomile',
    url: 'https://www.figma.com/design/xpMx84yywnISEbXcw2Gyb0/Chamomile--CHE-?node-id=0-1&p=f&t=rAyB57zoeyPdR8hG-0',
  },
  {
    id: 'mind',
    title: 'The Mind',
    tag: 'Brand · Web',
    descKey: 'mind_desc',
    year: '2025',
    theme: 'light',
    bg: 'card-mind',
    url: 'https://www.figma.com/design/b6G4IehEBPe166My5csKPv/The-Mind-Group?node-id=76-211&t=DCtcKGvVFBM4O2OG-0',
  },
  {
    id: 'brickyard',
    title: 'Brickyard',
    tag: 'Brand · Identity',
    descKey: 'brickyard_desc',
    year: '2024',
    theme: 'dark',
    bg: 'card-brickyard',
    url: 'https://www.figma.com/design/70UA3YsYqMfLqWrhXWaIQi/Brickyard?node-id=0-1&p=f&t=dhafJClpbUwO2Kz5-0',
  },
  {
    id: 'lookie',
    title: 'Lookie Lookie',
    tag: 'Brand · Packaging',
    descKey: 'lookie_desc',
    year: '2024',
    theme: 'dark',
    bg: 'card-lookie',
    url: 'https://www.figma.com/design/qwuP7QoMPsIrGsUsQ2rt4n/Lookie-lookie?node-id=0-1&p=f&t=hGa0QYAejWGb48AQ-0',
  },
  {
    id: 'tera',
    title: 'Tera',
    tag: 'Product · Web3',
    descKey: 'tera_desc',
    year: '2025',
    theme: 'dark',
    bg: 'card-tera',
    url: 'https://www.figma.com/design/U9NSVE5IslQYbuWdLJjLVj/Tera?node-id=0-1&p=f&t=q6jSDJW1a4l7M3oD-0',
  },
  {
    id: 'rams',
    title: 'Rams Studio',
    tag: 'Brand · Web',
    descKey: 'rams_desc',
    year: '2024–2026',
    theme: 'dark',
    bg: 'card-rams',
    url: 'https://rams.ae/',
  },
]

const marqueeItems = ['UX/UI Design', 'Product Design', 'Web Design', 'Graphic Design', 'Figma', 'Prototyping', 'Branding', 'Crypto & Web3', 'Mobile Apps', '4+ Years Experience']

// SVG Icons
const IconTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
)

export default function Portfolio() {
  const [lang, setLang] = useState('en')
  const [navScrolled, setNavScrolled] = useState(false)
  const t = translations[lang]

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Nav scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0
    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let raf
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  const addHover = (e) => document.body.classList.add('cursor-hover')
  const removeHover = (e) => document.body.classList.remove('cursor-hover')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />

      {/* NAV */}
      <nav className={navScrolled ? 'scrolled' : ''} style={{
        background: navScrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
        backdropFilter: navScrolled ? 'blur(16px)' : 'none',
        borderBottom: navScrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <a href="#" className="nav-logo" onMouseEnter={addHover} onMouseLeave={removeHover}>Amir Rzaev</a>
        <ul className="nav-links">
          {['work','about','experience','contact'].map((id, i) => (
            <li key={id}>
              <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}
                onMouseEnter={addHover} onMouseLeave={removeHover}>
                {t[`nav_${id === 'experience' ? 'exp' : id}`]}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="nav-social">
            <a href="https://t.me/bexvnd" target="_blank" rel="noreferrer" className="nav-social-link" onMouseEnter={addHover} onMouseLeave={removeHover}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/rzaevamir" target="_blank" rel="noreferrer" className="nav-social-link" onMouseEnter={addHover} onMouseLeave={removeHover}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <div className="lang-switcher">
            {['en','ru'].map((l, i) => (
              <>
                {i > 0 && <span key="sep" className="lang-sep">/</span>}
                <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`}
                  onClick={() => setLang(l)} onMouseEnter={addHover} onMouseLeave={removeHover}>
                  {l.toUpperCase()}
                </button>
              </>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-line" />
        <div className="hero-counter">Product & UX Designer — 2026</div>
        <div className="hero-photo">
          <img src="/photo.jpg" alt="Amir Rzaev" onError={e => e.target.closest('.hero-photo').style.display='none'} />
        </div>
        <div className="hero-tag">{t.hero_tag}</div>
        <h1 className="hero-headline">
          {t.hero_line1}<br />
          <em>{t.hero_line2}</em> {t.hero_line3}<br />
          {t.hero_line4}
        </h1>
        <div className="hero-sub">
          <p className="hero-desc">{t.hero_desc}</p>
          <a href="#work" className="hero-cta" onClick={e => { e.preventDefault(); scrollTo('work') }}
            onMouseEnter={addHover} onMouseLeave={removeHover}>
            {t.hero_cta} <span>↓</span>
          </a>
        </div>
        <div className="scroll-hint"><div className="scroll-line" /></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">{item} <span className="marquee-dot" /></span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section className="work" id="work">
        <div className="section-label reveal">
          <span><span className="section-num">01</span> {t.section_work}</span>
        </div>
        <div className="work-header reveal">
          <h2 className="work-title">
            {t.work_title_1} <em>{t.work_title_2}</em><br />{t.work_title_3}
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.id} className={`project-card reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}`}
              onClick={() => window.open(p.url, '_blank')}
              onMouseEnter={addHover} onMouseLeave={removeHover}>
              <div className={`card-visual ${p.bg}`}>
                <div className="card-grid-lines" />
                {p.theme === 'dark' && <div className="card-deco" />}
              </div>
              <img
                src={`/${p.id}.png`}
                alt={p.title}
                className={`card-preview-img${p.theme === 'light' ? ' light-img' : ''}${p.id === 'mano' || p.id === 'chamomile' ? ` img-${p.id}` : ''}`}
                onError={e => e.target.style.display='none'}
              />
              <div className="card-inner">
                <div className={`card-arrow ${p.theme}`}>↗</div>
                <div className="card-content">
                  <span className={`card-tag ${p.theme}`}>{p.tag}</span>
                  <h3 className={`card-title ${p.theme}`}>{p.title}</h3>
                  <p className={`card-desc ${p.theme}`}>{t[p.descKey]}</p>
                </div>
                <span className={`card-year ${p.theme}`}>{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-label reveal">
          <span><span className="section-num">02</span> {t.section_about}</span>
        </div>
        <div className="about-grid">
          <div>
            <h2 className="about-headline reveal">
              {t.about_headline_1}<br /><em>{t.about_headline_2}</em><br />{t.about_headline_3}
            </h2>
            <div className="about-body reveal reveal-delay-1">
              <p>{t.about_p1}</p>
              <p>{t.about_p2}</p>
              <p>{t.about_p3}</p>
            </div>
          </div>
          <div className="about-right reveal reveal-delay-2">
            <div className="skills-grid">
              {[
                ['Primary tool','Figma'],['Design','UX/UI Systems'],
                ['Craft','Typography'],['Extra','Adobe Suite'],
                ['Skill','Prototyping'],['Skill','UI Animation'],
                ['Deliverable','Presentation Design'],['Approach','AI workflow'],
              ].map(([label, value]) => (
                <div key={label+value} className="skill-item" onMouseEnter={addHover} onMouseLeave={removeHover}>
                  <strong>{label}</strong>{value}
                </div>
              ))}
            </div>
            <div className="lang-list">
              <span className="lang-chip">🇷🇺 Russian C2</span>
              <span className="lang-chip">🇬🇧 English C1</span>
              <span className="lang-chip">🇪🇸 Spanish A2</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <div className="section-label reveal">
          <span><span className="section-num">03</span> {t.section_exp}</span>
        </div>
        <div className="exp-list">
          {[1,2,3].map(n => (
            <div key={n} className="exp-item reveal" onMouseEnter={addHover} onMouseLeave={removeHover}>
              <div className="exp-period">{t[`exp${n}_period`]}</div>
              <div>
                <div className="exp-role">{t[`exp${n}_role`]}</div>
                <div className="exp-company">{t[`exp${n}_company`]}</div>
                <ul className="exp-bullets">
                  <li>{t[`exp${n}_b1`]}</li>
                  <li>{t[`exp${n}_b2`]}</li>
                  <li>{t[`exp${n}_b3`]}</li>
                </ul>
              </div>
              <span className="exp-badge">{t[`exp${n}_badge`]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <p className="contact-eyebrow reveal">
          <span className="section-num">04</span> {t.section_contact}
        </p>
        <h2 className="contact-headline reveal">
          {t.contact_headline_1}<br /><em>{t.contact_headline_2}</em>
        </h2>
        <div className="contact-links reveal">
          <a href="mailto:amirrzaeff@gmail.com" className="contact-link" onMouseEnter={addHover} onMouseLeave={removeHover}>
            <IconEmail />
            amirrzaeff@gmail.com
            <span>→</span>
          </a>
          <a href="https://t.me/bexvnd" className="contact-link" target="_blank" rel="noreferrer" onMouseEnter={addHover} onMouseLeave={removeHover}>
            <IconTelegram />
            Telegram
            <span>→</span>
          </a>
          <a href="https://www.linkedin.com/in/rzaevamir" className="contact-link" target="_blank" rel="noreferrer" onMouseEnter={addHover} onMouseLeave={removeHover}>
            <IconLinkedIn />
            LinkedIn
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">Amir Rzaev</span>
        <span>{t.footer_location}</span>
        <span>© 2026</span>
      </footer>
    </>
  )
}
