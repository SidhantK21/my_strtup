import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  // Animation variants for links
  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, x: 5 }
  };

  // Animation variants for social icons
  const iconVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-10">
        {[...Array(48)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              repeatType: "reverse"
            }}
            className="h-full w-full bg-white/5"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Company
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 max-w-sm"
            >
              Transforming ideas into reality through innovative solutions and cutting-edge technology.
            </motion.p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Quick Links
            </motion.h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                "About Us",
                "Services",
                "Portfolio",
                "Contact",
                "Blog"
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex items-center text-gray-400 hover:text-white group"
                >
                  <span>{link}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Stay Updated
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400"
            >
              Subscribe to our newsletter for the latest updates and insights.
            </motion.p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-white"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;