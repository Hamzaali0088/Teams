import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function FeaturesPageLayout({ sections, className = "min-h-screen" }) {
  return (
    <div className={className}>
      <Navbar />
      {sections.map((section, index) => (
        <section.component key={index} {...section.props} />
      ))}
      <Footer />
    </div>
  )
} 