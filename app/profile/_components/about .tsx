import React from 'react';

interface AboutSectionProps {
    studioData: {
        bio: string;
        experience: number;
        totalCustomers: number;
        bestClicks: Array<{ id: number }>;
    };
}

export default function About({ studioData }: AboutSectionProps) {
    return (
        <section className="py-20 bg-opacity-80">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        {/* Placeholder for photographer's profile image */}
                        <div className="relative h-96 w-full rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-[url('/api/placeholder/600/800')] bg-cover bg-center"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-gray-300 text-lg mb-6">{studioData.bio}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <p className="text-3xl font-bold mb-2">{studioData.experience}+</p>
                                <p className="text-gray-400">Years Experience</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <p className="text-3xl font-bold mb-2">{studioData.totalCustomers}+</p>
                                <p className="text-gray-400">Happy Clients</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <p className="text-3xl font-bold mb-2">{studioData.bestClicks.length}+</p>
                                <p className="text-gray-400">Featured Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}