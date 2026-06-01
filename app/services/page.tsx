import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from './service-data'

export const metadata: Metadata = {
  title: 'Services | Full-Spectrum Digital Growth - Mark Twelve',
  description:
    'Video production, digital marketing, branding, and photography for brands ready to leave a lasting mark.',
  alternates: { canonical: 'https://marktwelve.in/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section
        className="grain relative"
        style={{
          background: 'var(--void)',
          paddingTop: '10rem',
          paddingBottom: '7rem',
        }}
      >
        <div className="container-narrow relative z-10">
          <div style={{ animation: 'fadeUp 0.8s ease 0.1s both' }}>
            <h1
              className="font-display font-light tracking-tight leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--paper)' }}
            >
              Services That
              <br />
              Leave a Mark
            </h1>
          </div>
          <p
            className="font-body leading-relaxed"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.0625rem',
              maxWidth: '620px',
              animation: 'fadeUp 0.8s ease 0.25s both',
            }}
          >
            We fuse video, digital marketing, branding, and photography into a single system of
            authority. Each service is built with the same restraint, precision, and commercial
            clarity that defines the Mark Twelve experience.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="max-w-3xl mb-16">
            <p
              className="uppercase tracking-[0.18em] text-xs mb-4"
              style={{ color: 'var(--signal)' }}
            >
              Core Services
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                color: 'var(--paper)',
                lineHeight: 1.05,
              }}
            >
              Four ways to sharpen
              <br />
              the way your market sees you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ slug, icon: Icon, name, shortIntro, offerings }, index) => (
              <article key={slug} className="service-card flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <Icon size={20} style={{ color: 'var(--signal)' }} aria-hidden="true" />
                  <span
                    className="font-body tabular-nums"
                    style={{ fontSize: '0.75rem', color: 'var(--ash)', letterSpacing: '0.1em' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2
                  className="font-display mb-3"
                  style={{ fontSize: '1.75rem', color: 'var(--paper)' }}
                >
                  {name}
                </h2>
                <p
                  className="font-body mb-6 flex-1"
                  style={{ color: 'var(--smoke)', fontSize: '0.875rem', lineHeight: 1.65 }}
                >
                  {shortIntro}
                </p>

                <ul className="space-y-2 mb-8">
                  {offerings.map((offering) => (
                    <li
                      key={offering.title}
                      className="flex items-start gap-2 font-body"
                      style={{ color: 'var(--smoke)', fontSize: '0.8125rem' }}
                    >
                      <span style={{ color: 'var(--signal)', marginTop: '1px', flexShrink: 0 }}>
                        +
                      </span>
                      {offering.title}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${slug}`}
                  className="font-body flex items-center gap-2 cursor-none group"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                  }}
                >
                  Explore Service
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ display: 'inline-block' }}
                  >
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center">
          <h2
            className="font-display mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--paper)' }}
          >
            Let&apos;s Build Your Brand.
          </h2>
          <Link
            href="/contact"
            className="btn-signal-outline cursor-none"
            style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}
          >
            Initiate Contact
          </Link>
        </div>
      </section>
    </>
  )
}

