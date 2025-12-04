import React from 'react'
import EmployeeImage from "../assets/lady-employee.svg"

const Hero = () => {
    return (
        <section className="bg-secondary py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-2 md:px-6 lg:px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                        <div className="text-xs sm:text-sm md:text-base font-bold text-primary tracking-[0.19em] text-center lg:text-left">
                            PROSPECTROUTE
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[50px] font-bold text-primary">
                            High volume, pristine, exclusive leads.
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-normal text-center lg:text-left max-w-md mx-auto lg:mx-0">
                            Up to 50 web leads per day, exclusive and high quality.
                        </p>

                        <div className="mt-8 sm:mt-10 md:mt-12 relative flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                <img
                                    src={EmployeeImage}
                                    alt="Person at desk"
                                // className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="w-full max-w-md sm:max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                        <div className="bg-[#ffffff70] shadow-[0px_4px_11px_0px_#657A8B1A] p-4 sm:p-6 rounded-lg">
                            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6 text-center lg:text-left">
                                    Want to see pricing? <br className="hidden sm:block" />
                                    <span className="sm:hidden"> </span>We'll email it!
                                </h2>

                                <form className="space-y-4 sm:space-y-5">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm sm:text-base font-semibold text-primary mb-1 sm:mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                            placeholder="Type..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-primary mb-1 sm:mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                            placeholder="Type..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-primary mb-1 sm:mb-2">
                                            Mobile (used as password)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                            placeholder="Type..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="agency" className="block text-sm sm:text-base font-semibold text-primary mb-1 sm:mb-2">
                                            Agency workspace
                                        </label>
                                        <select
                                            id="agency"
                                            name="agency"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm sm:text-base"
                                        >
                                            <option value="">Select...</option>
                                            <option value="agency1">Agency 1</option>
                                            <option value="agency2">Agency 2</option>
                                            <option value="agency3">Agency 3</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary cursor-pointer text-white py-3 sm:py-4 px-4 rounded-md font-semibold hover:bg-primary transition-colors mt-6 sm:mt-8 text-sm sm:text-base"
                                    >
                                        Send pricing!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero