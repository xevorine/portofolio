import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-main-bg relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-accent-soft/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto">
        
        {/* Title */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            About
          </h2>
        </AnimatedSection>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Narrative Paragraph in IDE Gutter */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.1}>
              {/* File tab header */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary bg-elevated-panel/40 px-3 py-1 rounded-t-md border-t border-x border-border-warm/60 w-fit select-none">
                <span className="text-[#FFCC1F] font-bold text-[8px] select-none">MD</span>
                <span>philosophy.md</span>
              </div>
              
              {/* Code Editor body box */}
              <div className="p-6 rounded-r-xl rounded-b-xl border border-border-warm/80 bg-soft-panel/20 backdrop-blur-xs flex gap-4 font-mono text-xs md:text-sm">
                {/* Line Numbers Gutter */}
                <div className="text-text-muted/30 select-none text-right pr-3 border-r border-border-warm/40 flex flex-col font-medium space-y-[1.12rem] md:space-y-[1.38rem] pt-0.5 select-none shrink-0">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span>06</span>
                </div>
                
                {/* Main Text Content */}
                <div className="flex-1 font-ui text-text-secondary space-y-5">
                  <p className="text-base md:text-lg leading-relaxed">
                    I like building projects that connect technical ideas with practical use cases. My work usually starts from a real problem: moderating a WhatsApp group, helping a business record transactions, comparing ML models, or designing structured database systems.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-text-muted">
                    Rather than chasing abstract engineering trends, I focus on building tools that solve immediate challenges. I believe software should be approachable, predictable, and clean, bridging functional database design with friendly user interfaces.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Focus Side Notes (YAML Format) */}
          <div className="lg:col-span-4 lg:pl-6">
            <AnimatedSection delay={0.2}>
              <div className="border-l border-border-warm/60 pl-6 space-y-6 py-2 font-mono text-xs">
                
                <div>
                  <div className="text-accent-main font-semibold mb-1 flex items-center gap-1 select-none">
                    <span>web_systems:</span>
                  </div>
                  <div className="pl-4 border-l border-border-warm/30 space-y-1">
                    <div className="text-[9px] text-text-muted"><span className="text-accent-soft/75">focus:</span> "APIs & transaction flows"</div>
                    <p className="text-[11px] text-text-secondary leading-normal font-ui">
                      Creating secure transaction flows, clean APIs, and dashboard systems for small business needs.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-accent-fresh font-semibold mb-1 flex items-center gap-1 select-none">
                    <span>ai_automation:</span>
                  </div>
                  <div className="pl-4 border-l border-border-warm/30 space-y-1">
                    <div className="text-[9px] text-text-muted"><span className="text-accent-soft/75">focus:</span> "n8n, WAHA, & Gemini"</div>
                    <p className="text-[11px] text-text-secondary leading-normal font-ui">
                      Integrating chat agents, moderation layers, and n8n schedules to skip manual admin work.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-accent-soft font-semibold mb-1 flex items-center gap-1 select-none">
                    <span>data_structures:</span>
                  </div>
                  <div className="pl-4 border-l border-border-warm/30 space-y-1">
                    <div className="text-[9px] text-text-muted"><span className="text-accent-soft/75">focus:</span> "ERD & MySQL tables"</div>
                    <p className="text-[11px] text-text-secondary leading-normal font-ui">
                      Drafting clean, normalized SQL tables and ERDs to keep database operations fast and logical.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-accent-cool font-semibold mb-1 flex items-center gap-1 select-none">
                    <span>ui_design:</span>
                  </div>
                  <div className="pl-4 border-l border-border-warm/30 space-y-1">
                    <div className="text-[9px] text-text-muted"><span className="text-accent-soft/75">focus:</span> "Uncluttered interfaces"</div>
                    <p className="text-[11px] text-text-secondary leading-normal font-ui">
                      Crafting uncluttered, responsive interfaces with clear hierarchies and smooth feedback.
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
