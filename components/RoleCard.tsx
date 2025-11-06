'use client'

import type { PanelCard } from '@/types'

interface RoleCardProps {
  card: PanelCard
}

export default function RoleCard({ card }: RoleCardProps) {
  const handleClick = () => {
    // Handle modal opening based on login_action
    const action = card.metadata?.login_action?.value
    if (action?.startsWith('openModal:')) {
      const role = action.split(':')[1]
      console.log(`Open modal for ${role}`)
      // Implement modal logic here
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-xl p-6 shadow-lg hover-lift hover:shadow-xl transition-all focus-ring group"
      style={{ borderTop: `4px solid ${card.metadata?.role_color || '#3B82F6'}` }}
    >
      {card.metadata?.icon && (
        <div className="mb-4">
          <img 
            src={`${card.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={card.metadata?.icon_alt || 'Role icon'}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
      )}
      
      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
        {card.metadata?.card_title}
      </h3>
      <p className="text-sm text-gray-600">
        {card.metadata?.card_subtitle}
      </p>
    </button>
  )
}