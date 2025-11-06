import type { SiteSettings } from '@/types'

interface FooterProps {
  settings: SiteSettings | null
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const socialLinks = settings?.metadata?.social_links || []

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-responsive mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-headline-l font-bold gradient-text mb-2">
              {settings?.metadata?.site_title || 'Educent Pro'}
            </h3>
            <p className="text-gray-600 text-sm">
              {settings?.metadata?.tagline || 'Run your Institute like a CEO'}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 text-sm">
              {settings?.metadata?.contact_email || 'contact@educentpro.in'}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  aria-label={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {currentYear} {settings?.metadata?.site_title || 'Educent Pro'}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}