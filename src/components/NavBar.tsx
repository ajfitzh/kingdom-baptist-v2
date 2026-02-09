"use client"; // <--- THIS IS CRITICAL

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-xl tracking-tight text-blue-900" onClick={() => setIsOpen(false)}>
          Kingdom Baptist
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-blue-900 transition-colors">About Us</Link>
          <Link href="/media" className="hover:text-blue-900 transition-colors">Sermons</Link>
          <Link href="/give" className="hover:text-blue-900 transition-colors">Giving</Link>
        </div>

        {/* MOBILE MENU BUTTON (Visible on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 focus:outline-none p-2"
        >
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span> // Close Icon
          ) : (
            <span className="text-2xl font-bold">≡</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl">
          <div className="flex flex-col p-4 space-y-4 text-center">
            <Link 
              href="/about" 
              className="text-slate-600 font-medium py-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/media" 
              className="text-slate-600 font-medium py-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Sermons
            </Link>
            <Link 
              href="/give" 
              className="text-slate-600 font-medium py-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Giving
            </Link>
            
            {/* Mobile Call to Action */}
            <Link 
              href="/connect" 
              className="bg-blue-600 text-white font-bold py-3 rounded-lg mt-2"
              onClick={() => setIsOpen(false)}
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}