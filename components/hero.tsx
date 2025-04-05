import { SearchBar } from "./SearchBar";
import { BackgroundLines } from "./ui/background-lines";

export default function Hero() {
        return (
                <BackgroundLines>
                        <section className="relative h-screen bg-gradient-to-br  to-slate-900 overflow-hidden">
                                {/* Bottom Wave */}
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
                                        className="absolute inset-1 opacity-70"
                                        style={{
                                                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                                                backgroundSize: '20px 20px'
                                        }}
                                />

                                {/* Content Container */}
                                <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full px-4">
                                        {/* Badge */}
                                        <div className="mb-6 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
                                                <span className="text-sm font-medium text-blue-200">Connecting You to Expert Photographers</span>
                                        </div>

                                        {/* Heading */}
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-white max-w-10xl leading-tight">
                                                Find Your Perfect Photographer with    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Precision</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Passion</span>
                                        </h1>

                                        {/* Subheading */}
                                        <p className="text-xl md:text-2xl text-blue-100/80 mb-10 text-center max-w-3xl">
                                                Browse through a curated collection of professional photographer profiles. Whether it’s a wedding, event, or personal project, connect with experts who match your unique style.
                                        </p>

                                        {/* Search */}
                                        <div className="w-full  max-w-2xl mb-12">
                                                <SearchBar />
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">
                                                        View Portfolio
                                                </button>
                                                <button className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-lg font-medium text-white border border-white/20 hover:bg-white/20 transition duration-300">
                                                        Get Qutation
                                                </button>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                                                <div>
                                                        <p className="text-3xl font-bold text-white">500+</p>
                                                        <p className="text-blue-200/70"> Photographers</p>
                                                </div>
                                                <div>
                                                        <p className="text-3xl font-bold text-white">99.99%</p>
                                                        <p className="text-blue-200/70">Satisfaction</p>
                                                </div>
                                                <div className="col-span-2 md:col-span-1">
                                                        <p className="text-3xl font-bold text-white">24/7</p>
                                                        <p className="text-blue-200/70">Support</p>
                                                </div>
                                        </div>
                                </div>

                                {/* Bottom Wave */}
                                <div className="absolute bottom-0 left-0 right-0">
                                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 58.7C672 69.3 768 90.7 864 90.7C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z" fill="white" fillOpacity="0.05" />
                                        </svg>
                                </div>
                        </section>
                </BackgroundLines>

        );
}