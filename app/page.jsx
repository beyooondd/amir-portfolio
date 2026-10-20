'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { translations } from './translations'

// ─── DATA ───────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'mano', catKey: 'mano_cat', descKey: 'mano_desc', year: '2024',
    bg: 'bg-mano',
    figmaUrl: 'https://www.figma.com/design/dJPG4zVZV6xaBMd7Pge7Ri/Mano-App-Design?node-id=0-1&t=yfox9Z7eA2t4XXdj-1',
  },
  {
    id: 'deepsurf', catKey: 'deepsurf_cat', descKey: 'deepsurf_desc', year: '2025',
    bg: 'bg-deepsurf',
    figmaUrl: 'https://www.figma.com/design/IHlC0sJwMECBK7KwzozlhM/Deepsurf?node-id=1-14686&p=f&t=WaCGrwRcWZzPNMB3-0',
    siteUrl: 'https://deepsurf.io',
  },
  {
    id: 'chamomile', catKey: 'chamomile_cat', descKey: 'chamomile_desc', year: '2025–2026',
    bg: 'bg-chamomile',
    figmaUrl: 'https://www.figma.com/design/xpMx84yywnISEbXcw2Gyb0/Chamomile--CHE-?node-id=0-1&p=f&t=rAyB57zoeyPdR8hG-0',
    siteUrl: 'https://chamomile.fund',
  },
  {
    id: 'mind', catKey: 'mind_cat', descKey: 'mind_desc', year: '2025',
    bg: 'bg-mind', light: true,
    figmaUrl: 'https://www.figma.com/design/b6G4IehEBPe166My5csKPv/The-Mind-Group?node-id=76-211&t=DCtcKGvVFBM4O2OG-0',
  },
  {
    id: 'assymetric', catKey: 'assymetric_cat', descKey: 'assymetric_desc', year: '2025',
    bg: 'bg-assymetric',
    figmaUrl: 'https://www.figma.com/design/h1RJmF2jOYoChrKXLtjF12/Assymetric?node-id=0-1&t=83v24pM8n97KvktZ-1',
  },
  {
    id: 'holduu', catKey: 'holduu_cat', descKey: 'holduu_desc', year: '2025',
    bg: 'bg-holduu',
    figmaUrl: 'https://www.figma.com/design/EFMQAgSjmPUU4r92JhVogX/Holduu-Presentation-and-UI-Kit?node-id=0-1&t=t1uIbugOzXZs2k9V-1',
  },
  {
    id: 'brickyard', catKey: 'brickyard_cat', descKey: 'brickyard_desc', year: '2024',
    bg: 'bg-brickyard',
    figmaUrl: 'https://www.figma.com/design/70UA3YsYqMfLqWrhXWaIQi/Brickyard?node-id=0-1&p=f&t=dhafJClpbUwO2Kz5-0',
  },
  {
    id: 'lookie', catKey: 'lookie_cat', descKey: 'lookie_desc', year: '2024',
    bg: 'bg-lookie',
    figmaUrl: 'https://www.figma.com/design/qwuP7QoMPsIrGsUsQ2rt4n/Lookie-lookie?node-id=0-1&p=f&t=hGa0QYAejWGb48AQ-0',
  },
  {
    id: 'tera', catKey: 'tera_cat', descKey: 'tera_desc', year: '2025',
    bg: 'bg-tera',
    figmaUrl: 'https://www.figma.com/design/U9NSVE5IslQYbuWdLJjLVj/Tera?node-id=0-1&p=f&t=q6jSDJW1a4l7M3oD-0',
  },
  {
    id: 'rams', catKey: 'rams_cat', descKey: 'rams_desc', year: '2024–2026',
    bg: 'bg-rams',
    figmaUrl: 'https://rams.ae/',
    siteUrl: 'https://rams.ae/',
  },
]

const experience = [
  { n: 1, icon: '/wizards-icon.png', iconBg: '#1a0a2e' },
  { n: 2, icon: '/chamomile-icon.png', iconBg: '#000' },
  { n: 3, icon: '/mano-icon.png', iconBg: '#1a6fff' },
  { n: 4, icon: '/kwork-icon.png', iconBg: '#2d2d2d' },
]

const marqueeItems = [
  'UX/UI Design', 'Product Design', 'Web Design', 'Graphic Design',
  'Figma', 'Prototyping', 'Branding', 'Crypto & Web3', 'Mobile Apps', '4+ Years',
]

const skills = [
  { label: 'Primary',  value: 'Figma' },
  { label: 'Systems',  value: 'UX/UI Systems' },
  { label: 'Craft',    value: 'Typography' },
  { label: 'Suite',    value: 'Adobe CC' },
  { label: 'Skill',    value: 'Prototyping' },
  { label: 'Motion',   value: 'UI Animation' },
  { label: 'Extra',    value: 'Presentation Design' },
  { label: 'Tools',    value: 'AI-augmented workflow' },
]

// ─── ICONS ──────────────────────────────────────────────────────────────────

const IconTelegram = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const IconLinkedIn = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"/>
  </svg>
)

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [lang, setLang] = useState('en')
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState(1)

  const t = translations[lang]

  // ── Cursor ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0' }
    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1' }
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  // ── Nav scroll ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // ── Scroll-driven theme ─────────────────────────────────────────────────
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-theme]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = parseInt(entry.target.dataset.sectionTheme, 10)
            setActiveTheme(theme)
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', String(activeTheme))
  }, [activeTheme])

  // ── Reveal on scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // ── Cursor link hover ───────────────────────────────────────────────────
  const onLinkEnter = useCallback(() => document.body.classList.add('cursor-on-link'), [])
  const onLinkLeave = useCallback(() => document.body.classList.remove('cursor-on-link'), [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Cursor */}
      <div id="cursor-dot"  className="cursor-dot"  aria-hidden="true" />
      <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />

      {/* Peripheral blur */}
      <div className="vignette" aria-hidden="true" />

      {/* ── NAVIGATION ─────────────────────────────────────────────── */}
      <header>
        <nav className={`nav${navScrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
          <a
            href="/"
            className="nav-logo"
            onMouseEnter={onLinkEnter}
            onMouseLeave={onLinkLeave}
            aria-label="Amir Rzaev — Home"
          >
            Amir Rzaev
          </a>

          <ul className="nav-links" role="list">
            {[
              { id: 'work',       label: t.nav_work },
              { id: 'about',      label: t.nav_about },
              { id: 'experience', label: t.nav_exp },
              { id: 'contact',    label: t.nav_contact },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkLeave}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="nav-socials" aria-label="Social links">
              <a
                href="https://t.me/bexvnd"
                className="nav-social"
                target="_blank" rel="noreferrer"
                aria-label="Telegram"
                onMouseEnter={onLinkEnter}
                onMouseLeave={onLinkLeave}
              >
                <IconTelegram />
              </a>
              <a
                href="https://www.linkedin.com/in/rzaevamir"
                className="nav-social"
                target="_blank" rel="noreferrer"
                aria-label="LinkedIn"
                onMouseEnter={onLinkEnter}
                onMouseLeave={onLinkLeave}
              >
                <IconLinkedIn />
              </a>
            </div>
            <div className="lang-toggle" aria-label="Language switcher">
              {['en', 'ru'].map((l, i) => (
                <span key={l} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                  {i > 0 && <span className="lang-sep">/</span>}
                  <button
                    className={`lang-btn${lang === l ? ' active' : ''}`}
                    onClick={() => setLang(l)}
                    onMouseEnter={onLinkEnter}
                    onMouseLeave={onLinkLeave}
                    aria-pressed={lang === l}
                  >
                    {l.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="hero" data-section-theme="1" aria-label="Introduction">
        {/* Background elements */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        {/* Photo */}
        <div className="hero-photo" aria-hidden="true">
          <img
            src="/photo.jpg"
            alt="Amir Rzaev"
            onError={(e) => e.target.closest('.hero-photo').style.display = 'none'}
            loading="eager"
          />
        </div>

        {/* Top meta row */}
        <div className="hero-top">
          <span className="hero-availability">{t.hero_availability}</span>
          <span className="hero-discipline">
            <span>UX/UI</span> · <span>Product</span> · <span>Visual</span>
          </span>
        </div>

        {/* Name */}
        <div className="hero-main">
          <h1 className="hero-name" aria-label="Amir Rzaev">
            <span className="hero-name-line">{t.hero_name_top}</span>
            <span className="hero-name-line">{t.hero_name_bottom}</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="hero-bottom">
          <div className="hero-desc-block">
            <p className="hero-role">{t.hero_role}</p>
            <p className="hero-desc">{t.hero_desc}</p>
          </div>
          <div className="hero-actions">
            <a
              href="#work"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('work') }}
              onMouseEnter={onLinkEnter}
              onMouseLeave={onLinkLeave}
            >
              {t.hero_cta} <IconArrow />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              onMouseEnter={onLinkEnter}
              onMouseLeave={onLinkLeave}
            >
              {t.hero_cta_contact}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────── */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ───────────────────────────────────────────────────── */}
      <section
        className="section work-section"
        id="work"
        data-section-theme="1"
        aria-label={t.section_work}
      >
        <p className="section-eyebrow reveal">{t.work_eyebrow}</p>

        <div className="work-heading reveal">
          <h2>
            {t.work_headline}&nbsp;<em>{t.work_sub}</em>
          </h2>
        </div>

        <div className="projects-grid" role="list">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className={`project-card reveal${idx % 2 === 1 ? ' reveal-delay-1' : ''}${p.light ? ' card-light' : ''}`}
              style={{ animationDelay: `${idx * 0.04}s` }}
              role="listitem"
              aria-label={`${p.id} project`}
            >
              {/* Background */}
              <div className={`card-bg ${p.bg}`} aria-hidden="true" />

              {/* Project image */}
              <div className="card-img" aria-hidden="true">
                <img
                  src={`/${p.id}.png`}
                  alt={p.id}
                  loading="lazy"
                  className={p.light ? 'img-light' : ''}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              {/* Overlay gradient */}
              <div className="card-overlay" aria-hidden="true" />

              {/* Info */}
              <div className="card-info">
                <div className="card-meta">
                  <span className="card-cat">{t[p.catKey]}</span>
                  <h3 className="card-title">
                    {({
                      mano: 'Mano Labs',
                      deepsurf: 'Deepsurf',
                      chamomile: 'Chamomile',
                      mind: 'The Mind',
                      assymetric: 'Assymetric',
                      holduu: 'Holduu',
                      brickyard: 'Brickyard',
                      lookie: 'Lookie Lookie',
                      tera: 'Tera',
                      rams: 'Rams Studio',
                    })[p.id]}
                  </h3>
                  <p className="card-desc">{t[p.descKey]}</p>
                </div>
                <span className="card-year">{p.year}</span>
              </div>

              {/* Hover buttons — last child, always on top */}
              <div className="card-btns" aria-hidden="true">
                <button
                  className="card-btn"
                  onClick={(e) => { e.stopPropagation(); window.open(p.figmaUrl, '_blank', 'noopener') }}
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkLeave}
                >
                  {p.id === 'rams' ? 'Website ↗' : 'Figma ↗'}
                </button>
                {p.siteUrl && (
                  <button
                    className="card-btn"
                    onClick={(e) => { e.stopPropagation(); window.open(p.siteUrl, '_blank', 'noopener') }}
                    onMouseEnter={onLinkEnter}
                    onMouseLeave={onLinkLeave}
                  >
                    Site ↗
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────── */}
      <section
        className="section about-section"
        id="about"
        data-section-theme="3"
        aria-label={t.section_about}
      >
        <p className="section-eyebrow reveal">{t.about_eyebrow}</p>

        <div className="about-grid">
          {/* Left column */}
          <div>
            <h2 className="about-headline reveal">
              {lang === 'en'
                ? <>A designer who <em>listens first,</em><br />designs second</>
                : <>Дизайнер, который <em>сначала слушает,</em><br />потом делает</>
              }
            </h2>

            <div className="about-body reveal reveal-delay-1">
              <p>{t.about_p1}</p>
              <p>{t.about_p2}</p>
              <p>{t.about_p3}</p>
            </div>

            <div className="about-stats reveal reveal-delay-2">
              {[
                { num: t.stat_years,     label: t.stat_years_label },
                { num: t.stat_projects,  label: t.stat_projects_label },
                { num: t.stat_industries, label: t.stat_industries_label },
              ].map((s, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  {i > 0 && <div className="stat-div" aria-hidden="true" />}
                  <div className="stat-item">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="reveal reveal-delay-2">
            <div className="skills-block" role="list" aria-label="Skills">
              {skills.map(({ label, value }) => (
                <div
                  key={value}
                  className="skill-row"
                  role="listitem"
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkLeave}
                >
                  <span className="skill-label">{label}</span>
                  <span className="skill-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="lang-chips" aria-label="Languages">
              <span className="lang-chip">🇷🇺 Russian C2</span>
              <span className="lang-chip">🇬🇧 English C1</span>
              <span className="lang-chip">🇪🇸 Spanish A2</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────────── */}
      <section
        className="section exp-section"
        id="experience"
        data-section-theme="2"
        aria-label={t.section_exp}
      >
        <p className="section-eyebrow reveal">{t.exp_eyebrow}</p>

        <h2 className="exp-heading reveal">
          {lang === 'en'
            ? <>Work<br /><em>experience</em></>
            : <>Опыт<br /><em>работы</em></>
          }
        </h2>

        <div className="exp-list" role="list">
          {experience.map(({ n, icon, iconBg }) => (
            <div
              key={n}
              className="exp-item reveal"
              role="listitem"
              onMouseEnter={onLinkEnter}
              onMouseLeave={onLinkLeave}
            >
              {/* Left meta */}
              <div className="exp-left">
                <div
                  className="exp-icon-box"
                  style={{ background: iconBg }}
                  aria-hidden="true"
                >
                  <img
                    src={icon}
                    alt=""
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
                <div className="exp-period">{t[`exp${n}_period`]}</div>
                <span className="exp-badge">{t[`exp${n}_badge`]}</span>
              </div>

              {/* Right content */}
              <div className="exp-right">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{t[`exp${n}_role`]}</div>
                    <div className="exp-company">{t[`exp${n}_company`]}</div>
                  </div>
                  <span className="exp-arrow" aria-hidden="true">↗</span>
                </div>
                <ul className="exp-bullets" aria-label={`${t[`exp${n}_role`]} responsibilities`}>
                  <li>{t[`exp${n}_b1`]}</li>
                  <li>{t[`exp${n}_b2`]}</li>
                  <li>{t[`exp${n}_b3`]}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section
        className="section contact-section"
        id="contact"
        data-section-theme="5"
        aria-label={t.section_contact}
      >
        {/* Large background watermark */}
        <div className="contact-bg-text" aria-hidden="true">Hello</div>

        <p className="section-eyebrow reveal">{t.contact_eyebrow}</p>

        <h2 className="contact-headline reveal">
          {lang === 'en'
            ? <>Got a project<br /><em>in mind?</em></>
            : <>Есть проект<br /><em>в голове?</em></>
          }
        </h2>

        <p className="contact-sub reveal reveal-delay-1">{t.contact_sub}</p>

        <div className="contact-links reveal reveal-delay-2">
          <a
            href="mailto:amirrzaeff@gmail.com"
            className="contact-link"
            onMouseEnter={onLinkEnter}
            onMouseLeave={onLinkLeave}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            amirrzaeff@gmail.com
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://t.me/bexvnd"
            className="contact-link"
            target="_blank" rel="noreferrer"
            onMouseEnter={onLinkEnter}
            onMouseLeave={onLinkLeave}
          >
            <IconTelegram size={14} />
            {t.contact_telegram}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rzaevamir"
            className="contact-link"
            target="_blank" rel="noreferrer"
            onMouseEnter={onLinkEnter}
            onMouseLeave={onLinkLeave}
          >
            <IconLinkedIn size={14} />
            {t.contact_linkedin}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="footer" aria-label="Footer">
        <span className="footer-logo">Amir Rzaev</span>
        <span className="footer-center">{t.footer_location}</span>
        <span className="footer-right">{t.footer_copy}</span>
      </footer>
    </>
  )
}
