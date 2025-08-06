import React from 'react'
import Container from '../../common/Container'

export default function DynamicHero({ 
  bannerText,
  title,
  subtitle,
  primaryCtaText = "Get Started",
  secondaryCtaText = "Watch Demo",
  backgroundImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  stats = [
    { value: "15M+", label: "Users" },
    { value: "4K", label: "Quality" },
    { value: "99.9%", label: "Reliability" },
    { value: "24/7", label: "Support" }
  ]
}) {
  return (
    <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/70 to-blue-800/80"/>
      
      {/* Content */}
      <Container className="relative z-10 text-center text-white py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Banner */}
          {bannerText && (
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium">
              {bannerText}
            </div>
          )}
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Made Powerful
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {primaryCtaText}
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-semibold text-lg transition-all duration-300">
              {secondaryCtaText}
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-300">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-blue-400/30 rounded-full blur-lg animate-bounce" />
      
      {/* Profile Pictures */}
      <div className="absolute top-1/4 right-10 flex -space-x-2">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
      </div>
    </div>
  )
} 