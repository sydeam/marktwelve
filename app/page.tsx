


import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowDown,
  Instagram,
  Target,
  Camera,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mark Twelve | Leave Your Mark',
  description:
    'Mark Twelve is a premium digital marketing and visual storytelling agency helping brands leave a lasting mark.',
}

const services = [
  {
    icon: Camera,
    title: 'The Visual Mark',
    category: 'Video Production',
    desc: 'We capture raw, high-definition, real-time stories that align perfectly with your goals and audience.',
  },
  {
    icon: Sparkles,
    title: 'The Authority Mark',
    category: 'Personal Branding',
    desc: 'Turning your unique brand journey into a market presence that commands attention and trust.',
  },
  {
    icon: Target,
    title: 'The Digital Mark',
    category: 'Digital Marketing',
    desc: 'Smart, targeted distribution that places your message directly in front of the right audience.',
  },
]

const process = [
  {
    step: '01',
    title: 'The Deep Dive',
    desc: 'We sit down to understand your vision, map your marketing goals, and build the exact strategy to get you there.',
  },
  {
    step: '02',
    title: 'Blueprint & Timeline',
    desc: 'We outline a clear, actionable roadmap so you know exactly how and when your brand will scale.',
  },
  {
    step: '03',
    title: 'The In-House Integration',
    desc: 'This never feels like outsourcing. We plug directly into your vision to operate as your dedicated in-house team.',
  },
  {
    step: '04',
    title: 'Feedback & Freedom',
    desc: 'We welcome honest feedback while maintaining the creative freedom needed to push boundaries and achieve meaningful results.',
  },
]

