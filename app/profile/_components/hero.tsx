import Image from 'next/image';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface HeroSectionProps {
    studioData: {
        name: string;
        tagline: string;
        owner: string;
        experience: number;
    };
}
interface FloatingImage {
    id: number;
    top: string;
    left: string;
    size: number;
    rotation: number;
    imageUrl: string;
}

const Hero = ({ studioData }: HeroSectionProps) => {
    // Using useMemo to prevent the array from being recreated on every render
    const imageUrls = useMemo(() => [
        'https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1654764746106-452788e6aea7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600685903633-8f3b46f82440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1587271339318-2e78fdf79586?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587271315307-eaebc181c749?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587271449604-04bb40332709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // Add more image paths as needed
    ], []); // Empty dependency array means this only runs once

    const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);

    // Using useCallback to memoize the function so it can be used as a dependency in useEffect
    const generateRandomPositions = useCallback(() => {
        // Always create exactly 4 images
        const images = [];
        for (let i = 0; i < 4; i++) {
            // Generate random values for positioning and animation
            const top = Math.floor(Math.random() * 80);
            const left = Math.floor(Math.random() * 80);
            const size = 60 + Math.floor(Math.random() * 80);
            const rotation = Math.floor(Math.random() * 0);

            // Pick a random image from our image URLs array
            const randomImageIndex = Math.floor(Math.random() * imageUrls.length);
            const imageUrl = imageUrls[randomImageIndex];

            images.push({
                id: i,
                top: `${top}%`,
                left: `${left}%`,
                size: size,
                rotation: rotation,
                imageUrl: imageUrl
            });
        }
        setFloatingImages(images);
    }, [imageUrls]); // imageUrls is now properly memoized

    useEffect(() => {
        // Generate initial positions
        generateRandomPositions();

        // Set interval to update positions every 2 seconds
        const intervalId = setInterval(() => {
            generateRandomPositions();
        }, 2000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [generateRandomPositions]); // Now correctly includes the generateRandomPositions dependency

    return (
        <div className="relative h-screen overflow-hidden text-white bg-transparent dark:bg-transparent">


            {/* Left side - Floating Images */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
                {floatingImages.map((img) => (
                    <div
                        key={`${img.id}`}
                        className="absolute z-10 opacity-70 transition-all duration-1000"
                        style={{
                            top: img.top,
                            left: img.left,
                            transform: `rotate(${img.rotation}deg)`,
                        }}
                    >
                        <Image
                            src={img.imageUrl}
                            alt="Studio portfolio image"
                            className="rounded-lg shadow-lg object-cover"
                            width={250}
                            height={96}
                        />
                    </div>
                ))}
            </div>


            {/* Right side - Studio Details */}
            <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center items-start px-6">
                <div className="max-w-full">
                    <h1 className="text-6xl font-bold mb-2">{studioData.name}</h1>
                    <p className="text-2xl text-gray-300 mb-6">{studioData.tagline}</p>
                    <p className="text-xl mb-8">
                        By <span className="font-semibold">{studioData.owner}</span> • {studioData.experience} Years of Experience
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition font-medium">
                            Book a Session
                        </button>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-medium">
                            Get a Quotation
                        </button>
                        <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;