import React from 'react'

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4">
            PRICING
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose your package
          </h2>
          <p className="text-gray-600">
            No contracts. No commitments. Pay as you go each week.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Package 1 - 45-55 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">45-55</h3>
              <p className="text-gray-500 text-sm">Calls/Week</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Telemarketers</span>
                <span className="font-semibold text-gray-900">2</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Hours/Day</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Days/Week</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Includes homeowners</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">100% exclusive</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Post to Velocify</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm">Dedicated reps</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">$915</div>
              <div className="text-gray-500 text-sm">Per week</div>
            </div>
            
            <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Sign up
            </button>
          </div>

          {/* Package 2 - 75-85 (Featured) */}
          <div className="bg-white rounded-lg border-2 border-yellow-400 p-6 relative transform scale-105">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">75-85</h3>
              <p className="text-gray-500 text-sm">Calls/Week</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Telemarketers</span>
                <span className="font-semibold text-gray-900">3</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Hours/Day</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Days/Week</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Includes homeowners</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">100% exclusive</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Post to Velocify</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm">Dedicated reps</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">$1,169</div>
              <div className="text-gray-500 text-sm">Per week</div>
            </div>
            
            <button className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 px-4 rounded-md hover:bg-yellow-300 transition-colors">
              Sign up
            </button>
          </div>

          {/* Package 3 - 90-110 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">90-110</h3>
              <p className="text-gray-500 text-sm">Calls/Week</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Telemarketers</span>
                <span className="font-semibold text-gray-900">4</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Hours/Day</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Days/Week</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Includes homeowners</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">100% exclusive</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Post to Velocify</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm">Dedicated reps</span>
                <span className="font-semibold text-green-600">Yes!</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">$1,627</div>
              <div className="text-gray-500 text-sm">Per week</div>
            </div>
            
            <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection