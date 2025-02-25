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
    <div className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 uppercase tracking-widest text-sm font-medium"
              >
                Digital Innovation Studio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold tracking-tight leading-none relative"
              >
                <motion.div
                  animate={controls}
                  style={{
                    backgroundImage: "linear-gradient(to right, #9333ea, #ec4899, #ef4444)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    position: "relative"
                  }}
                >
                  Pixel
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-red-500/20 blur-2xl -z-10 scale-150 opacity-50"></div>
                </motion.div>
                <motion.div
                  animate={controls}
                  style={{
                    backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6, #4f46e5)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                    marginTop: "0.5rem",
                    position: "relative"
                  }}
                >
                  Mosaic
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl -z-10 scale-150 opacity-50"></div>
                </motion.div>
                <div className="absolute -inset-4 bg-black/40 blur-3xl -z-20"></div>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              When AI Meets Creativity—Crafting Digital Experiences Beyond Imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 items-center"
            >
              <a
                href="#contact"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                Start Your Journey
              </a>
              <a
                href="#portfolio"
                className="inline-block text-white hover:text-gray-300 transition-colors duration-200 font-medium"
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
            className="relative h-[600px] rounded-2xl overflow-hidden"
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
