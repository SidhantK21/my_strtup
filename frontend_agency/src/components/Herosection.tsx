import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const controls = useAnimationControls();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Track mouse position for parallax effect
    const handleMouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Enhanced Wavy Background - Black & White */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight - 100,
                  Math.random() * window.innerHeight
                ],
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth + 50,
                  Math.random() * window.innerWidth
                ],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
        
        {/* Wavy lines - enhanced with more waves */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d="M0,30 C20,50 40,15 60,30 C80,45 90,10 100,30 L100,100 L0,100 Z"
              fill={`rgba(255, 255, 255, ${0.015 - i * 0.002})`}
              animate={{
                d: [
                  "M0,30 C20,50 40,15 60,30 C80,45 90,10 100,30 L100,100 L0,100 Z",
                  "M0,30 C20,15 40,45 60,30 C80,15 90,40 100,30 L100,100 L0,100 Z",
                  "M0,30 C20,50 40,15 60,30 C80,45 90,10 100,30 L100,100 L0,100 Z"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 20 + i * 3,
                ease: "easeInOut"
              }}
              style={{
                translateY: `${60 + i * 5}%`
              }}
            />
          ))}
        </svg>
        
        {/* Circle gradient that follows mouse */}
        <motion.div 
          className="absolute rounded-full"
          animate={{
            left: `calc(${mousePosition.x * 100}% - 300px)`,
            top: `calc(${mousePosition.y * 100}% - 300px)`,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 2
          }}
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content - centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80px" }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="h-px bg-white mx-auto"
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 uppercase tracking-widest text-sm font-medium block"
              >
                Digital Innovation Studio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold tracking-tight leading-none relative"
              >
                <motion.div
                  animate={controls}
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,1), rgba(200,200,200,1), rgba(255,255,255,1))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    position: "relative"
                  }}
                >
                  Pixel
                  <div className="absolute inset-0 bg-white/5 blur-2xl -z-10 scale-150 opacity-50"></div>
                </motion.div>
                <motion.div
                  animate={controls}
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(200,200,200,1), rgba(255,255,255,1), rgba(200,200,200,1))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                    marginTop: "0.5rem",
                    position: "relative"
                  }}
                >
                  Mosaic
                  <div className="absolute inset-0 bg-white/5 blur-2xl -z-10 scale-150 opacity-50"></div>
                </motion.div>
                <div className="absolute -inset-4 bg-black/40 blur-3xl -z-20"></div>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              When AI Meets Creativity—Crafting Digital Experiences Beyond Imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="relative inline-flex items-center justify-center bg-transparent px-8 py-4 overflow-hidden rounded-full border border-white/20 group"
              >
                <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <span className="absolute -inset-10 animate-[spin_3s_linear_infinite] bg-white/5 blur-md rounded-full"></span>
                </span>
                <span className="relative text-white font-medium z-10">
                  Start Your Journey
                </span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#portfolio"
                className="inline-block text-white hover:text-gray-300 transition-colors duration-200 font-medium group"
              >
                View Our Work <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
              </motion.a>
            </motion.div>

            {/* Animated line separator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.1, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"
            />

            {/* Tech stack icons - black and white style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-4"
            >
              {['AI', 'React', 'Design', 'UI/UX', 'Animation'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="text-white text-xs font-mono relative"
                >
                  <div className="absolute -inset-1 border border-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "multiply"
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2">Scroll</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;