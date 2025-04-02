"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
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
                <div className="container mx-auto p-6">
                        <h1 className="text-3xl font-bold text-center">Get a Quotation from Nearby Photographers</h1>
                        <p className="text-center text-gray-500 mt-2">Fill out the form and get quotes from professional photographers.</p>

                        <div className="mt-6 flex flex-col md:flex-row gap-8">
                                {/* Form Section */}
                                <div className="w-full md:w-1/2">
                                        <form className="space-y-4 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                                                <div className="space-y-2">
                                                        <Label>Name</Label>
                                                        <Input name="name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Email</Label>
                                                        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Phone</Label>
                                                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Event Date</Label>
                                                        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Location</Label>
                                                        <Input name="location" value={formData.location} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Event Type</Label>
                                                        <Input name="eventType" placeholder="Wedding, Birthday, etc." value={formData.eventType} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label>Budget</Label>
                                                        <Input type="number" name="budget" placeholder="Enter amount in ₹" value={formData.budget} onChange={handleChange} required />
                                                </div>
                                                <div className="mt-4">
                                                        <Button type="submit" className="w-full">Get Quotes</Button>
                                                </div>
                                        </form>

                                </div>

                                {/* Photographer List */}
                                <div className="w-full md:w-1/2">
                                        <h2 className="text-xl font-semibold mb-4">Nearby Photographers</h2>
                                        <div className="space-y-4">
                                                {[
                                                        { name: "Pasquale Minniti", rating: 5, location: "Mumbai" },
                                                        { name: "Vinci Wang", rating: 4, location: "Pune" },
                                                        { name: "David Murray", rating: 4.5, location: "Delhi" },
                                                ].map((photographer, index) => (
                                                        <Card key={index} className="p-4">
                                                                <CardHeader>
                                                                        <CardTitle>{photographer.name}</CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                        <p className="text-gray-500">📍 {photographer.location}</p>
                                                                        <p className="flex items-center text-yellow-500">
                                                                                {Array.from({ length: Math.floor(photographer.rating) }, (_, i) => (
                                                                                        <Star key={i} className="w-4 h-4" />
                                                                                ))}
                                                                                {photographer.rating % 1 !== 0 && <Star className="w-4 h-4 opacity-50" />}
                                                                                <span className="ml-2 text-gray-600">({photographer.rating} Stars)</span>
                                                                        </p>
                                                                </CardContent>
                                                        </Card>
                                                ))}
                                        </div>
                                </div>
                        </div>

                        {submitted && (
                                <div className="mt-6 p-4 text-center bg-green-100 text-green-600 rounded-lg">
                                        🎉 Your request has been submitted! You will receive quotations soon.
                                </div>
                        )}
                </div>
        );
}
