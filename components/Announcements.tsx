import type { Announcement } from '@/types'

interface AnnouncementsProps {
  announcements: Announcement[]
}

export default function Announcements({ announcements }: AnnouncementsProps) {
  if (announcements.length === 0) return null

  return (
    <section className="py-12 bg-blue-50 border-y border-blue-100">
      <div className="container-responsive mx-auto px-4">
        <div className="flex items-start gap-4">
          <span className="text-2xl">📰</span>
          <div className="flex-1">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="mb-4 last:mb-0">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {announcement.metadata?.announcement_title}
                </h3>
                <div 
                  className="text-gray-600 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: announcement.metadata?.body || '' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}