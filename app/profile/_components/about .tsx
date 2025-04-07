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
        <section className="py-20 bg-transparent dark:bg-transparent relative ">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-1 opacity-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">

                        <div className="relative h-96 w-full rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
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