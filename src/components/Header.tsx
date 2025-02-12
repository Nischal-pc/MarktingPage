const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/logo.png" />
        </div>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
