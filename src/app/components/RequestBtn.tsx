"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaGoogle, FaMicrosoft, FaCopy } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const RequestDemoButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=arizvi@virtueserve.com",
      "_blank"
    );
    setIsOpen(false);
  };

  const openOutlook = () => {
    window.open(
      "https://outlook.office.com/mail/deeplink/compose?to=arizvi@virtueserve.com",
      "_blank"
    );
    setIsOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("arizvi@virtueserve.com");
    setIsCopied(true);
    setIsOpen(false);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <ScrollAnimation>
        <button
          className="w-full sm:w-auto border border-[#141A46] text-[#141A46] hover:bg-[#141A46] hover:text-white hover:font-semibold transition-colors px-4 py-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          Request a Demo
        </button>
      </ScrollAnimation>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40"></div>
        </Transition>

        <Transition
          show={isOpen}
          enter="transition-all duration-500 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-300 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto rounded-lg bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-[#141A46] text-center">
                Contact Us
              </h2>

              <div className="mt-4 space-y-4">
                <button
                  className="flex items-center justify-center space-x-3 w-full py-2 px-4 rounded-md bg-[#DB4437] text-white hover:bg-[#c33a2e] transition"
                  onClick={openGmail}
                >
                  <FaGoogle />
                  <span>Gmail</span>
                </button>

                <button
                  className="flex items-center justify-center space-x-3 w-full py-2 px-4 rounded-md bg-[#0078D4] text-white hover:bg-[#0061a8] transition"
                  onClick={openOutlook}
                >
                  <FaMicrosoft />
                  <span>Outlook</span>
                </button>

                <button
                  className="flex items-center justify-center space-x-3 w-full py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition"
                  onClick={copyEmail}
                >
                  <FaCopy />
                  <span>Copy Email Address</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <button
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </Dialog>

      <Transition
        show={isCopied}
        enter="transition-all duration-200 ease-out"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-300 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <div className="fixed w-[190px] tra bottom-16 left-1/2 text-sm transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg opacity-80 z-50">
          Copied to clipboard!
        </div>
      </Transition>
    </>
  );
};

export default RequestDemoButton;
