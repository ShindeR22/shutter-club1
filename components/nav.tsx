'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
// import { cn } from '@/lib/utils';

type NavItem = {
        name: string;
        href: string;
};

type DropdownItem = {
        name: string;
        href: string;
        description: string;
};

type NavbarProps = {
        logo?: string;
};

const mainNavItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
];

const serviceItems: DropdownItem[] = [
        {
                name: 'Wedding Photography',
                href: '/services/wedding',
                description: 'Capture your special day with elegant, timeless photography.',
        },
        {
                name: 'Portrait Sessions',
                href: '/services/portrait',
                description: 'Professional studio and location portrait photography.',
        },
        {
                name: 'Commercial Photography',
                href: '/services/commercial',
                description: 'High-quality imagery for your business and products.',
        },
        {
                name: 'Event Coverage',
                href: '/services/events',
                description: 'Complete documentation of your corporate or social events.',
        },
];

const GlassNavbar: React.FC<NavbarProps> = ({ logo = '/logo.svg' }) => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [servicesOpen, setServicesOpen] = useState(false);
        const { scrollY } = useScroll();

        // Enhanced glass effect transformations based on scroll
        const backdropBlur = useTransform(scrollY, [0, 100], [5, 12]);
        const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.8]);
        const borderOpacity = useTransform(scrollY, [0, 50], [0.1, 0.3]);
        const glowOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

        // Handle scroll detection
        useEffect(() => {
                const handleScroll = () => {
                        setIsScrolled(window.scrollY > 20);
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        // Dropdown animation variants
        const dropdownVariants = {
                hidden: { opacity: 0, y: 8, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
        };

        // Mobile menu animation variants
        const mobileMenuVariants = {
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
        };

        return (
                <motion.header
                        className="fixed top-0 w-full z-50 font-medium"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                                backdropFilter: `blur(${backdropBlur.get()}px)`,
                                backgroundColor: `rgba(15, 15, 20, ${bgOpacity.get()})`,
                                borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity.get()})`,
                                boxShadow: isScrolled
                                        ? `0 4px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, ${glowOpacity.get()})`
                                        : 'none',
                        }}
                >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16 md:h-20">
                                        {/* Logo */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="flex items-center"
                                        >
                                                <Link href="/" className="flex items-center space-x-2">
                                                        <div className="rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
                                                                <Image
                                                                        src={logo}
                                                                        alt="Logo"
                                                                        width={36}
                                                                        height={36}
                                                                        className="w-8 h-8 md:w-9 md:h-9"
                                                                />
                                                        </div>
                                                        <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                                                                Prism Studio
                                                        </span>
                                                </Link>
                                        </motion.div>

                                        {/* Desktop Navigation */}
                                        <motion.nav
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="hidden md:flex items-center space-x-1 lg:space-x-2"
                                        >
                                                {mainNavItems.map((item) => (
                                                        <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="px-3 py-2 lg:px-4 text-sm lg:text-base rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                        >
                                                                {item.name}
                                                        </Link>
                                                ))}

                                                {/* Services Dropdown */}
                                                <div className="relative">
                                                        <button
                                                                className="flex items-center px-3 py-2 lg:px-4 text-sm lg:text-base rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                                onMouseEnter={() => setServicesOpen(true)}
                                                                onClick={() => setServicesOpen(!servicesOpen)}
                                                        >
                                                                <span>Services</span>
                                                                <ChevronDown className="ml-1 h-4 w-4" />
                                                        </button>

                                                        <AnimatePresence>
                                                                {servicesOpen && (
                                                                        <motion.div
                                                                                className="absolute right-0 mt-2 w-72 rounded-xl overflow-hidden border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-lg ring-1 ring-black/5"
                                                                                variants={dropdownVariants}
                                                                                initial="hidden"
                                                                                animate="visible"
                                                                                exit="hidden"
                                                                                transition={{ duration: 0.2 }}
                                                                                onMouseLeave={() => setServicesOpen(false)}
                                                                        >
                                                                                <div className="p-1">
                                                                                        {serviceItems.map((item) => (
                                                                                                <Link
                                                                                                        key={item.name}
                                                                                                        href={item.href}
                                                                                                        className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors duration-150"
                                                                                                >
                                                                                                        <p className="font-medium text-white">{item.name}</p>
                                                                                                        <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                                                                                                </Link>
                                                                                        ))}
                                                                                </div>
                                                                        </motion.div>
                                                                )}
                                                        </AnimatePresence>
                                                </div>
                                        </motion.nav>

                                        {/* Right side actions */}
                                        <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="flex items-center space-x-3 md:space-x-4"
                                        >
                                                <button className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                                        <Search className="h-5 w-5" />
                                                </button>

                                                <div className="hidden md:block">
                                                        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20">
                                                                <User className="h-4 w-4" />
                                                                <span className="text-sm font-medium">Sign In</span>
                                                        </button>
                                                </div>

                                                {/* Mobile menu button */}
                                                <button
                                                        className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                                >
                                                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                                </button>
                                        </motion.div>
                                </div>
                        </div>

                        {/* Mobile menu */}
                        <AnimatePresence>
                                {mobileMenuOpen && (
                                        <motion.div
                                                variants={mobileMenuVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                transition={{ duration: 0.3 }}
                                                className="md:hidden"
                                                style={{
                                                        backgroundColor: `rgba(15, 15, 20, 0.98)`,
                                                        backdropFilter: `blur(12px)`,
                                                }}
                                        >
                                                <div className="px-4 py-5 space-y-3 divide-y divide-zinc-800/50">
                                                        {mainNavItems.map((item) => (
                                                                <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        className="block py-3 text-zinc-200 hover:text-white"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                        {item.name}
                                                                </Link>
                                                        ))}

                                                        {/* Mobile accordion for services */}
                                                        <div className="py-3">
                                                                <button
                                                                        className="flex items-center justify-between w-full text-zinc-200 hover:text-white"
                                                                        onClick={() => setServicesOpen(!servicesOpen)}
                                                                >
                                                                        <span>Services</span>
                                                                        <ChevronDown
                                                                                className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                                                        />
                                                                </button>

                                                                <AnimatePresence>
                                                                        {servicesOpen && (
                                                                                <motion.div
                                                                                        initial={{ height: 0, opacity: 0 }}
                                                                                        animate={{ height: 'auto', opacity: 1 }}
                                                                                        exit={{ height: 0, opacity: 0 }}
                                                                                        transition={{ duration: 0.3 }}
                                                                                        className="overflow-hidden"
                                                                                >
                                                                                        <div className="pt-3 pl-4 space-y-3">
                                                                                                {serviceItems.map((item) => (
                                                                                                        <Link
                                                                                                                key={item.name}
                                                                                                                href={item.href}
                                                                                                                className="block py-2 text-zinc-400 hover:text-white"
                                                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                                        >
                                                                                                                {item.name}
                                                                                                        </Link>
                                                                                                ))}
                                                                                        </div>
                                                                                </motion.div>
                                                                        )}
                                                                </AnimatePresence>
                                                        </div>

                                                        {/* Mobile sign in button */}
                                                        <div className="pt-4">
                                                                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                                                                        <User className="h-4 w-4" />
                                                                        <span className="font-medium">Sign In</span>
                                                                </button>
                                                        </div>
                                                </div>
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </motion.header>
        );
};

export default GlassNavbar;