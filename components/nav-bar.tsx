'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
// import useDisplayScaling from '@/hooks/use-display-scaling';
import { cn } from '@/lib/utils';
import useDisplayScaling from '@/hooks/npx shadcn@latest add "https:/magicui.design/r/use-display-scaling';
import Themebutton from './themebutton';
// import { useDialog } from './ui/global-dialog';
// import { RequestDemoForm } from './dialogs/request-demo';
// import { YouTubeVideoDialog } from './dialogs/youtube-video';

// Type definitions
type categorieItem = {
    name: string;
    href: string;
    description: string;
};

type NavbarProps = {
    logo?: string;
};

type cityItem = {
    city: string;
    location: {
        lat: number;
        long: number
    }
}

const categories: categorieItem[] = [
    {
        name: 'Wedding Photography',
        href: '/categories/wedding-photography',
        description:
            'Covers pre-wedding, wedding, and post-wedding ceremonies.',
    },
    {
        name: 'Corporate Event Photography',
        href: '/categories/corporate-event-photography',
        description:
            'Captures top business conferences and seminars.',
    },
    {
        name: 'Cultural & Religious Event Photography',
        href: '/categories/cultural-religious-event-photography',
        description:
            'Captures festivals, ceremonies, and traditional events.',
    },
    {
        name: 'Trade Shows & Exhibitions',
        href: '/categories/trade-shows-exhibitions',
        description:
            'Captures vibrant booths, displays, and interactions.',
    },
    {
        name: 'Political & Government Event Photography',
        href: '/categories/political-event-photography',
        description:
            'Covers rallies, press conferences, and meetings.',
    },
    {
        name: 'School & College Event Photography',
        href: '/categories/school-college-event-photography',
        description:
            'Covers functions, sports, drama, and reunions.',
    },
];

const cities: cityItem[] = [
    {
        location: {
            lat: 19.0760,
            long: 72.8777,
        },
        city: "Mumbai",
    },
    {
        location: {
            lat: 28.7041,
            long: 77.1025,
        },
        city: "Delhi",
    },
    {
        location: {
            lat: 12.9716,
            long: 77.5946,
        },
        city: "Bengaluru",
    },
    {
        location: {
            lat: 13.0827,
            long: 80.2707,
        },
        city: "Chennai",
    },
    {
        location: {
            lat: 22.5726,
            long: 88.3639,
        },
        city: "Kolkata",
    },
    {
        location: {
            lat: 17.3850,
            long: 78.4867,
        },
        city: "Hyderabad",
    },
    {
        location: {
            lat: 18.5204,
            long: 73.8567,
        },
        city: "Pune",
    },
    {
        location: {
            lat: 23.0225,
            long: 72.5714,
        },
        city: "Ahmedabad",
    },
    {
        location: {
            lat: 26.9124,
            long: 75.7873,
        },
        city: "Jaipur",
    },
    {
        location: {
            lat: 26.8467,
            long: 80.9462,
        },
        city: "Lucknow",
    },
    {
        location: {
            lat: 21.1702,
            long: 72.8311,
        },
        city: "Surat",
    },
    {
        location: {
            lat: 21.1458,
            long: 79.0882,
        },
        city: "Nagpur",
    },
];



