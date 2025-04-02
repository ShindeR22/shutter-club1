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

const photographers: Photographer[] = [
    {
        name: "Pasquale Minniti",
        location: "Rome",
        rating: 5,
        image: "/images/pasquale.jpg",
    },
    {
        name: "Vinci Wang",
        location: "Fuzhou",
        rating: 4,
        image: "/images/vinci.jpg",
    },
    {
        name: "David Murray",
        location: "Atlanta",
        rating: 4,
        image: "/images/david.jpg",
    },
    {
        name: "Szymon Pietrzyk",
        location: "Newfoundland & Labrador",
        rating: 3,
        image: "/images/szymon.jpg",
    },
    {
        name: "Marius Stoian",
        location: "Târgoviște",
        rating: 5,
        image: "/images/marius.jpg",
    },
    {
        name: "Mike Garrard",
        location: "London",
        rating: 4,
        image: "/images/mike.jpg",
    },
    {
        name: "Arjan Van Der Plaat",
        location: "Breda",
        rating: 3,
        image: "/images/arjan.jpg",
    },
    {
        name: "Flávio Alvarenga",
        location: "Bahia",
        rating: 5,
        image: "/images/flavio.jpg",
    },
];

export default function PhotographersPage() {
    const [heading, setHeading] = useState("CONNECT WITH AMAZING WEDDING PHOTOGRAPHERS");

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
                                alt={photographer.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-semibold">{photographer.name}</h3>
                            <p className="text-gray-500">{photographer.location}</p>
                            <div className="flex justify-center mt-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`h-5 w-5 ${index < photographer.rating ? "text-yellow-500" : "text-gray-300"
                                            }`}
                                        fill={index < photographer.rating ? "currentColor" : "none"}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Change Heading Button */}
            <Button
                className="mt-6"
                onClick={() =>
                    setHeading("MEET THE BEST WEDDING PHOTOGRAPHERS WORLDWIDE")
                }
            >
                Show More
            </Button>
        </section>
    );
}
