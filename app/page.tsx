import Hero from '@/components/Hero'
import PanelCards from '@/components/PanelCards'
import Announcements from '@/components/Announcements'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import { 
  getHeroBlock, 
  getPanelCards, 
  getActiveAnnouncements,
  getFeatures,
  getPricingPlans,
  getTestimonials,
  getFAQs 
} from '@/lib/cosmic'

export default async function HomePage() {
  const [hero, panelCards, announcements, features, pricingPlans, testimonials, faqs] = await Promise.all([
    getHeroBlock(),
    getPanelCards(),
    getActiveAnnouncements(),
    getFeatures(),
    getPricingPlans(),
    getTestimonials(),
    getFAQs()
  ])

  return (
    <>
      {hero && <Hero hero={hero} panelCards={panelCards} />}
      {announcements.length > 0 && <Announcements announcements={announcements} />}
      {features.length > 0 && <Features features={features} />}
      {pricingPlans.length > 0 && <Pricing plans={pricingPlans} />}
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
      {faqs.length > 0 && <FAQSection faqs={faqs} />}
    </>
  )
}