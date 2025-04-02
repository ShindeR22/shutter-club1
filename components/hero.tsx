// import { Input } from "@/components/ui/input"; // adjust the import path as necessary
import { SearchBar } from "./SearchBar";

export default function Hero() {
        return (
                <section
                        className="relative h-screen bg-cover bg-center"
                        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1506434304575-afbb92660c28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}
                >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                                        Your Heading Here
                                </h1>
                                <div className="w-1/2" >
                                        <SearchBar />
                                </div>
                        </div>
                </section>
        );
}
