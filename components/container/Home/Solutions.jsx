import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../../common/Container'
import Header from '../../Ui/Header'  
export default function Solutions() {
  const [activeSection, setActiveSection] = useState('meet')
  const [slideDirection, setSlideDirection] = useState('right')
  const [isAnimating, setIsAnimating] = useState(false)

  const solutions = [
    {
      id: 'meet',
      title: 'Meet',
      description: 'Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.¹',
      image: '/st-images/meet.avif'
    },
    {
      id: 'call',
      title: 'Call',
      description: 'Stay connected with crystal-clear audio and video calls, screen sharing, and advanced calling features.',
      image: '/st-images/call.avif'
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work together seamlessly with real-time document editing, file sharing, and team collaboration tools.',
      image: '/st-images/collaborate.avif'
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Communicate instantly with team chat, channels, and integrated messaging across all your devices.',
      image: '/st-images/chat.avif'
    }
  ]

  const handleSectionChange = (newSection) => {
    if (newSection !== activeSection && !isAnimating) {
      setIsAnimating(true)
      setSlideDirection('right')
      setActiveSection(newSection)
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 700) // Match the transition duration
    }
  }

  return (
    <section id='solutions' className="py-20 bg-white">
      <Container className="">
         {/* Header */}
         <Header title="Solutions" description="Streamline communications—all in one place" />
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Navigation */}
          <div className="space-y-8">
           
            {/* Accordion/Navigation Menu */}
            <div className="space-y-1">
              {solutions.map((solution, index) => (
                <div key={solution.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => handleSectionChange(solution.id)}
                    className={`w-full text-left py-4 px-4 relative transition-all duration-500 ease-in-out ${
                      activeSection === solution.id 
                        ? 'bg-purple-50 border-l-4 border-purple-500' 
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <span className={`text-gray-400 transition-transform duration-300 ${
                        activeSection === solution.id ? 'rotate-180' : 'rotate-0'
                      }`}>
                        v
                      </span>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeSection === solution.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 space-y-3">
                        <p className="text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>
                        <a 
                          href="#" 
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                        >
                          Learn more
                          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative h-full">
            <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={solutions.find(s => s.id === activeSection)?.image || '/st-images/meet.avif'}
                alt={`${solutions.find(s => s.id === activeSection)?.title} solution`}
                fill
                className={`object-cover transition-all duration-700 ease-in-out transform ${
                  isAnimating 
                    ? slideDirection === 'right' 
                      ? 'translate-x-full opacity-0' 
                      : 'translate-x-0 opacity-100'
                    : 'translate-x-0 opacity-100'
                }`}
                priority
              />
              {/* Previous image for smooth transition */}
              {isAnimating && (
                <Image
                  src={solutions.find(s => s.id !== activeSection)?.image || '/st-images/meet.avif'}
                  alt="Previous solution"
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out transform absolute inset-0 ${
                    slideDirection === 'right' 
                      ? '-translate-x-full opacity-100' 
                      : 'translate-x-0 opacity-0'
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
