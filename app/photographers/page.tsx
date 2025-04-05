"use client";
import { useState } from 'react';
import Image from 'next/image';
import {
        Card,
        CardContent,
        CardFooter
} from '@/components/ui/card';
import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Star, StarHalf } from 'lucide-react';

// Define TypeScript interfaces
interface Photo {
        id: number;
        src: string;
        alt: string;
}

interface Photographer {
        id: number;
        studioName: string;
        location: string;
        logo: string;
        rating: number;
        photos: Photo[];
        categories: string[];
}

const PhotographersPage = () => {
        const [selectedCategory, setSelectedCategory] = useState<string>('all');

        // Mock data for photographers
        const photographers: Photographer[] = [
                {
                        id: 1,
                        studioName: "Lumina Studios",
                        location: "New York, NY",
                        logo: "/logos/lumina.png",
                        rating: 4.5,
                        photos: [
                                { id: 1, src: "/photos/lumina-1.jpg", alt: "Wedding photo by Lumina" },
                                { id: 2, src: "/photos/lumina-2.jpg", alt: "Corporate event by Lumina" },
                                { id: 3, src: "/photos/lumina-3.jpg", alt: "Cultural event by Lumina" },
                        ],
                        categories: ["wedding-photography", "corporate-event-photography"]
                },
                {
                        id: 2,
                        studioName: "Capture Moments",
                        location: "Los Angeles, CA",
                        logo: "/logos/capture.png",
                        rating: 5,
                        photos: [
                                { id: 1, src: "/photos/capture-1.jpg", alt: "Wedding photo by Capture Moments" },
                                { id: 2, src: "/photos/capture-2.jpg", alt: "School event by Capture Moments" },
                                { id: 3, src: "/photos/capture-3.jpg", alt: "Exhibition by Capture Moments" },
                        ],
                        categories: ["wedding-photography", "school-college-event-photography", "trade-shows-exhibitions"]
                },
                {
                        id: 3,
                        studioName: "Divine Lens",
                        location: "Chicago, IL",
                        logo: "/logos/divine.png",
                        rating: 4,
                        photos: [
                                { id: 1, src: "/photos/divine-1.jpg", alt: "Religious ceremony by Divine Lens" },
                                { id: 2, src: "/photos/divine-2.jpg", alt: "Cultural event by Divine Lens" },
                                { id: 3, src: "/photos/divine-3.jpg", alt: "Wedding by Divine Lens" },
                        ],
                        categories: ["cultural-religious-event-photography", "wedding-photography"]
                }
        ];

        // Filter photographers based on selected category
        const filteredPhotographers = selectedCategory === 'all'
                ? photographers
                : photographers.filter(photographer => photographer.categories.includes(selectedCategory));

        // Render rating stars
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

        return (
                <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
                        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Premium Photography Studios</h1>

                        {/* Category Filter */}
                        <div className="mb-10 flex justify-center">
                                <div className="w-full max-w-md">
                                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                                <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Filter by category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                        <SelectItem value="all">All Categories</SelectItem>
                                                        <SelectItem value="wedding-photography">Wedding Photography</SelectItem>
                                                        <SelectItem value="corporate-event-photography">Corporate Event Photography</SelectItem>
                                                        <SelectItem value="cultural-religious-event-photography">Cultural & Religious Event Photography</SelectItem>
                                                        <SelectItem value="trade-shows-exhibitions">Trade Shows & Exhibitions</SelectItem>
                                                        <SelectItem value="political-government-event-photography">Political & Government Event Photography</SelectItem>
                                                        <SelectItem value="school-college-event-photography">School & College Event Photography</SelectItem>
                                                </SelectContent>
                                        </Select>
                                </div>
                        </div>

                        {/* Photographers Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPhotographers.map((photographer) => (
                                        <Card key={photographer.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                {/* Studio Logo and Name */}
                                                <div className="p-6 bg-white border-b flex items-center">
                                                        <div className="h-12 w-12 relative mr-4">
                                                                <Image
                                                                        src={photographer.logo}
                                                                        alt={`${photographer.studioName} logo`}
                                                                        width={48}
                                                                        height={48}
                                                                        className="object-contain rounded-full"
                                                                />
                                                        </div>
                                                        <div>
                                                                <h2 className="text-xl font-semibold text-gray-900">{photographer.studioName}</h2>
                                                                <p className="text-sm text-gray-500">{photographer.location}</p>
                                                        </div>
                                                </div>

                                                {/* Photo Carousel */}
                                                <div className="carousel relative overflow-hidden h-64">
                                                        {photographer.photos.map((photo, index) => (
                                                                <div key={photo.id} className="carousel-item absolute w-full h-full transition-opacity duration-500" style={{ opacity: index === 0 ? 1 : 0 }}>
                                                                        <Image
                                                                                src={photo.src}
                                                                                alt={photo.alt}
                                                                                fill
                                                                                className="object-cover"
                                                                        />
                                                                </div>
                                                        ))}
                                                </div>

                                                <CardContent className="p-6">
                                                        {/* Rating */}
                                                        <div className="flex items-center mb-4">
                                                                <span className="mr-2 text-sm font-medium text-gray-700">Rating:</span>
                                                                <div className="flex">
                                                                        {renderRatingStars(photographer.rating)}
                                                                </div>
                                                                <span className="ml-2 text-sm text-gray-500">({photographer.rating})</span>
                                                        </div>

                                                        {/* Categories */}
                                                        <div className="mb-4">
                                                                <h3 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h3>
                                                                <div className="flex flex-wrap gap-2">
                                                                        {photographer.categories.map((category) => {
                                                                                const categoryLabels: Record<string, string> = {
                                                                                        'wedding-photography': 'Wedding',
                                                                                        'corporate-event-photography': 'Corporate',
                                                                                        'cultural-religious-event-photography': 'Cultural & Religious',
                                                                                        'trade-shows-exhibitions': 'Trade Shows',
                                                                                        'political-government-event-photography': 'Political Events',
                                                                                        'school-college-event-photography': 'School & College'
                                                                                };

                                                                                return (
                                                                                        <span
                                                                                                key={category}
                                                                                                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                                                                                        >
                                                                                                {categoryLabels[category]}
                                                                                        </span>
                                                                                );
                                                                        })}
                                                                </div>
                                                        </div>
                                                </CardContent>

                                                <CardFooter className="p-6 pt-0 flex gap-4">
                                                        <Button variant="outline" className="flex-1 hover:bg-gray-100">Contact</Button>
                                                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">Get Quotation</Button>
                                                </CardFooter>
                                        </Card>
                                ))}
                        </div>
                </div>
        );
};

export default PhotographersPage;