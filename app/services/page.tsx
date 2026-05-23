import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Diamond, User, Megaphone, Film, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Full-Spectrum Digital Growth — Mark Twelve',
  description:
    'From SEO architecture to cinematic brand narratives — Mark Twelve offers precision-engineered digital services for market-leading brands.',
  alternates: { canonical: 'https://marktwelve.in/services' },
}

const services = [
  {
    num: '01',
    icon: Search,
    name: 'SEO Architecture',
    desc: 'Dominating search landscapes through technical precision and authoritative content structures.',
    deliverables: [
      'Technical Audits & Remediation',
      'High-Intent Keyword Mapping',
      'Authority Building Strategies',
    ],
  },
  {
    num: '02',
    icon: Diamond,
    name: 'Brand Identity',
    desc: 'Crafting visual and verbal identities that communicate quiet luxury and unassailable authority.',
    deliverables: [
      'Visual System Design',
      'Tone of Voice & Messaging',
      'Brand Guidelines & Asset Creation',
    ],
  },
  {
    num: '03',
    icon: User,
    name: 'Executive Presence',
    desc: 'Elevating founders and C-suite leaders into industry luminaries through strategic positioning.',
    deliverables: [
      'Thought Leadership Roadmaps',
      'LinkedIn Optimization',
      'Speaking Engagement Strategy',
    ],
  },
  {
    num: '04',
    icon: Megaphone,
    name: 'Precision Acquisition',
    desc: 'Deploying capital with surgical accuracy across premium digital placements. Meta Ads, Google Ads.',
    deliverables: [
      'Multi-Channel Media Buying',
      'High-Ticket Lead Generation',
      'Advanced Retargeting Ecosystems',
    ],
  },
  {
    num: '05',
    icon: Film,
    name: 'Cinematic Narratives',
    desc: "Editorial-quality video production that captures the essence of your brand's luxury.",
    deliverables: [
      'Brand Films & Documentaries',
      'Micro-Content for Social',
      'Premium Art Direction',
    ],
  },
  {
    num: '06',
    icon: Filter,
    name: 'Conversion Architecture',
    desc: 'Designing frictionless pathways that guide elite prospects from awareness to commitment.',
    deliverables: [
      'High-Converting Landing Pages',
      'Automated Email Sequences',
      'Frictionless Checkout Experiences',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
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
              Full-Spectrum Growth
              <br />
              Strategy
            </h1>
          </div>
          <p
            className="font-body leading-relaxed"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.0625rem',
              maxWidth: '540px',
              animation: 'fadeUp 0.8s ease 0.25s both',
            }}
          >
            Precision and high-value curation applied to every facet of your brand&apos;s digital
            ecosystem. We architect strategies that demand attention and drive definitive action.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ num, icon: Icon, name, desc, deliverables }) => (
              <article key={num} className="service-card flex flex-col">
                {/* Card number */}
                <div className="flex items-start justify-between mb-6">
                  <Icon
                    size={20}
                    style={{ color: 'var(--signal)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-body tabular-nums"
                    style={{ fontSize: '0.75rem', color: 'var(--ash)', letterSpacing: '0.1em' }}
                  >
                    {num}
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
                  {desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 font-body"
                      style={{ color: 'var(--smoke)', fontSize: '0.8125rem' }}
                    >
                      <span style={{ color: 'var(--signal)', marginTop: '1px', flexShrink: 0 }}>
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="font-body flex items-center gap-2 cursor-none group"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                  }}
                >
                  Learn More
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ display: 'inline-block' }}
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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