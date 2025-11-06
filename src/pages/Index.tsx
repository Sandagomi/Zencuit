import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Divisions />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
