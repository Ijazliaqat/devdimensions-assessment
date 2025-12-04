import React from 'react'
import trustpilotSvg from '../assets/trustpilot-footer.svg'
import DarkLogo from "../assets/dark svg.svg"

const Footer = () => {
    return (
        <footer className="bg-yellow-400 pt-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-2 md:px-6 lg:px-2">
                <div className="grid md:grid-cols-5 gap-8">
                    {/* Left Column - Logo and Contact */}
                    <div className="space-y-4">
                        {/* Logo */}
                        <div className="flex items-center mb-6">
                            <img src={DarkLogo} alt="Company Logo" className="h-22" />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-black text-sm">
                            <div className="flex text-[16px] font-medium items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>Get in touch: (999) 775-8867</span>
                            </div>
                            <div className="flex text-[16px] font-medium items-start">
                                <svg className="w-4 h-4 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <div>Address line goes here</div>
                                    <div>State ligne goes here</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-[#0B2540] text-base font-semibold">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-gray-700 transition-colors">How it works</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="text-[#0B2540] text-base font-semibold">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-gray-700 transition-colors">PR-CRM</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="text-[#0B2540] text-base font-semibold">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Our leads</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="text-[#0B2540] text-base font-semibold">
                        <div className="flex items-center">
                            <img src={trustpilotSvg} alt="Trustpilot" />
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="py-6 border-t border-black/10 text-center ">
                    <div className="text-black text-base md:mb-0">
                        © Company 2021 All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer