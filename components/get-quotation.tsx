"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function GetQuotation() {
        const [formData, setFormData] = useState({
                name: "",
                email: "",
                phone: "",
                date: "",
                location: "",
                eventType: "",
                budget: "",
        });
        const [submitted, setSubmitted] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                setFormData((prev) => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                setSubmitted(true);
        };

        return (
                <section className="relative bg-gradient-to-br  to-slate-900 overflow-hidden">
                        {/* Top wave */}
                        <div className="absolute top-0 left-0 right-0 rotate-180">
                                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z" fill="white" fillOpacity="0.05" />
                                </svg>
                        </div>
                        {/* Abstract Background Elements */}
                        <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-3xl" />
                                <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-indigo-600 blur-3xl" />
                        </div>

                        {/* Grid Pattern Overlay */}
                        <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                }}
                        />

                        {/* Content Container */}
                        <div className="relative z-10 container mx-auto p-6 py-16">
                                <div className="mb-8 text-center">
                                        <h1 className="text-4xl font-bold text-white mb-4">Get a Quotation from Nearby Photographers</h1>
                                        <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
                                                Fill out the form and get quotes from professional photographers.
                                        </p>
                                </div>

                                <div className="mt-10 flex flex-col md:flex-row gap-8">
                                        {/* Form Section */}
                                        <div className="w-full md:w-1/2">
                                                <form
                                                        className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-xl"
                                                        onSubmit={handleSubmit}
                                                >
                                                        <div className="space-y-2">
                                                                <Label className="text-white">Name</Label>
                                                                <Input
                                                                        name="name"
                                                                        value={formData.name}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div>
                                                        {/* <div className="space-y-2">
                                                                <Label className="text-white">Email</Label>
                                                                <Input
                                                                        type="email"
                                                                        name="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div> */}
                                                        <div className="space-y-2">
                                                                <Label className="text-white">Phone</Label>
                                                                <Input
                                                                        type="tel"
                                                                        name="phone"
                                                                        value={formData.phone}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div>
                                                        {/* <div className="space-y-2">
                                                                <Label className="text-white">Event Date</Label>
                                                                <Input
                                                                        type="date"
                                                                        name="date"
                                                                        value={formData.date}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div> */}
                                                        <div className="space-y-2">
                                                                <Label className="text-white">Location</Label>
                                                                <Input
                                                                        name="location"
                                                                        value={formData.location}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div>
                                                        <div className="space-y-2">
                                                                <Label className="text-white">Event Type</Label>
                                                                <Input
                                                                        name="eventType"
                                                                        placeholder="Wedding, Birthday, etc."
                                                                        value={formData.eventType}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div>
                                                        <div className="space-y-2">
                                                                <Label className="text-white">Budget</Label>
                                                                <Input
                                                                        type="number"
                                                                        name="budget"
                                                                        placeholder="Enter amount in ₹"
                                                                        value={formData.budget}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="bg-white/20 border-white/10 text-white placeholder:text-blue-100/60"
                                                                />
                                                        </div>
                                                        <div className="mt-6">
                                                                <Button
                                                                        type="submit"
                                                                        className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-lg hover:shadow-blue-500/30 border-0 transition duration-300"
                                                                >
                                                                        Get Quotes
                                                                </Button>
                                                        </div>
                                                </form>
                                        </div>

                                        {/* Photographer List */}
                                        <div className="w-full md:w-1/2">
                                                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                                                        Nearby Photographers
                                                </h2>
                                                <div className="space-y-4">
                                                        {[
                                                                { name: "Pasquale Minniti", rating: 5, location: "Mumbai" },
                                                                { name: "Vinci Wang", rating: 4, location: "Pune" },
                                                                // { name: "David Murray", rating: 4.5, location: "Delhi" },
                                                        ].map((photographer, index) => (
                                                                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                                                                        <CardHeader>
                                                                                <CardTitle>{photographer.name}</CardTitle>
                                                                        </CardHeader>
                                                                        <CardContent>
                                                                                <p className="text-blue-100/80">📍 {photographer.location}</p>
                                                                                <p className="flex items-center text-yellow-400">
                                                                                        {Array.from({ length: Math.floor(photographer.rating) }, (_, i) => (
                                                                                                <Star key={i} className="w-4 h-4 fill-current" />
                                                                                        ))}
                                                                                        {photographer.rating % 1 !== 0 && <Star className="w-4 h-4 fill-current opacity-50" />}
                                                                                        <span className="ml-2 text-blue-100/80">({photographer.rating} Stars)</span>
                                                                                </p>
                                                                        </CardContent>
                                                                </Card>
                                                        ))}
                                                </div>
                                        </div>
                                </div>

                                {submitted && (
                                        <div className="mt-8 p-4 text-center bg-green-500/20 backdrop-blur-md text-green-200 border border-green-500/30 rounded-lg">
                                                🎉 Your request has been submitted! You will receive quotations soon.
                                        </div>
                                )}
                        </div>

                        {/* Bottom Wave */}
                        <div className="absolute bottom-0 left-0 right-0">
                                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z" fill="white" fillOpacity="0.05" />
                                </svg>
                        </div>
                </section>
        );
}