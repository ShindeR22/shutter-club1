import React from 'react';

interface HeroSectionProps {
        studioData: {
                name: string;
                tagline: string;
                owner: string;
                experience: number;
        };
}

export default function Hero({ studioData }: HeroSectionProps) {
        return (
                <header className="relative h-screen">
                        <div className="absolute inset-0 z-0">
                                {/* For a real implementation, replace with actual Image component */}
                                <div className="w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-60"></div>
                        </div>
                        <div className="absolute inset-0 bg-opacity-50 z-10"></div>

                        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                                <div className="max-w-3xl">
                                        <h1 className="text-6xl font-bold mb-2">{studioData.name}</h1>
                                        <p className="text-2xl text-gray-300 mb-6">{studioData.tagline}</p>
                                        <p className="text-xl mb-8">By <span className="font-semibold">{studioData.owner}</span> • {studioData.experience} Years of Experience</p>
                                        <div className="flex flex-wrap gap-4">
                                                <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition font-medium">Book a Session</button>
                                                <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-medium">Get a Quotation</button>
                                                <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition">View Portfolio</button>
                                        </div>
                                </div>
                        </div>
                </header>
        );
}