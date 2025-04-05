import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const PremiumTestimonialsShowcase = () => {
        // Premium testimonials data with high-end photography studios
        const premiumTestimonials = [
                {
                        studio: "Lumière Studios",
                        name: "Alexandra Bennett",
                        description: "Working with this platform transformed our client experience. The seamless booking system and stunning portfolio display helped us increase our bookings by 40% within the first quarter. The elegant design perfectly represents our brand aesthetic and has received countless compliments from our high-end clientele.",
                        Image: "https://images.pexels.com/photos/31413241/pexels-photo-31413241/free-photo-of-romantic-couple-embracing-close-up-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                        studio: "Aperture Masters",
                        name: "Jonathan Klein",
                        description: "As a luxury portrait photographer, presenting my work with sophistication is essential. This solution provides the perfect balance of minimalism and impact. My images speak for themselves against the clean interface, and the animation effects add just the right touch of modern elegance without distracting from the photography.",
                        Image: "https://images.pexels.com/photos/15789321/pexels-photo-15789321/free-photo-of-bridal-wedding-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                        studio: "Vogue Vision Photography",
                        name: "Sophia Rosetti",
                        description: "After rebranding with this premium interface, I've been able to attract the high-fashion clients I've always wanted to work with. The attention to detail in the design mirrors my own photographic philosophy. My testimonials now showcase not just what clients say, but present them in a way that reinforces the luxury experience I provide.",
                        Image: "https://images.pexels.com/photos/31003836/pexels-photo-31003836/free-photo-of-elegant-indian-bride-in-red-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                        studio: "Elite Imagery",
                        name: "Marcus Chen",
                        description: "The sophisticated animation transitions reflect the same precision I apply to my architectural photography. My clients immediately notice the difference in presentation quality. This component has become an integral part of my brand story, conveying professionalism and artistic excellence without saying a word.",
                        Image: "https://images.pexels.com/photos/14826512/pexels-photo-14826512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                        "studio": "Watson Studio",
                        "name": "Emily Watson",
                        "description": "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
                        "Image": "http://images.pexels.com/photos/11779011/pexels-photo-11779011.jpeg"
                },
        ];

        return (
                <section className="relative min-h-screen bg-gradient-to-br  to-slate-900 overflow-hidden">
                        {/* Top wave */}
                        <div className="absolute top-0 left-0 right-0 rotate-180">
                                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z" fill="white" fillOpacity="0.05" />
                                </svg>
                        </div>
                        {/* Abstract Background Elements */}
                        <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                        </div>

                        {/* Grid Pattern Overlay */}
                        <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                }}
                        />

                        {/* Content Container */}
                        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center py-16 px-4">
                                <div className="mx-auto max-w-6xl mb-16 text-center">
                                        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">
                                                Our Prestigious Clients
                                        </h2>
                                        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
                                        <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
                                                Hear from photography professionals who have elevated their brand presence with our premium platform.
                                        </p>
                                </div>

                                <AnimatedTestimonials testimonials={premiumTestimonials} autoplay={true} />

                                <div className="flex justify-center mt-16">
                                        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">
                                                <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://studio.shuttercloud.in"
                                                        className="flex items-center"
                                                >
                                                        Join Our Premium Network
                                                </a>

                                        </button>
                                </div>
                        </div>

                        {/* Bottom Wave */}
                        <div className="absolute bottom-0 left-0 right-0">
                                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z" fill="white" fillOpacity="0.05" />
                                </svg>
                        </div>

                </section>
        );
};

export default PremiumTestimonialsShowcase;