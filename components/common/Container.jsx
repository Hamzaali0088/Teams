import React from 'react'

export default function Container({children, className  }) {
  return (
    <div className={`w-full h-full max-w-7xl mx-auto ${className}`}>
        {children}
    </div>
  )
}
