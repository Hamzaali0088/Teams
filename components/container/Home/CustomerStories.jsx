import React from 'react'
import Image from 'next/image'
import Header from '../../Ui/Header'
export default function CustomerStories() {
  return (
    <div id='customer-stories' className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Header title="Customer Stories" description="See how customers are innovating with Teams" />

        {/* Main Customer Story Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Section - Text Content */}
            <div className="space-y-6">
              {/* Company Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GN</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">GoNarrative</span>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl font-bold text-gray-900 leading-tight">
                "Without a doubt, the fluid collaboration that Teams enables has a positive impact on our ability to be responsive and focus on the work to be done"
              </blockquote>

              {/* Attribution */}
              <p className="text-gray-600">
                Matthew Woodget, CEO of Go Narrative
              </p>

              {/* Products */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Products</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                  <span className="text-gray-900">Teams</span>
                </div>
              </div>

              {/* Read Story Button */}
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Read the story
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="relative h-80 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Collaboration Meeting Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* GoNarrative */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">GN</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">GoNarrative</span>
            </div>
          </div>

          {/* ABN AMRO */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded mx-auto mb-1"></div>
              <span className="text-sm font-semibold text-gray-900">ABN AMRO</span>
            </div>
          </div>

          {/* Berryessa Gap Vineyards */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-900 text-center">BERRYESSA GAP VINEYARDS</span>
          </div>

          {/* L'ORÉAL */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-900">L'ORÉAL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
