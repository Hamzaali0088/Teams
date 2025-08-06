import React, { useState } from 'react'
import Image from 'next/image'
import Container from '../../common/Container'

export default function ProductAndServices() {
  const [activeTab, setActiveTab] = useState('business')

  const tabs = [
    { id: 'business', label: 'Business' },
    { id: 'home', label: 'Home' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'education', label: 'Education' }
  ]

  const businessSolutions = [
    {
      id: 'teams-essentials',
      title: 'Teams Essentials',
      description: 'Connect with customers by video, chat, and phone using an affordable, all-in-one solution for up to 300 people.',
      icon: '👥',
      featured: true,
      image: '/st-images/feature1.avif'
    },
    {
      id: 'teams-essentials-grid',
      title: 'Teams Essentials',
      description: 'Connect with customers by video, chat, and phone using an affordable, all-in-one solution for up to 300 people.',
      icon: '👥'
    },
    {
      id: 'm365-business-standard',
      title: 'Microsoft 365 Business Standard',
      description: 'Choose between plans with and without Microsoft Teams and get desktop versions of Microsoft 365 apps and Clipchamp.',
      icon: '📊'
    },
    {
      id: 'm365-business-premium',
      title: 'Microsoft 365 Business Premium',
      description: 'Get everything in Microsoft 365 Business Standard plus advanced security and device management.',
      icon: '🛡️'
    },
    {
      id: 'teams-phone',
      title: 'Teams Phone',
      description: 'Add cloud-based phone service to Teams to get all the features of a landline.',
      icon: '📞'
    },
    {
      id: 'teams-rooms',
      title: 'Teams Rooms',
      description: 'Strengthen hybrid work with enhanced meeting experiences for every space.',
      icon: '🏢'
    },
    {
      id: 'teams-premium',
      title: 'Teams Premium',
      description: 'Get extra features that help make meetings more personalized, intelligent, and protected.',
      icon: '⭐'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Find the right Teams plan and add-ons for your needs
          </h2>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Card - Left Panel */}
          <div className="lg:col-span-1">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/st-images/feature1.avif"
                alt="Teams for small business"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Teams for small business</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Grow your customer base with communications software designed for up to 300 employees.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Solution Cards Grid - Right Panel */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessSolutions.slice(1).map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  {/* Icon */}
                  <div className="text-3xl mb-4">{solution.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Button */}
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center group">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
