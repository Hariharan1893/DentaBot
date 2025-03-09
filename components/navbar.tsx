"use client";

import { useState } from "react";
import { Menu, X, PlusCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with Link to Home */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/dentaboticon.png" alt="DentaBot Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-purple-700">DentaBot</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href="/" className="text-purple-700 hover:text-purple-500">
            Home
          </Link>
          <Link href="/about" className="text-purple-700 hover:text-purple-500">
            About
          </Link>
          <Link href="/contact" className="text-purple-700 hover:text-purple-500">
            Contact
          </Link>
          <Link 
            href="/chat" 
            className="px-2 py-0.5 mt-auto flex justify-between  bg-purple-700 text-white text-md rounded-lg transition duration-300 hover:bg-purple-600 shadow-md"
          >
            New Chat <PlusCircle className="w-5 h-5 mt-1 ml-1" />
            
          </Link>


        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-full text-purple-700"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed inset-0  flex transition-all duration-400 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Container */}
        <div
          className={`h-full top-0 left-0 w-72 bg-white shadow-xl p-6 flex flex-col space-y-6 transform transition-transform duration-400 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } border-l-4 border-purple-500`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-6">
            <span className="mx-auto text-4xl font-semibold text-purple-700">🦷</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-purple-700 hover:text-purple-500 transition-all"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-purple-800 font-medium text-lg hover:text-purple-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-purple-800 font-medium text-lg hover:text-purple-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-purple-800 font-medium text-lg hover:text-purple-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/chat"
              className="flex  text-purple-800 font-medium text-lg hover:text-purple-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              New Chat <PlusCircle className="w-5 h-5 mt-1 ml-1" />
            </Link>
          </nav>
        </div>
      </div>


    </nav>
  );
}
