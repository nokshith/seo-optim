"use client";
import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed z-50 bg-white w-full flex items-center justify-between px-3 md:px-10 py-5 h-[58px] border-b border-[#CFD3DA]">
        <div className="flex items-center">
          <button
            className="md:hidden block mx-2"
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div>
            <a
              href="/"
              className="hover:text-[#F54E00] transition-colors duration-300 flex items-center gap-1"
            >
              <img src="/svg/logo2.svg" alt="DaVinci" />
            </a>
          </div>
        </div>

        <nav className="hidden md:block relative">
          <ul className="flex space-x-6 items-center">
            <li className="relative" ref={featuresRef}>
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="hover:text-[#F54E00] transition-colors duration-300 flex items-center gap-1"
              >
                Features <MdKeyboardArrowDown size={18} />
              </button>
              {isFeaturesOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded py-2 w-56 z-50">
                  <li>
                    <a
                      href="/erp-integration"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                     Erp-Integration
                    </a>
                  </li>
                  <li>
                    <a
                      href="/X-Ray-Spectrometers"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      
                       X-Ray Spectrometers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Industrial-operations"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                     Industrial operations
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#ai-iot-section"
                className="hover:text-[#F54E00] transition-colors duration-300"
              >
                AI & IoT
              </a>
            </li>
            <li>
              <a
                href="/ignis-ai"
                className="hover:text-[#F54E00] transition-colors duration-300"
              >
                Ignis AI
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                className="hover:text-[#F54E00] transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#141A46] text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-[#F54E00]"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>

        <nav className="block md:hidden">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="bg-[#141A46] text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-[#F54E00]"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <button
        className={`fixed inset-0 z-50 flex transition-all duration-300 ${
          isSidebarOpen
            ? "bg-black bg-opacity-50 visible"
            : "bg-opacity-0 invisible"
        }`}
        aria-label="Close Sidebar"
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`m-[10px] top-14 w-fit h-fit absolute bg-white p-6 shadow-lg transform transition-all rounded-xl ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full opacity-0"
          }`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="/erp-integration"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  Erp-Integration
                </a>
              </li>
              <li>
                <a
                  href="/X-Ray-Spectrometers"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  X-Ray-Spectrometer
                </a>
              </li>
              <li>
                <a
                  href="/Industrial-operations"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  Insutrial-Operations
                </a>
              </li>
              <li>
                <a
                  href="#ai-iot-section"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  AI & IOT
                </a>
              </li>
              <li>
                <a
                  href="/ignis-ai"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  Ignis AI
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </button>
    </>
  );
}
