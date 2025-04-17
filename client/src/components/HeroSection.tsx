import { motion } from "framer-motion";
import { fadeIn, slideInLeft, buttonHover } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full h-screen relative bg-primary overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Fitness workout environment" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight mb-6"
            variants={slideInLeft}
          >
            REDEFINE YOUR <span className="text-[#FF3366]">LIMITS</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white font-light mb-10 font-helvetica"
            variants={fadeIn}
          >
            Elite training. Premium equipment. Unparalleled results.
          </motion.p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="#programs" 
              className="bg-[#FF3366] hover:bg-opacity-90 text-white font-montserrat font-bold py-4 px-10 rounded-full text-center transition-all transform hover:scale-105"
              whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              EXPLORE PROGRAMS
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border-2 border-[#00C9FF] text-[#00C9FF] hover:bg-[#00C9FF] hover:text-white font-montserrat font-bold py-4 px-10 rounded-full text-center transition-all transform hover:scale-105"
              whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              FREE TRIAL
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute right-0 bottom-0 md:right-10 md:bottom-10 z-20 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="glass p-6 rounded-lg max-w-xs">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-[#FF3366] mr-3 animate-pulse"></div>
            <p className="text-white font-montserrat font-medium">LIVE NOW</p>
          </div>
          <p className="text-white font-montserrat font-bold">
            HIIT Training Session<br />
            <span className="text-[#00C9FF]">12 members attending</span>
          </p>
        </div>
      </motion.div>
      
      {/* Animated down arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }} 
        transition={{ 
          repeat: Infinity, 
          duration: 2
        }}
      >
        <a href="#about" className="text-white hover:text-[#00C9FF] transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
