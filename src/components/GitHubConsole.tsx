import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const roles = [
  "Informatics Student",
  "Web Developer",
  "AI Automation Explorer",
  "Database Design Enthusiast",
  "Machine Learning Learner"
];

const asciiArt = `
  ██╗  ██╗███████╗██╗   ██╗
  ╚██╗██╔╝██╔════╝██║   ██║
   ╚███╔╝ █████╗  ██║   ██║
   ██╔██╗ ██╔══╝  ╚██╗ ██╔╝
  ██╔╝ ██╗███████╗ ╚████╔╝ 
  ╚═╝  ╚═╝╚══════╝  ╚═══╝  
`;

export const GitHubConsole: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const activeRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 35); // Typing speed during delete
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.slice(0, currentText.length + 1));
      }, 70); // Typing speed
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before backspacing
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const skills = [
    "Laravel", "PHP", "MySQL", "n8n", "WAHA", "Gemini", 
    "Python", "TensorFlow", "CNN", "SQL", "Tailwind CSS"
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/xevorine", icon: <Github size={14} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bivan-pramudyto-a176ba245/", icon: <Linkedin size={14} /> },
    { label: "Portfolio", href: "https://xevorine.github.io/portofolio", icon: <Globe size={14} /> },
    { label: "Email", href: "mailto:bivanpramudyto17@gmail.com", icon: <Mail size={14} /> }
  ];

  return (
    <section id="github-console" className="py-24 px-4 md:px-8 bg-main-bg relative overflow-hidden">
      {/* Self-contained styling for specialized animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline-sweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(350px); }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes border-glow-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-scanline {
          animation: scanline-sweep 6s linear infinite;
        }
        .animate-blink {
          animation: blink-cursor 1s step-end infinite;
        }
        .animate-border-shimmer {
          background-size: 200% 200%;
          animation: border-glow-shimmer 8s linear infinite;
        }
      `}} />

      {/* Decorative subtle ambient lights */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent-main/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-accent-fresh/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Identity & Terminal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            Console Profile
          </h2>
        </AnimatedSection>

        {/* Terminal Window Card */}
        <AnimatedSection delay={0.1}>
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-border-warm via-accent-main/20 to-border-warm animate-border-shimmer shadow-2xl shadow-black/60 overflow-hidden group">
            {/* The Inner Window Box */}
            <div className="bg-soft-panel/90 backdrop-blur-md rounded-2xl relative overflow-hidden z-10 flex flex-col">
              
              {/* Scanline Effect sweep */}
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-accent-main/[0.04] via-transparent to-transparent pointer-events-none z-10 animate-scanline select-none" style={{ height: '150px' }} />

              {/* Terminal Window Header (macOS style) */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-border-warm/60 bg-elevated-panel/40 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono bg-main-bg/60 px-3 py-1 rounded-md border border-border-warm/40">
                  <Terminal size={12} className="text-accent-main" />
                  <span>xevorine@github:~</span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-accent-fresh font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh animate-pulse" />
                  <span className="hidden sm:inline opacity-80 uppercase tracking-widest text-[9px]">Live Connection</span>
                </div>
              </div>

              {/* Terminal Contents */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Monogram and Mini Neofetch */}
                <div className="lg:col-span-5 flex flex-col space-y-5">
                  
                  {/* ASCII Preform Box */}
                  <div className="relative p-5 rounded-xl border border-border-warm/60 bg-elevated-panel/30 backdrop-blur-xs font-mono text-[9px] sm:text-xs leading-none text-accent-main select-none overflow-hidden group w-full flex justify-center items-center py-6 shadow-inner shadow-black/20">
                    {/* Background Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(47,54,50,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(47,54,50,0.12)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                    
                    <pre className="relative z-10 whitespace-pre font-mono filter drop-shadow-[0_0_6px_rgba(214,168,95,0.15)] select-none">
                      {asciiArt}
                    </pre>
                  </div>

                  {/* Neofetch Stats Info */}
                  <div className="w-full font-mono text-[11px] sm:text-xs space-y-2 border border-border-warm/40 bg-elevated-panel/20 p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center pb-2 mb-2 border-b border-border-warm/40">
                      <span className="text-text-primary font-semibold">xevorine@github</span>
                      <span className="text-[10px] text-accent-fresh flex items-center gap-1">
                        online
                      </span>
                    </div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">OS:</span><span className="text-text-secondary truncate">GitHub Profile Banner</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">Host:</span><span className="text-text-secondary truncate">xevorine.github.io</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">Kernel:</span><span className="text-text-secondary truncate">React & Tailwind v4</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">Uptime:</span><span className="text-text-secondary truncate">24/7 (Always Up)</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">Shell:</span><span className="text-text-secondary truncate">zsh (TypeScript)</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">IDE:</span><span className="text-text-secondary truncate">VS Code</span></div>
                    <div className="flex items-center"><span className="text-accent-main w-14 font-semibold shrink-0">CPU:</span><span className="text-text-secondary truncate">Gemini AI / Automation</span></div>
                  </div>
                </div>

                {/* Right Side: Identity Details & Actions */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  
                  {/* Greeting Block */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent-fresh/20 bg-accent-fresh/5 text-accent-fresh text-[10px] font-mono mb-3 uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-accent-fresh" />
                      GITHUB PROFILE
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-1">
                      Hi 👋 I'm <span className="text-accent-main font-semibold">Bivan Pramudyto</span>
                    </h3>

                    {/* Typing role line */}
                    <div className="h-6 flex items-center font-mono text-sm md:text-base text-accent-soft mb-6">
                      <span className="text-text-muted mr-1.5">$</span>
                      <span>{currentText}</span>
                      <span className="w-2 h-4 bg-accent-soft ml-1 animate-blink inline-block" />
                    </div>

                    {/* Config list values */}
                    <div className="font-mono text-xs md:text-sm space-y-2.5 mb-6 border-l border-border-warm/60 pl-4 py-1">
                      <div>
                        <span className="text-text-muted">location</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <span className="text-accent-fresh">"Indonesia"</span>
                      </div>
                      <div>
                        <span className="text-text-muted">education</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <span className="text-accent-fresh">"Informatics Student"</span>
                      </div>
                      <div>
                        <span className="text-text-muted">focus</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <span className="text-accent-fresh">["web systems", "AI automation", "ML", "database design"]</span>
                      </div>
                      <div>
                        <span className="text-text-muted">portfolio</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <a 
                          href="https://xevorine.github.io/portofolio" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-accent-cool hover:text-accent-cool/80 transition-colors inline-flex items-center gap-1"
                        >
                          "xevorine.github.io/portofolio" <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                      <div>
                        <span className="text-text-muted">github</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <a 
                          href="https://github.com/xevorine" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-accent-cool hover:text-accent-cool/80 transition-colors inline-flex items-center gap-1"
                        >
                          "github.com/xevorine" <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                      <div>
                        <span className="text-text-muted">email</span>
                        <span className="text-text-secondary mx-2">=</span>
                        <a 
                          href="mailto:bivanpramudyto17@gmail.com" 
                          className="text-accent-cool hover:text-accent-cool/80 transition-colors inline-flex items-center gap-1"
                        >
                          "bivanpramudyto17@gmail.com" <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2.5">
                        Core Stack & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="tag-shimmer px-2.5 py-1 text-[11px] font-mono rounded-lg border border-border-warm bg-elevated-panel/40 text-text-secondary hover:text-accent-main hover:border-accent-main/30 hover:-translate-y-0.5 cursor-default select-none shadow-sm transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="border-t border-border-warm/50 pt-5 mt-2">
                    <div className="flex flex-wrap gap-2.5">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs rounded-lg border border-border-warm bg-elevated-panel/30 text-text-secondary hover:text-accent-main hover:border-accent-main/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                        >
                          {link.icon}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
