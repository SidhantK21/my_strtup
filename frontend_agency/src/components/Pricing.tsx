import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

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
  delay = 0 
}: PricingCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 rounded-3xl bg-black border border-white/10 overflow-hidden"
    >
      {/* Enhanced Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
        }}
      />

      {/* Spotlight Border Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.4),
              transparent 40%
            )
          `,
          maskImage: 'linear-gradient(black, black) padding-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
        }}
      />

      {isPopular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="absolute -top-4 right-4 bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
        >
          Most Popular
        </motion.div>
      )}

      <div className="relative space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight text-white">
              {price}
            </span>
            <span className="ml-1 text-2xl text-gray-400">/month</span>
          </div>
        </div>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 * index }}
              className="flex items-center group/item"
            >
              <div className="relative">
                <Check className="h-5 w-5 text-white mr-3 flex-shrink-0 transition-transform group-hover/item:scale-110" />
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full blur-md"
                    layoutId={`check-glow-${index}`}
                  />
                )}
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative w-full py-4 rounded-full font-medium overflow-hidden
            ${isPopular 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-white/10 text-white hover:bg-white/20'
            }
            transition-all duration-300
          `}
        >
          Get Started
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              translateX: useMotionTemplate`calc(${mouseX}px - 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
            price="$999"
            features={[
              "10 Custom AI Designs",
              "Advanced Analytics",
              "24/7 Priority Support",
              "2 Brand Identities",
              "Weekly Reports",
              "Basic Integration"
            ]}
            delay={0.2}
          />
          <PricingCard
            title="Enterprise"
            price="$1999"
            features={[
              "Unlimited AI Designs",
              "Enterprise Analytics",
              "Dedicated Support Team",
              "Unlimited Brands",
              "Real-time Reports",
              "API Access",
              "Custom Solutions"
            ]}
            isPopular={true}
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;