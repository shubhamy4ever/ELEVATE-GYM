import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="inline-block mb-6">
                <h2 className="font-montserrat font-bold text-3xl tracking-tight">
                  <span className="text-[#FF3366]">ELE</span><span className="text-[#00C9FF]">VATE</span>
                </h2>
              </a>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming bodies and minds through premium fitness experiences since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-[#00C9FF] transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Programs</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">PROGRAMS</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">HIIT Fusion</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Power Lift</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Power Yoga</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Cycle Burn</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#00C9FF] transition-colors">Combat Box</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and training tips.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00C9FF] bg-gray-800 text-white"
                />
                <button 
                  type="submit" 
                  className="bg-[#00C9FF] text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                  aria-label="Subscribe"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ELEVATE Fitness. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
