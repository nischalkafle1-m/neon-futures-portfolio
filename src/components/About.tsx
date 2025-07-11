
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neon-cyan glow-cyan mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full glow-cyan"></div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Hi, I'm <span className="text-neon-magenta font-semibold">Nischal Kafle</span>, 
                an aspiring data scientist with a passion for uncovering insights from data and 
                building innovative solutions that make a difference.
              </p>
              
              <p className="text-muted-foreground">
                Currently diving deep into the world of data science, I'm learning Python, 
                statistics, machine learning, and data visualization. My goal is to become 
                proficient in transforming raw data into actionable insights that can drive 
                meaningful decisions.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not coding or analyzing data, you'll find me exploring the latest 
                tech trends, working on creative projects, or planning my next learning adventure. 
                I believe in the power of continuous learning and the exciting possibilities 
                that emerge when technology meets creativity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-neon-cyan/30">
                <div className="text-2xl font-bold text-neon-cyan mb-1">2025</div>
                <div className="text-sm text-muted-foreground">Started Journey</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-neon-magenta/30">
                <div className="text-2xl font-bold text-neon-magenta mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Skills Learning</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-accent/30 md:col-span-1 col-span-2">
                <div className="text-2xl font-bold text-accent mb-1">∞</div>
                <div className="text-sm text-muted-foreground">Curiosity Level</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-cyan/50 glow-cyan">
                <img 
                  src={profilePhoto} 
                  alt="Nischal Kafle"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-neon-magenta/30 scale-110 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-125 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
