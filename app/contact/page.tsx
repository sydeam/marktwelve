import type { Metadata } from 'next'
import { MapPin, Mail, Phone, Instagram, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Say Hello | Mark Twelve',
  description:
    "Tell us what your mark should look like. Let's start a conversation.",
  alternates: { canonical: 'https://marktwelve.in/contact' },
}

export default function ContactPage() {
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
        <div className="container-narrow relative z-10">
          <h1
            className="font-display font-light tracking-tight leading-none mb-7"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              color: 'var(--paper)',
              animation: 'fadeUp 0.8s ease 0.1s both',
            }}
          >
            To Say Hello.
          </h1>
          <p
            className="font-body leading-relaxed"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.0625rem',
              maxWidth: '500px',
              animation: 'fadeUp 0.8s ease 0.25s both',
            }}
          >
            Tell us what your mark should look like — and win our hearts. We&apos;ll get back to you faster than you think.
          </p>
        </div>
      </section>

      {/* ─── TWO-COLUMN LAYOUT ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.55fr] gap-14 items-start">
            {/* Left — Form */}
            <ContactForm />

            {/* Right — Info */}
            <div>
              <h2
                className="font-display mb-10"
                style={{ fontSize: '2.25rem', color: 'var(--paper)' }}
              >
                Direct Contact
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={15}
                    style={{ color: 'var(--signal)', marginTop: '2px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--ash)',
                      }}
                    >
                      Headquarters
                    </p>
                    <p
                      className="font-body"
                      style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                    >
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={15}
                    style={{ color: 'var(--signal)', marginTop: '2px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--ash)',
                      }}
                    >
                      Inquiries
                    </p>
                    <a
                      href="mailto:info.marktwelve@gmail.com"
                      className="font-body cursor-none transition-colors"
                      style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                    >
                      info.marktwelve@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={15}
                    style={{ color: 'var(--signal)', marginTop: '2px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--ash)',
                      }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+919391725839"
                      className="font-body cursor-none transition-colors"
                      style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                    >
                      +91 93917 25839
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram
                    size={15}
                    style={{ color: 'var(--signal)', marginTop: '2px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--ash)',
                      }}
                    >
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/letsmarktwelve_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body cursor-none transition-colors"
                      style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
                    >
                      @letsmarktwelve_
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info.marktwelve@gmail.com"
                className="font-body flex items-center gap-2 group cursor-none mb-12"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--paper)',
                  borderBottom: '1px solid rgba(85,85,85,0.3)',
                  paddingBottom: '0.5rem',
                  display: 'inline-flex',
                }}
              >
                Schedule a Discovery Call
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* Workspace image placeholder */}
              <div
                className="w-full dark-img-placeholder relative overflow-hidden"
                style={{
                  minHeight: '260px',
                  background: 'linear-gradient(145deg, #111111 0%, #0c0c0c 60%, #141414 100%)',
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(ellipse at 60% 40%, rgba(200,75,48,0.05) 0%, transparent 60%)',
                  }}
                />
                {/* Decorative pin icon */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    color: 'rgba(85,85,85,0.5)',
                  }}
                >
                  <MapPin size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
