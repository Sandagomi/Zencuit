import { ExternalLink, Building2, Car, Coffee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      icon: Building2,
      name: "Blue Dreams Constructions",
      category: "Web Development",
      description: "A comprehensive construction management platform featuring project tracking, client portals, Service Requests and real-time collaboration tools.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node Js"],
      status: "Live",
      color: "text-blue-500",
      link: "https://bluedreamgroups.com", // Add your actual domain here
    },
    {
      icon: Car,
      name: "Zencuit Auto",
      category: "AI & AutoTech",
      description: "AI-driven web application for vehicle buying, selling, modifications, and analytics. Features intelligent recommendations and market insights.",
      technologies: ["AI/ML", "React", "Node.js", "IoT Integration"],
      status: "In Development",
      color: "text-accent",
      link: "#", // Add domain when available
    },
     {
      icon: Coffee,
      name: "The Templers Cafe",
      category: "Reastaurants & Cafes",
      description: "Calm and cozy cafe experience website for the Templers Cafe, integrating AI for personalized customer service and smart ordering systems.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node Js"],
      status: "Live",
      color: "text-accent",
      link: "https://www.thetemplerscafe.com", // Add domain when available
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions we're building for our clients and partners
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-6xl mx-auto px-4 sm:px-0"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <div className="p-1">
                  <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl group overflow-hidden h-full">
                    <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-6 sm:pb-8">
                      <div className="flex items-start justify-between gap-2">
                        <div className={`${project.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <project.icon size={40} className="sm:w-12 sm:h-12" strokeWidth={1.5} />
                        </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 ${
                          project.status === "Live" 
                            ? "bg-green-500/20 text-green-500" 
                            : "bg-accent/20 text-accent"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl mt-4">{project.name}</CardTitle>
                      <CardDescription className="text-sm sm:text-base font-medium">
                        {project.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 sm:pt-6">
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{project.description}</p>
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                              style={{ color: "white" }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-primary"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
