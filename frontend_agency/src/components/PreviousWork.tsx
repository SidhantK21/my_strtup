import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, PanInfo } from 'framer-motion';
import { ExternalLink, Code, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  description: string;
  screenshot: string;
  link: string;
  tags: string[];
  icon: 'code' | 'design' | 'link';
}

const workItems: WorkItem[] = [
  {
    title: "Academy Learning Platform",
    description: "An interactive educational platform for modern learning experiences",
    screenshot: "/maniac.png",
    link: "https://academymanish.netlify.app/",
    tags: ["React", "Tailwind", "Education"],
    icon: "code"
  },
  {
    title: "Sutlej Industrial Corp",
    description: "Professional industrial corporation website with modern design",
    screenshot: "/sutl.png",
    link: "https://www.sutlejindustrialcorp.com/",
    tags: ["Corporate", "UI/UX", "Industry"],
    icon: "design"
  },
  {
    title: "SIH Project",
    description: "Smart India Hackathon project showcasing innovation",
    screenshot: "/agro.png",
    link: "https://sih-project-two.vercel.app/",
    tags: ["React", "Innovation", "Hackathon"],
    icon: "code"
  },
  {
    title: "PDF Summarizer",
    description: "AI-powered PDF summarization tool for efficient document processing",
    screenshot: "/pdfrag.png",
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
    <section id='previous work' className="py-6 sm:py-12 md:py-20 px-1 sm:px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-8 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6">
            Previous Work
          </h2>
          <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed tracking-light">
            Explore some of our recent projects that showcase our expertise in
            creating beautiful and functional digital experiences.
          </p>
        </motion.div>

        <div className="relative w-full">
          <div ref={containerRef} className="overflow-hidden touch-pan-y w-full">
            <motion.div
              drag="x"
              dragConstraints={{ left: -containerWidth * (infiniteItems.length - 1), right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x }}
              className="flex touch-pan-y w-full"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={() => setIsAutoPlaying(false)}
              onTouchEnd={() => setIsAutoPlaying(true)}
            >
              {infiniteItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="w-full flex-shrink-0 px-0.5 sm:px-2 md:px-4"
                  style={{ width: containerWidth }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-lg md:rounded-xl bg-gray-900 aspect-video group w-full"
                  >
                    <img
                      src={item.screenshot}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300">
                      <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-4 md:p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-1 sm:mb-2 md:mb-3">
                            <span className="text-white/90 group-hover:text-white transition-colors w-4 h-4 sm:w-5 sm:h-5">
                              {getIcon(item.icon)}
                            </span>
                            <h3 className="text-sm sm:text-lg md:text-2xl font-semibold text-white group-hover:text-white/90 transition-colors truncate">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-white/80 text-[10px] sm:text-sm md:text-lg mb-1 sm:mb-3 md:mb-4 group-hover:text-white/90 transition-colors line-clamp-2 sm:line-clamp-none">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1.5 md:gap-2 max-w-full overflow-hidden">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-0.5 sm:px-2 md:px-3 py-[1px] sm:py-0.5 text-[7px] sm:text-xs md:text-sm font-medium text-white/90 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors whitespace-nowrap leading-none"
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
            className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex justify-center mt-2 sm:mt-4 md:mt-8 gap-1 sm:gap-1.5 md:gap-2">
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
                className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-3 sm:w-4 md:w-6 bg-white' : 'bg-white/30'
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