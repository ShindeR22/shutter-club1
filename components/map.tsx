"use client";

import * as React from "react";
// import { useTheme } from "next-themes";

export default function MapPage() {
        // Optionally use the theme hook if you need to adjust any behavior based on the theme
        // const { theme } = useTheme();

        return (
                <section className=" mx-auto px-4" style={{ padding: "50px 0" }}>
                        <h2 className="text-center text-5xl font-bold mb-18">
                                Find Photographers Nearby
                        </h2>
                        <div className="map rounded-md shadow-lg">
                                <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2179678172527!2d-122.4206793846811!3d37.77851957975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a8d74fd81%3A0xb0b3b0bb3cb5f0b3!2sTwitter!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex={0}
                                        className="rounded-md"
                                ></iframe>
                        </div>
                </section>
        );
}
