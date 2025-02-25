import { motion } from "framer-motion";

export const Offerings = () => {
  const services = [
    {
      title: "Custom Website Development",
      description: "A larger service card with more details and description.",
      imgSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-56",
      span: "lg:col-span-2",
    },
    {
      title: "UI/UX",
      description: "Short description for service one.",
      imgSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-40",
    },
    {
      title: "SEO Optimization",
      description: "A taller card with more visual impact.",
      imgSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-64",
      span: "lg:row-span-2",
    },
    {
      title: "Web Solutions",
      description: "Short description for service two.",
      imgSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-40",
    },
    {
      title: "Maintenance and Upgradation",
      description: "Additional service to balance the grid.",
      imgSrc:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-56",
    },
    {
      title: "Consultations",
      description: "An exclusive service for premium clients.",
      imgSrc:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgHeight: "h-40",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 space-y-8">
      <h2 className="text-white text-4xl sm:text-5xl font-semibold text-center">
        What We Offer
      </h2>

      {/* Responsive Bento Grid */}
      <div className="border-2 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-6xl">
        {services.map(({ title, description, imgSrc, imgHeight, span }, index) => (
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            key={index}
            className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden flex flex-col ${span || ""}`}
          >
            <img src={imgSrc} alt={title} className={`w-full ${imgHeight} object-cover`} />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
