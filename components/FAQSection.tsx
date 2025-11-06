'use client'

import { useState } from 'react'
import type { FAQ } from '@/types'

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map(faq => faq.metadata?.category?.value || 'General')))

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-responsive mx-auto px-4">
        <h2 className="text-headline-xl text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Find answers to common questions about Educent Pro
        </p>
        
        <div className="max-w-3xl mx-auto">
          {categories.map(category => {
            const categoryFaqs = faqs.filter(faq => 
              (faq.metadata?.category?.value || 'General') === category
            )
            
            return (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                
                <div className="space-y-4">
                  {categoryFaqs.map((faq) => (
                    <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus-ring"
                      >
                        <span className="font-medium text-gray-900">{faq.metadata?.question}</span>
                        <span className="text-gray-400 text-xl">
                          {openItems.includes(faq.id) ? '−' : '+'}
                        </span>
                      </button>
                      
                      {openItems.includes(faq.id) && (
                        <div className="px-6 pb-4">
                          <div 
                            className="text-gray-600 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: faq.metadata?.answer || '' }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}