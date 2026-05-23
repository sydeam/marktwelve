import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Intelligence | Brand Strategy Insights — Mark Twelve',
  description:
    'Insights on brand strategy, digital authority, content marketing, and the art of elite positioning from the Mark Twelve team.',
  alternates: { canonical: 'https://marktwelve.in/blog' },
}

const posts = [
  {
    slug: 'visual-restraint-luxury-branding',
    cat: 'BRAND STRATEGY',
    title: 'The Quiet Power of Visual Restraint in Luxury Branding',
    excerpt:
      'Why the most influential brands communicate through deliberate absence, and how architectural minimalism builds lasting prestige.',
    date: 'May 2025',
    gradient: 'linear-gradient(155deg, #141218 0%, #0c0c0c 55%, #141218 100%)',
  },
  {
    slug: 'content-strategy-undervalued-asset',
    cat: 'CONTENT MARKETING',
    title: 'Why Your Content Strategy Is Your Most Undervalued Asset',
    excerpt:
      'Editorial-grade content that positions your brand as the definitive authority rather than another voice in the noise.',
    date: 'April 2025',
    gradient: 'linear-gradient(145deg, #101418 0%, #0c0c0c 55%, #101418 100%)',
  },
  {
    slug: 'linkedin-transformation-framework',
    cat: 'EXECUTIVE PRESENCE',
    title: 'From Invisible to Authority: The LinkedIn Transformation Framework',
    excerpt:
      'How C-suite leaders transform their digital presence from passive observer to magnetic industry luminary in 90 days.',
    date: 'March 2025',
    gradient: 'linear-gradient(160deg, #141414 0%, #0c0c0c 55%, #181414 100%)',
  },
  {
    slug: 'precision-over-volume-vanity-metrics',
    cat: 'DIGITAL STRATEGY',
    title: 'Precision Over Volume: Why We Reject Vanity Metrics',
    excerpt:
      'The sophisticated case for quality signals over impression counts — and why the brands that win obsess over depth, not reach.',
    date: 'February 2025',
    gradient: 'linear-gradient(150deg, #101418 0%, #0c0c0c 55%, #0e1018 100%)',
  },
]

export default function BlogPage() {
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
            className="font-display font-light tracking-tight leading-none mb-5"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: 'var(--paper)',
              animation: 'fadeUp 0.8s ease 0.1s both',
            }}
          >
            The Intelligence.
          </h1>
          <p
            className="font-body"
            style={{
              color: 'var(--smoke)',
              fontSize: '1.0625rem',
              maxWidth: '480px',
              animation: 'fadeUp 0.8s ease 0.25s both',
            }}
          >
            Insights on brand strategy, digital authority, and the art of elite positioning.
          </p>
        </div>
      </section>

      {/* ─── BLOG GRID ─── */}
      <section className="section-pad" style={{ background: 'var(--void)' }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block cursor-none group">
                  {/* Image */}
                  <div
                    className="w-full dark-img-placeholder overflow-hidden mb-5"
                    style={{
                      background: post.gradient,
                      minHeight: '220px',
                      position: 'relative',
                    }}
                    aria-hidden="true"
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: post.gradient }}
                    />
                  </div>

                  {/* Category */}
                  <p
                    className="font-body mb-3"
                    style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--signal)',
                    }}
                  >
                    {post.cat}
                  </p>

                  {/* Title */}
                  <h2
                    className="font-display mb-3 transition-colors group-hover:text-signal"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--paper)',
                      lineHeight: 1.2,
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="font-body mb-4 line-clamp-2"
                    style={{ color: 'var(--smoke)', fontSize: '0.875rem', lineHeight: 1.6 }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-body"
                      style={{ fontSize: '0.75rem', color: 'var(--ash)' }}
                    >
                      {post.date}
                    </span>
                    <span
                      className="font-body flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--smoke)',
                      }}
                    >
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="section-pad" style={{ background: 'var(--pitch)' }}>
        <div className="container-narrow text-center max-w-lg mx-auto">
          <h2
            className="font-display mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)' }}
          >
            Receive the Edit.
          </h2>
          <p
            className="font-body mb-8"
            style={{ color: 'var(--smoke)', fontSize: '0.9375rem' }}
          >
            Curated intelligence, delivered infrequently. No noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 font-body"
              style={{
                background: 'transparent',
                border: '1px solid rgba(85,85,85,0.4)',
                color: 'var(--paper)',
                padding: '0.875rem 1.25rem',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              className="btn-primary cursor-none whitespace-nowrap"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
