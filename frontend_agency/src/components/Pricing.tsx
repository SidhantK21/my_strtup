import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

const PricingCard = ({
  title,
  price,
  features,
  isPopular = false,
  delay = 0,
}: PricingCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // if deployment fails try adding ishovered here 
  const [,setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    // Smooth out the mouse movement values
    const newX = clientX - left;
    const newY = clientY - top;
    mouseX.set(newX);
    mouseY.set(newY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative p-8 rounded-3xl overflow-hidden
        ${isPopular ? 'bg-black/90 border-2 border-white/20' : 'bg-black border border-white/10'}
        transition-colors duration-500
      `}
    >
      {/* Refined Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 40%
            )
          `,
        }}
      />

      <div className="relative space-y-6">
        {isPopular && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-4 -right-4 bg-white px-4 py-1 rounded-full"
          >
            <span className="text-black text-sm font-medium">Popular</span>
          </motion.div>
        )}

        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-2xl font-bold text-white"
          >
            {title}
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="mt-4 flex items-baseline"
          >
            <span className="text-5xl font-bold tracking-tight text-white">
              {price}
            </span>
            <span className="ml-1 text-2xl text-gray-400">/month</span>
          </motion.div>
        </div>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: delay + 0.1 * index,
                duration: 0.5
              }}
              className="flex items-center group/item"
            >
              <div className="relative flex-shrink-0">
                <Check className="h-5 w-5 text-white/80 mr-3 transition-all duration-300 group-hover/item:text-white group-hover/item:scale-105" />
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <button
          className={`
            w-full py-4 rounded-full font-medium
            ${isPopular 
              ? "bg-white text-black hover:bg-gray-100" 
              : "bg-white/10 text-white hover:bg-white/15"
            }
            transition-colors duration-300
          `}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export const Pricing = () => {
  return (
    <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center space-y-8 mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/70 uppercase tracking-widest text-sm font-medium"
        >
          Pricing Plans
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/70 text-lg max-w-2xl mx-auto"
        >
          Select the perfect plan that aligns with your digital ambitions. Transform your vision into reality with our tailored solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PricingCard
          title="Standard"
          price="$599"
          features={[
            "Custom Designing",
            "2 times free design revision",
            "3 months free maintenance",
            "Custom logo design",
            "Essential API & CMS Integration",
          ]}
          delay={0.2}
        />
        <PricingCard
          title="Enterprise"
          price="$1299"
          features={[
            "Design revisions",
            "SEO optimization",
            "Security",
            "Custom logo",
            "6 months free maintenance",
            "API Access",
            "Custom Solutions",
          ]}
          isPopular={true}
          delay={0.4}
        />
      </div>
    </div>
  );
};