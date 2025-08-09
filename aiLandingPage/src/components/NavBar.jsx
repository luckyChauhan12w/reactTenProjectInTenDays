import React from "react";

const Navbar = () => {
  return (
    <header className="w-full text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          Mindly<span className="text-purple-500">AI</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-purple-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-purple-400">
            Pricing
          </a>
          <a href="#testimonial" className="hover:text-purple-400">
            Testimonials
          </a>
          <a href="#footer" className="hover:text-purple-400">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg transition">
            Try for Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
