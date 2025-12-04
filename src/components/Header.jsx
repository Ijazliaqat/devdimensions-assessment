import React, { useState } from 'react';
import Logo from "../assets/logo.svg"
import Phone from "../assets/phone.svg"
import TrustPilot from "../assets/trustpilot.svg"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className=" text-white">
      <div className="bg-[#0B2540]">
        <div className="flex justify-end items-end py-2 max-w-7xl mx-auto px-2 sm:px-2 md:px-6 lg:px-2">
          <img src={Phone} alt="" className='h-4 w-4 me-1' />
          <span className="font-normal text-[16px] leading-none align-middle opacity-100" style={{ fontFamily: 'Basier Circle, sans-serif' }}>Get in touch with us: (888) 775-8857</span></div>
      </div>
      <div className="bg-white max-w-7xl mx-auto py-2 px-2 sm:px-2 md:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <img src={Logo} alt="PR Logo" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm hover:text-yellow-400 transition text-[#0B2540] text-[16px] font-semibold">
              How it works
            </a>
            <a href="#pr-crm" className="text-sm hover:text-yellow-400 transition text-[#0B2540] text-[16px] font-semibold">
              PR-CRM
            </a>
            <a href="#our-leads" className="text-sm hover:text-yellow-400 transition text-[#0B2540] text-[16px] font-semibold">
              Our lords
            </a>
            <a href="#pricing" className="text-sm hover:text-yellow-400 transition text-[#0B2540] text-[16px] font-semibold ">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <img src={TrustPilot} alt="" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className='flex gap-5'>
              <button className="text-sm border border-[#F8D12E] text-[#0B2540] text-[15px] font-medium hover:text-yellow-400 px-6 py-2 rounded-md transition">
                Login
              </button>
              <button className="bg-yellow-400 text-[#0B2540] text-[15px] font-medium px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition">
                Signup
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-yellow-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#how-it-works" className="block text-sm hover:text-yellow-400 transition">
              How it works
            </a>
            <a href="#pr-crm" className="block text-sm hover:text-yellow-400 transition">
              PR-CRM
            </a>
            <a href="#our-leads" className="block text-sm hover:text-yellow-400 transition">
              Our leads
            </a>
            <a href="#pricing" className="block text-sm hover:text-yellow-400 transition">
              Pricing
            </a>
            <div className="pt-3 border-t border-white/20">
              <button className="block w-full text-left text-sm mb-2">
                {'login'}
              </button>
              <button className="w-full bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold">
                {'getStarted'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;