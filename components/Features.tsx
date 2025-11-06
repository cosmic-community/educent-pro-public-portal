import type { Feature } from '@/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface FeaturesProps {
  features: Feature[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-20">
      <div className="container-responsive mx-auto px-4">
        <h2 className="text-headline-xl text-center mb-4">Powerful Features</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to manage your institution efficiently
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-col-reverse' : ''}`}>
              {feature.metadata?.feature_image && (
                <div className="mb-6">
                  <img 
                    src={`${feature.metadata.feature_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={feature.metadata?.image_alt || feature.metadata?.feature_title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              <div>
                <h3 className="text-headline-l mb-3">{feature.metadata?.feature_title}</h3>
                <p className="text-gray-600 mb-4">{feature.metadata?.summary}</p>
                
                <div className="prose prose-sm text-gray-700">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {feature.metadata?.body || ''}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}