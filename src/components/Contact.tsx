import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/nischal-kafle",
      color: "cyan"
    },
    {
      icon: Github,
      name: "GitHub", 
      href: "https://github.com/nischalkafle",
      color: "magenta"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:nischal.kafle@email.com",
      color: "green"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nepal"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 XXX-XXXX-XXX"
    },
    {
      icon: Mail,
      label: "Email",
      value: "nischal.kafle@email.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-green glow-green mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full glow-green"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate or discuss exciting opportunities? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-neon-cyan mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-neon-cyan/30 rounded-lg focus:border-neon-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-neon-cyan/30 rounded-lg focus:border-neon-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-neon-cyan/30 rounded-lg focus:border-neon-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-neon-cyan/30 rounded-lg focus:border-neon-cyan focus:outline-none focus:glow-cyan transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground glow-green hover-glow-green transition-all duration-300 rounded-lg font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neon-magenta mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-neon-magenta/30 hover-glow-magenta transition-all duration-300">
                    <info.icon className="text-neon-magenta" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-neon-cyan mb-6">Follow Me</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-card/50 rounded-lg border transition-all duration-300 group ${
                      social.color === 'cyan' ? 'border-neon-cyan/30 hover-glow-cyan' :
                      social.color === 'magenta' ? 'border-neon-magenta/30 hover-glow-magenta' :
                      'border-neon-green/30 hover-glow-green'
                    }`}
                  >
                    <social.icon 
                      className={`group-hover:scale-110 transition-transform duration-300 ${
                        social.color === 'cyan' ? 'text-neon-cyan' :
                        social.color === 'magenta' ? 'text-neon-magenta' :
                        'text-neon-green'
                      }`} 
                      size={24} 
                    />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="p-6 bg-gradient-primary rounded-lg border border-neon-green/30 glow-green">
              <h4 className="text-xl font-semibold text-neon-green mb-4">Ready to Hire?</h4>
              <p className="text-muted-foreground mb-4">
                Download my CV to learn more about my experience and skills.
              </p>
              <button className="w-full px-6 py-3 bg-accent text-accent-foreground glow-green hover-glow-green transition-all duration-300 rounded-lg font-semibold">
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;