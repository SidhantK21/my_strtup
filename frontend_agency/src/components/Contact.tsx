import { motion } from "motion/react"

export const Contact=()=>{
  const whatsappNumber="9176070106648";
  const email="sidhantsinghrathoreprsnl@gmail.com";
  return<>
   <div className="flex flex-col h-full py-10">
            <h3 className="text-white font-semibold text-5xl text-center mb-20">Get in touch</h3> 

            <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-row gap-6 text-white text-lg">
                    {/* WhatsApp Button */}
                    <motion.div 
                        initial="false"
                        whileTap={{ scale: 0.99 }}
                        onClick={() => window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, "_blank")}
                        className="border-2 border-green-400 w-48 h-16 flex items-center justify-center rounded-xl bg-green-700 opacity-90 px-4 gap-2 cursor-pointer"
                    >
                        <img src="/wht.png" className="w-6 h-6" alt="WhatsApp Icon"/>
                        <span className="text-sm">Chat on WhatsApp</span>
                    </motion.div>

                    {/* Gmail Button */}
                    <motion.div 
                        initial="false"
                        whileTap={{ scale: 0.99 }}
                        onClick={() => window.open(`mailto:${email}`, "_blank")}
                        className="border-2 border-[#D14836] w-48 h-16 flex items-center justify-center rounded-xl px-4 gap-2 cursor-pointer"
                    >
                        <img src="/envelope_15047426.png" className="w-6 h-6" alt="Gmail Icon"/>
                        <span className="text-sm">Mail us</span>
                    </motion.div>
                </div>
            </div>
        </div>
  
  
  </>
}