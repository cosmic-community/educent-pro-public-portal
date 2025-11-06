import type { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20">
      <div className="container-responsive mx-auto px-4">
        <h2 className="text-headline-xl text-center mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Trusted by leading educational institutions across the nation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                {testimonial.metadata?.logo && (
                  <img 
                    src={`${testimonial.metadata.logo.imgix_url}?w=80&h=80&fit=contain&auto=format,compress`}
                    alt={testimonial.metadata?.logo_alt || 'Institute logo'}
                    className="w-12 h-12 object-contain mr-4"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{testimonial.metadata?.author_name}</h4>
                    {testimonial.metadata?.verified && (
                      <span className="text-green-600 text-sm">✓ Verified</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.metadata?.author_role}</p>
                  <p className="text-sm text-gray-500">{testimonial.metadata?.institute_name}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic">
                "{testimonial.metadata?.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}