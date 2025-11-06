import type { PanelCard } from '@/types'
import RoleCard from '@/components/RoleCard'

interface PanelCardsProps {
  cards: PanelCard[]
}

export default function PanelCards({ cards }: PanelCardsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-responsive mx-auto px-4">
        <h2 className="text-headline-xl text-center mb-12">Choose Your Portal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <RoleCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}