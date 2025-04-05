"use client";

import * as React from "react";
// import { useTheme } from "next-themes";

export default function MapPage() {
        // const { theme } = useTheme();

        return (
                <section className="relative mx-auto px-4 py-12 transition-colors duration-300">
                        {/* Top Wave */}
                        <div className="absolute top-0 left-0 right-0 rotate-180 z-0">
                                <svg
                                        viewBox="0 0 1440 120"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                        <path
                                                d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z"
                                                fill="white"
                                                fillOpacity="0.05"
                                        />
                                </svg>
                        </div>

                        {/* Abstract Background Elements */}
                        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                        </div>

                        {/* Grid Pattern Overlay */}
                        <div
                                className="absolute inset-0 opacity-10 pointer-events-none z-0"
                                style={{
                                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                                        backgroundSize: "20px 20px",
                                }}
                        />

                        {/* Heading */}
                        <h2 className="relative z-10 text-center text-5xl font-bold text-zinc-900 dark:text-white mb-10">
                                Find Photographers Nearby
                        </h2>

                        {/* Google Map */}
                        <div className="relative z-10 map rounded-md shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
                                <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2179678172527!2d-122.4206793846811!3d37.77851957975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a8d74fd81%3A0xb0b3b0bb3cb5f0b3!2sTwitter!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex={0}
                                        className="rounded-md w-full h-[400px]"
                                ></iframe>
                        </div>

                        {/* Bottom Wave */}
                        <div className="absolute bottom-0 left-0 right-0 z-0">
                                <svg
                                        viewBox="0 0 1440 120"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                        <path
                                                d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z"
                                                fill="white"
                                                fillOpacity="0.05"
                                        />
                                </svg>
                        </div>
                </section>
        );
}
