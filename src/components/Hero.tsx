import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Creative Developer", "Tech Explorer", "Future Data Scientist"];

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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-cyber">
      <div className="text-center z-10 px-4">
        {/* Main name with neon glow */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-neon-cyan glow-cyber animate-float">
          Nischal Prasad Kafle
        </h1>
        
        {/* Animated role text */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center">
          <span className="text-neon-magenta typing-cursor">
            {roles[currentRole]}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about transforming data into insights and building innovative solutions 
          that shape the future of technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan hover-glow-cyan transition-all duration-300 rounded-lg font-semibold"
          >
            Explore My Work
          </button>
          <button className="px-8 py-3 bg-accent text-accent-foreground glow-green hover-glow-green transition-all duration-300 rounded-lg font-semibold">
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-neon-cyan" size={32} />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
    </section>
  );
};

export default Hero;