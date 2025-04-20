import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const clients = [
  "HealthCare",
  "Insurance",
  "Education Sector",
  "Online Business",
  "Mechanical",
  "Automobiles",
  "Beauty Industries",
  "Clothing Brands",
];

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[128px]" />
      </div>

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line Grid (updated colors for subtle visibility) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(180,180,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,180,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:80px_80px]" />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,black)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <motion.div className="text-center space-y-6 sm:space-y-8" variants={titleVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={floatingVariants} initial="initial" animate="animate">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white/80 uppercase font-bold tracking-wide">Custom Websites that Drive Growth</span>
            </div>
          </motion.div>

          {/* Heading with glow + layered gradient */}
          <h1 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-center">
            {/* Glow Behind Text */}
            <span className="absolute inset-0 z-[-1] blur-2xl sm:blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-white to-purple-500 rounded-xl" />

            {/* Main Text with Gradient */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
              TRIDENITY

              {/* Glass Reflection Layer */}
              <span className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-white/10 via-white/5 to-transparent rotate-[-8deg] blur-sm opacity-70 mix-blend-screen" />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p className="text-base sm:text-lg md:text-xl font-semibold tracking-tighter text-white/70 max-w-xs sm:max-w-md md:max-w-2xl mx-auto" variants={titleVariants}>
            We design custom websites and digital solutions that boost your brand, engage users, and drive measurable business growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gray-700 text-sm sm:text-base text-white font-medium backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* Responsive Marquee Implementation */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0">
          <h2 className="text-center text-white/80 text-xs sm:text-sm tracking-widest antialiased uppercase mb-6 sm:mb-7">Trusted by</h2>
          
          {/* Responsive marquee container */}
          <div className="relative w-full overflow-hidden">
            <div className="sm:w-3/5  flex justify-center mx-auto">
              <div className="relative w-full overflow-hidden">
                {/* Marquee track */}
                <motion.div
                  className="flex"
                  animate={{
                    x: [0, -100 * clients.length * 2], 
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                  style={{
                    width: "fit-content",
                  }}
                >
                  {/* First set with responsive spacing */}
                  {clients.map((name, idx) => (
                    <div
                      key={`client-a-${idx}`}
                      className="px-4 sm:px-6 md:px-8 mx-1 sm:mx-2 text-sm sm:text-base md:text-lg text-white/70 font-semibold tracking-wide hover:text-white transition-colors duration-300 whitespace-nowrap"
                    >
                      {name}
                    </div>
                  ))}
                  
                  {/* Duplicate set */}
                  {clients.map((name, idx) => (
                    <div
                      key={`client-b-${idx}`}
                      className="px-4 sm:px-6 md:px-8 mx-1 sm:mx-2 text-sm sm:text-base md:text-lg text-white/70 font-semibold tracking-wide hover:text-white transition-colors duration-300 whitespace-nowrap"
                    >
                      {name}
                    </div>
                  ))}
                  
                  {/* Third set */}
                  {clients.map((name, idx) => (
                    <div
                      key={`client-c-${idx}`}
                      className="px-4 sm:px-6 md:px-8 mx-1 sm:mx-2 text-sm sm:text-base md:text-lg text-white/70 font-semibold tracking-wide hover:text-white transition-colors duration-300 whitespace-nowrap"
                    >
                      {name}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Responsive gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};