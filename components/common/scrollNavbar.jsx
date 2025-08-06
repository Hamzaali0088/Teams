import React, { useState, useEffect } from 'react'
import Container from './Container'

export default function ScrollNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Featured news', active: true },
    { name: 'Solutions', active: false },
    { name: 'Products and services', active: false },
    { name: 'Customer stories', active: false },
    { name: 'Get started', active: false }
  ]

  return (
    <nav className={` z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <Container className=" py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-gray-700 font-medium">ChatwayApp</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <span className={`text-sm font-medium transition-colors ${
                  item.active 
                    ? 'text-purple-700' 
                    : 'text-gray-700 hover:text-purple-700'
                }`}>
                  {item.name}
                </span>
                {item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
                )}
                {!item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
            See plans and pricing
          </button>
        </div>
      </Container>
    </nav>
  )
}