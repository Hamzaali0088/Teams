import React from 'react'
import Container from '../../common/Container'
import { Monitor, Users, Shield, Zap, Eye, Share2, Settings, BarChart3 } from 'lucide-react'

export default function DynamicFeatures({ 
  title,
  subtitle,
  features,
  demoTitle = "See it in Action",
  demoDescription = "Experience the power of our technology with this interactive demo.",
  demoFeatures = [
    "Real-time collaboration",
    "High quality support", 
    "Cross-platform compatibility"
  ],
  demoCtaText = "Try Demo Now"
}) {
  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {demoTitle}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {demoDescription}
              </p>
              <div className="space-y-4">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                {demoCtaText}
              </button>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-800 rounded p-4">
                    <div className="h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-white font-semibold">Interactive Demo</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 