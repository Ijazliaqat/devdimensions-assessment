import React from 'react'
import EmployeeImage from "../assets/lady-employee.svg"

const Hero = () => {
    return (
        <section className="bg-secondary py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div className="space-y-10">
                        <div className="fs-15 font-bold text-primary tracking-[0.19em]">
                            PROSPECTROUTE
                        </div>

                        <h1 className="fs-50 lg:text-5xl font-bold text-primary">
                            High volume, pristine,{' '}
                            <span className="block">exclusive leads.</span>
                        </h1>

                        <p className="fs-20 text-primary font-normal">
                            Up to 50 web leads per day, exclusive and high quality.
                        </p>

                        <div className="mt-12 relative">
                            <div className="relative">
                                <img src={EmployeeImage} alt="Person at desk" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="bg-[#ffffff70] shadow-[0px_4px_11px_0px_#657A8B1A] p-6 rounded-lg w-full max-w-lg lg:max-w-[497px] ml-auto lg:ml-auto" >
                        <div className="bg-white rounded-lg shadow-lg p-8 h-full w-full max-w-lg lg:max-w-[497px] ml-auto lg:ml-auto flex flex-col justify-between">
                            <h2 className="fs-28 font-semibold text-primary mb-2">
                                Want to see pricing? <br /> We'll email it!
                            </h2>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-1">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Type..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Type..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">
                                        Mobile (used as password)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Type..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="agency" className="block text-sm font-semibold text-primary mb-1">
                                        Agency workspace
                                    </label>
                                    <select
                                        id="agency"
                                        name="agency"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                    >
                                        <option value="">Select...</option>
                                        <option value="agency1">Agency 1</option>
                                        <option value="agency2">Agency 2</option>
                                        <option value="agency3">Agency 3</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary cursor-pointer text-white py-3 px-4 rounded-md font-semibold hover:bg-primary transition-colors mt-6"
                                >
                                    Send pricing!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero