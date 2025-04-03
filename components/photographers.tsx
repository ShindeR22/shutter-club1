"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Photographer {
    name: string;
    location: string;
    rating: number;
    image: string;
}

// Moved photographers data outside the component to prevent re-creation on each render
const photographers: Photographer[] = [
    {
        name: "Pasquale Minniti",
        location: "Rome",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Vinci Wang",
        location: "Fuzhou",
        rating: 4,
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "David Murray",
        location: "Atlanta",
        rating: 4,
        image: "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Szymon Pietrzyk",
        location: "Newfoundland & Labrador",
        rating: 3,
        image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg",
    },
    {
        name: "Marius Stoian",
        location: "Târgoviște",
        rating: 5,
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    },
    {
        name: "Mike Garrard",
        location: "London",
        rating: 4,
        image: "https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Arjan Van Der Plaat",
        location: "Breda",
        rating: 3,
        image: "https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Flávio Alvarenga",
        location: "Bahia",
        rating: 5,
        image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

// Component for displaying star ratings
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex justify-center mt-2" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    className={`h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                    fill={index < rating ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
};

export default function PhotographersPage() {
    const [heading, setHeading] = useState("CONNECT WITH AMAZING WEDDING PHOTOGRAPHERS");

    const handleShowMore = () => {
        setHeading("MEET THE BEST WEDDING PHOTOGRAPHERS WORLDWIDE");
    };

    return (
        <section className="container mx-auto py-12 px-6 text-center">
            {/* Heading Section */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h1>

            {/* Photographer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {photographers.map((photographer) => (
                    <Card key={photographer.name} className="text-center shadow-md">
                        <CardHeader className="relative w-40 h-40 mx-auto">
                            <Image
                                src={photographer.image}
                                alt={`Portrait of ${photographer.name}`}
                                fill
                                className="rounded-full object-cover"
                                sizes="(max-width: 768px) 100vw, 160px"
                                loading="lazy"
                            />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-semibold">{photographer.name}</h3>
                            <p className="text-gray-500">{photographer.location}</p>
                            <StarRating rating={photographer.rating} />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Change Heading Button */}
            <Button
                className="mt-6"
                onClick={handleShowMore}
                aria-label="Show more photographers"
            >
                Show More
            </Button>
        </section>
    );
}