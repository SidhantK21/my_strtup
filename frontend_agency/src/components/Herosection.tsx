import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export const Hero = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          transition: {
            duration: 10,
            ease: "linear",
            repeat: Infinity
          }
        });
      }
    };
    animate();
  }, [controls]);

  return (
    <div id='home' className="min-h-[100dvh] bg-black flex items-center pt-20 sm:pt-24 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-44 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 sm:space-y-12 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm font-medium inline-block"
              >
                Digital Innovation Studio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none relative"
              >
                <motion.div
                  animate={controls}
                  style={{
                    backgroundImage: "linear-gradient(to right, #9333ea, #ec4899, #ef4444)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: "0.1em",
                    paddingRight: "0.1em"
                  }}
                  className="whitespace-nowrap"
                >
                  Tridenity
                </motion.div>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              When AI Meets Creativity—Crafting Digital Experiences Beyond Imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Start Your Journey
              </a>
              <a
                href="#portfolio"
                className="inline-block text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm sm:text-base"
              >
                View Our Work →
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Innovation"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};