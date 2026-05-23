import { NextResponse } from 'next/server'

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://marktwelve.in/sitemap.xml
`
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
