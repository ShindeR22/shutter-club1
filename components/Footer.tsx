import { Instagram, Youtube, Linkedin, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
        return (
                <footer className="bg-black text-white py-10">
                        <div className="container mx-auto px-6 lg:px-12">
                                {/* Top Section: Logo & Social Media */}
                                <div className="text-center">
                                        <div className="flex items-center justify-center space-x-2 text-xl font-bold">
                                                <span className="text-white">☁️ Shutter Cloud</span>
                                        </div>
                                        <p className="text-gray-400 mt-2 max-w-md mx-auto">
                                                The complete platform that helps photographers store, share, find, and deliver photos in record time.
                                        </p>
                                        {/* Social Media Icons */}
                                        <div className="flex justify-center space-x-4 mt-4">
                                                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                                        </div>
                                </div>

                                {/* Footer Links Section */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left mt-8">
                                        {/* Product */}
                                        <div>
                                                <h3 className="text-white font-semibold">Product</h3>
                                                <ul className="text-gray-400 mt-2 space-y-1">
                                                        <li>Shutter Drive</li>
                                                        <li>Shutter Share</li>
                                                        <li>Shutter Finder</li>
                                                        <li>Shutter Selection</li>
                                                </ul>
                                        </div>
                                        {/* Company */}
                                        <div>
                                                <h3 className="text-white font-semibold">Company</h3>
                                                <ul className="text-gray-400 mt-2 space-y-1">
                                                        <li>About Us</li>
                                                        <li>Contact</li>
                                                        <li>Timeline</li>
                                                </ul>
                                        </div>
                                        {/* Resources */}
                                        <div>
                                                <h3 className="text-white font-semibold">Resources</h3>
                                                <ul className="text-gray-400 mt-2 space-y-1">
                                                        <li>Pricing</li>
                                                        <li>Status</li>
                                                </ul>
                                        </div>
                                        {/* Legal */}
                                        <div>
                                                <h3 className="text-white font-semibold">Legal</h3>
                                                <ul className="text-gray-400 mt-2 space-y-1">
                                                        <li>Privacy Policy</li>
                                                        <li>Terms & Conditions</li>
                                                        <li>Service Activation & Access Policy</li>
                                                        <li>Refund Policy</li>
                                                </ul>
                                        </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm">
                                        <p>© 2025 Shutter Cloud Technologies. All rights reserved.</p>
                                        <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>All systems operational</span>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
}
