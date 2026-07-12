'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = ['ALL WORK', 'REAL ESTATE', 'ECOMMERCE', 'CLINICS', 'STARTUPS']

const projects = [
  {
    id: 1,
    name: 'The Pinnacle Residences',
    label: 'REAL ESTATE',
    cat: 'REAL ESTATE',
    desc: 'Redefining luxury residential marketing through cinematic storytelling and precision digital acquisition.',
    gradient: 'linear-gradient(145deg, #141e14 0%, #0c0c0c 50%, #101a14 100%)',
    size: 'large',
  },
  {
    id: 2,
    name: 'Noir Botanicas',
    label: 'ECOMMERCE',
    cat: 'ECOMMERCE',
    desc: 'D2C brand elevation through editorial product photography and conversion first store architecture.',
    gradient: 'linear-gradient(160deg, #1a1210 0%, #0c0c0c 60%, #1a1210 100%)',
    size: 'small',
  },
  {
    id: 3,
    name: 'Aethel Private Care',
    label: 'CLINICS',
    cat: 'CLINICS',
    desc: 'Building authoritative digital presence for a premium aesthetic clinic through strategic content and SEO.',
    gradient: 'linear-gradient(130deg, #101418 0%, #0c0c0c 55%, #101418 100%)',
    size: 'small',
  },
  {
    id: 4,
    name: 'Nexus Capital Layer',
    label: 'STARTUPS',
    cat: 'STARTUPS',
    desc: 'Fintech brand architecture from zero to authority through thought leadership and precision media buying.',
    gradient: 'linear-gradient(150deg, #0e1018 0%, #0c0c0c 55%, #0e1018 100%)',
    size: 'large',
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('ALL WORK')

  const filtered =
    active === 'ALL WORK' ? projects : projects.filter((p) => p.cat === active)

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="grain relative"
        style={{
          background: 'var(--void)',
          paddingTop: '11rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="container-narrow relative z-10 text-center">
          <h1
            className="font-display leading-none mb-6"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: 'var(--paper)',
              animation: 'fadeUp 0.8s ease 0.1s both',
            }}
          >
            Curation of Impact.
          </h1>
          <p
            className="font-body mx-auto"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.0625rem',
              maxWidth: '560px',
              animation: 'fadeUp 0.8s ease 0.25s both',
            }}
          >
            Precision and high value curation for an elite clientele. We engineer digital presences
            that command authority through architectural clarity and ruthless subtraction.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section style={{ background: 'var(--void)', paddingBottom: '3rem' }}>
        <div className="container-narrow">
          <div
            className="flex flex-wrap gap-6 pb-2"
            style={{ borderBottom: '1px solid rgba(85,85,85,0.2)' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-body cursor-none transition-colors pb-4"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  color: active === cat ? 'var(--paper)' : 'var(--ash)',
                  marginBottom: '-1px',
                  background: 'none',
                  border: 'none',
                  borderBottom: active === cat
                    ? '1px solid var(--paper)'
                    : '1px solid transparent',
                  paddingBottom: '1rem',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO GRID ─── */}
      <section className="section-pad" style={{ background: 'var(--void)', paddingTop: '2rem' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            {filtered.map((project, i) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="portfolio-card cursor-none block"
                style={{ marginTop: i % 2 === 1 ? '3rem' : '0' }}
              >
                <div
                  className="w-full dark-img-placeholder relative overflow-hidden"
                  style={{
                    background: project.gradient,
                    minHeight: project.size === 'large' ? '420px' : '300px',
                  }}
                  aria-hidden="true"
                >
                  {/* subtle inner highlight */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(ellipse at 50% 80%, rgba(200,75,48,0.05) 0%, transparent 60%)',
                    }}
                  />
                </div>
                <div className="portfolio-card-overlay">
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.5625rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--signal)',
                      }}
                    >
                      {project.label}
                    </p>
                    <h2
                      className="font-display"
                      style={{ fontSize: '1.75rem', color: 'var(--paper)' }}
                    >
                      {project.name}
                    </h2>
                    <p
                      className="portfolio-card-cta font-body text-sm mt-2 flex items-center gap-2"
                      style={{ color: 'var(--smoke)' }}
                    >
                      View Case Study <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY ─── */}
      <section
        className="section-pad"
        style={{ background: 'var(--pitch)' }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <p
                className="font-body mb-4"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  color: 'var(--signal)',
                  textTransform: 'uppercase',
                }}
              >
                Featured Case Study
              </p>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  color: 'var(--paper)',
                  lineHeight: 1.15,
                }}
              >
                Restructuring the luxury purchase logic.
              </h2>
              <p
                className="font-body mb-8 leading-relaxed"
                style={{ color: 'var(--smoke)', fontSize: '0.9375rem', maxWidth: '420px' }}
              >
                For Aura Ecommerce, we dismantled the conventional, noisy digital storefront. By
                enforcing strict architectural grids and relying entirely on tonal layering, we
                created a browsing experience that mimics a private viewing room in a high end
                gallery.
              </p>

              <div className="flex gap-10 mb-8">
                <div>
                  <p
                    className="font-display"
                    style={{ fontSize: '2.5rem', color: 'var(--paper)' }}
                  >
                    +140%
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ash)',
                    }}
                  >
                    Conversion
                  </p>
                </div>
                <div>
                  <p
                    className="font-display"
                    style={{ fontSize: '2.5rem', color: 'var(--paper)' }}
                  >
                    2.4x
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ash)',
                    }}
                  >
                    AOV Increase
                  </p>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="font-body flex items-center gap-2 cursor-none group"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                }}
              >
                Read Full Study
                <span className="transition-transform group-hover:translate-x-1" style={{ display: 'inline-block' }}>
                  <ArrowRight size={12} />
                </span>
              </Link>
            </div>

            {/* Right imagery */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="dark-img-placeholder"
                style={{
                  minHeight: '280px',
                  background: 'linear-gradient(160deg, #1a1a1a 0%, #0c0c0c 100%)',
                }}
                aria-hidden="true"
              />
              <div className="grid grid-rows-2 gap-3">
                <div
                  className="dark-img-placeholder"
                  style={{
                    background: 'linear-gradient(145deg, #141414 0%, #0c0c0c 100%)',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="dark-img-placeholder flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, #0e0e0e 0%, #1a1a1a 100%)',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      color: 'var(--smoke)',
                      textAlign: 'center',
                      padding: '1rem',
                    }}
                  >
                    &ldquo;Clarity over noise.&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center max-w-xl mx-auto">
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--paper)' }}
          >
            Partner with Us.
          </h2>
          <p
            className="font-body mb-8 leading-relaxed"
            style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
          >
            We are highly selective with our partnerships, reserving our capacity for visionary
            leaders ready to invest in uncompromising digital authority.
          </p>
          <Link href="/contact" className="btn-signal-outline cursor-none">
            Initiate Contact
          </Link>
        </div>
      </section>
    </>
  )
}
