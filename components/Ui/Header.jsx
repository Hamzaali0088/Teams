import React from 'react'

export default function Header({title, description}) {
  return (
    <div className='text-start mb-12'>
        <h2 className='text-base text-gray-600'>{title}</h2>
        <p className=' mb-4 text-5xl text-gray-900 font-medium leading-relaxed'>
            {description}
        </p>
    </div>
  )
}
