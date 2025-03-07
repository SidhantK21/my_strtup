import { motion } from "framer-motion";

export const Contact = () => {
  const whatsappNumber = "9176070106648";
  const email = "sidhantsinghrathoreprsnl@gmail.com";
  
  return (
    <div id="contact" className="flex flex-col h-full py-10 px-4 sm:px-6">
      <h3 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-16 md:mb-20">
        Get in touch
      </h3>
      
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white">
          {/* WhatsApp Button */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, "_blank")}
            className="border-2 border-green-400 w-full sm:w-48 h-16 flex items-center justify-center rounded-xl bg-green-700 opacity-90 px-4 gap-2 cursor-pointer hover:opacity-100 transition-opacity"
          >
            <img src="/wht.png" className="w-5 h-5 sm:w-6 sm:h-6" alt="WhatsApp Icon" />
            <span className="text-sm">Chat on WhatsApp</span>
          </motion.div>
          
          {/* Gmail Button */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(`mailto:${email}`, "_blank")}
            className="border-2 border-[#D14836] w-full sm:w-48 h-16 flex items-center justify-center rounded-xl px-4 gap-2 cursor-pointer hover:bg-[#D14836]/10 transition-colors"
          >
            <img src="/envelope_15047426.png" className="w-5 h-5 sm:w-6 sm:h-6" alt="Gmail Icon" />
            <span className="text-sm">Mail us</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};