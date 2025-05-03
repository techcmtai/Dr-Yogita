import { notFound, redirect } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs, getAllServices } from "@/lib/services"
import ServiceDetailHero from "@/components/services/service-detail-hero"
import ServiceBenefits from "@/components/services/service-benefits"
import ServiceProcess from "@/components/services/service-process"
import ServiceFAQ from "@/components/services/service-faq"
import RelatedServices from "@/components/services/related-services"
import ServiceCTA from "@/components/services/service-cta"
import FooterSection from "@/components/footer-section"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | Dr. Yogita Physiotherapy",
    }
  }

  return {
    title: `${service.title} | Dr. Yogita Physiotherapy`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Helper function to find the closest matching service
function findClosestService(slug: string) {
  const allServices = getAllServices()

  // First check if the slug is a prefix of any service slug
  const matchingService = allServices.find(
    (service) => service.slug.startsWith(slug) || service.slug.replace(/-/g, "") === slug.replace(/-/g, ""),
  )

  return matchingService
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  // If service not found directly, try to find a close match
  if (!service) {
    const closestService = findClosestService(params.slug)

    // If we found a close match, redirect to it
    if (closestService) {
      redirect(`/services/${closestService.slug}`)
    }

    // Otherwise show not found
    notFound()
  }

  return (
    <main className="min-h-screen bg-rose-50/30 pt-20">
      <ServiceDetailHero service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices currentSlug={params.slug} />
      <ServiceCTA />
      <FooterSection />
    </main>
  )
}
