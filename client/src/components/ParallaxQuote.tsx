import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function ParallaxQuote() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section 
      ref={sectionRef}
      className="parallax h-96 relative flex items-center justify-center fade-in"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.i 
            className="fas fa-quote-left text-[#FF3366] text-4xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.i>
          <motion.h3 
            className="text-white font-montserrat font-light text-2xl md:text-3xl italic mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            "The body achieves what the mind believes. At ELEVATE, we transform both."
          </motion.h3>
          <motion.p 
            className="text-[#00C9FF] font-montserrat font-bold text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            ELEVATE PHILOSOPHY
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
