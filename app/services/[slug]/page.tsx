import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailPage } from '@/components/ServiceDetailPage'
import { serviceMap, services, type ServiceSlug } from '../service-data'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = serviceMap.get(params.slug as ServiceSlug)

  if (!service) {
    return {
      title: 'Service Not Found | Mark Twelve',
    }
  }

  return {
    title: `${service.name} | Mark Twelve`,
    description: service.shortIntro,
    alternates: { canonical: `https://marktwelve.in/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Mark Twelve`,
      description: service.shortIntro,
      url: `https://marktwelve.in/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceMap.get(params.slug as ServiceSlug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}

