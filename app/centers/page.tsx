import CentersHero from "@/components/centers/centers-hero"
import CentersMap from "@/components/centers/centers-map"
import CentersList from "@/components/centers/centers-list"
import CentersFilter from "@/components/centers/centers-filter"
import FooterSection from "@/components/footer-section"

export const metadata = {
  title: "Our Centers | Dr. Yogita Physiotherapy",
  description:
    "Find Dr. Yogita's physiotherapy centers near you. Multiple locations across Gurgaon and Delhi NCR with specialized care for all your needs.",
}

export default function CentersPage() {
  return (
    <main className="min-h-screen bg-rose-50/30 pt-20">
      <CentersHero />
      <CentersMap />
      <CentersFilter />
      <CentersList />
      <FooterSection />
    </main>
  )
}
