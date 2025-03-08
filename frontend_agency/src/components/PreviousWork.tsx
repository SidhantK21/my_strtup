import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, PanInfo } from 'framer-motion';
import { ExternalLink, Code, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  icon: 'code' | 'design' | 'link';
}

const workItems: WorkItem[] = [
  {
    title: "Academy Learning Platform",
    description: "An interactive educational platform for modern learning experiences",
    image: "https://academymanish.netlify.app/",
    link: "https://academymanish.netlify.app/",
    tags: ["React", "Tailwind", "Education"],
    icon: "code"
  },
  {
    title: "Sutlej Industrial Corp",
    description: "Professional industrial corporation website with modern design",
    image: "https://www.sutlejindustrialcorp.com/",
    link: "https://www.sutlejindustrialcorp.com/",
    tags: ["Corporate", "UI/UX", "Industry"],
    icon: "design"
  },
  {
    title: "SIH Project",
    description: "Smart India Hackathon project showcasing innovation",
    image: "https://sih-project-two.vercel.app/",
    link: "https://sih-project-two.vercel.app/",
    tags: ["React", "Innovation", "Hackathon"],
    icon: "code"
  },
  {
    title: "PDF Summarizer",
    description: "AI-powered PDF summarization tool for efficient document processing",
    image: "https://pdfsummarizer-rust.vercel.app/",
    link: "https://pdfsummarizer-rust.vercel.app/",
    tags: ["AI", "PDF", "Tools"],
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
  const autoPlayTimeoutRef = useRef<number | null>(null);

  // Create an infinite array by duplicating items
  const infiniteItems = [...workItems, ...workItems, ...workItems];

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
    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = window.setTimeout(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayTimeoutRef.current) {
        window.clearTimeout(autoPlayTimeoutRef.current);
      }
    };
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

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = containerWidth * 0.2; // 20% of container width
    const velocity = 0.5;

    if (Math.abs(info.velocity.x) > velocity || Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      controls.start({
        x: `-${currentIndex * 100}%`,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  };

  return (
    <section id='previous work' className="py-12 md:py-20 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Previous Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore some of our recent projects that showcase our expertise in
            creating beautiful and functional digital experiences.
          </p>
        </motion.div>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden touch-pan-y">
            <motion.div
              drag="x"
              dragConstraints={{ left: -containerWidth * (infiniteItems.length - 1), right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x }}
              className="flex touch-pan-y"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={() => setIsAutoPlaying(false)}
              onTouchEnd={() => setIsAutoPlaying(true)}
            >
              {infiniteItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                  style={{ width: containerWidth }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-lg md:rounded-xl bg-gray-900 aspect-video group"
                  >
                    <iframe
                      src={item.image}
                      title={item.title}
                      className="w-full h-full border-0 transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                            <span className="text-white/90">
                              {getIcon(item.icon)}
                            </span>
                            <h3 className="text-lg md:text-2xl font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-white/80 text-sm md:text-lg mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm font-medium text-white/90 bg-white/10 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex justify-center mt-4 md:mt-8 gap-1.5 md:gap-2">
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
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 md:w-8 bg-white' : 'bg-white/30'
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