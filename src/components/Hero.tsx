import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 animate-fade-in leading-tight px-4">
            Crafting AI-Enhanced
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mt-4 pb-2">
              Digital Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
            Empowering innovation through technology. We build intelligent web and mobile applications that transform businesses and communities.
          </p>
          <p className="text-base sm:text-lg text-accent font-semibold mb-10">
            DESIGNED FOR PURPOSE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-[var(--shadow-glow)]"
              onClick={() => scrollToSection("#services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-white hover:bg-accent/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
