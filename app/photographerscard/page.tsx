"use client";

import React from "react";
// import Navbar from "@/components/Navbar"; // Adjust the path as needed
import { SearchBar } from "@/components/SearchBar";
import { PhotographerCard } from "./card";
import Navbar from "@/components/nav-bar";

const photographers = [
        {
                id: 1,
                studioName: "Pixel Studio",
                location: "Mumbai",
                logo: "https://images.unsplash.com/photo-1723986601873-1a2189459723?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.5,
                photos: [
                        {
                                id: 1,
                                src: "https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
                                alt: "Wedding Shot",
                        },
                        {
                                id: 2,
                                src: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                        {
                                id: 3,
                                src: "https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Wedding Shot",
                        },
                        {
                                id: 4,
                                src: "https://images.unsplash.com/photo-1654764746106-452788e6aea7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                ],
                categories: ["wedding-photography", "corporate-event-photography"],
        },
        {
                id: 2,
                studioName: "Shutter Crew",
                location: "Pune",
                logo: "https://images.unsplash.com/photo-1740174459699-487aec1f7bc5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.2,
                photos: [
                        {
                                id: 1,
                                src: "https://images.unsplash.com/photo-1654764746225-e63f5e90facd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Wedding Shot",
                        },
                        {
                                id: 2,
                                src: "https://images.unsplash.com/photo-1611413194453-9172073594d4?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                        {
                                id: 3,
                                src: "https://images.unsplash.com/photo-1654764746106-452788e6aea7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                        {
                                id: 4,
                                src: "https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Wedding Shot",
                        },

                ],
                categories: ["school-college-event-photography", "trade-shows-exhibitions"],
        },
        {
                id: 3,
                studioName: "FrameFocus",
                location: "Nagpur",
                logo: "/images/photo5.jpg",
                rating: 4.7,
                photos: [

                        {
                                id: 1,
                                src: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                        {
                                id: 2,
                                src: "https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Wedding Shot",
                        },
                        {
                                id: 3,
                                src: "https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
                                alt: "Wedding Shot",
                        },
                ],
                categories: ["political-government-event-photography", "wedding-photography"],
        },
        {
                id: 4,
                studioName: "FrameFocus",
                location: "Nagpur",
                logo: "https://images.unsplash.com/photo-1674316476220-79082de85b3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.7,
                photos: [
                        {
                                id: 1,
                                src: "https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
                                alt: "Wedding Shot",
                        },
                        {
                                id: 2,
                                src: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                ],
                categories: ["political-government-event-photography", "wedding-photography"],
        },
        {
                id: 5,
                studioName: "Shutter Crew",
                location: "Pune",
                logo: "https://images.unsplash.com/photo-1649342608969-030ca64bd6e9?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.2,
                photos: [

                        {
                                id: 1,
                                src: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Engagement Shot",
                        },
                        {
                                id: 2,
                                src: "https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
                                alt: "Wedding Shot",
                        },
                ],
                categories: ["school-college-event-photography", "trade-shows-exhibitions"],
        },
];

export default function PhotographerGridPage() {
        return (
                <div className="relative min-h-screen">
                        {/* Passing the prop to hide the Register Studio button */}
                        <Navbar showRegisterStudio={false} />

                        {/* Background */}
                        <div className="absolute inset-0 -z-10 opacity-20">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                        </div>
                        <div
                                className="absolute inset-0 -z-10 opacity-10"
                                style={{
                                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                        backgroundSize: "20px 20px",
                                }}
                        />

                        {/* Search Bar */}
                        <div className="w-screen flex justify-center items-center min-h-10">
                                <div className="max-w-4xl w-full px-4 m-8">
                                        <SearchBar />
                                </div>
                        </div>

                        {/* Grid of Photographer Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pr-4 pb-4 mx-4 gap-4">
                                {photographers.map((photographer) => (
                                        <PhotographerCard key={photographer.id} photographer={photographer} />
                                ))}
                        </div>
                </div>
        );
}
