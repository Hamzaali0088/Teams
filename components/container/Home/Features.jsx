import React from 'react'
import Container from '../../common/Container'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Header from '../../Ui/Header'
    
const featuresData = [
    {
        id: 1,
        image: '/st-images/feature1.avif',
        alt: 'Microsoft Teams Phone',
        title: 'Microsoft Teams Phone',
        description: 'Experience smart communication and seamless collaboration with the only calling solution native to Teams.',
        buttonText: 'Learn more'
    },
    {
        id: 2,
        image: '/st-images/feature2.avif',
        alt: 'Microsoft 365 Copilot in Teams',
        title: 'Prompt like a pro with Microsoft 365 Copilot in Teams',
        description: 'Realize the full potential of your team\'s decision-making with prompts for Copilot in Teams. Streamline and transform your meetings so that every idea is visualized, evaluated, and brought to life.',
        buttonText: 'Learn more'
    }
]

export default function Features() {
    return (
        <section id='features' className="py-16 relative">
            <div className='absolute top-0 left-0 w-[300px] rounded-full h-[300px] bg-purple-100 blur-3xl z-0' />
            <div className='absolute top-32 left-64 w-[300px] rounded-full h-[300px] bg-pink-100 blur-3xl z-0' />
            <div className='absolute top-64 left-0 w-[300px] rounded-full h-[300px] bg-yellow-50 blur-3xl z-0' />
            <Container className="relative z-10">
                <Header title="Featured News" description="Discover what's happening with Teams" />

                <div className="grid md:grid-cols-2 gap-8">
                    {featuresData.map((feature) => (
                        <div key={feature.id} className="bg-white border-6 border-white rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {feature.description}
                                </p>
                                <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                                    {feature.buttonText}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
