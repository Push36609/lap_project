import React, { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);


  return (
    <header className="bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100 fixed top-0 left-0 w-full z-50 bg-white shadow">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-black">
        <div className="flex justify-between h-16 items-center">
          <div className="font-sans font-semibold text-2xl tracking-[0.6px] text-center my-4 
         bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent 
         transition-transform duration-300 ease-in-out ... hover:scale-105 hover:shadow-lg">Bio-COMPUTATIONAL LAB</div>

          {/* Desktop nav */}
          <nav className=" hidden md:flex space-x-8 text-xl leading-7 items-center">
            <Link to="/Home" className="text-[#551A8B] no-underline text-[1.3rem] hover:text-cyan-600 hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Home</Link>

            {/* Members dropdown */}
            <div className="relative h-150px ">
              <button
                onClick={() => setIsMembersOpen(prev => !prev)}
                className="flex items-center ml-1 bg-none border-none hover:text-[#0891b2] space-x-1 hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]"
              >
                <span className="text-[#551A8B] text-[1.25rem] hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Members</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${isMembersOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMembersOpen && (
                <ul className="absolute top-full mt-2 bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100 w-40 rounded-2xl text-black" onMouseLeave={() => setIsMembersOpen(!isMembersOpen)} >
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member/Current Member" className="block py-2 px-2 text-[#551A8B] text-[1rem] hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Current Members</Link></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member/Alumni" className="block py-2 px-2 text-[#551A8B] text-[1rem] hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Alumni</Link></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member/Interns" className="block py-2 px-2 text-[#551A8B] text-[1rem] hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Interns</Link></li>
                </ul>
              )}
            </div>

            <Link to="/Research" className="text-8 text-[#551A8B] no-underline hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Research</Link>
            <Link to="/Event" className="text-8 text-[#551A8B] no-underline hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Event</Link>
            <Link to="/Project" className="text-8 text-[#551A8B] no-underline hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Project</Link>
            <Link to="/contact" className="text-8 text-[#551A8B] no-underline hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Contact Us</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => { setIsMenuOpen(prev => !prev); setIsMembersOpen(false); }}
              className="text-gray-800 hover:text-cyan-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 text-lg leading-7 space-y-1 ">
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Home" className="block bg-none no-underline hover:text-cyan-600">Home</Link>

          {/* Mobile Members dropdown */}
          <div>
            <button
              onClick={() => setIsMembersOpen(prev => !prev)}
              className="flex justify-between w-full py-2 bg-none border-none hover:text-cyan-600 hover:bg-none">
              <span className="bg-none no-underline hover:text-cyan-600">Members</span>
              <svg
                className={`${"w-5 h-5 pt-2 pr-[5px] transition-transform duration-200 ease-in-out rotate-0"} ${isMembersOpen ? "rotate-180" : "rotate-0"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMembersOpen && (
              <ul className="pl-4 space-y-1">
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member/Current Members" className="block py-1 hover:text-cyan-600">Current Member</Link></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member/Alumni" className="block py-1 hover:text-cyan-600">Alumni</Link></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member/Interns" className="block py-1 hover:text-cyan-600">Interns</Link></li>
              </ul>
            )}
          </div>

          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Research" className="block py-2 no-underline text-base text-[#551A8B] bg-transparent 
         hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Research</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Event" className="block py-2 no-underline text-base text-[#551A8B] bg-transparent 
         hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Event</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Project" className="block py-2 no-underline text-base text-[#551A8B] bg-transparent 
         hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Project</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/contact" className="block py-2 no-underline text-base text-[#551A8B] bg-transparent 
         hover:text-[#0891b2] hover:drop-shadow-[0_6px_6px_rgba(3,245,249,0.8)]">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
