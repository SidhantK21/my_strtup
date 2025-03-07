import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { SignIn } from "./Signin";
import { SignUp } from "./Signup";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState<"signin" | "signup" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: string[] = ["Home", "Services", "Technology", "Contact", "Pricing"];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu
    }
  };

  const AuthButton = () => (
    <div className="flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowAuthModal("signin")}
        className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
      >
        Sign In
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowAuthModal("signup")}
        className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2 transition-colors duration-200"
      >
        <LogIn className="w-4 h-4" />
        <span>Sign Up</span>
      </motion.button>
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl w-[90vw] max-w-6xl">
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-shrink-0">
                <span className="text-white text-xl font-bold">PM</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleScroll(item.toLowerCase())}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
                <div className="ml-8 pl-8 border-l border-white/10">
                  <AuthButton />
                </div>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleScroll(item.toLowerCase())}
                      className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                      {item}
                    </motion.button>
                  ))}
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <div className="px-3">
                      <AuthButton />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50"
        >
          <div className="w-full max-w-md backdrop-blur-3xl">
            {showAuthModal === "signin" ? (
              <SignIn onSignUp={() => setShowAuthModal("signup")} onClose={() => setShowAuthModal(null)} />
            ) : (
              <SignUp onSignIn={() => setShowAuthModal("signin")} onClose={() => setShowAuthModal(null)} />
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};
