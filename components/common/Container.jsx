import React from 'react'

export default function Container({children, className  }) {
  return (
    <div className={`w-full max-w-[1330px] mx-auto ${className}`}>
        {children}
    </div>
  )
}
