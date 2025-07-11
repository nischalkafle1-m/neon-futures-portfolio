const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-neon-cyan/30 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground">
            Crafted with{" "}
            <span className="text-neon-cyan">💙</span>{" "}
            by{" "}
            <span className="text-neon-magenta font-semibold glow-magenta">
              Nischal
            </span>{" "}
            in 2025
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#home" className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;