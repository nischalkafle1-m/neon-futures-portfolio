import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-magenta glow-magenta mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-neon-cyan glow-cyan hover:glow-cyber transition-all duration-500">
                <img 
                  src={profilePhoto} 
                  alt="Nischal Prasad Kafle"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full glow-green animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full glow-magenta animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to my digital realm! I'm <span className="text-neon-cyan font-semibold">Nischal Prasad Kafle</span>, 
              a passionate student embarking on an exciting journey into the world of data science and technology.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently diving deep into the fascinating intersection of data, artificial intelligence, and web development. 
              I believe in the power of technology to solve real-world problems and create meaningful impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not analyzing datasets or building applications, you'll find me exploring the latest tech trends, 
              contributing to open-source projects, and constantly learning new skills to stay at the forefront of innovation.
            </p>

            {/* Personal stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-neon-cyan/30 hover-glow-cyan transition-all duration-300">
                <div className="text-2xl font-bold text-neon-cyan">50+</div>
                <div className="text-sm text-muted-foreground">Hours of Learning</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-neon-magenta/30 hover-glow-magenta transition-all duration-300">
                <div className="text-2xl font-bold text-neon-magenta">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;