const Navbar: React.FC<NavbarProps> = ({ logo = '/logo.svg' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoriesOpen, setcategoriesOpen] = useState(false);
    const [citiesOpen, setcitiesOpen] = useState(false);
    const { scrollY } = useScroll();
    // const { openDialog } = useDialog();

    // Use the display scaling hook for responsive sizing
    const { isScaledDisplay, windowWidth } = useDisplayScaling();

    // Enhanced reveal animations based on scroll position
    const borderOpacity = useTransform(scrollY, [0, 50], [0.1, 0.6]);
    const backdropBlur = useTransform(scrollY, [0, 100], [3, 12]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.7]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine navbar height based on display scaling
    const navbarHeight = cn(
        "h-16",
        isScaledDisplay ? "sm:h-16 md:h-16" : "sm:h-16 md:h-18 lg:h-20 xl:h-20"
    );

    // Adjust text sizes based on display scaling
    const logoTextSize = cn(
        "text-lg",
        isScaledDisplay ? "md:text-lg" : "md:text-lg lg:text-xl xl:text-xl"
    );

    const navLinkSize = cn(
        "text-sm",
        isScaledDisplay ? "md:text-sm" : "md:text-sm lg:text-base xl:text-base"
    );

    const dropdownHeaderSize = cn(
        "text-sm",
        isScaledDisplay ? "md:text-sm" : "md:text-sm lg:text-base xl:text-base"
    );

    const dropdownDescSize = cn(
        "text-xs",
        isScaledDisplay ? "md:text-xs" : "md:text-xs lg:text-sm xl:text-sm"
    );

    // Adjust spacing based on scaling
    const navSpacing = cn(
        "space-x-6",
        isScaledDisplay ? "xl:space-x-6" : "xl:space-x-8 2xl:space-x-10"
    );

    // Adjust logo size based on scaling
    const logoSize = isScaledDisplay ? 32 : 36;
    const mobileLogoSize = isScaledDisplay ? 35 : 38;

    // Adjust container padding
    const containerPadding = cn(
        "px-6 md:px-8",
        isScaledDisplay ? "lg:px-8" : "lg:px-10 xl:px-12"
    );

    return (
        <motion.header
            className={`sticky top-0 z-40 w-full border-b backdrop-blur-md border-zinc-800/30`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                borderColor: `rgba(39, 39, 45, ${borderOpacity.get()})`,
                boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
                backdropFilter: `blur(${backdropBlur.get()}px)`,
                backgroundColor: `rgba(15, 15, 20, ${bgOpacity.get()})`,
            }}
        >
            <div className={cn(`container flex items-center ${containerPadding} max-w-7xl mx-auto`, navbarHeight)}>
                <div className="mr-4 hidden md:flex">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/" className="relative mr-6 flex items-center space-x-2">
                            <div className={cn(
                                "rounded-full flex items-center justify-center",
                                isScaledDisplay ? "size-8" : "size-8 lg:size-9 xl:size-10"
                            )}>
                                <Image
                                    src={logo}
                                    alt="Shutter Cloud Logo"
                                    width={logoSize}
                                    height={logoSize}
                                    className="w-auto h-auto"
                                />
                            </div>
                            <span className={cn("hidden font-bold md:inline-block", logoTextSize)}>Shutter Club</span>
                        </Link>
                    </motion.div>

                    <nav className={cn(`hidden items-center ${navSpacing} font-medium xl:flex`, navLinkSize)}>
                        {/* categories dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center justify-center transition-colors hover:text-white text-zinc-400"
                                onMouseEnter={() => setcategoriesOpen(true)}
                                onClick={() => setcategoriesOpen(!categoriesOpen)}
                            >
                                <span className="shrink-0">Catagery</span>
                                <ChevronDown
                                    size={isScaledDisplay ? 14 : windowWidth > 1280 ? 16 : 14}
                                    className={`ml-1 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {categoriesOpen && (
                                    <motion.div
                                        className={cn(
                                            "absolute left-0 mt-2 rounded-lg shadow-xl bg-zinc-900/95 backdrop-blur-xl ring-1 ring-zinc-800/50 text-zinc-200 border border-zinc-800/30",
                                            isScaledDisplay ? "w-56" : "w-56 lg:w-64 xl:w-72"
                                        )}
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        onMouseLeave={() => setcategoriesOpen(false)}
                                    >
                                        <div className="py-1.5 divide-y divide-zinc-800/50">
                                            {categories.map((categorie, index) => (
                                                <motion.div
                                                    key={categorie.name}
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={categorie.href}
                                                        className={cn(
                                                            "block hover:bg-zinc-800/50 transition-colors",
                                                            isScaledDisplay ? "py-2.5 px-3" : "py-2.5 px-3 lg:py-3 lg:px-4"
                                                        )}
                                                    >
                                                        <p className={cn("font-medium", dropdownHeaderSize)}>{categorie.name}</p>
                                                        <p className={cn("text-zinc-400 mt-0.5", dropdownDescSize)}>{categorie.description}</p>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative">
                            <button
                                className="flex items-center justify-center transition-colors hover:text-white text-zinc-400"
                                onMouseEnter={() => setcitiesOpen(true)}
                                onClick={() => setcitiesOpen(!citiesOpen)}
                            >
                                <span className="shrink-0">City</span>
                                <ChevronDown
                                    size={isScaledDisplay ? 14 : windowWidth > 1280 ? 16 : 14}
                                    className={`ml-1 transition-transform ${citiesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {citiesOpen && (
                                    <motion.div
                                        className={cn(
                                            "absolute left-0 mt-2 rounded-lg shadow-xl bg-zinc-900/95 backdrop-blur-xl ring-1 ring-zinc-800/50 text-zinc-200 border border-zinc-800/30",
                                            isScaledDisplay ? "w-56" : "w-56 lg:w-64 xl:w-72"
                                        )}
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        onMouseLeave={() => setcitiesOpen(false)}
                                    >
                                        <div className="py-1.5 divide-y divide-zinc-800/50">
                                            {cities.map((city, index) => (
                                                <motion.div
                                                    key={city.city}
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                                >
                                                    {/* <Link
                                                        href={categorie.href}
                                                        className={cn(
                                                            "block hover:bg-zinc-800/50 transition-colors",
                                                            isScaledDisplay ? "py-2.5 px-3" : "py-2.5 px-3 lg:py-3 lg:px-4"
                                                        )}
                                                    >
                                                        <p className={cn("font-medium", dropdownHeaderSize)}>{categorie.name}</p>
                                                        <p className={cn("text-zinc-400 mt-0.5", dropdownDescSize)}>{categorie.description}</p>
                                                    </Link> */}
                                                    <p className={cn("font-medium ", dropdownHeaderSize)}>{city.city}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>
                </div>

                {/* Mobile menu button */}
                <button
                    className="inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 h-9 py-2 mr-2 px-0 text-zinc-400 hover:text-white md:hidden"
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
                    <span className="sr-only">Toggle Menu</span>
                </button>

                {/* Mobile logo */}
                <div className="flex md:hidden">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={logo}
                            alt="Shutter Cloud Logo"
                            width={mobileLogoSize}
                            height={mobileLogoSize}
                        />
                        <span className="font-bold text-lg">Shutter Cloud</span>
                    </Link>
                </div>

                {/* Right side */}
                <div className="flex flex-1 items-center justify-between gap-3 md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* <div
                            className={cn(
                                "items-center hover:cursor-pointer justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 text-zinc-400 hover:text-white hidden md:inline-flex",
                                navLinkSize,
                                isScaledDisplay ? "h-9 px-4 py-2" : "h-9 px-4 py-2 lg:h-10 lg:px-5 xl:px-6"
                            )}
                        // onClick={() => {
                        //         openDialog(<RequestDemoForm />, 'from-center');
                        // }}
                        >
                            Request Demo
                        </div> */}
                    </motion.div>

                    {/* Get Started - only visible on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <InteractiveHoverButton
                            className={cn(
                                "dark:border-zinc-800/50 dark:bg-zinc-900/90 shadow-md hover:shadow-lg",
                                isScaledDisplay ? "text-sm" : "text-sm lg:text-base xl:text-base",
                            )}
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href='https://studio.shuttercloud.in'
                            >
                                <div>Resister Studio</div>
                            </a>
                        </InteractiveHoverButton>
                    </motion.div>
                    <div>
                        <Themebutton />
                    </div>
                </div>
            </div>


        </motion.header>
    );
};

export default Navbar;