import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Clarity Over Noise — Mark Twelve',
  description:
    'Mark Twelve was born from a desire for rigorous restraint. Learn about our philosophy, our team, and why elite brands partner with us.',
  alternates: { canonical: 'https://marktwelve.in/about' },
}

const team = [
  {
    name: 'Satya Gayathri',
    title: 'Founder & Managing Partner',
    gradient: 'linear-gradient(160deg, #181414 0%, #0c0c0c 60%, #1a1212 100%)',
    offset: false,
  },
  {
    name: 'Arjun Mehta',
    title: 'Head of Strategy',
    gradient: 'linear-gradient(145deg, #111418 0%, #0c0c0c 55%, #111418 100%)',
    offset: true,
  },
  {
    name: 'Priya Nair',
    title: 'Creative Director',
    gradient: 'linear-gradient(155deg, #141418 0%, #0c0c0c 55%, #141418 100%)',
    offset: false,
  },
]

const values = [
  {
    title: 'Restraint',
    desc: 'We remove before we add. Every element earns its place.',
  },
  {
    title: 'Precision',
    desc: 'Decisions backed by data, refined by instinct.',
  },
  {
    title: 'Elevation',
    desc: 'We build brands that belong in a different league.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="grain relative"
        style={{
          background: 'var(--void)',
          paddingTop: '11rem',
          paddingBottom: '7rem',
        }}
      >
        <div className="container-narrow relative z-10">
          <h1
            className="font-display font-light tracking-tight leading-none"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              animation: 'fadeUp 0.8s ease 0.1s both',
            }}
          >
            <span style={{ color: 'var(--paper)', display: 'block' }}>Clarity over noise.</span>
            <span style={{ color: 'var(--paper)', display: 'block' }}>
              Precision over volume.
            </span>
            <span
              style={{ color: 'var(--signal)', fontStyle: 'italic', display: 'block' }}
            >
              Art over iteration.
            </span>
          </h1>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div
              className="dark-img-placeholder w-full"
              style={{
                minHeight: '480px',
                background: 'linear-gradient(155deg, #181414 0%, #0c0c0c 50%, #141418 100%)',
                position: 'relative',
                overflow: 'hidden',
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(ellipse at 40% 60%, rgba(200,75,48,0.06) 0%, transparent 65%)',
                }}
              />
            </div>

            {/* Text */}
            <div>
              <p
                className="font-body mb-3"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--signal)',
                }}
              >
                Our Story
              </p>
              <h2
                className="font-display mb-7"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  color: 'var(--paper)',
                  lineHeight: 1.15,
                }}
              >
                Born from a desire for rigorous restraint.
              </h2>
              <div className="space-y-5">
                <p
                  className="font-body leading-relaxed"
                  style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                >
                  Mark Twelve was established on a singular premise: the most powerful brands are
                  those that whisper, rather than shout. We sit at the intersection of high-fashion
                  editorialism and strategic marketing discipline, crafting digital experiences that
                  demand undeniable quality rather than clamor.
                </p>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                >
                  Our founders, veterans of legacy luxury brand strategy, recognized a void in the
                  digital landscape — a space where storytelling could be unfiltered by conventional
                  corporate templates. Thus, Mark Twelve emerged as a highly curated atelier for
                  digital brand elevation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="flex items-center justify-between mb-12">
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)' }}
            >
              The Leadership
            </h2>
            <button
              className="font-body cursor-none transition-colors"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--smoke)',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(85,85,85,0.4)',
                paddingBottom: '2px',
              }}
            >
              View Full Roster →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {team.map(({ name, title, gradient, offset }) => (
              <div
                key={name}
                style={{ marginTop: offset ? '3.5rem' : '0' }}
              >
                {/* Portrait placeholder */}
                <div
                  className="w-full dark-img-placeholder relative overflow-hidden mb-4"
                  style={{
                    background: gradient,
                    minHeight: '340px',
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(12,12,12,0.5) 0%, transparent 40%)',
                    }}
                  />
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.5rem', color: 'var(--paper)', marginBottom: '0.25rem' }}
                >
                  {name}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                  }}
                >
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                style={{ paddingTop: '2rem', borderTop: '1px solid rgba(85,85,85,0.25)' }}
              >
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '2rem', color: 'var(--paper)' }}
                >
                  {title}
                </h3>
                <p
                  className="font-body"
                  style={{ color: 'var(--smoke)', fontSize: '0.9375rem', lineHeight: 1.65 }}
                >
                  {desc}
                </p>
              </div>
            ))}
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
            Elevate your narrative.
          </h2>
          <p
            className="font-body mb-8 leading-relaxed"
            style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
          >
            We partner with a select number of visionary leaders each year to craft digital
            legacies that transcend trends.
          </p>
          <Link href="/contact" className="btn-primary cursor-none">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}