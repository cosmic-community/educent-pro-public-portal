import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StagingBadge from '@/components/StagingBadge'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  
  return {
    title: settings?.metadata?.site_title || 'Educent Pro',
    description: settings?.metadata?.meta_description || 'Run your Institute like a CEO',
    openGraph: {
      title: settings?.metadata?.site_title || 'Educent Pro',
      description: settings?.metadata?.meta_description || 'Run your Institute like a CEO',
      images: settings?.metadata?.seo_image ? [settings.metadata.seo_image.imgix_url] : [],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  const isStaging = process.env.STAGING_BADGE === 'true'
  const showCosmicBadge = !settings?.metadata?.disable_cosmic_branding

  return (
    <html lang="en" className={inter.className}>
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        {isStaging && <StagingBadge />}
        <Header settings={settings} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer settings={settings} />
        {showCosmicBadge && <CosmicBadge bucketSlug={bucketSlug} />}
      </body>
    </html>
  )
}