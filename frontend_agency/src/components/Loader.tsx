import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  variant?: 'minimal' | 'default' | 'fancy';
  speed?: 'slow' | 'normal' | 'fast';
}

export const Loader = ({ 
  size = 'md', 
  color = 'white',
  variant = 'default',
  speed = 'normal'
}: LoaderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.7
  };

  // Calculate spoke dimensions based on size
  const getSpokeDimensions = () => {
    const fullSize = size === 'sm' ? 16 : size === 'md' ? 24 : 32; // Full size in pixels
    return {
      length: fullSize * 0.4, // 40% of full size
      width: size === 'sm' ? 1.5 : size === 'md' ? 2 : 2.5
    };
  };

  const spokeDimensions = getSpokeDimensions();

  return (
    <div className={`relative ${sizes[size]}`}>
      {/* Main wheel container */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{
          rotate: {
            duration: 1.5 * speedMultiplier[speed],
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1]
          },
          scale: {
            duration: 3 * speedMultiplier[speed],
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Outer ring */}
        <div 
          className="absolute inset-0 rounded-full border-2 transition-opacity duration-300"
          style={{ 
            borderColor: color,
            opacity: mounted ? 0.8 : 0
          }}
        />

        {/* Inner ring */}
        <div 
          className="absolute rounded-full transition-opacity duration-300"
          style={{ 
            top: '35%',
            left: '35%',
            width: '30%',
            height: '30%',
            border: `${size === 'sm' ? 1 : 2}px solid ${color}`,
            opacity: mounted ? 0.8 : 0
          }}
        />

        {/* Spokes */}
        {[...Array(8)].map((_, index) => {
          const degree = index * (360 / 8);
          
          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 origin-center transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: mounted ? 0.8 : 0,
                scaleY: [0.9, 1.1, 0.9]
              }}
              transition={{
                scaleY: {
                  duration: 1.5 * speedMultiplier[speed],
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }
              }}
              style={{
                width: spokeDimensions.length,
                height: spokeDimensions.width,
                backgroundColor: color,
                transform: `rotate(${degree}deg) translateX(${spokeDimensions.length/4}px)`,
                transformOrigin: '0 50%'
              }}
            />
          );
        })}

        {/* Center hub with pulsing effect */}
        <motion.div 
          className="absolute rounded-full transition-opacity duration-300"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: mounted ? 0.9 : 0
          }}
          transition={{
            scale: {
              duration: 1.5 * speedMultiplier[speed],
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{ 
            top: '42%',
            left: '42%',
            width: '16%',
            height: '16%',
            backgroundColor: color
          }}
        />
      </motion.div>
    </div>
  );
};