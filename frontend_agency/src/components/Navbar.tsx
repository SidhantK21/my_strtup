import { useState, useEffect } from "react";
import { DollarSign, Phone, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "contact", label: "Contact", icon: Phone },
    { id: "pricing", label: "Pricing", icon: DollarSign },
  ];

  const handleScroll = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg transition-all duration-500 px-4 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div
        className={`rounded-2xl border border-white/20 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">
                <img
                  src="/src/assets/TRIDENITY.svg"
                  alt="Tridenity Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-105"
                />
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="group flex items-center gap-2 text-gray-200 hover:text-white text-sm font-medium transition-all duration-300 px-4 py-1.5 rounded-full border hover:backdrop-blur-3xl border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                >
                  <Icon size={14} className="transition-transform duration-300 group-hover:scale-110" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white p-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 py-3 space-y-2.5">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="group flex items-center gap-3 w-full justify-between text-gray-200 hover:text-white px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl border hover:backdrop-blur-3xl border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 ">
                    <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>{label}</span>
                  </div>
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};