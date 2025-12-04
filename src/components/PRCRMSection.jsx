import React from 'react'

const PRCRMSection = () => {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-8 shadow-sm border-t-8 border-[#FFE03E]">
                        <div className=" text-[#F2B927] fs-15  font-bold tracking-[0.19em] mb-6">
                            THE PR-CRM
                        </div>

                        <h3 className="text-4xl lg:text-3xl font-bold dark-text-primary mb-6">
                            Get double the return on your marketing dollars. Best of all, the PR-CRM is free.
                        </h3>

                        <div className="space-y-4 light-gray-text font-normal leading-relaxed">
                            <p>
                                The ProspectRoute CRM is a very robust and effective tool created specifically and exclusively for insurance agents. PR-CRM automates and prioritizes calls, leads, emails, and SMS. It can be easily configured to run your entire agency, just a part of it, or to only work with ProspectRoute leads.
                            </p>

                            <p>
                                However, we're positive that once you start using it, you'll decide to use it for leads from your agency and all your lead vendors.
                            </p>

                            <p className="font-normal">
                                What makes PR-CRM so good?
                            </p>

                            <p>
                                When used in agency mode PR-CRM enforces high contact rates and high outreach by your producers to all the leads you have loaded into it. Additionally, PR-CRM acts as air traffic control when leads coming in from web or fax transfers: recent leads that need followup, old leads needing more time, and existing customer service calls.
                            </p>

                            <p>
                                Producers and agency employees who use PR-CRM spend an average of 90% more talking to clients per day, make 80% more calls per day, and close 25% more business in a month than if they were using legacy insurance management products. This is what happens when you integrate and unify all communication methods.
                            </p>

                            <p>
                                If you want to limit PR-CRM's role in your agency that works too. PR-CRM can be used by just a few producers or can be used as a communications free system that just organizes your leads and tells your producers who should be called next.
                            </p>

                            <p className="font-normal">
                                Worried about phone system stuff?
                            </p>

                            <p>
                                If you're in a situation where you can't have PR-CRM make its own phone calls then don't worry. PR-CRM can integrate with your existing phone system. Call 0 (zero) for call distribution or configuration help. PR-CRM also has a robust built-in phone system for inbound and outbound calls through your existing phone system regardless of who the provider is. Remember, PR-CRM is still pretty effective without any communication abilities.
                            </p>

                            <p className="font-normal">
                                The best part is it's FREE.
                            </p>

                            <p>
                                When you buy leads from ProspectRoute you get PR-CRM free for any week where you have an active order. Or weeks when you want to take a break PR-CRM is very reasonably priced.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
                                <span>Click to read less</span>
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition-colors text-sm">
                                Get pricing
                            </button>
                        </div>
                    </div>

                    {/* Right Card - Our Leads */}
                    <div className="bg-white border-t-8 border-[#FFE03E] rounded-lg p-8 shadow-sm">
                        {/* Yellow header bar */}
                        <div className=" text-[#F2B927] fs-15  font-bold tracking-[0.19em] mb-6">
                            OUR LEADS
                        </div>

                        <h3 className="text-4xl lg:text-3xl font-bold dark-text-primary mb-6">
                            WARNING: Our leads may cause a sense of euphoria, relief, or satisfaction. Seek medical attention.
                        </h3>

                        <div className="space-y-4 light-gray-text font-normal leading-relaxed">
                            <p>
                                ProspectRoute can deliver as many leads as you want per day. It has the ability to keep all of your producers busy all day long. They will go home tired, but satisfied their commissions are increasing.
                            </p>

                            <p>
                                We hunt poor prospects for leads and sources. We contact each lead, old and new, that our system produces and our underwriting will be competitive with. We have a nice but quick conversation with them to collect just enough information to make it a quality lead. We do this to lessen the friction of having the lead require information to you.
                            </p>

                            <p>
                                Typically we collect the primary's name, email, phone, address or partial address, basic vehicle information, and homeowner status and information. If our system believes this information is a match for your carrier(s), it will send it. This information is passed to you to call and close.
                            </p>

                            <p>
                                When paired with the PR-CRM leads are twice as likely to close.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
                                <span>Click to read less</span>
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition-colors text-sm">
                                Get pricing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PRCRMSection