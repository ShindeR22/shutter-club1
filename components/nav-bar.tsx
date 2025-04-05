"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./themebutton";

type CategoryItem = {
    name: string;
    href: string;
    description: string;
};

type CityItem = {
    city: string;
    location: {
        lat: number;
        long: number;
    };
};

type NavbarProps = {
    logo?: string;
    brandName?: string;
    showRegisterStudio?: boolean;
};

// Sample data for categories
const categories: CategoryItem[] = [
    {
        name: "Wedding Photography",
        href: "/categories/wedding-photography",
        description: "Covers pre-wedding, wedding, and post-wedding ceremonies.",
    },
    {
        name: "Corporate Event Photography",
        href: "/categories/corporate-event-photography",
        description: "Captures top business conferences and seminars.",
    },
    {
        name: "Cultural & Religious Event Photography",
        href: "/categories/cultural-religious-event-photography",
        description: "Captures festivals, ceremonies, and traditional events.",
    },
    {
        name: "Trade Shows & Exhibitions",
        href: "/categories/trade-shows-exhibitions",
        description: "Captures vibrant booths, displays, and interactions.",
    },
    {
        name: "Political & Government Event Photography",
        href: "/categories/political-event-photography",
        description: "Covers rallies, press conferences, and meetings.",
    },
    {
        name: "School & College Event Photography",
        href: "/categories/school-college-event-photography",
        description: "Covers functions, sports, drama, and reunions.",
    },
];

// Sample data for cities
const cities: CityItem[] = [
    {
        location: { lat: 19.076, long: 72.8777 },
        city: "Mumbai",
    },
    {
        location: { lat: 28.7041, long: 77.1025 },
        city: "Delhi",
    },
    {
        location: { lat: 12.9716, long: 77.5946 },
        city: "Bengaluru",
    },
    {
        location: { lat: 13.0827, long: 80.2707 },
        city: "Chennai",
    },
    {
        location: { lat: 22.5726, long: 88.3639 },
        city: "Kolkata",
    },
    {
        location: { lat: 17.385, long: 78.4867 },
        city: "Hyderabad",
    },
    {
        location: { lat: 18.5204, long: 73.8567 },
        city: "Pune",
    },
    {
        location: { lat: 23.0225, long: 72.5714 },
        city: "Ahmedabad",
    },
    {
        location: { lat: 26.9124, long: 75.7873 },
        city: "Jaipur",
    },
    {
        location: { lat: 26.8467, long: 80.9462 },
        city: "Lucknow",
    },
    {
        location: { lat: 21.1702, long: 72.8311 },
        city: "Surat",
    },
    {
        location: { lat: 21.1458, long: 79.0882 },
        city: "Nagpur",
    },
];

// Mock user data – in a real app, this will come from your auth state
const mockUser = {
    name: "Rushikesh Shinde",
    city: "Pune",
    phone: "+91 7558250015",
    loggedIn: true, // Change to false if the user is not logged in
};

const Navbar: React.FC<NavbarProps> = ({
    logo = "/logo.svg",
    brandName = "Shutter Club",
    showRegisterStudio = true,
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [citiesOpen, setCitiesOpen] = useState(false);
    const { scrollY } = useScroll();
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    // Enhanced reveal animations based on scroll position
    const borderOpacity = useTransform(scrollY, [0, 50], [0.1, 0.6]);
    const backdropBlur = useTransform(scrollY, [0, 100], [3, 12]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.7]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const useDisplayScaling = () => {
        const [windowWidth, setWindowWidth] = useState(
            typeof window !== "undefined" ? window.innerWidth : 0
        );

        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        const isScaledDisplay = windowWidth < 1280;
        return { isScaledDisplay, windowWidth };
    };

    const { isScaledDisplay, windowWidth } = useDisplayScaling();
    // Sample login/logout handlers
    const handleLogin = () => {
        // Add your login logic here
        console.log("Logging in...");
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logging out...");
    };

    return (
        <>
            <motion.header
                className="sticky top-0 z-40 w-full border-b backdrop-blur-md border-zinc-800/30 dark:border-zinc-800/30 border-opacity-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    borderColor: `rgba(39, 39, 45, ${borderOpacity.get()})`,
                    boxShadow: isScrolled
                        ? "0 8px 32px rgba(0, 0, 0, 0.15)"
                        : "none",
                    backdropFilter: `blur(${backdropBlur.get()}px)`,
                    backgroundColor: `rgba(15, 15, 20, ${bgOpacity.get()})`,
                }}
            >
                <div
                    className={cn(
                        "container flex items-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto",
                        "h-12 md:h-18 lg:h-20"
                    )}
                >
                    {/* Mobile menu button */}
                    <button
                        className="inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 h-9 py-2 mr-2 px-0 text-zinc-400 hover:text-white md:hidden"
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
                        <span className="sr-only">Toggle Menu</span>
                    </button>

                    {/* Logo - Desktop */}
                    <div className="mr-4 hidden md:flex">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Link href="/" className="relative mr-6 flex items-center space-x-2">
                                <div
                                    className={cn(
                                        "rounded-full flex items-center justify-center",
                                        "size-8 lg:size-9 xl:size-10"
                                    )}
                                >
                                    <Image
                                        src={logo || "/placeholder.svg"}
                                        alt={`${brandName} Logo`}
                                        width={36}
                                        height={36}
                                        className="w-auto h-auto"
                                    />
                                </div>
                                <span className={cn("hidden font-bold md:inline-block", "text-lg lg:text-xl")}>
                                    {brandName}
                                </span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav
                            className={cn(
                                "hidden items-center space-x-6 xl:space-x-8 font-medium xl:flex",
                                "text-sm lg:text-base"
                            )}
                        >
                            {/* Categories dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-center transition-colors text-white"
                                    onMouseEnter={() => setCategoriesOpen(true)}
                                    onClick={() => setCategoriesOpen(!categoriesOpen)}
                                    aria-expanded={categoriesOpen}
                                    aria-haspopup="true"
                                >
                                    <span className="shrink-0">Categories</span>
                                    <ChevronDown
                                        size={isScaledDisplay ? 14 : windowWidth > 1280 ? 16 : 14}
                                        className={`ml-1 transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {categoriesOpen && (
                                        <motion.div
                                            className={cn(
                                                "absolute left-0 mt-2 rounded-lg shadow-xl bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-xl ring-1 ring-zinc-800/50 text-zinc-200 border border-zinc-800/30",
                                                "w-56 lg:w-64 xl:w-72"
                                            )}
                                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            onMouseLeave={() => setCategoriesOpen(false)}
                                        >
                                            <div className="py-1.5 divide-y divide-zinc-800/50">
                                                {categories.map((category, index) => (
                                                    <motion.div
                                                        key={category.name}
                                                        initial={{ opacity: 0, x: -5 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                                    >
                                                        <Link
                                                            href={category.href}
                                                            className={cn(
                                                                "block hover:bg-zinc-800/50 transition-colors",
                                                                "py-2.5 px-3 lg:py-3 lg:px-4"
                                                            )}
                                                        >
                                                            <p className="font-medium text-sm lg:text-base">{category.name}</p>
                                                            <p className="text-zinc-400 mt-0.5 text-xs lg:text-sm">
                                                                {category.description}
                                                            </p>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Cities dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-center transition-colors text-white"
                                    onMouseEnter={() => setCitiesOpen(true)}
                                    onClick={() => setCitiesOpen(!citiesOpen)}
                                    aria-expanded={citiesOpen}
                                    aria-haspopup="true"
                                >
                                    <span className="shrink-0">City</span>
                                    <ChevronDown
                                        size={isScaledDisplay ? 14 : windowWidth > 1280 ? 16 : 14}
                                        className={`ml-1 transition-transform ${citiesOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {citiesOpen && (
                                        <motion.div
                                            className={cn(
                                                "absolute left-0 mt-2 rounded-lg shadow-xl bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-xl ring-1 ring-zinc-800/50 text-zinc-200 border border-zinc-800/30",
                                                "w-56 lg:w-64 xl:w-72"
                                            )}
                                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            onMouseLeave={() => setCitiesOpen(false)}
                                        >
                                            <div className="grid grid-cols-2 gap-1 p-3">
                                                {cities.map((city, index) => (
                                                    <motion.div
                                                        key={city.city}
                                                        initial={{ opacity: 0, x: -5 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                                        className="py-2 px-3 hover:bg-zinc-800/50 rounded-md transition-colors cursor-pointer"
                                                    >
                                                        <p className="font-medium text-sm">{city.city}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>
                    </div>

                    {/* Mobile logo */}
                    <div className="flex md:hidden">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src={logo || "/placeholder.svg"}
                                alt={`${brandName} Logo`}
                                width={36}
                                height={36}
                                className="w-auto h-auto"
                            />
                            <span className="font-bold text-lg">{brandName}</span>
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-1 items-center justify-end gap-3">
                        {/* Conditionally render Register Studio button - only visible on desktop */}
                        {showRegisterStudio && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="hidden md:block"
                            >
                                <Button
                                    className="bg-gradient-to-l to-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-300"
                                    size="sm"
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://studio.shuttercloud.in"
                                        className="flex items-center"
                                    >
                                        Register Studio
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                        {/* User Icon with dropdown trigger */}
                        <div className="relative">
                            <button
                                onClick={() => setUserDropdownOpen((prev) => !prev)}
                                className="flex items-center justify-center p-2 rounded-full hover:bg-zinc-800/50 transition-colors"
                                aria-label="User menu"
                            >
                                <User size={24} className="text-white" />
                            </button>
                            {/* User dropdown */}
                            <AnimatePresence>
                                {userDropdownOpen && (
                                    <motion.div
                                        className="absolute right-0 mt-2 w-60 rounded-lg bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/30 shadow-lg z-50"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseLeave={() => setUserDropdownOpen(false)}
                                    >
                                        <div className="p-4">
                                            {mockUser.loggedIn ? (
                                                <>
                                                    <p className="text-white font-medium">{mockUser.name}</p>
                                                    <p className="text-sm text-zinc-400 mt-1">City: {mockUser.city}</p>
                                                    <p className="text-sm text-zinc-400 mt-1">Phone: {mockUser.phone}</p>
                                                    <Button
                                                        onClick={handleLogout}
                                                        className="mt-3 w-full bg-red-600 hover:bg-red-700"
                                                        size="sm"
                                                    >
                                                        Logout
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-white font-medium mb-2">Welcome!</p>
                                                    <Button
                                                        onClick={handleLogin}
                                                        className="w-full bg-green-600 hover:bg-green-700"
                                                        size="sm"
                                                    >
                                                        Login
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Theme toggle */}
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-zinc-900 p-6 shadow-lg"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <Link href="/" className="flex items-center space-x-2">
                                        <Image
                                            src={logo || "/placeholder.svg"}
                                            alt={`${brandName} Logo`}
                                            width={36}
                                            height={36}
                                            className="w-auto h-auto"
                                        />
                                        <span className="font-bold text-lg">{brandName}</span>
                                    </Link>
                                    <button
                                        className="rounded-md p-1 text-zinc-400 hover:text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X size={24} />
                                        <span className="sr-only">Close menu</span>
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-6">
                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-400 mb-3">Categories</h3>
                                        <div className="space-y-3 pl-1">
                                            {categories.slice(0, 4).map((category) => (
                                                <Link
                                                    key={category.name}
                                                    href={category.href}
                                                    className="block text-base font-medium text-white hover:text-purple-400 transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {category.name}
                                                </Link>
                                            ))}
                                            <Link
                                                href="/categories"
                                                className="block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                View all categories →
                                            </Link>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-400 mb-3">Popular Cities</h3>
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 pl-1">
                                            {cities.slice(0, 6).map((city) => (
                                                <span
                                                    key={city.city}
                                                    className="block text-base font-medium text-white hover:text-purple-400 transition-colors cursor-pointer"
                                                >
                                                    {city.city}
                                                </span>
                                            ))}
                                            <Link
                                                href="/cities"
                                                className="block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-2 col-span-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                View all cities →
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Link
                                            href="/about"
                                            className="block text-base font-medium text-white hover:text-purple-400 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="block text-base font-medium text-white hover:text-purple-400 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </div>

                                    <div className="pt-4">
                                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://studio.shutterclub.in"
                                                className="flex items-center justify-center w-full"
                                            >
                                                Register Studio
                                            </a>
                                        </Button>
                                    </div>
                                </nav>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Navbar;
