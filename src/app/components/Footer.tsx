import Link from "next/link";
import React from "react";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-4 sm:py-6 md:py-8 w-full shrink-0 bg-gray-100 border-t-2 border-gray-300 relative z-10 mt-auto">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left leading-relaxed">
            © 2025 DaVinci Smart Manufacturing™ Inc.
            <span className="text-zinc-400 mx-1 sm:mx-2">|</span> 
            All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 items-center">
            <Link
              href="https://www.linkedin.com/company/davincism/"
              className="text-[#ee8502] hover:text-[#d67700] transition-colors duration-200 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <span className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer px-1 sm:px-2">
              Terms of Service
            </span>
            <span className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer px-1 sm:px-2">
              Privacy
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
