import React from "react";
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>

        {/* Footer Links */}
        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Social & Back to Top */}
      <div className="container mx-auto p-4 flex justify-between items-center border-t border-gray-700">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Instagram size={20} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-1 hover:text-gray-400"
        >
          <ArrowUp size={20} />
          <span className="text-sm">Back to Top</span>
        </button>
      </div>
    </footer>
  );
}
