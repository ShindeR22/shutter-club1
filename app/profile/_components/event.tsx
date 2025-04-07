import React from 'react';

interface EventType {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
}

interface EventTypesSectionProps {
    eventTypes: EventType[]; // Changed prop name to match usage
}

export default function Event({ eventTypes }: EventTypesSectionProps) {
    return (
        <section className="py-20 bg-transparent dark:bg-transparent relative">
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
                <h2 className="text-4xl font-bold mb-4 text-center">Event Types</h2>
                <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
                    Specializing in various photography services to meet your specific needs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {eventTypes.map((eventType: EventType) => (
                        <div key={eventType.id} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 group">
                            <div className="bg-purple-600 rounded-full p-4 inline-flex justify-center mb-6 group-hover:bg-purple-500 transition-all">
                                {eventType.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{eventType.name}</h3>
                            <p className="text-gray-300">{eventType.description}</p>
                            <button className="mt-6 text-purple-400 font-medium group-hover:text-white transition-all">
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}