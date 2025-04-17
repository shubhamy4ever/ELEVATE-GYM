import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { TrainerItem } from "@/lib/types";

export default function TrainersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const trainers: TrainerItem[] = [
    {
      id: 1,
      name: "ALEX JOHNSON",
      role: "STRENGTH COACH",
      bio: "Former Olympic athlete with 10+ years of coaching experience. Specializes in strength development and athletic performance.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      socialLinks: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "SARAH CHEN",
      role: "YOGA INSTRUCTOR",
      bio: "Internationally certified yoga instructor with 8+ years experience. Specializes in power yoga and mindfulness practices.",
      imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      socialLinks: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "MARCUS WILLIAMS",
      role: "HIIT SPECIALIST",
      bio: "Celebrity trainer with extensive experience in circuit and HIIT training. Featured in numerous fitness publications.",
      imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      socialLinks: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];
  
  return (
    <section id="trainers" ref={sectionRef} className="py-20 md:py-32 bg-white fade-in">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block relative">
            <span className="text-primary">EXPERT</span> <span className="text-[#FF3366]">TRAINERS</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#00C9FF]"></span>
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto">
            Our elite team of certified professionals are dedicated to helping you achieve your fitness goals through personalized guidance and motivation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrainerCard({ trainer }: { trainer: TrainerItem }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="trainer-card group rounded-xl overflow-hidden shadow-lg bg-white"
      variants={fadeIn}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-80">
        <motion.img 
          src={trainer.imageUrl} 
          alt={`${trainer.name} - ${trainer.role}`}
          className="w-full h-full object-cover object-center"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6 relative">
        <div className="glass absolute -top-12 left-6 py-1 px-4 rounded-full">
          <span className="text-white font-montserrat text-sm font-bold">{trainer.role}</span>
        </div>
        <h3 className="text-primary font-montserrat font-bold text-xl mb-2">{trainer.name}</h3>
        <p className="text-[#333333] text-sm mb-4">
          {trainer.bio}
        </p>
        <div className="flex space-x-3">
          {trainer.socialLinks.instagram && (
            <a href={trainer.socialLinks.instagram} className="text-primary hover:text-[#FF3366] transition-colors">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          )}
          {trainer.socialLinks.twitter && (
            <a href={trainer.socialLinks.twitter} className="text-primary hover:text-[#FF3366] transition-colors">
              <i className="fab fa-twitter text-lg"></i>
            </a>
          )}
          {trainer.socialLinks.linkedin && (
            <a href={trainer.socialLinks.linkedin} className="text-primary hover:text-[#FF3366] transition-colors">
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
