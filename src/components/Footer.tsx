import { Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/zencuit-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <img src={logo} alt="Zencuit Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              <span className="text-xl sm:text-2xl font-bold">ZENCUIT</span>
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 max-w-md">
              Crafting AI-enhanced web and mobile applications. Designed for purpose, built for excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/zencuit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/zencuit_group/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCmAW3U5euTDZRQSxEI8Ry-g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#home" className="text-sm sm:text-base text-white/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm sm:text-base text-white/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm sm:text-base text-white/80 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm sm:text-base text-white/80 hover:text-accent transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Our Divisions</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-sm sm:text-base text-white/80">Zencuit Knowledge</li>
              <li className="text-sm sm:text-base text-white/80">Zencuit AI & Labs</li>
              <li className="text-sm sm:text-base text-white/80">Zencuit AutoTech</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-white/80">
            &copy; {currentYear} Zencuit Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
