import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, slideInLeft, slideInRight, buttonHover } from "@/lib/animations";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const features = [
    {
      icon: "fas fa-dumbbell",
      title: "Premium Equipment",
      description: "Latest technology and machines"
    },
    {
      icon: "fas fa-users",
      title: "Expert Trainers",
      description: "Certified professionals"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Flexible Classes",
      description: "Over 200 weekly sessions"
    },
    {
      icon: "fas fa-spa",
      title: "Recovery Zones",
      description: "Dedicated wellness areas"
    }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-montserrat font-bold mb-6 relative"
              variants={slideInLeft}
            >
              <span className="text-primary">ABOUT</span> <span className="text-[#FF3366]">ELEVATE</span>
              <span className="absolute left-0 bottom-0 w-24 h-1 bg-[#00C9FF]"></span>
            </motion.h2>
            <motion.p 
              className="text-[#333333] text-lg mb-6 leading-relaxed"
              variants={fadeIn}
            >
              Founded in 2015, ELEVATE has transformed the fitness landscape with our commitment to excellence and innovation. Our state-of-the-art facilities feature cutting-edge equipment and technology designed to maximize your workout experience.
            </motion.p>
            <motion.p 
              className="text-[#333333] text-lg mb-8 leading-relaxed"
              variants={fadeIn}
            >
              At ELEVATE, we believe fitness is more than just physical transformation—it's a lifestyle that empowers every aspect of your being. Our expert trainers create personalized programs that adapt to your unique goals and abilities.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={fadeIn}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <i className={`${feature.icon} text-[#FF3366] text-xl mr-3 mt-1`}></i>
                  <div>
                    <h3 className="font-montserrat font-bold text-primary">{feature.title}</h3>
                    <p className="text-[#333333]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.a 
              href="#programs" 
              className="inline-block bg-primary hover:bg-opacity-90 text-white font-montserrat font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              DISCOVER MORE
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12 grid grid-cols-2 gap-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <div className="transform translate-y-12">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-lg h-64 md:h-72 w-full object-cover object-center" 
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Trainer helping client" 
                className="rounded-lg shadow-lg h-64 md:h-72 w-full object-cover object-center mb-4" 
              />
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80" 
                alt="Group fitness class" 
                className="rounded-lg shadow-lg h-48 md:h-56 w-full object-cover object-center" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
