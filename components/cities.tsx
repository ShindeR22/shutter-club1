"use client";

import * as React from "react";
import Image from "next/image";
// import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PopularCities() {
        // const { theme } = useTheme();

        const cities = [
                {
                        name: "Mumbai",
                        mapUrl:
                                "https://maps.googleapis.com/maps/api/staticmap?center=Mumbai,India&zoom=12&size=400x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0xe2e2e2&key=YOUR_GOOGLE_MAPS_API_KEY",
                },
                {
                        name: "Delhi",
                        mapUrl:
                                "https://maps.googleapis.com/maps/api/staticmap?center=Delhi,India&zoom=12&size=400x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0xe2e2e2&key=YOUR_GOOGLE_MAPS_API_KEY",
                },
                {
                        name: "Ahmedabad",
                        mapUrl:
                                "https://maps.googleapis.com/maps/api/staticmap?center=Ahmedabad,India&zoom=12&size=400x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0xe2e2e2&key=YOUR_GOOGLE_MAPS_API_KEY",
                },
        ];

        return (
                <section className="container mx-auto py-8 px-4 dark:bg-gray-900 dark:text-white">
                        <div className="flex items-center justify-between mb-6">
                                <h2 className="text-4xl font-bold">Popular Cities</h2>
                                <div className="flex space-x-2">
                                        <Button variant="ghost" size="icon">
                                                <ArrowLeft className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                                <ArrowRight className="h-4 w-4" />
                                        </Button>
                                </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                                {cities.map((city) => (
                                        <Card
                                                key={city.name}
                                                className="shadow-sm bg-white dark:bg-gray-800 transition-colors"
                                        >
                                                <CardHeader className="p-0 relative h-40">
                                                        <Image
                                                                src={city.mapUrl}
                                                                alt={`Map of ${city.name}`}
                                                                fill
                                                                style={{ objectFit: "cover" }}
                                                                sizes="100vw"
                                                                // Optionally disable optimization if needed:
                                                                unoptimized
                                                        />
                                                </CardHeader>
                                                <CardContent className="p-4">
                                                        <CardTitle className="mb-2">{city.name}</CardTitle>
                                                        <Button variant="outline" className="w-full">
                                                                {`Search ${city.name}`}
                                                        </Button>
                                                </CardContent>
                                        </Card>
                                ))}
                        </div>
                </section>
        );
}
