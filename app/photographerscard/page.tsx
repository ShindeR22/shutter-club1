"use client";

import { SearchBar } from "@/components/SearchBar";
import { PhotographerCard } from "./card";

// import { PhotographerCard } from "@/components/PhotographerCard";

const photographers = [
        {
                id: 1,
                studioName: "Pixel Studio",
                location: "Mumbai",
                logo: "/images/logo.png",
                rating: 4.5,
                photos: [
                        { id: 1, src: "/images/photo1.jpg", alt: "Wedding Shot" },
                        { id: 2, src: "/images/photo2.jpg", alt: "Engagement Shot" },
                ],
                categories: ["wedding-photography", "corporate-event-photography"],
        },
        {
                id: 2,
                studioName: "Shutter Crew",
                location: "Pune",
                logo: "/images/logo2.png",
                rating: 4.2,
                photos: [
                        { id: 1, src: "/images/photo3.jpg", alt: "Ceremony" },
                        { id: 2, src: "/images/photo4.jpg", alt: "Candid" },
                ],
                categories: ["school-college-event-photography", "trade-shows-exhibitions"],
        },
        {
                id: 3,
                studioName: "FrameFocus",
                location: "Nagpur",
                logo: "/images/logo3.png",
                rating: 4.7,
                photos: [
                        { id: 1, src: "/images/photo5.jpg", alt: "Party" },
                        { id: 2, src: "/images/photo6.jpg", alt: "Fashion" },
                ],
                categories: ["political-government-event-photography", "wedding-photography"],
        },
        {
                id: 4,
                studioName: "FrameFocus",
                location: "Nagpur",
                logo: "/images/logo3.png",
                rating: 4.7,
                photos: [
                        { id: 1, src: "/images/photo5.jpg", alt: "Party" },
                        { id: 2, src: "/images/photo6.jpg", alt: "Fashion" },
                ],
                categories: ["political-government-event-photography", "wedding-photography"],
        },
        {
                id: 5,
                studioName: "Shutter Crew",
                location: "Pune",
                logo: "/images/logo2.png",
                rating: 4.2,
                photos: [
                        { id: 1, src: "/images/photo3.jpg", alt: "Ceremony" },
                        { id: 2, src: "/images/photo4.jpg", alt: "Candid" },
                ],
                categories: ["school-college-event-photography", "trade-shows-exhibitions"],
        },
];

export default function PhotographerGridPage() {
        return (
                <div className="relative min-h-screen ">
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

                        {/* Grid of Photographer Cards */}
                        <div className="w-screen  flex justify-center items-center min-h-10">
                                <div className=" max-w-4xl w-full px-4 m-8">
                                        <SearchBar />
                                </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pr-4 mx-4 gap-4">
                                {photographers.map((photographer) => (
                                        <PhotographerCard key={photographer.id} photographer={photographer} />
                                ))}
                        </div>
                </div>
        );
}
