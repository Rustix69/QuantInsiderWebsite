"use client";

import { Linkedin, Twitter, Instagram, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className="relative p-6 bg-gray-900 mt-10 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Address Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src='/logo.png' alt='Quant Insider' className='h-12 mb-4' />
                        <div className="text-sm text-gray-400 text-center md:text-left mb-2">
                            1st Floor, 264-265, Dr Annie Besant Rd, Municipal Colony, Worli Shivaji Nagar, Worli, Mumbai, Maharashtra
                        </div>
                        <a 
                            href="https://www.google.com/maps?q=1st+Floor,+264-265,+Dr+Annie+Besant+Rd,+Municipal+Colony,+Worli+Shivaji+Nagar,+Worli,+Mumbai,+Maharashtra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-blue-400 hover:text-blue-300 mt-1"
                        >
                            <MapPin size={14} className="mr-1" /> View Map
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <Link href="/education" className="text-gray-300 hover:text-white mb-2">Education</Link>
                        <Link href="/enterprise" className="text-gray-300 hover:text-white mb-2">Enterprise</Link>
                        <Link href="/events" className="text-gray-300 hover:text-white mb-2">Events</Link>
                        <Link href="/talks" className="text-gray-300 hover:text-white mb-2">Talks</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white mb-2">About</Link>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <a href="mailto:contact@quantinsider.io" className="text-gray-300 hover:text-white mb-2">contact@quantinsider.io</a>
                        <a href="mailto:education@quantinsider.io" className="text-gray-300 hover:text-white mb-2">education@quantinsider.io</a>
                    </div>

                    {/* Careers and Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Careers</h3>
                        <div className="text-gray-300 mb-4">Hiring <span className="bg-yellow-600 text-xs px-2 py-1 rounded-full ml-2">Coming Soon</span></div>
                        
                        <h3 className="text-lg font-semibold mb-4 mt-2">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/quant-insider"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/QuantINsider_IQ"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/quantinsider.io/"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/@QuantInsider"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <div className="text-sm">
                        Copyright &copy; 2025 QuantInsider.io
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

