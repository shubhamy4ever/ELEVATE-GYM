import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Navbar links
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Programs", href: "#programs" },
    { title: "Trainers", href: "#trainers" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" }
  ];
  
  return (
    <header className={`fixed w-[95%] md:w-[90%] mx-auto left-0 right-0 top-6 z-50 transition-all duration-300 rounded-2xl backdrop-blur-lg ${scrollY > 50 ? 'bg-black/85 shadow-lg' : 'bg-black/70'}`}>
      <div className="px-4 md:px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <h1 className="text-white font-montserrat font-bold text-2xl md:text-3xl tracking-tight">
                <span className="text-[#FF3366]">ELE</span><span className="text-[#00C9FF]">VATE</span>
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href} 
                className="text-white font-montserrat font-medium hover:text-[#00C9FF] transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          
          {/* Join Button */}
          <a 
            href="#pricing" 
            className="hidden md:block bg-[#FF3366] hover:bg-opacity-90 text-white font-montserrat font-bold py-3 px-8 rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
          >
            JOIN NOW
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden bg-black/90 rounded-b-2xl overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isMenuOpen && (
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href} 
                className="text-white font-montserrat font-medium py-2 hover:text-[#00C9FF] transition-colors"
                onClick={closeMenu}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#pricing" 
              className="bg-[#FF3366] hover:bg-opacity-90 text-white font-montserrat font-bold py-3 px-8 rounded-xl text-center transition-all transform hover:scale-105 w-full"
              onClick={closeMenu}
            >
              JOIN NOW
            </a>
          </div>
        )}
      </motion.div>
    </header>
  );
}
