import ProfileSection from "@/components/about/profile-section"
import TimelineSection from "@/components/about/timeline-section"
import AwardsSection from "@/components/about/awards-section"
import WhyChooseSection from "@/components/about/why-choose-section"
import FooterSection from "@/components/footer-section"

export const metadata = {
  title: "About Dr. Yogita | Expert Physiotherapist",
  description: "Learn about Dr. Yogita's 22+ years of experience, qualifications, and approach to physiotherapy.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-rose-50/30">
      <ProfileSection />
      <TimelineSection />
      <AwardsSection />
      <WhyChooseSection />
      <FooterSection />
    </main>
  )
}
