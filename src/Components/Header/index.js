// 'use client'; // Mark this as a Client Component

// import React, { useState } from 'react';
// import { Logo } from './Logo';
// import Link from 'next/link';
// import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from '../Icons';

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev); // Toggle menu state
//   };

//   return (
//     <header className="w-full p-4 px-6 md:px-10 bg-[#EDE0D4] text-[#7F5539] flex items-center justify-between">
//       {/* Logo Section */}
//       <Logo />

//       {/* Hamburger Menu for Mobile */}
//       <div className="flex items-center md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-[#7F5539] hover:text-[#9C6644] focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex w-max py-3 px-8 border border-solid border-[#7F5539] rounded-full font-medium capitalize items-center bg-[#E6CCB2] backdrop-blur-sm">
//         <Link href="/" className="mr-4 text-[#7F5539] hover:text-[#9C6644]">
//           Home
//         </Link>
//         <Link href="/about" className="mr-4 text-[#7F5539] hover:text-[#9C6644]">
//           About
//         </Link>
//         <Link href="/contact" className="mr-4 text-[#7F5539] hover:text-[#9C6644]">
//           Contact
//         </Link>
//       </nav>

//       {/* Social Icons */}
//       <div className="hidden sm:flex items-center space-x-4">
//         <a href="#" rel="noopener noreferrer" aria-label="LinkedIn" target="_blank">
//           <LinkedinIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
//         </a>
//         <a href="#" rel="noopener noreferrer" aria-label="Twitter" target="_blank">
//           <TwitterIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
//         </a>
//         <a href="#" rel="noopener noreferrer" aria-label="Instagram" target="_blank">
//           <InstagramIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
//         </a>
//         <a href="#" rel="noopener noreferrer" aria-label="Github" target="_blank">
//           <GithubIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
//         </a>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-16 left-0 w-full bg-[#E6CCB2] shadow-lg z-50 transform transition-transform duration-300 ${
//           isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//         }`}
//       >
//         <div className="flex flex-col items-center py-4 space-y-4">
//           <Link href="/" className="text-lg text-[#7F5539] hover:text-[#9C6644]">
//             Home
//           </Link>
//           <Link href="/about" className="text-lg text-[#7F5539] hover:text-[#9C6644]">
//             About
//           </Link>
//           <Link href="/contact" className="text-lg text-[#7F5539] hover:text-[#9C6644]">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };


'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from '../Icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full p-4 px-6 md:px-10 bg-[#EDE0D4] text-[#7F5539] flex items-center justify-between">
      {/* Logo Section */}
      <Logo />

      {/* Hamburger Menu for Mobile */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#7F5539] hover:text-[#9C6644] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-[#E6CCB2] shadow-lg z-50 md:static md:flex md:w-max py-3 px-8 border border-solid border-[#7F5539] rounded-full font-medium capitalize items-center`}
      >
        <Link href="/" className="block md:inline-block mr-4 text-[#7F5539] hover:text-[#9C6644]">
          Home
        </Link>
        <Link href="/about" className="block md:inline-block mr-4 text-[#7F5539] hover:text-[#9C6644]">
          About
        </Link>
        <Link href="/contact" className="block md:inline-block mr-4 text-[#7F5539] hover:text-[#9C6644]">
          Contact
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="hidden sm:flex items-center space-x-4">
        {/* <a href="#" rel="noopener noreferrer" aria-label="LinkedIn" target="_blank">
          <LinkedinIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
        </a> */}
        <a href="#" rel="noopener noreferrer" aria-label="Twitter" target="_blank">
          <TwitterIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
        </a>
        <a href="#" rel="noopener noreferrer" aria-label="Instagram" target="_blank">
          <InstagramIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
        </a>
        {/* <a href="#" rel="noopener noreferrer" aria-label="Github" target="_blank">
          <GithubIcon className="w-6 h-6 hover:scale-125 transition-all ease-in-out duration-200" />
        </a> */}
      </div>
    </header>
  );
};