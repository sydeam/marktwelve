import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ProcessCard } from '@/components/ProcessCards'
import { closingSections, type ServiceData } from '@/app/services/service-data'

interface ServiceDetailPageProps {
  service: ServiceData
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const HeroIcon = service.icon

  return (
    <>
      <section
        className="grain relative"
        style={{
          background: 'var(--void)',
          paddingTop: '11rem',
          paddingBottom: '7rem',
        }}
      >
        <div className="container-narrow relative z-10">
          <div className="max-w-4xl">
            <p
              className="mb-6 uppercase tracking-[0.22em] text-xs font-medium"
              style={{ color: 'var(--signal)', animation: 'fadeUp 0.8s ease 0.1s both' }}
            >
              Services / {service.name}
            </p>

            <h1
              className="font-display leading-none mb-8"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                color: 'var(--paper)',
                animation: 'fadeUp 0.8s ease 0.2s both',
              }}
            >
              {service.name}
            </h1>

            <p
              className="font-body leading-relaxed mb-9"
              style={{
                color: 'var(--smoke)',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                maxWidth: '680px',
                animation: 'fadeUp 0.8s ease 0.35s both',
              }}
            >
              {service.heroDescription}
            </p>

            <div style={{ animation: 'fadeUp 0.8s ease 0.5s both' }}>
              <Link href="/contact" className="btn-primary">
                Build This Mark
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <HeroIcon
            aria-hidden="true"
            className="hidden lg:block absolute right-24 bottom-24 opacity-[0.06]"
            size={220}
            strokeWidth={1}
            style={{ color: 'var(--paper)' }}
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="max-w-3xl mb-14">
            <p
              className="uppercase tracking-[0.18em] text-xs mb-4"
              style={{ color: 'var(--signal)' }}
            >
              Service Offerings
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                color: 'var(--paper)',
                lineHeight: 1.05,
              }}
            >
              Built with focus,
              <br />
              delivered with precision.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.offerings.map(({ title, description, icon: Icon }) => (
              <article key={title} className="service-card group">
                <Icon size={22} style={{ color: 'var(--signal)', marginBottom: '1.5rem' }} />
                <h3
                  className="font-display mb-4"
                  style={{ color: 'var(--paper)', fontSize: '1.65rem', lineHeight: 1.12 }}
                >
                  {title}
                </h3>
                <p
                  className="font-body"
                  style={{ color: 'var(--smoke)', fontSize: '0.9375rem', lineHeight: 1.75 }}
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p
              className="uppercase tracking-[0.18em] text-xs mb-4"
              style={{ color: 'var(--signal)' }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--paper)',
                lineHeight: 1.08,
              }}
            >
              {service.why.heading}
            </h2>
          </div>

          <div>
            <p
              className="font-body leading-relaxed mb-8"
              style={{ color: 'var(--smoke)', fontSize: '1rem' }}
            >
              {service.why.body}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {service.why.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border border-white/10 p-5"
                  style={{ background: 'rgba(12, 12, 12, 0.35)' }}
                >
                  <Check size={16} style={{ color: 'var(--signal)', marginTop: '0.2rem' }} />
                  <span
                    className="font-body text-sm"
                    style={{ color: 'var(--paper)', lineHeight: 1.5 }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="max-w-3xl mb-14">
            <p
              className="uppercase tracking-[0.18em] text-xs mb-4"
              style={{ color: 'var(--signal)' }}
            >
              Process
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                color: 'var(--paper)',
                lineHeight: 1.05,
              }}
            >
              How we move from
              <br />
              intent to impact.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.process.map((item) => (
              <ProcessCard key={item.step} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--paper)' }}
          >
            {service.cta.heading}
          </h2>
          <p
            className="font-body mb-8 leading-relaxed"
            style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
          >
            {service.cta.body}
          </p>
          <Link href="/contact" className="btn-signal-outline cursor-none">
            Initiate Contact
          </Link>
        </div>
      </section>

      <ClosingSections />
    </>
  )
}

function ClosingSections() {
  return (
    <>
      {closingSections.map(({ eyebrow, title, body, href, cta, icon: Icon }, index) => (
        <section
          key={eyebrow}
          className="section-pad"
          style={{ background: index % 2 === 0 ? 'var(--void)' : 'var(--pitch)' }}
        >
          <div className="container-narrow grid md:grid-cols-[220px_1fr_auto] gap-8 md:gap-12 items-start md:items-center">
            <div className="flex items-center gap-4">
              <Icon size={22} style={{ color: 'var(--signal)' }} />
              <p
                className="uppercase tracking-[0.18em] text-xs"
                style={{ color: 'var(--signal)' }}
              >
                {eyebrow}
              </p>
            </div>

            <div>
              <h2
                className="font-display mb-4"
                style={{
                  fontSize: 'clamp(1.85rem, 3.4vw, 3rem)',
                  color: 'var(--paper)',
                  lineHeight: 1.08,
                }}
              >
                {title}
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ color: 'var(--smoke)', maxWidth: '620px' }}
              >
                {body}
              </p>
            </div>

            <Link href={href} className="btn-outline whitespace-nowrap">
              {cta}
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

