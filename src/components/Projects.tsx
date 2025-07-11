import { ExternalLink, Github, Eye } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Data Analytics Dashboard",
      description: "A comprehensive dashboard for visualizing machine learning models and data insights with real-time analytics and predictive modeling capabilities.",
      image: project1,
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Responsive Portfolio Website",
      description: "Modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and mobile-first design.",
      image: project2,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 3,
      title: "Student Grade Predictor",
      description: "Machine learning model to predict student performance using various academic and demographic factors.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Jupyter"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Data Analyzer",
      description: "Data science project analyzing weather patterns and climate trends using historical meteorological data.",
      technologies: ["Python", "Pandas", "Seaborn", "Statistics"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-magenta glow-magenta mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full glow-magenta"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing my journey in data science and web development through practical projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-card/50 rounded-lg overflow-hidden border border-neon-cyan/30 hover-glow-cyan transition-all duration-500 hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full glow-green">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-neon-cyan text-neon-cyan hover-glow-cyan transition-all duration-300 rounded-lg text-sm font-medium"
                  >
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-neon-magenta text-neon-magenta hover-glow-magenta transition-all duration-300 rounded-lg text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary border border-neon-cyan text-neon-cyan hover-glow-cyber transition-all duration-300 rounded-lg font-semibold"
          >
            <ExternalLink size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;