import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExitIntentBanner from '@/components/ExitIntentBanner'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CustomCursor from '@/components/CustomCursor'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://marktwelve.in'),
  title: {
    default: 'Mark Twelve | Premium Digital Marketing Agency in Hyderabad',
    template: '%s | Mark Twelve',
  },
  description:
    'Mark Twelve is a precision digital marketing agency specializing in SEO, branding, content strategy, and performance marketing for elite brands.',
  keywords: [
    'digital marketing agency hyderabad',
    'premium branding agency',
    'SEO agency india',
    'personal branding',
    'brand positioning',
    'content strategy',
    'marketing agency hyderabad',
  ],
  authors: [{ name: 'Mark Twelve' }],
  creator: 'Mark Twelve',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://marktwelve.in',
    siteName: 'Mark Twelve',
    title: 'Mark Twelve | Premium Digital Marketing Agency in Hyderabad',
    description:
      'Precision and high-value curation. We architect digital experiences for elite brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mark Twelve — Precision Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Twelve | Premium Digital Marketing Agency',
    description: 'Precision and high-value curation. Digital experiences for elite brands.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://marktwelve.in',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://marktwelve.in/#organization',
      name: 'Mark Twelve',
      url: 'https://marktwelve.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://marktwelve.in/LogoDark.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-93917-25839',
        contactType: 'customer service',
        email: 'info.marktwelve@gmail.com',
        areaServed: 'IN',
        availableLanguage: 'English',
      },
      sameAs: ['https://www.instagram.com/letsmarktwelve_/'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://marktwelve.in/#localbusiness',
      name: 'Mark Twelve',
      image: 'https://marktwelve.in/LogoDark.png',
      telephone: '+91-93917-25839',
      email: 'info.marktwelve@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'JNTU Area',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      url: 'https://marktwelve.in',
      priceRange: '₹₹₹',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://marktwelve.in/#website',
      url: 'https://marktwelve.in',
      name: 'Mark Twelve',
      description: 'Premium Digital Marketing Agency in Hyderabad',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://marktwelve.in/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Hanken+Grotesk:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <ExitIntentBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
