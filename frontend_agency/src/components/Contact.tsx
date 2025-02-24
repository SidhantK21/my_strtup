import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Code, Paintbrush, Globe, MessageSquare, Rocket, Target, Users, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Check } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annualBilling, setAnnualBilling] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies."
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultation",
      description: "Expert advice to guide your digital transformation journey."
    }
  ];

  const offerings = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality. We understand time is crucial for your business."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Result Driven",
      description: "Focus on measurable outcomes and ROI. We're committed to delivering real business value."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Client Focused",
      description: "Your success is our priority. We maintain clear communication and adapt to your needs."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      description: "Staying ahead with cutting-edge technologies and creative solutions for modern challenges."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        "Custom Website Design",
        "Responsive Development",
        "5 Pages",
        "Basic SEO Setup",
        "3 Rounds of Revisions",
        "1 Month Support"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses seeking more features",
      monthlyPrice: 1999,
      annualPrice: 1799,
      popular: true,
      features: [
        "Everything in Starter",
        "E-commerce Integration",
        "10 Pages",
        "Advanced SEO Package",
        "5 Rounds of Revisions",
        "3 Months Support",
        "Performance Optimization",
        "Analytics Setup"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 3999,
      annualPrice: 3599,
      features: [
        "Everything in Professional",
        "Custom Functionality",
        "Unlimited Pages",
        "Premium SEO Package",
        "Unlimited Revisions",
        "12 Months Support",
        "Security Hardening",
        "Priority Response",
        "Dedicated Manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-black dark:text-white"
            >
              Agency.
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Services</a>
              <a href="#offerings" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Offerings</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          className={`md:hidden overflow-hidden ${mobileMenuOpen ? 'border-b border-gray-200 dark:border-gray-800' : ''}`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Services</a>
            <a href="#offerings" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Offerings</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Pricing</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
              We Create
              <span className="block text-gray-600 dark:text-gray-400">Digital Experiences</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A full-service digital agency helping brands reach their full potential through innovative solutions and creative excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive solutions for your digital needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-black dark:text-white mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Offer Section */}
      <section id="offerings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-400">Experience excellence in every aspect of our service</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="text-black dark:text-white flex-shrink-0">
                  {offering.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{offering.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{offering.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Choose the perfect plan for your business needs</p>
            
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400">Monthly</span>
              <button
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  annualBilling ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform ${
                    annualBilling ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-600 dark:text-gray-400">
                Annual
                <span className="ml-2 text-sm text-green-500">(Save 10%)</span>
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg ${
                  plan.popular ? 'ring-2 ring-black dark:ring-white' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-black dark:text-white">
                      ${annualBilling ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/mo</span>
                  </div>
                  {annualBilling && (
                    <p className="text-sm text-green-500 mt-2">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg text-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100'
                      : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">Ready to start your next project? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-black dark:text-white" />
                <p className="text-gray-600 dark:text-gray-400">contact@agency.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-black dark:text-white" />
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-black dark:text-white" />
                <p className="text-gray-600 dark:text-gray-400">123 Business Ave, Suite 100, New York, NY 10001</p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Agency.</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Transforming businesses through innovative digital solutions. We're passionate about creating exceptional digital experiences that drive results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#offerings" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Offerings</a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
