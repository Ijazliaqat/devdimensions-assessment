import React from 'react'
import trustpilotSvg from '../assets/trustpilot.svg'

const Header = () => {
  return (
    <header className="text-white">
      {/* Top bar with contact info */}
      <div className="bg-slate-900 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>Get in touch with us: (999) 775-8867</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-yellow-400 p-2 rounded">
                <svg className="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
                How it works
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
                PR-CRM
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
                Our leads
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
                Pricing
              </a>
            </nav>

            {/* Trust badges and buttons */}
            <div className="flex items-center space-x-4">
              {/* Trustpilot badge */}
              <div className="hidden lg:flex items-center">
                <img src={trustpilotSvg} alt="Trustpilot" className="" />
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <button className="hidden md:block text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors">
                  Login
                </button>
                <button className="bg-yellow-400 text-slate-800 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors text-sm">
                  Signup
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-white hover:text-yellow-400 p-2"
                  aria-label="Toggle menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-slate-800">
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
            How it works
          </a>
          <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
            PR-CRM
          </a>
          <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
            Our leads
          </a>
          <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
            Pricing
          </a>
          <div className="pt-2">
            <button className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header