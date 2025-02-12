import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-[#42A5F5]"
              >
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-[#42A5F5]">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-[#42A5F5]"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-[#42A5F5] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggleable */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white py-4 shadow-md`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-[#42A5F5]"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-gray-600 hover:text-[#42A5F5]"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-[#42A5F5]"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
