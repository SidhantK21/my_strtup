import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ChevronRight, Send } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Simplified social icon animations
  const socialVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Section */}
          <motion.div 
            id="brand-section"
            className="md:col-span-4 space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-2"
            >
              
              
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <img src="/src/assets/TRI.svg" alt="#!" />
              </span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Empowering innovation through cutting-edge technology solutions. Building the future, one pixel at a time.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", color: "text-purple-400" },
                { icon: Twitter, href: "#", color: "text-blue-400" },
                { icon: Linkedin, href: "#", color: "text-blue-500" },
                { icon: Mail, href: "#", color: "text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover="hover"
                  variants={socialVariants}
                  target='blank'
                  className={`p-2 rounded-xl bg-white/5 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            id="quick-links"
            className="md:col-span-3 space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-4">
              {[
                { text: "About Us", id: "home" },
                { text: "Services", id: "services" },
                { text: "Technology", id: "technology" },
                { text: "Pricing", id: "pricing" },
                { text: "Contact", id: "contact" }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleScrollToSection(link.id)}
                  variants={linkVariants}
                  whileHover="hover"
                  className="flex items-center text-gray-400 hover:text-white group w-full text-left"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div 
            id="resources"
            className="md:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white">Resources</h3>
            <div className="space-y-4">
              {[
                { text: "Blog", id: "blog" },
                { text: "Documentation", id: "docs" },
                { text: "Help Center", id: "help" },
                { text: "FAQ", id: "faq" },
                { text: "API", id: "api" }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleScrollToSection(link.id)}
                  variants={linkVariants}
                  whileHover="hover"
                  className="flex items-center text-gray-400 hover:text-white group w-full text-left"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            id="newsletter"
            className="md:col-span-3 space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-white placeholder-gray-500 pr-12"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          id="bottom-bar"
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tridenity. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
              {[
                { text: "Privacy Policy", id: "privacy" },
                { text: "Terms of Service", id: "terms" },
                { text: "Cookie Policy", id: "cookies" },
                { text: "Accessibility", id: "accessibility" }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleScrollToSection(link.id)}
                  whileHover={{ color: "#fff" }}
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;