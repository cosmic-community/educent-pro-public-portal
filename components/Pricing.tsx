'use client'

import { useState } from 'react'
import type { PricingPlan } from '@/types'

interface PricingProps {
  plans: PricingPlan[]
}

export default function Pricing({ plans }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly' | 'permanent'>('monthly')
  const [studentCount, setStudentCount] = useState<'below700' | 'above1200'>('below700')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getPriceKey = () => {
    const countKey = studentCount === 'below700' ? 'below_700' : 'above_1200'
    return `${billingPeriod}_${countKey}` as keyof PricingPlan['metadata']
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-responsive mx-auto px-4">
        <h2 className="text-headline-xl text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your institution size
        </p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="flex rounded-lg border border-gray-300 p-1 bg-white">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md transition-colors ${
                billingPeriod === 'monthly' ? 'gradient-primary text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-md transition-colors ${
                billingPeriod === 'yearly' ? 'gradient-primary text-white' : 'text-gray-600'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setBillingPeriod('permanent')}
              className={`px-4 py-2 rounded-md transition-colors ${
                billingPeriod === 'permanent' ? 'gradient-primary text-white' : 'text-gray-600'
              }`}
            >
              Permanent
            </button>
          </div>

          <div className="flex rounded-lg border border-gray-300 p-1 bg-white">
            <button
              onClick={() => setStudentCount('below700')}
              className={`px-4 py-2 rounded-md transition-colors ${
                studentCount === 'below700' ? 'gradient-primary text-white' : 'text-gray-600'
              }`}
            >
              &lt; 700 Students
            </button>
            <button
              onClick={() => setStudentCount('above1200')}
              className={`px-4 py-2 rounded-md transition-colors ${
                studentCount === 'above1200' ? 'gradient-primary text-white' : 'text-gray-600'
              }`}
            >
              &gt; 1200 Students
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const priceKey = getPriceKey()
            const price = plan.metadata?.[priceKey] as number | undefined

            return (
              <div 
                key={plan.id} 
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-headline-l mb-2">{plan.metadata?.plan_name}</h3>
                
                {price !== undefined && (
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">
                      {formatCurrency(price)}
                    </span>
                    <span className="text-gray-600 ml-2">
                      / {billingPeriod === 'permanent' ? 'one-time' : billingPeriod}
                    </span>
                  </div>
                )}
                
                {plan.metadata?.change_reason && (
                  <p className="text-gray-600 mb-6">{plan.metadata.change_reason}</p>
                )}
                
                <button className="w-full gradient-primary text-white py-3 rounded-lg hover:shadow-lg transition-all focus-ring">
                  Choose {plan.metadata?.plan_name}
                </button>
                
                {plan.metadata?.requires_admin_ack && (
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    * Requires admin acknowledgment
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}