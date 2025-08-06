import React from 'react'
import Container from '../../common/Container'
import { TrendingUp, Globe, Users, Clock, DollarSign, Target } from 'lucide-react'

export default function DynamicBenefits({ 
  title,
  subtitle,
  benefits,
  statsTitle = "Impact",
  statsSubtitle = "Real numbers from businesses using our technology",
  stats = [
    { value: "40%", label: "Productivity Increase" },
    { value: "60%", label: "Time Saved" },
    { value: "85%", label: "Cost Reduction" },
    { value: "95%", label: "User Satisfaction" }
  ],
  useCasesTitle = "Popular Use Cases",
  useCases = [
    { title: "Remote Training", description: "Conduct interactive training sessions with real-time collaboration." },
    { title: "Sales Presentations", description: "Share product demos and presentations with prospects in real-time." },
    { title: "Technical Support", description: "Provide remote technical support by viewing and controlling users' screens." },
    { title: "Design Reviews", description: "Collaborate on design projects with real-time feedback and annotations." },
    { title: "Code Reviews", description: "Conduct thorough code reviews with team members by sharing your development environment." },
    { title: "Virtual Meetings", description: "Enhance virtual meetings with visual content sharing for better engagement." }
  ]
}) {
  return (
    <div className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}Transform Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {statsTitle}
            </h3>
            <p className="text-xl text-purple-100">
              {statsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {useCasesTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">{useCase.title}</h4>
                <p className="text-gray-600 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
} 