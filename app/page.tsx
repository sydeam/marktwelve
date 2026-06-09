


import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowDown,
  Instagram,
  Target,
  Camera,
  Sparkles,
  Film,
  Gem,
} from 'lucide-react'
import { ProcessCard } from '@/components/ProcessCards'
import ThemedLogo from '@/components/ThemedLogo'

export const metadata: Metadata = {
  title: 'Mark Twelve | Leave Your Mark',
  description:
    'Mark Twelve is a premium digital marketing and visual storytelling agency helping brands leave a lasting mark.',
}

const services = [
  {
    icon: Film,
    title: 'Video Mark',
    category: 'Video Production',
    slug: 'Video-Mark',
    desc: 'We don\'t just capture frames; we capture momentum. From raw founder documentaries to high-definition commercial ad films, we build the visual assets and sharp social hooks that stop the scroll.',
  },
  {
    icon: Target,
    title: 'Digital Mark',
    category: 'Digital Marketing',
    slug: 'Digital-Marketing',
    desc: 'Distribution is everything, and vanity metrics are a waste of time. We deploy smart, data-driven performance marketing frameworks that stamp your message in front of the audience that moves the needle.',
  },
  {
    icon: Gem,
    title: 'Branding Mark',
    category: 'Branding',
    slug: 'Branding-Mark',
    desc: 'A lasting mark isn\'t built by chasing trends; it\'s built on genuine authority. We craft timeless visual identities, sleek packaging frameworks, and commanding narratives that position you as the obvious premium choice.',
  },
  {
    icon: Camera,
    title: 'Photography Mark',
    category: 'Photography',
    slug: 'Photography-Mark',
    desc: 'We don\'t just take pictures, we capture your brand\'s premium identity. From high-end corporate portraits to cinematic product frames, we deliver sharp, pristine visual assets that command instant respect.',
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
      {/* HERO — MINIMAL PREMIUM REDESIGN */}
      <section
        className="grain relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'var(--void)' }}
      >
        <div className="container-narrow relative z-10 py-24 md:py-32 grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            {/* Tagline */}
            <p
              className="mb-8 uppercase tracking-[0.25em] text-xs font-medium"
              style={{ color: 'var(--signal)', animation: 'fadeUp 0.8s ease-out 0.1s both' }}
            >
              Mark Twelve
            </p>

            {/* Headline - Emotionally Engaging */}
            <h1
              className="font-display leading-tight"
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5.2rem)',
                color: 'var(--paper)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                animation: 'fadeUp 0.8s ease-out 0.25s both',
              }}
            >
              What if your brand&rsquo;s greatest mark{' '}
              <span style={{ color: 'var(--signal)' }}>was never meant</span>{' '}
              to be seen, only felt?
            </h1>
          </div>

          {/* Right Column */}
          <div className="max-w-xl">
            {/* Supporting Copy - Challenge */}
            <p
              className="leading-relaxed mb-4"
              style={{
                color: 'var(--smoke)',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                lineHeight: 1.75,
                animation: 'fadeUp 0.8s ease-out 0.4s both',
              }}
            >
              We decoded &ldquo;the mark,&rdquo; and found it never actually had a shape.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{
                color: 'var(--smoke)',
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                lineHeight: 1.75,
                animation: 'fadeUp 0.8s ease-out 0.45s both',
              }}
            >
              If you know what your mark should look like, tell us to win our hearts and get a free Instagram audit.
            </p>

            {/* CTA */}
            <div style={{ animation: 'fadeUp 0.8s ease-out 0.55s both' }}>
              <Link href="/contact" className="btn-primary">
                Take the Challenge
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-bounce"
          style={{ color: 'var(--ash)' }}
        >
          <span className="text-xs uppercase tracking-[0.1em] opacity-60">Scroll</span>
          <ArrowDown size={18} strokeWidth={1.5} />
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

            <Link href="/about" className="btn-primary">
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

          <div className="grid md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, category, slug, desc }) => (
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
                    marginBottom: '1.5rem',
                  }}
                >
                  {desc}
                </p>

                <Link
                  href={`/services/${slug}`}
                  className="font-body flex items-center gap-2 group"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                  }}
                >
                  Explore Service
                  <span className="transition-transform group-hover:translate-x-1" style={{ display: 'inline-block' }}>
                    <ArrowRight size={13} />
                  </span>
                </Link>
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
              <ProcessCard key={step} step={step} title={title} desc={desc} />
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
              Say hello! (Or &ldquo;hey.&rdquo; We speak both.)
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
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
              <div>
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

              <div className="flex justify-center">
                <ThemedLogo className="max-w-[200px] w-full" />
              </div>
            </div>
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
