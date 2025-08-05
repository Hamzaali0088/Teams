import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* ChatwayApp Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-gray-700 font-medium">ChatwayApp</span>
          </div>
          
          {/* Divider */}
          <div className="w-px h-6 bg-gray-300"></div>
          
          {/* App Name */}
          <span className="text-gray-900 font-semibold">Chat</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Products</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Features</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Pricing</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Solutions</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Resources</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
          
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Support</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Download App
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  )
}