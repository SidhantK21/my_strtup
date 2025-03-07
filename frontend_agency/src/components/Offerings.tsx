import { useState, useRef } from 'react';
import { Sparkles, Zap, Palette, BarChart, Monitor, Code, Globe, Shield } from 'lucide-react';

const services = [
  { 
    id: 1, 
    name: 'Strategic Consulting', 
    description: 'Expert guidance tailored to accelerate your business growth with cutting-edge web solutions, optimized user experiences, and scalable technology strategies.', 
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    icon: Sparkles,
    accent: 'from-purple-500/20 to-transparent'
  },
  { 
    id: 2, 
    name: 'Digital Innovation', 
    description: 'Cutting-edge solutions for modern challenges', 
    span: 'col-span-1',
    icon: Zap,
    accent: 'from-blue-500/20 to-transparent'
  },
  { 
    id: 3, 
    name: 'Brand Development', 
    description: 'Create lasting impressions that resonate with your audience', 
    span: 'col-span-1',
    icon: Palette,
    accent: 'from-pink-500/20 to-transparent'
  },
  { 
    id: 4, 
    name: 'Market Analysis', 
    description: 'Data-driven insights to identify opportunities and help you to stand out in your work of domain.', 
    span: 'col-span-1 md:col-span-2',
    icon: BarChart,
    accent: 'from-green-500/20 to-transparent'
  },
  { 
    id: 5, 
    name: 'UI/UX Design', 
    description: 'User-centered experiences that delight and convert', 
    span: 'col-span-1 md:row-span-2',
    icon: Monitor,
    accent: 'from-orange-500/20 to-transparent'
  },
  { 
    id: 6, 
    name: 'Tech Solutions', 
    description: 'Advanced technological implementations that drive efficiency', 
    span: 'col-span-1',
    icon: Code,
    accent: 'from-cyan-500/20 to-transparent'
  },
  { 
    id: 7, 
    name: 'SEO Optimization', 
    description: 'Make your presence world wide with our help', 
    span: 'col-span-1',
    icon: Globe,
    accent: 'from-indigo-500/20 to-transparent'
  },
  { 
    id: 8, 
    name: 'Security First', 
    description: 'Enterprise-grade protection for your digital assets', 
    span: 'col-span-1',
    icon: Shield,
    accent: 'from-rose-500/20 to-transparent'
  }
];

export const Offerings = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent, serviceId: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setHoveredId(serviceId);
  };

  return (
    <section id='services' className="relative min-h-screen bg-black text-white px-4 py-16 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div ref={containerRef} className="relative max-w-[90rem] mx-auto">
        {/* Centered heading section with refined typography */}
        <div className="text-center mb-12 md:mb-16">
         
          
          <h1 className="mt-6 text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight px-4">
            What We Offer
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-xl md:max-w-2xl mx-auto px-4">
            Specialized solutions crafted to elevate your business to new heights
          </p>
        </div>
        
        {/* Refined cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 px-4 md:px-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            
            return (
              <div
                key={service.id}
                className={`${service.span} group relative rounded-2xl bg-zinc-900/50 
                  border border-zinc-800/50 transition-all duration-500 
                  hover:border-white/10 hover:bg-zinc-900/80 backdrop-blur-sm
                  min-h-[200px] md:min-h-0`}
                onMouseEnter={(e) => handleMouseMove(e, service.id)}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Spotlight effect */}
                {isHovered && (
                  <div 
                    className="absolute pointer-events-none inset-0 opacity-60 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.accent}, transparent 80%)`
                    }}
                  />
                )}
                
                {/* Content */}
                <div className="relative p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl flex items-center justify-center 
                      bg-zinc-800/50 text-zinc-400 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  <h2 className="text-xl md:text-lg font-semibold mb-3 text-zinc-100 group-hover:text-white transition-colors duration-300">
                    {service.name}
                  </h2>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;