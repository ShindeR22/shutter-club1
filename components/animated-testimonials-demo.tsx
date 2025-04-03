// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
        const testimonials = [
                {
                        "studio": "Chen Photography",
                        "name": "Sarah Chen",
                        "description": "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
                        "Image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                        "studio": "Rodriguez Photography",
                        "name": "Michael Rodriguez",
                        "description": "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
                        "Image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                        "studio": "Watson Studio",
                        "name": "Emily Watson",
                        "description": "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
                        "Image": "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                        "studio": "Kim Photography",
                        "name": "James Kim",
                        "description": "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
                        "Image": "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                        "studio": "Thompson Studios",
                        "name": "Lisa Thompson",
                        "description": "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
                        "Image": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
        ];

        return <AnimatedTestimonials testimonials={testimonials} />
}

