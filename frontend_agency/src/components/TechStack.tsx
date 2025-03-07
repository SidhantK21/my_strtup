import { motion } from 'framer-motion';
import { Database, Server, Code2, Blocks, Wind, Library, BrainCircuit, Container } from 'lucide-react';

interface TechnologyProps {
  icon: React.ElementType;
  name: string;
  description: string;
  color: string;
}

const Technology = ({ icon: Icon, name, description, color }: TechnologyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 h-full">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 `}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const technologies: TechnologyProps[] = [
    {
      icon: Database,
      name: 'MongoDB',
      description: 'NoSQL database for flexible, scalable data storage',
      color: 'bg-green-600/80'
    },
    {
      icon: Library,
      name: 'PostgreSQL',
      description: 'Robust relational database for complex data relationships',
      color: 'bg-blue-600/80'
    },
    {
      icon: Server,
      name: 'Node.js',
      description: 'Server-side JavaScript runtime environment',
      color: 'bg-emerald-600/80'
    },
    {
      icon: Code2,
      name: 'TypeScript',
      description: 'Typed superset of JavaScript for enhanced development',
      color: 'bg-blue-500/80'
    },
    {
      icon: Wind,
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'bg-cyan-500/80'
    },
    {
      icon: Blocks,
      name: 'Angular',
      description: 'Platform for building scalable web applications',
      color: 'bg-red-600/80'
    },
    {
      icon: BrainCircuit,
      name: 'React',
      description: 'Library for building dynamic user interfaces',
      color: 'bg-sky-500/80'
    },
    {
      icon: Container,
      name: 'Docker',
      description: 'Container platform for consistent deployment',
      color: 'bg-blue-700/80'
    }
  ];

  return (
    <section id='technology' className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Technologies We Use
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Leveraging cutting-edge technologies to deliver robust, scalable, and efficient solutions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <Technology key={index} {...tech} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;