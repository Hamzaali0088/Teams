import React from 'react'
import Container from '../../common/Container'
import { Download, Play, Monitor, Smartphone, Tablet } from 'lucide-react'

export default function DynamicGetStarted({ 
  title = "Get Started Today",
  subtitle = "Join millions of users who are already transforming their collaboration with our powerful technology.",
  mainCtaTitle = "Ready to Start?",
  mainCtaSubtitle = "Download our app and begin your first session in minutes",
  primaryCtaText = "Download App",
  secondaryCtaText = "Watch Demo",
  tertiaryCtaText = "Sign Up Free",
  platformsTitle = "Available on All Your Devices",
  platforms = [
    {
      icon: Monitor,
      name: "Desktop",
      description: "Windows, macOS, Linux",
      features: ["Full functionality", "Advanced features", "Remote control"]
    },
    {
      icon: Smartphone,
      name: "Mobile",
      description: "iOS, Android",
      features: ["Mobile optimized", "Camera sharing", "Touch controls"]
    },
    {
      icon: Tablet,
      name: "Tablet",
      description: "iPad, Android tablets",
      features: ["Large screen support", "Pen support", "Multi-touch gestures"]
    }
  ],
  stats = [
    { value: "4K", label: "Quality Support" },
    { value: "1000+", label: "Participants" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ],
  finalCtaTitle = "Transform Your Experience Today",
  finalCtaSubtitle = "Experience the power of seamless technology and take your team's productivity to the next level",
  finalCtaText = "Start Free Trial"
}) {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              {mainCtaTitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {mainCtaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="w-6 h-6" />
                <span>{primaryCtaText}</span>
              </button>
              
              <button className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-semibold text-lg transition-all duration-300">
                <Play className="w-6 h-6" />
                <span>{secondaryCtaText}</span>
              </button>
              
              <button className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-semibold text-lg transition-all duration-300">
                <span>{tertiaryCtaText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Platform Support */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            {platformsTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold mb-2">
                  {platform.name}
                </h4>
                
                <p className="text-gray-300 mb-4">
                  {platform.description}
                </p>
                
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              {finalCtaTitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {finalCtaSubtitle}
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {finalCtaText}
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
} 