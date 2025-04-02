"use client";

import { Card, CardContent } from "@/components/ui/card";
// import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const photographers = [
        {
                name: "Pasquale Minniti",
                images: ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg"],
        },
        {
                name: "Vinci Wang",
                images: ["/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg"],
        },
        {
                name: "David Murray",
                images: ["/photos/photo7.jpg", "/photos/photo8.jpg", "/photos/photo9.jpg"],
        },
];

export default function BestClicks() {
        // const { theme } = useTheme();

        return (
                <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
                        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
                                Best Clicks by Top Photographers
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {photographers.map((photographer, index) => (
                                        <PhotoCard key={index} photographer={photographer} />
                                ))}
                        </div>
                </div>
        );
}

function PhotoCard({ photographer }: { photographer: { name: string; images: string[] } }) {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextImage = () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % photographer.images.length);
        };

        const prevImage = () => {
                setCurrentIndex((prevIndex) =>
                        prevIndex === 0 ? photographer.images.length - 1 : prevIndex - 1
                );
        };

        return (
                <Card className="overflow-hidden shadow-lg">
                        <CardContent className="p-0 relative">
                                <Image
                                        src={photographer.images[currentIndex]}
                                        alt={photographer.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-60 object-cover rounded-t-lg"
                                />
                                {/* Navigation Buttons */}
                                <Button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                >
                                        ◀
                                </Button>
                                <Button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                >
                                        ▶
                                </Button>
                        </CardContent>
                        <div className="p-4 bg-white dark:bg-gray-800">
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{photographer.name}</p>
                        </div>
                </Card>
        );
}
