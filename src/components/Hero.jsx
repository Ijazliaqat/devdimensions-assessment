import React from 'react'
import EmployeeImage from "../assets/lady-employee.svg"

const Hero = () => {
    return (
        <section className="bg-yellow-400 py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            PROSPECTROUTE
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            High volume, pristine,{' '}
                            <span className="block">exclusive leads.</span>
                        </h1>

                        <p className="text-lg text-gray-700 max-w-md">
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
                        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg lg:max-w-[497px] ml-auto lg:ml-auto flex flex-col justify-between">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Want to see pricing?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We'll email it!
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    <label htmlFor="agency" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    className="w-full bg-slate-800 text-white py-3 px-4 rounded-md font-semibold hover:bg-slate-700 transition-colors mt-6"
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