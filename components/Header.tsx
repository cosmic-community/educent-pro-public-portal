import Link from 'next/link'
import type { SiteSettings } from '@/types'

interface HeaderProps {
  settings: SiteSettings | null
}

export default function Header({ settings }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-responsive mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-headline-l font-bold gradient-text">
              {settings?.metadata?.site_title || 'Educent Pro'}
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors focus-ring px-4 py-2">
              Sign In
            </button>
            <Link 
              href="/demo"
              className="gradient-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow focus-ring"
            >
              Request Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}