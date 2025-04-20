import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowRight, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e:any) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the subscription logic
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative  text-gray-200">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px "></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 rounded-full border bg-black text-white shadow-lg shadow-blue-500/20"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand section */}
          <motion.div 
            className="lg:col-span-4 flex flex-col"
            variants={itemVariants}
          >
            <div className="mb-6">
              <div className="font-bold text-2xl  bg-clip-text text-white ">
                Tridenity Web Solutions
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md">
              Creating innovative digital experiences that empower businesses to achieve their goals and connect with their audience in meaningful ways.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {[
                { icon: Github, href: "#", color: "hover:text-white" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full bg-white/5 text-gray-400 ${social.color} transition-all hover:bg-white/10`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links section */}
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            variants={itemVariants}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <div className="flex flex-col space-y-3">
              {['About', 'Careers', 'News', 'Partners', 'Contact'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors relative w-fit"
                  whileHover={{ x: 5 }}
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            variants={itemVariants}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <div className="flex flex-col space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting', 'Support'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white transition-colors relative w-fit"
                  whileHover={{ x: 5 }}
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            className="lg:col-span-4 flex flex-col"
            variants={itemVariants}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-white placeholder-gray-500"
                required
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline mr-2">Subscribe</span>
                <ArrowRight size={16} />
              </motion.button>
            </form>
            
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm"
              >
                Thanks for subscribing!
              </motion.p>
            )}
            
            <p className="text-gray-500 text-sm mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} BrandName. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-white transition-colors relative"
                whileHover={{ color: "#fff" }}
              >
                <span>{item}</span>
                <span className="absolute left-0 bottom-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;