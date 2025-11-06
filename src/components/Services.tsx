import { Code, Smartphone, Lightbulb, Wrench, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    },
    {
      icon: Lightbulb,
      title: "AI Solutions",
      description: "Intelligent systems powered by machine learning and artificial intelligence.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics tools.",
    },
    {
      icon: Wrench,
      title: "AutoTech Integration",
      description: "IoT, diagnostics, and automation solutions for automotive technologies.",
    },
    {
      icon: Shield,
      title: "Tech Education",
      description: "Comprehensive training programs in web development, AI, and emerging technologies.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl bg-card"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
