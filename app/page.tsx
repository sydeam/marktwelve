import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowDown, Target, Diamond, PenLine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mark Twelve | Premium Digital Marketing Agency in Hyderabad',
  description:
    'Mark Twelve is a precision digital marketing agency specializing in SEO, branding, content strategy, and performance marketing for elite brands.',
  alternates: { canonical: 'https://marktwelve.in' },
}

const capabilities = [
  {
    icon: Target,
    title: 'Digital Marketing',
    desc: 'Precision targeting and high-value conversion strategies for premium audiences.',
  },
  {
    icon: Diamond,
    title: 'Branding',
    desc: 'Architecting visual identities that convey quiet luxury and unassailable authority.',
  },
  {
    icon: PenLine,
    title: 'Content Strategy',
    desc: 'Editorial-grade narratives that frame your expertise as an exclusive commodity.',
  },
]

const works = [
  {
    label: 'AURA FINTECH',
    title: 'Rebranding Trust',
    aspect: 'aspect-[4/5]',
    gradient: 'linear-gradient(160deg, #1e1e1e 0%, #0d0d0d 50%, #1a0e0a 100%)',
  },
  {
    label: 'MAISON BLANC',
    title: 'Digital Commerce Architecture',
    aspect: 'aspect-[4/3]',
    gradient: 'linear-gradient(140deg, #111111 0%, #1a1a1a 40%, #0c0c0c 100%)',
  },
]

const methodology = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Deep-dive analysis into market positioning and operational friction.',
  },
  {
    step: '02',
    title: 'Architecture',
    desc: 'Designing the strategic blueprint and visual frameworks for scale.',
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Flawless deployment of digital assets with rigorous quality assurance.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="grain relative min-h-screen flex flex-col justify-center"
        style={{ background: 'var(--void)', paddingTop: '5rem' }}
      >
        <div className="container-narrow relative z-10 py-24">
          <div style={{ animation: 'fadeUp 0.8s ease 0.1s both' }}>
            <h1
              className="font-display font-light tracking-tight leading-none mb-6"
              style={{ fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)', color: 'var(--paper)' }}
            >
              Precision in
              <br />
              Digital Excellence.
            </h1>
          </div>
          <div style={{ animation: 'fadeUp 0.8s ease 0.25s both' }}>
            <p
              className="font-body mb-10 leading-relaxed"
              style={{ color: 'var(--smoke)', fontSize: '1.0625rem', maxWidth: '420px' }}
            >
              We architect digital experiences for elite brands.
              <br />
              Clarity over noise, precision over volume.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}
          >
            <Link href="/contact" className="btn-primary cursor-none">
              Book a Strategy Call
            </Link>
            <Link href="/portfolio" className="btn-outline cursor-none">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'fadeIn 1s ease 0.8s both' }}
          aria-hidden="true"
        >
          <div
            className="animate-scroll-bounce"
            style={{ color: 'var(--ash)' }}
          >
            <ArrowDown size={16} />
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY PULL QUOTE ─── */}
      <section
        className="section-pad"
        style={{ background: 'var(--pitch)' }}
      >
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <div
            className="font-display"
            style={{
              fontSize: '7rem',
              lineHeight: '0.5',
              color: 'var(--signal)',
              marginBottom: '1.5rem',
              fontWeight: 400,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <blockquote>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--paper)',
                lineHeight: 1.3,
              }}
            >
              True luxury in the digital age is defined by deliberate restraint and flawless
              execution.
            </p>
            <footer
              className="mt-6 font-body"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--smoke)',
              }}
            >
              The Mark Twelve Philosophy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── CORE CAPABILITIES ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)' }}
              >
                Core Capabilities
              </h2>
              <p
                className="font-body mt-2"
                style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
              >
                Strategic interventions for market leaders.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 font-body text-sm cursor-none transition-colors"
              style={{ color: 'var(--smoke)', letterSpacing: '0.05em' }}
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="service-card">
                <Icon
                  size={20}
                  style={{ color: 'var(--signal)', marginBottom: '1.5rem' }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '1.625rem', color: 'var(--paper)' }}
                >
                  {title}
                </h3>
                <p className="font-body" style={{ color: 'var(--smoke)', fontSize: '0.875rem' }}>
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORKS ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <h2
            className="font-display mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)' }}
          >
            Selected Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            {works.map((work, i) => (
              <Link
                key={work.title}
                href="/portfolio"
                className={`portfolio-card cursor-none block ${work.aspect}`}
                style={{ marginTop: i === 1 ? '3rem' : '0' }}
              >
                <div
                  className="w-full h-full dark-img-placeholder"
                  style={{ background: work.gradient, minHeight: i === 0 ? '380px' : '280px' }}
                  aria-hidden="true"
                />
                <div className="portfolio-card-overlay">
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--signal)',
                      }}
                    >
                      {work.label}
                    </p>
                    <h3
                      className="font-display"
                      style={{ fontSize: '1.625rem', color: 'var(--paper)' }}
                    >
                      {work.title}
                    </h3>
                    <p className="portfolio-card-cta font-body text-sm mt-2 flex items-center gap-2" style={{ color: 'var(--smoke)' }}>
                      View Case Study <ArrowRight size={13} />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow">
          <h2
            className="font-display text-center mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--paper)' }}
          >
            The Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {methodology.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <p
                  className="font-body mb-4 tabular-nums"
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.15em',
                    color: 'var(--signal)',
                  }}
                >
                  {step}
                </p>
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '1.75rem', color: 'var(--paper)' }}
                >
                  {title}
                </h3>
                <p className="font-body" style={{ color: 'var(--smoke)', fontSize: '0.875rem' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <h2
            className="font-display mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--paper)' }}
          >
            Start Your Growth Journey
          </h2>
          <p
            className="font-body mb-10"
            style={{ color: 'var(--smoke)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2.5rem' }}
          >
            Partner with Mark Twelve to elevate your digital presence to the apex of your industry.
          </p>
          <Link href="/contact" className="btn-primary cursor-none">
            Initiate Contact
          </Link>
        </div>
      </section>
    </>
  )
}