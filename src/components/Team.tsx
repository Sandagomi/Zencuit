import founderImage from "@/assets/founder.png";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by vision, guided by purpose
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-border hover:border-accent transition-all duration-300 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={founderImage}
                  alt="Founder"
                  className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
              <div>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Founder's Note</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                </div>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                    At Zencuit, we believe that technology should empower, educate, and elevate. Our mission goes beyond building applications. we're building futures.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Through our three specialized divisions, we're committed to fostering innovation, nurturing talent, and delivering solutions that make a real difference in people's lives and businesses.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Every project we undertake is designed with purpose, crafted with care, and delivered with excellence. Join us on this journey of transformation.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <p className="text-foreground font-bold text-lg sm:text-xl">Leadership Team</p>
                  <p className="text-accent font-semibold text-base">Zencuit Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
