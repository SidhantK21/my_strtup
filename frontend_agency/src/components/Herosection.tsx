import { motion, useAnimationControls, Variants } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

interface Sparkle {
  id: number;
  size: number;
  duration: number;
  delay: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const controls = useAnimationControls();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const generateSparkles = useCallback((count: number): Sparkle[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }));
  }, []);

  const [sparkles] = useState<Sparkle[]>(() => generateSparkles(30));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.15, 0],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100 - 10}vh`,
                `${Math.random() * 100 - 20}vh`
              ]
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles 
              size={sparkle.size} 
              className="text-white"
            />
          </motion.div>
        ))}

        {/* Interactive Gradient Orb */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * window.innerWidth - 200,
            y: mousePosition.y * window.innerHeight - 200,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            width: '400px',
            height: '400px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-sm font-medium tracking-wider uppercase"
          >
            Welcome to the Future
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            <span className="inline-block">
              Transform Your
              <span className="relative">
                <span className="absolute -inset-1 bg-white/20 blur rounded-lg"></span>
                <span className="relative"> Digital </span>
              </span>
              World
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-gray-400"
          >
            Experience the next generation of web development with cutting-edge
            technologies and seamless animations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full font-medium 
                       hover:bg-gray-200 transition-colors duration-300
                       relative group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath: 'circle(0% at 50% 50%)',
                }}
                whileHover={{
                  clipPath: 'circle(100% at 50% 50%)',
                }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/30 text-white rounded-full font-medium
                       hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default Hero;