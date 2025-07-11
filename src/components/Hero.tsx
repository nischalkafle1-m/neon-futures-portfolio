
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Future Data Scientist", "Tech Explorer", "Creative Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse" style={{ top: '20%', animationDuration: '3s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30 animate-pulse" style={{ top: '60%', animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 animate-pulse" style={{ top: '80%', animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="text-center z-10 px-4 relative">
        {/* Holographic effect container */}
        <div className="relative mb-8">
          {/* Main name with enhanced effects */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 relative">
            <span className="text-neon-cyan glow-cyber animate-pulse">
              Nischal Kafle
            </span>
            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 text-neon-cyan/30 blur-sm transform scale-y-[-1] translate-y-full opacity-30">
              Nischal Kafle
            </div>
          </h1>
          
          {/* Surrounding glow rings */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        
        {/* Enhanced animated role text */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center relative">
          <div className="relative px-8 py-3 border border-neon-magenta/30 rounded-lg bg-card/20 backdrop-blur-sm">
            <span className="text-neon-magenta typing-cursor font-mono">
              {roles[currentRole]}
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed relative">
          <span className="relative z-10">
            Passionate about transforming data into insights and building innovative solutions 
            that shape the future of technology.
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg"></div>
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="group relative px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan hover-glow-cyan transition-all duration-300 rounded-lg font-semibold overflow-hidden"
          >
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="group relative px-8 py-3 bg-accent/20 border-2 border-accent text-accent glow-green hover-glow-green transition-all duration-300 rounded-lg font-semibold overflow-hidden">
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs text-muted-foreground mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <ChevronDown className="text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
