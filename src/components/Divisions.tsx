import { GraduationCap, Brain, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Divisions = () => {
  const divisions = [
    {
      icon: GraduationCap,
      name: "Zencuit Knowledge",
      tagline: "Learn. Build. Create.",
      vision: "To be the region's most trusted hub for tech education, where every student gains the skills to build the future.",
      mission: "To offer accessible, up-to-date, project-oriented training in web development, AI, and emerging tech; to nurture learners into creators through mentorship, real-world projects, and a supportive community.",
      color: "text-accent",
    },
    {
      icon: Brain,
      name: "Zencuit AI & Labs",
      tagline: "Intelligence Meets Innovation",
      vision: "To drive intelligent innovation that solves real problems using AI, data and design.",
      mission: "To build robust AI tools, partner with organizations to deliver custom solutions, and push the boundaries of what's possible through experimentation and research.",
      color: "text-secondary",
    },
    {
      icon: Car,
      name: "Zencuit AutoTech",
      tagline: "Modernizing Mobility",
      vision: "To modernize mobility through smart, sustainable, and connected vehicle technologies.",
      mission: "To enhance automotive and bike technologies by integrating IoT, diagnostics, automation, and software solutions that improve performance, safety and user experience.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Divisions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three specialized arms working together to drive innovation, education, and technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {divisions.map((division, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader>
                <div className={`${division.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <division.icon size={48} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-2xl mb-2">{division.name}</CardTitle>
                <CardDescription className="text-accent font-semibold text-base">
                  {division.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                  <p className="text-sm text-muted-foreground">{division.vision}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                  <p className="text-sm text-muted-foreground">{division.mission}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
