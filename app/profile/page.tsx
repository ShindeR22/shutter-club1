"use client";
// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { Facebook, Instagram, Mail, MapPin, MessageCircleCode, Phone, Twitter, Calendar, Camera, Users, Star } from 'lucide-react';
import Navbar from '@/components/nav-bar';
import About from './_components/about ';
import Hero from './_components/hero';
import Event from './_components/event';
// import Image from 'next/image';
// import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

// Define TypeScript interfaces
interface SocialMedia {
    platform: string;
    url: string;
    icon: React.ReactNode;
}

interface Location {
    city: string;
    address: string;
    available: boolean;
}

interface BestClick {
    id: number;
    title: string;
    imgUrl: string;
    category: string;
}

interface Package {
    id: number;
    name: string;
    price: number;
    description: string;
    features: string[];
    popular: boolean;
}

interface EventType {
    id: number;
    name: string;
    icon: React.ReactNode;
    description: string;
}

interface Review {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    imgUrl: string;
}

const Home: React.FC = () => {
    // Photographer data
    const studioData = {
        name: "Luminous Frame Studio",
        owner: "Alexander Mitchell",
        tagline: "Capturing moments that last forever",
        experience: 12, // years
        bio: "With over a decade of experience in photography, I've developed a unique style that combines artistic composition with technical precision. My passion lies in telling stories through images, creating timeless pieces that evoke emotion and preserve your most precious memories. From weddings to commercial shoots, my goal is to exceed your expectations and deliver photographs that you'll cherish for a lifetime.",
        totalCustomers: 1500,
        contact: {
            email: "contact@luminousframe.com",
            phone: "+1 (555) 123-4567",
        },
        socialMedia: [
            { platform: "Instagram", url: "https://instagram.com/luminousframe", icon: <Instagram className="text-xl" /> },
            { platform: "Facebook", url: "https://facebook.com/luminousframe", icon: <Facebook className="text-xl" /> },
            { platform: "Twitter", url: "https://twitter.com/luminousframe", icon: <Twitter className="text-xl" /> },
            { platform: "WhatsApp", url: "https://wa.me/15551234567", icon: <MessageCircleCode className="text-xl" /> },
        ] as SocialMedia[],
        locations: [
            { city: "New York", address: "123 Broadway Ave, New York, NY", available: true },
            { city: "Los Angeles", address: "456 Sunset Blvd, Los Angeles, CA", available: true },
            { city: "Chicago", address: "789 Michigan Ave, Chicago, IL", available: false },
            { city: "Miami", address: "321 Ocean Drive, Miami, FL", available: true },
        ] as Location[],
        bestClicks: [
            { id: 1, title: "Summer Wedding", imgUrl: "https://images.unsplash.com/photo-1594397856557-75aca2e35b00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Wedding" },
            { id: 2, title: "Corporate Event", imgUrl: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Event" },
            { id: 3, title: "Fashion Editorial", imgUrl: "https://images.unsplash.com/photo-1709887139259-e5fdce21afa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Fashion" },
            { id: 4, title: "Family Portrait", imgUrl: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Portrait" },
            { id: 5, title: "Nature Landscape", imgUrl: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Landscape" },
            { id: 6, title: "Product Photography", imgUrl: "https://images.unsplash.com/photo-1684605345476-29d963cec465?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Commercial" },
        ] as BestClick[],
        packages: [
            {
                id: 1,
                name: "Essential",
                price: 499,
                description: "Perfect for simple events and portraits",
                features: [
                    "3-hour photo session",
                    "1 location",
                    "50 edited digital photos",
                    "Online gallery",
                    "5 printed photos (8×10)"
                ],
                popular: false
            },
            {
                id: 2,
                name: "Premium",
                price: 899,
                description: "Ideal for weddings and important events",
                features: [
                    "8-hour photo session",
                    "2 locations",
                    "150 edited digital photos",
                    "Online gallery",
                    "10 printed photos (8×10)",
                    "Photo album (20 pages)",
                    "Assistant photographer"
                ],
                popular: true
            },
            {
                id: 3,
                name: "Professional",
                price: 1499,
                description: "Complete package for special occasions",
                features: [
                    "Full-day coverage (12 hours)",
                    "Multiple locations",
                    "300+ edited digital photos",
                    "Online gallery",
                    "20 printed photos (various sizes)",
                    "Premium photo album (30 pages)",
                    "Assistant photographer",
                    "Drone aerial shots",
                    "Same-day preview images"
                ],
                popular: false
            }
        ] as Package[],
        eventTypes: [
            {
                id: 1,
                name: "Weddings",
                icon: <Users className="h-10 w-10 text-white" />,
                description: "Capturing your special day with elegance and emotion. From preparation to reception, every moment matters."
            },
            {
                id: 2,
                name: "Corporate Events",
                icon: <Calendar className="h-10 w-10 text-white" />,
                description: "Professional coverage for conferences, team-building events, and corporate parties."
            },
            {
                id: 3,
                name: "Fashion Photography",
                icon: <Camera className="h-10 w-10 text-white" />,
                description: "Creative fashion shoots for models, designers, and brands with studio or location setups."
            },
            {
                id: 4,
                name: "Family Portraits",
                icon: <Users className="h-10 w-10 text-white" />,
                description: "Preserve precious family moments with relaxed, natural portrait sessions for all ages."
            }
        ] as EventType[],
        reviews: [
            {
                id: 1,
                name: "Jennifer & Michael",
                role: "Wedding Clients",
                comment: "Alexander captured our wedding day perfectly! The photos are beyond what we could have imagined. He was professional, creative, and made everyone feel comfortable.",
                rating: 5,
                imgUrl: "/images/review1.jpg"
            },
            {
                id: 2,
                name: "Sarah Johnson",
                role: "Corporate Client",
                comment: "We hired Luminous Frame for our annual conference, and the results were stunning. The team was unobtrusive yet captured every important moment.",
                rating: 5,
                imgUrl: "/images/review2.jpg"
            },
            {
                id: 3,
                name: "Robert Chen",
                role: "Portrait Client",
                comment: "The family portrait session was enjoyable and relaxed. Alexander has a talent for working with children and capturing authentic expressions.",
                rating: 4,
                imgUrl: "/images/review3.jpg"
            }
        ] as Review[]
    };

    const [reviewFormData, setReviewFormData] = React.useState({
        name: '',
        email: '',
        rating: 5,
        comment: ''
    });

    const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReviewFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit logic here
        alert('Thank you for your review!');
        setReviewFormData({
            name: '',
            email: '',
            rating: 5,
            comment: ''
        });
    };

    return (
        <div className="min-h-screen bg-transparent dark:bg-transparent ">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-1 opacity-70"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            <Navbar />
            <Head>
                <title>{studioData.name} | Professional Photography</title>
                <meta name="description" content={`${studioData.name} - Professional photography studio owned by ${studioData.owner}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <Hero studioData={studioData} />

            {/* About Section */}
            <About studioData={studioData} />


            {/* Event Types Section */}
            <Event eventTypes={studioData.eventTypes} />

            {/* Portfolio Section */}
            <section className="py-20 bg-transparent dark:bg-transparent relative">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                    <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-1 opacity-0   "
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {studioData.bestClicks.map((click) => (
                            <div key={click.id} className="group relative h-80 rounded-lg overflow-hidden">
                                {/* Apply blur effect using Tailwind's filter and blur classes */}
                                <div
                                    className="w-full h-full z-10 opacity-50 bg-cover bg-center filter  group-hover:scale-110 transition duration-500"
                                    style={{ backgroundImage: `url(${click.imgUrl})` }}
                                ></div>
                                {/* Optional overlay for additional styling */}
                                <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-black translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-sm  text-black mb-2 "><p >{click.category}</p></div>
                                    <h3 className="text-xl font-semibold  mb-2 ">{click.title}</h3>


                                    <button className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity  duration-300">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">View All Works</button>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-transparent dark:bg-transparent relative">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                    <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-1 opacity-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">Studio Locations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {studioData.locations.map((location, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">{location.city}</h3>
                                    <span className={`px-2 py-1 text-xs rounded ${location.available ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                        {location.available ? 'Available' : 'Booked'}
                                    </span>
                                </div>
                                <div className="flex items-start mb-4">
                                    <MapPin className="text-gray-400 mt-1 mr-2" />
                                    <p className="text-gray-300">{location.address}</p>
                                </div>
                                {location.available && (
                                    <button className="w-full mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition text-sm">Book This Location</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-transparent dark:bg-transparent relative">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                    <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-1 opacity-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-center">Client Testimonials</h2>
                    <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
                        What our clients say about their experience with us
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {studioData.reviews.map((review) => (
                            <div key={review.id} className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                        <div className="w-full h-full bg-[url('/api/placeholder/100/100')] bg-cover bg-center"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{review.name}</h4>
                                        <p className="text-gray-400 text-sm">{review.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-300">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* Pricing Packages Section */}
            <section className="py-20 bg-transparent dark:bg-transparent relative">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                    <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-1 opacity-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-center">Pricing Packages</h2>
                    <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
                        Choose the perfect package to capture your special moments
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {studioData.packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-2 ${pkg.popular ? 'ring-2 ring-purple-500 relative' : ''}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                    <p className="text-gray-400 mb-6">{pkg.description}</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">${pkg.price}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full py-3 rounded-md font-medium transition ${pkg.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                    >
                                        Select Package
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-300 mb-4">Need a custom package? Contact us for a personalized quote.</p>
                        <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-opacity-90 transition font-medium">Get Custom Quote</button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-transparent dark:bg-transparent relative">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                    <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-1 opacity-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                            <p className="text-gray-300 mb-8">Interested in working together? Fill out the form and I&lsquo;ll get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="bg-gray-800 p-3 rounded-full mr-4">
                                        <Mail />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p>{studioData.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-800 p-3 rounded-full mr-4">
                                        <Phone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p>{studioData.contact.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-sm text-gray-400 mb-4">Follow on social media</p>
                                <div className="flex space-x-4">
                                    {studioData.socialMedia.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
                                            aria-label={`Follow on ${social.platform}`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 z-10'>
                            <div className="container mx-auto px-6">
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-4xl font-bold mb-4 text-center">Share Your Experience</h2>
                                    <p className="text-gray-300  mb-8 text-center">
                                        We value your feedback! Let us know about your experience with our services.
                                    </p>
                                    <form onSubmit={handleReviewSubmit} className="bg-gray-800 p-8 rounded-lg">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="review-name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="review-name"
                                                    name="name"
                                                    value={reviewFormData.name}
                                                    onChange={handleReviewChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="review-email" className="block text-sm text-gray-400 mb-2">Your Email</label>
                                                <input
                                                    type="email"
                                                    id="review-email"
                                                    name="email"
                                                    value={reviewFormData.email}
                                                    onChange={handleReviewChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-white"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-x text-gray-400 mb-2">Your Rating</label>
                                            <div className="flex space-x-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setReviewFormData({ ...reviewFormData, rating: star })}
                                                        className="focus:outline-none"
                                                    >
                                                        <Star
                                                            className={`w-4 h-4 ${star <= reviewFormData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="review-comment" className="block text-sm text-gray-400 mb-2">Your Review</label>
                                            <textarea
                                                id="review-comment"
                                                name="comment"
                                                value={reviewFormData.comment}
                                                onChange={handleReviewChange}
                                                rows={5}
                                                className="w-full bg-gray-700 border border-gray-600 rounded-md  focus:outline-none focus:ring-1 focus:ring-white resize-none"
                                                required
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition"
                                        >
                                            Submit Review
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-transparent dark:bg-transparent relative">

                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">{studioData.name}</h2>
                            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6">
                            {studioData.socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow on ${social.platform}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;