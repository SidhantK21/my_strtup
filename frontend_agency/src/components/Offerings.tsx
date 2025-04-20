import { useState, useRef, useEffect } from 'react';
import { Sparkles, Zap, Palette, BarChart, Monitor, ArrowRight } from 'lucide-react';

type Service = {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType;
  span: string;
  accent: string;
};

const services: Service[] = [
  {
    id: 1,
    name: 'Strategic Consulting',
    description: 'Comprehensive strategies that transform your business operations and drive sustainable growth',
    icon: Sparkles,
    span: 'sm:col-span-2 sm:row-span-2',
    accent: 'from-purple-500/30 to-transparent',
  },
  {
    id: 2,
    name: 'Digital Innovation',
    description: 'Cutting-edge solutions for modern challenges',
    icon: Zap,
    span: '',
    accent: 'from-blue-500/30 to-transparent',
  },
  {
    id: 3,
    name: 'Brand Development',
    description: 'Create lasting impressions that resonate with your audience',
    icon: Palette,
    span: '',
    accent: 'from-pink-500/30 to-transparent',
  },
  {
    id: 4,
    name: 'Market Analysis',
    description: 'Data-driven insights to identify opportunities and help you stand out in your domain',
    icon: BarChart,
    span: 'sm:col-span-2',
    accent: 'from-green-500/30 to-transparent',
  },
];

export const Offerings = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Check if device is mobile for touch interactions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setHoveredId(id);
  };

  // Handle touch events for mobile
  const handleTouchStart = (id: number) => {
    if (isMobile) {
      setHoveredId(id);
    }
  };

  return (
    <section id="services" className="relative text-white py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)] pointer-events-none" />
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What We Offer</h1>
          <p className="text-zinc-400 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base">
            Specialized solutions crafted to elevate your business to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3ex sm:gap-5 md:gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            const isLargeCard = service.id === 1;
            
            const spotlightSize = isLargeCard ? '300px' : '200px';

            return (
              <div
                key={service.id}
                className={`${service.span} relative group rounded-2xl border border-zinc-800 backdrop-blur-md
                  hover:border-zinc-700 transition-all duration-300 overflow-hidden
                  ${isLargeCard ? 'min-h-[440px] sm:min-h-[480px]' : 'min-h-[220px] sm:min-h-[240px]'}`}
                onMouseEnter={(e) => handleMouseMove(e, service.id)}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={() => handleTouchStart(service.id)}
              >
                {/* Spotlight Gradient */}
                {(isHovered || isMobile) && service.accent && (
                  <div
                    className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(${spotlightSize} circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.accent}, transparent 80%)`
                    }}
                  />
                )}

                {isLargeCard ? (
                  // Large card - strategic consulting
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 text-white flex items-center justify-center">
                        <Icon />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">{service.name}</h3>
                    <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-md leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-auto">
                      <div className="rounded-xl border border-zinc-800 p-4 bg-zinc-900/40 group-hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <Monitor strokeWidth={1.5} className="w-5 h-5 text-zinc-300" />
                          <h4 className="font-medium text-white">Tech Architecture</h4>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          Sustainable, modular, high-performance applications.
                        </p>
                      </div>

                      <div className="rounded-xl border border-zinc-800 p-4 bg-zinc-900/40 group-hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap strokeWidth={1.5} className="w-5 h-5 text-zinc-300" />
                          <h4 className="font-medium text-white">Web Strategy</h4>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          Scalable digital strategies aligned with your goals.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm font-medium text-white group-hover:text-zinc-300 transition-all group-hover:translate-x-1">
                      <span>Learn more</span> <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                ) : (
                  // Regular cards
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="w-10 h-10 text-white flex items-center justify-center">
                        <Icon/>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{service.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
                    
                    <div className="mt-auto pt-4 flex items-center text-white group-hover:text-zinc-300 text-sm font-medium transition-all group-hover:translate-x-1">
                      <span>Explore</span> <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
