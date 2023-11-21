'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import logo from '@/public/Logo.png';
const Navbar: React.FC = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className="bg-white p-3 shadow-lg fixed top-0 z-30 w-full">
      <div className="flex justify-between items-center w-5/6 mx-auto">
        {/* Image */}
        <div className="cursor-pointer">
          {/* Replace the Image component with your logo */}
          <Image
        src={logo}
        alt="logo"
        height={70}
        width={70}
        className="object-cover"
        />
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link href="/" passHref>
            <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Home</p>
          </Link>
          <Link href="#properties" passHref>
            <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Properties</a>
          </Link>
          <Link href="#design" passHref>
            <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Design</a>
          </Link>
          <Link href="#contactus" passHref>
            <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Contact</a>
          </Link>
        </div>
      </div>

      {/* Responsive Menu */}
      {!isNavbarCollapsed && (
        <div className="flex justify-end p-12">
          <button onClick={handleNavbarCollapse}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-accent-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Menu Items */}
      <div
        className={`flex flex-col gap-10 ml-[33%] text-2xl ${isNavbarCollapsed ? 'hidden' : ''}`}
      >
        <Link href="/" passHref>
          <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">About</a>
        </Link>
        <Link href="/properties" passHref>
          <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Design</a>
        </Link>
        <Link href="/projects" passHref>
          <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Project</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
