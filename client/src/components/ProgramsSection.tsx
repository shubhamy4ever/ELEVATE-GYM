import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ProgramItem } from "@/lib/types";

export default function ProgramsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const programs: ProgramItem[] = [
    {
      id: 1,
      title: "HIIT FUSION",
      description: "High-intensity interval training combines cardio and strength for maximum calorie burn and muscle toning.",
      imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "60 MIN",
      level: "All Levels",
      isPopular: true
    },
    {
      id: 2,
      title: "POWER LIFT",
      description: "Build serious strength and muscle with our comprehensive weightlifting and resistance training program.",
      imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "75 MIN",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "POWER YOGA",
      description: "Dynamic yoga flows combine strength, flexibility and mindfulness for a transformative practice.",
      imageUrl: "https://images.unsplash.com/photo-1593810450967-f9c6652b9511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "60 MIN",
      level: "All Levels"
    },
    {
      id: 4,
      title: "CYCLE BURN",
      description: "Intense indoor cycling with rhythm-based choreography to energizing music for a full-body workout.",
      imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      duration: "45 MIN",
      level: "All Levels",
      isNew: true
    },
    {
      id: 5,
      title: "COMBAT BOX",
      description: "High-energy boxing combined with bodyweight exercises for strength, coordination and serious stress relief.",
      imageUrl: "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "60 MIN",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "RECOVERY FLEX",
      description: "Essential recovery-focused session with stretching, foam rolling and myofascial release techniques.",
      imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "45 MIN",
      level: "All Levels"
    }
  ];
  
  return (
    <section id="programs" ref={sectionRef} className="py-20 md:py-32 bg-gray-100 fade-in">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block relative">
            <span className="text-primary">OUR</span> <span className="text-[#FF3366]">PROGRAMS</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#00C9FF]"></span>
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto">
            Discover our diverse range of fitness programs designed to challenge, motivate and transform you. Each program is crafted by industry experts to deliver maximum results.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="inline-block bg-primary hover:bg-opacity-90 text-white font-montserrat font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            VIEW ALL CLASSES
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: ProgramItem }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="program-card relative rounded-xl overflow-hidden shadow-xl"
      variants={fadeIn}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <img 
        src={program.imageUrl} 
        alt={program.title} 
        className="w-full h-80 object-cover object-center" 
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary to-transparent p-6 flex flex-col justify-end"
        animate={{ opacity: isHovered ? 0.9 : 0.8 }}
        transition={{ duration: 0.4 }}
      >
        {(program.isPopular || program.isNew) && (
          <div className="glass absolute top-6 left-6 py-1 px-4 rounded-full">
            <span className="text-white font-montserrat text-sm font-bold">
              {program.isPopular ? "POPULAR" : "NEW"}
            </span>
          </div>
        )}
        <h3 className="text-white font-montserrat font-bold text-2xl mb-2">{program.title}</h3>
        <p className="text-white text-sm mb-4">
          {program.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[#00C9FF] font-bold mr-2">{program.duration}</span>
            <span className="text-white">|</span>
            <span className="text-white ml-2">{program.level}</span>
          </div>
          <a href="#contact" className="bg-[#FF3366] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full text-sm transition-all">
            RESERVE
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
