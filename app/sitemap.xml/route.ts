import { NextResponse } from 'next/server'

export function GET() {
  const baseUrl = 'https://marktwelve.in'
  const pages = [
    '',
    '/services',
    '/services/video-production',
    '/services/digital-marketing',
    '/services/branding',
    '/services/photography',
    '/portfolio',
    '/about',
    '/blog',
    '/contact',
  ]

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