const cases = [
  {
    title: 'Mansion House',
    category: 'Performance Marketing',
    industry: 'Food & Beverages',
  },
  {
    title: 'Naked Fruits',
    category: 'Video Production',
    industry: 'Food & Beverages',
  },
  {
    title: 'Hyderabad School Of Hair and Beauty',
    category: 'Video Production, Performance Marketing',
    industry: 'Education & Training',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="grain relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: 'var(--void)' }}
      >
        <div className="container-narrow relative z-10 py-28 md:py-32 grid md:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="mb-5 uppercase tracking-[0.2em] text-xs"
              style={{ color: 'var(--signal)' }}
            >
              Mark Twelve
            </p>

            <h1
              className="font-display leading-none mb-8"
              style={{
                fontSize: 'clamp(2.55rem, 6vw, 5.35rem)',
                color: 'var(--paper)',
                fontWeight: 300,
                lineHeight: 0.98,
              }}
            >
              We decoded
              <br />
              &ldquo;the mark,&rdquo;
              <br />
              and found it
              <br />
              never actually
              <br />
              had a shape.
            </h1>
          </div>

          <div className="max-w-xl md:ml-auto">
            <p
              className="leading-relaxed mb-10"
              style={{
                color: 'var(--smoke)',
                fontSize: '1rem',
              }}
            >
              If you know what your mark should look like,
              tell us to win our hearts - and get a free
              Instagram audit.
            </p>

            <Link href="/contact" className="btn-primary">
              Take The Challenge
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-bounce"
          style={{ color: 'var(--ash)' }}
        >
          <ArrowDown size={16} />
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow grid md:grid-cols-[420px_1fr] gap-16 items-center">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/5] dark-img-placeholder" />
          </div>

          <div>
            <p
              className="font-display leading-relaxed mb-8"
              style={{
                color: 'var(--paper)',
                fontSize: 'clamp(1.25rem, 2.4vw, 2rem)',
                fontWeight: 300,
              }}
            >
              A lasting mark isn&apos;t built by chasing trends,
              it&apos;s built on genuine authority.
              <br />
              <br />
              At Mark Twelve, we give your story the depth
              it deserves so your audience instantly connects
              with and trusts your brand.
            </p>

            <div className="mb-10">
              <p
                className="uppercase tracking-[0.2em] text-xs"
                style={{ color: 'var(--signal)' }}
              >
                - Satya Gayathri
              </p>

              <p
                className="mt-2 text-sm"
                style={{ color: 'var(--smoke)' }}
              >
                Founder
              </p>
            </div>

            <Link href="/about" className="btn-outline">
              Know Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="max-w-3xl mb-20">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                color: 'var(--paper)',
                lineHeight: 1.05,
              }}
            >
              How We Help You
              <br />
              Leave Your Mark
            </h2>

            <p
              style={{
                color: 'var(--smoke)',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              We don&apos;t do pre-packaged boxes.
              What we build depends entirely on your current
              goals and where your story needs to go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, category, desc }) => (
              <article key={title} className="service-card group">
                <Icon
                  size={22}
                  style={{ color: 'var(--signal)', marginBottom: '1.5rem' }}
                />

                <p
                  className="uppercase tracking-[0.15em] text-xs mb-3"
                  style={{ color: 'var(--signal)' }}
                >
                  {category}
                </p>

                <h3
                  className="font-display mb-4"
                  style={{
                    fontSize: '1.55rem',
                    color: 'var(--paper)',
                    lineHeight: 1.15,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: 'var(--smoke)',
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  {desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow">
          <div className="max-w-3xl mb-20">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                color: 'var(--paper)',
                lineHeight: 1.05,
              }}
            >
              How It Looks
              <br />
              When We Work Together
            </h2>

            <p
              style={{
                color: 'var(--smoke)',
                lineHeight: 1.8,
              }}
            >
              Every service has a different approach,
              but we never execute blindly.
              Everything stays aligned and evolves together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="border-t pt-6 border-white/10">
                <p
                  className="mb-4 text-xs tracking-[0.2em]"
                  style={{ color: 'var(--signal)' }}
                >
                  {step}
                </p>

                <h3
                  className="font-display mb-4"
                  style={{
                    fontSize: '1.55rem',
                    color: 'var(--paper)',
                    lineHeight: 1.15,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: 'var(--smoke)',
                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                color: 'var(--paper)',
                lineHeight: 1.08,
              }}
            >
              Ready to Build Together?
            </h3>

            <p className="mb-8" style={{ color: 'var(--smoke)' }}>
              Say hello! (Or &ldquo;hai.&rdquo; We speak both.)
            </p>

            <Link href="/contact" className="btn-primary">
              Say Hello!
            </Link>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <h2
                className="font-display mb-4"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                  color: 'var(--paper)',
                  lineHeight: 1.05,
                }}
              >
                Selected Cases
              </h2>

              <p style={{ color: 'var(--smoke)' }}>
                Stories that left a lasting mark.
              </p>
            </div>

            <Link href="/work" className="btn-outline">
              View All Work
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item) => (
              <Link
                key={item.title}
                href="/work"
                className="portfolio-card block"
              >
                <div
                  className="dark-img-placeholder aspect-[4/5]"
                  style={{ marginBottom: '1.5rem' }}
                />

                <p
                  className="uppercase tracking-[0.18em] text-xs mb-3"
                  style={{ color: 'var(--signal)' }}
                >
                  {item.industry}
                </p>

                <h3
                  className="font-display mb-3"
                  style={{
                    color: 'var(--paper)',
                    fontSize: '1.55rem',
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: 'var(--smoke)' }}>
                  {item.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center">
          <div className="flex justify-center mb-6">
            <Instagram size={28} style={{ color: 'var(--signal)' }} />
          </div>

          <h2
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
              color: 'var(--paper)',
              lineHeight: 1.08,
            }}
          >
            Latest From Our World
          </h2>

          <p
            className="max-w-2xl mx-auto mb-12"
            style={{ color: 'var(--smoke)' }}
          >
            Follow our visual stories, campaigns, and behind-the-scenes moments.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square dark-img-placeholder"
              />
            ))}
          </div>

          <Link href="https://instagram.com" className="btn-primary">
            Visit Instagram
          </Link>
        </div>
      </section>

      {/* INTERACTIVE FORM */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow max-w-4xl">
          <h2
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
              color: 'var(--paper)',
              lineHeight: 1.08,
            }}
          >
            We&apos;d love to hear from you.
            <br />
            (it&apos;ll only take a sec)
          </h2>

          <div
            className="mt-12 border border-white/10 p-8 md:p-12"
            style={{ background: 'var(--pitch)' }}
          >
            <p
              className="leading-[2.8]"
              style={{
                color: 'var(--paper)',
                fontSize: 'clamp(1rem, 1.8vw, 1.12rem)',
              }}
            >
              Hello/Hii,
              <br />
              Your name is
              <input className="inline-input" />.
              An email we can contact you at is
              <input className="inline-input" />.
              The company you associate with is called
              <input className="inline-input" />.
              If you know what your mark should look like,
              it would be
              <input className="inline-input large" />.
            </p>

            <button className="btn-primary mt-10">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* WHY TWELVE */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow max-w-4xl text-center">
          <h2
            className="font-display mb-10"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.6rem)',
              color: 'var(--paper)',
              lineHeight: 1.08,
            }}
          >
            Ever wondered what
            the twelve means?
          </h2>

          <p
            className="leading-relaxed"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.05rem',
            }}
          >
            To be honest, it&apos;s our founder&apos;s birth date.
            Beyond that, it&apos;s also the universal rhythm of completeness -
            the months in a year, the hours on a clock,
            the geometry of a perfect circle.
            <br />
            <br />
            We don&apos;t build fragmented marketing.
            We fuse your video, digital, branding, and photography into a single,
            unbroken loop of authority.
            <br />
            <br />
            Let&apos;s close your circle.
          </p>
        </div>
      </section>
    </>
  )
}
