import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ExternalLink, Code, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: 'code' | 'design' | 'link';
}

// Expanded work items for continuous sliding
const workItems: WorkItem[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "code"
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio for a professional photographer",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Design", "UI/UX", "Animation"],
    icon: "design"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Dashboard", "Analytics", "React"],
    icon: "link"
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for fitness tracking",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["React Native", "Firebase", "UX"],
    icon: "code"
  },
  {
    title: "AI Platform",
    description: "Machine learning platform for data analysis",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Python", "TensorFlow", "AWS"],
    icon: "link"
  }
];

const getIcon = (type: WorkItem['icon']) => {
  switch (type) {
    case 'code':
      return <Code className="w-5 h-5" />;
    case 'design':
      return <Palette className="w-5 h-5" />;
    case 'link':
      return <ExternalLink className="w-5 h-5" />;
  }
};

const PreviousWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Create an infinite array by duplicating items
  const infiniteItems = [...workItems, ...workItems, ...workItems];

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    let interval:any;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % workItems.length;
    setCurrentIndex(nextIndex);
    controls.start({
      x: `-${(currentIndex + 1) * 100}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + workItems.length) % workItems.length;
    setCurrentIndex(prevIndex);
    controls.start({
      x: `-${(currentIndex - 1) * 100}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const threshold = 100; // minimum distance for swipe
    const velocity = 0.5; // minimum velocity for swipe

    if (Math.abs(info.velocity.x) > velocity || Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      // Reset to current position if swipe wasn't strong enough
      controls.start({
        x: `-${currentIndex * 100}%`,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Previous Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise in
            creating beautiful and functional digital experiences.
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -containerWidth * (infiniteItems.length - 1), right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x }}
              className="flex"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {infiniteItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: containerWidth }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-video group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-white/90">
                              {getIcon(item.icon)}
                            </span>
                            <h3 className="text-2xl font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-white/80 text-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-sm font-medium text-white/90 bg-white/10 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {workItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  controls.start({
                    x: `-${index * 100}%`,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-white' : 'bg-white/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;