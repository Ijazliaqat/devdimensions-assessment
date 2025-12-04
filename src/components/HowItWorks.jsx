import React from 'react'
import ExploringMan from "../assets/man-exploring.svg"

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
                            HOW IT WORKS
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Hand-curated Auto/Home Leads - Delivered to you digitally, exclusively.
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
                            </p>

                            <p>
                                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
                            </p>

                            <p>
                                ProspectRoute uses leads from several sources - social media, web, lead lists and more - and prequalifies each lead by phone to ensure it's a perfect match for your agency. We collect essential information such as the address, location, driver information, vehicle information, driving history (self-reported) and more and if the lead matches your criteria we pass it along to you, digitally.
                            </p>

                            <p>
                                If you use our optional CRM, called the PR-CRM,  to manage your leads the CRM instantly places a call to that lead and connects your producer with the opportunity. If no producer is available the CRM schedules the call immediately when the next producer is available.
                            </p>

                            <p>
                                PR's position is that generating the lead is only half the battle. If you choose, you can receive the PR-CRM free with ProspectRoute when you're enrolled to receive leads. PR CRM's technology is built on the Unifyy platform and helps automate sales from many lead vendors, not just ProspectRoute.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                <span>Click to read less</span>
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition-colors">
                                Get pricing
                            </button>
                        </div>
                    </div>

                    {/* Right Content Text */}
                    <div className="lg:col-start-2 space-y-4 text-gray-600 leading-relaxed">
                        <img src={ExploringMan} alt="" />
                        <p>
                            The PR-CRM prioritizes calls in many ways but what really makes it amazing when it's used with ProspectRoute. This is because when PR generates leads the PR-CRM immediately connects your producer with the prospect by phone when it comes in. This means it's the fastest way to get prospects on the phone. For each minute that passes from when a prospect expresses interest and a producer makes their first contact attempt, the likelihood of a sale decreases by 50%. Using PR with the PR-CRM.
                        </p>

                        <p>
                            You can connect any lead vendor with the PR-CRM so you can use it even when you're not actively using ProspectRoute for your marketing. But between the volume of high quality leads we can produce and our award-winning PR-CRM, we don't think you'll want to use any other vendors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks