import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-4 border-t border-gray-600">
            <li>
              <a href="#" className="block hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
