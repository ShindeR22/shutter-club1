// types/photographer.ts

"use client";
// components/PhotographerCard.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarHalf } from 'lucide-react';
// import { Photographer } from '@/types/photographer';
export interface Photo {
        id: number;
        src: string;
        alt: string;
}

export interface Photographer {
        id: number;
        studioName: string;
        location: string;
        logo: string;
        rating: number;
        photos: Photo[];
        categories: string[];
}
interface PhotographerCardProps {
        photographer: Photographer;
}

// components/PhotographerCard.tsx
export const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
        const [activePhotoIndex, setActivePhotoIndex] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setActivePhotoIndex((prevIndex) =>
                                prevIndex === photographer.photos.length - 1 ? 0 : prevIndex + 1
                        );
                }, 5000);
                return () => clearInterval(interval);
        }, [photographer.photos.length]);

        const renderRatingStars = (rating: number) => {
                const stars = [];
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 !== 0;

                for (let i = 0; i < fullStars; i++) {
                        stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" />);
                }

                if (hasHalfStar) {
                        stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400" />);
                }

                const emptyStars = 5 - stars.length;
                for (let i = 0; i < emptyStars; i++) {
                        stars.push(<Star key={`empty-${i}`} className="text-gray-300" />);
                }

                return stars;
        };

        const categoryLabels: Record<string, string> = {
                'wedding-photography': 'Wedding',
                'corporate-event-photography': 'Corporate',
                'cultural-religious-event-photography': 'Cultural & Religious',
                'trade-shows-exhibitions': 'Trade Shows',
                'political-government-event-photography': 'Political Events',
                'school-college-event-photography': 'School & College',
        };

        return (
                <Card className="flex flex-row overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        {/* Carousel Side */}
                        <div className="relative w-1/2 h-72">
                                {photographer.photos.map((photo, index) => (
                                        <div
                                                key={photo.id}
                                                className={`absolute w-full h-full transition-opacity duration-500 ${index === activePhotoIndex ? 'opacity-100' : 'opacity-0'
                                                        }`}
                                        >
                                                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                                        </div>
                                ))}
                                {/* Carousel Indicators */}
                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                                        {photographer.photos.map((_, index) => (
                                                <button
                                                        key={index}
                                                        onClick={() => setActivePhotoIndex(index)}
                                                        className={`w-2 h-2 rounded-full ${index === activePhotoIndex ? 'bg-white' : 'bg-white/50'}`}
                                                />
                                        ))}
                                </div>
                        </div>

                        {/* Details Side */}
                        <div className="flex flex-col justify-between w-1/2 p-6">
                                {/* Studio Info */}
                                <div>
                                        <div className="flex items-center mb-2 ">
                                                <Image src={photographer.logo} alt="Logo" width={56} height={56} className="rounded-full mr-2" />
                                                <div>
                                                        <h2 className="text-lg font-semibold">{photographer.studioName}</h2>
                                                        <p className="text-sm ">{photographer.location}</p>
                                                </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center mb-3">
                                                <span className="text-sm font-medium  mr-2">Rating:</span>
                                                <div className="flex">{renderRatingStars(photographer.rating)}</div>
                                                <span className="ml-2 text-sm ">({photographer.rating})</span>
                                        </div>

                                        {/* Categories */}
                                        <div>
                                                <h3 className="text-sm font-medium  mb-1">Specialties:</h3>
                                                <div className="flex flex-wrap gap-2">
                                                        {photographer.categories.map((cat) => (
                                                                <span
                                                                        key={cat}
                                                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                                                                >
                                                                        {categoryLabels[cat]}
                                                                </span>
                                                        ))}
                                                </div>
                                        </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 mt-4">
                                        <Button variant="outline" className="flex-1">Contact</Button>
                                        <Button className="flex-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">Get Quotation</Button>
                                </div>
                        </div>
                </Card>
        );
};
