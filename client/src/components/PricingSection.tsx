import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer, buttonHover, cardHover } from "@/lib/animations";
import { PricingPlan } from "@/lib/types";

export default function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "BASIC",
      price: 49,
      features: {
        included: [
          "Access to gym floor",
          "4 group classes per month",
          "Standard locker room access",
          "Online workout tracking"
        ],
        excluded: [
          "Personal training sessions",
          "Advanced recovery facilities"
        ]
      },
      ctaText: "CHOOSE PLAN"
    },
    {
      id: 2,
      name: "PREMIUM",
      price: 89,
      isPopular: true,
      features: {
        included: [
          "Unlimited gym access",
          "Unlimited group classes",
          "Enhanced locker room amenities",
          "Personalized fitness app",
          "2 personal training sessions monthly"
        ],
        excluded: [
          "Advanced recovery facilities"
        ]
      },
      ctaText: "CHOOSE PLAN"
    },
    {
      id: 3,
      name: "ELITE",
      price: 149,
      features: {
        included: [
          "24/7 all-access membership",
          "Unlimited premium classes",
          "Luxury locker room with spa",
          "Advanced fitness tracking",
          "4 personal training sessions monthly",
          "Full recovery suite access"
        ],
        excluded: []
      },
      ctaText: "CHOOSE PLAN"
    }
  ];
  
  return (
    <section id="pricing" ref={sectionRef} className="py-20 md:py-32 bg-gray-100 fade-in">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block relative">
            <span className="text-primary">MEMBERSHIP</span> <span className="text-[#FF3366]">PLANS</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#00C9FF]"></span>
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto">
            Invest in your health with our flexible membership options. Each plan is designed to fit your lifestyle and help you achieve your fitness goals.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  // Apply special styling for the popular plan
  const isPopular = plan.isPopular;
  
  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg relative ${
        isPopular ? 'transform scale-105 md:translate-y-0 border-2 border-[#FF3366] mt-8 pt-4' : ''
      }`}
      variants={fadeIn}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {isPopular && (
        <div className="bg-[#FF3366] absolute -top-5 left-1/2 transform -translate-x-1/2 py-1 px-6 rounded-full shadow-lg z-10 whitespace-nowrap">
          <span className="text-white font-montserrat text-sm font-bold">MOST POPULAR</span>
        </div>
      )}
      <div className={`${isPopular ? 'bg-[#FF3366]' : 'bg-primary'} p-6 text-center`}>
        <h3 className="text-white font-montserrat font-bold text-2xl mb-2">{plan.name}</h3>
        <div className="flex justify-center items-baseline">
          <span className={`${isPopular ? 'text-white' : 'text-[#00C9FF]'} font-montserrat font-bold text-5xl`}>${plan.price}</span>
          <span className="text-white ml-1">/month</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="mb-8 space-y-4">
          {plan.features.included.map((feature, index) => (
            <li key={`included-${index}`} className="flex items-center">
              <i className="fas fa-check text-[#FF3366] mr-3"></i>
              <span className="text-[#333333]">{feature}</span>
            </li>
          ))}
          {plan.features.excluded.map((feature, index) => (
            <li key={`excluded-${index}`} className="flex items-center opacity-50">
              <i className="fas fa-times text-gray-400 mr-3"></i>
              <span className="text-[#333333]">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.a 
          href="#contact" 
          className={`block ${isPopular ? 'bg-[#FF3366]' : 'bg-primary'} hover:bg-opacity-90 text-white font-montserrat font-bold py-3 text-center rounded-full transition-all transform hover:scale-105`}
          whileHover="hover"
          initial="rest"
          variants={buttonHover}
        >
          {plan.ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
}
