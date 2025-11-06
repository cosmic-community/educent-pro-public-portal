import type { HeroBlock, PanelCard } from '@/types'
import RoleCard from '@/components/RoleCard'

interface HeroProps {
  hero: HeroBlock
  panelCards: PanelCard[]
}

export default function Hero({ hero, panelCards }: HeroProps) {
  const primaryCTA = hero.metadata?.primary_cta_type?.value === 'openModal' 
    ? { type: 'button', action: 'modal' }
    : { type: 'link', href: hero.metadata?.primary_cta_target || '#' }
  
  const secondaryCTA = hero.metadata?.secondary_cta_type?.value === 'internal'
    ? { type: 'link', href: hero.metadata?.secondary_cta_url || '/demo' }
    : { type: 'link', href: hero.metadata?.secondary_cta_url || '#' }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container-responsive mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - 7/12 */}
          <div className="lg:col-span-7">
            <h1 className="text-headline-xl lg:text-5xl font-bold mb-6 animate-fade-in">
              {hero.metadata?.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              {hero.metadata?.subline}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              {primaryCTA.type === 'button' ? (
                <button className="gradient-primary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all focus-ring text-lg font-medium">
                  {hero.metadata?.primary_cta_label}
                </button>
              ) : (
                <a href={primaryCTA.href} className="gradient-primary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all focus-ring text-lg font-medium inline-block">
                  {hero.metadata?.primary_cta_label}
                </a>
              )}
              
              <a 
                href={secondaryCTA.href}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-all focus-ring text-lg font-medium"
              >
                {hero.metadata?.secondary_cta_label}
              </a>
            </div>

            {/* Trust logos */}
            {hero.metadata?.trust_logos && hero.metadata.trust_logos.length > 0 && (
              <div className="flex items-center gap-6 flex-wrap">
                <span className="text-sm text-gray-500">Trusted by:</span>
                <div className="flex gap-6 items-center">
                  {hero.metadata.trust_logos.map((logo, index) => (
                    <img 
                      key={index}
                      src={`${logo.imgix_url}?w=120&h=40&fit=contain&auto=format,compress`}
                      alt={`Partner logo ${index + 1}`}
                      className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - 5/12 - Panel Cards Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {panelCards.slice(0, 4).map((card) => (
                <RoleCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}