"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion";

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

// Component for displaying star ratings with animation
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex justify-center mt-3" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.1 * index,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <Star
                        className={`h-7 w-7 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                        fill={index < rating ? "currentColor" : "none"}
                    />
                </motion.div>
            ))}
        </div>
    );
};

// Photographer Card Component with hover effects
const PhotographerCard = ({
    photographer,
    index,
    isActive = false
}: {
    photographer: Photographer,
    index: number,
    isActive?: boolean
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: isActive ? 1.05 : 1
            }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="h-full"
        >
            <Card
                className={`text-center h-full transition-all duration-300 ${isHovered || isActive ? 'shadow-xl border-blue-400 border-2' : 'shadow-md'
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardHeader className="relative w-56 h-56 mx-auto">
                    <div className="w-full h-full rounded-full overflow-hidden">
                        <motion.div
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={photographer.image}
                                alt={`Portrait of ${photographer.name}`}
                                width={300}       // set explicit width
                                height={300}      // set explicit height to match width for a circle
                                className="rounded-full object-cover"  // rounded-full makes it a circle
                                sizes="(max-width: 768px) 100vw, 300px"
                                loading="lazy"
                            />

                        </motion.div>
                    </div>
                </CardHeader>
                <CardContent>
                    <motion.h3
                        className="text-xl font-semibold mt-2"
                        animate={{ color: isHovered ? '#3b82f6' : '#000000' }}
                        transition={{ duration: 0.3 }}
                    >
                        {photographer.name}
                    </motion.h3>
                    <p className="text-gray-500 text-lg">{photographer.location}</p>
                    <StarRating rating={photographer.rating} />
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default function PhotographersPage() {
    const [heading, setHeading] = useState("CONNECT WITH AMAZING WEDDING PHOTOGRAPHERS");
    const [showAllPhotographers, setShowAllPhotographers] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Add scroll effect for section entrance
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // Auto cycle through highlighting different photographers
        const interval = setInterval(() => {
            setActiveIndex(prev => {
                if (prev === null) return 0;
                return (prev + 1) % photographers.length;
            });
        }, 3000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const handleShowMore = () => {
        setHeading("MEET THE BEST WEDDING PHOTOGRAPHERS WORLDWIDE");
        setShowAllPhotographers(true);
    };

    const displayedPhotographers = showAllPhotographers
        ? photographers
        : photographers.slice(0, 4);

    return (
        <motion.section
            className="container mx-auto py-12 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Heading Section with Animation */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {heading}
                    <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.h1>
            </motion.div>

            {/* Photographer Grid with Staggered Animation */}
            <div>
                <BorderBeam />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {displayedPhotographers.map((photographer, index) => (
                        <PhotographerCard
                            key={photographer.name}
                            photographer={photographer}
                            index={index}
                            isActive={index === activeIndex}
                        />
                    ))}
                </div>
            </div>

            {/* Animated Show More Button */}
            {!showAllPhotographers && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            className="mt-6 relative overflow-hidden group"
                            onClick={handleShowMore}
                            aria-label="Show more photographers"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Show More
                                <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ChevronDown size={16} />
                                </motion.div>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-blue-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            )}

            {/* Floating scroll-to-top button that appears after scrolling */}
            {scrolled && (
                <motion.button
                    className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5
                        }}
                    >
                        <ChevronDown size={24} className="transform rotate-180" />
                    </motion.div>
                </motion.button>
            )}
        </motion.section>
    );
}