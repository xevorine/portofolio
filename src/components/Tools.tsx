import React from 'react';
import { toolGroups } from '../data/tools';
import { AnimatedSection } from './AnimatedSection';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-24 px-4 md:px-8 bg-sec-bg relative">
      <div className="w-full max-w-4xl mx-auto">

        {/* Title */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Stack & Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            Tools I Use
          </h2>
        </AnimatedSection>

        {/* Grouped Clusters — Styled as workspace code cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {toolGroups.map((group, groupIdx) => {
            const getGroupFilename = (category: string) => {
              if (category === 'Web') return 'stack/web_dev.json';
              if (category === 'Automation') return 'stack/automation.yml';
              if (category === 'Machine Learning') return 'stack/ml_models.py';
              if (category === 'Database') return 'stack/relational_db.sql';
              return `stack/${category.toLowerCase()}.json`;
            };

            const filename = getGroupFilename(group.category);
            const ext = filename.split('.').pop() || 'json';
            const extColor = ext === 'py' ? 'text-[#FF2D20]' : ext === 'sql' ? 'text-accent-main' : ext === 'yml' ? 'text-accent-fresh' : 'text-accent-cool';

            return (
              <div key={group.category} className="flex flex-col">
                {/* Mini file tab */}
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-text-secondary bg-elevated-panel/40 px-2.5 py-0.5 rounded-t-md border-t border-x border-border-warm/60 w-fit select-none ml-2">
                  <span className={`font-bold text-[8px] ${extColor}`}>{ext.toUpperCase()}</span>
                  <span>{filename.split('/').pop()}</span>
                </div>
                
                <AnimatedSection
                  delay={groupIdx * 0.08}
                  className="p-5 rounded-xl border border-border-warm bg-soft-panel/20 backdrop-blur-xs flex-1"
                >
                  {/* Category Header */}
                  <h3 className="text-xs uppercase tracking-widest font-mono text-text-muted mb-4 pb-2 border-b border-border-warm/40 flex justify-between items-center select-none">
                    <span className="text-[10px] text-text-muted/60">{filename}</span>
                    <span className="text-[9px] text-text-muted opacity-50">Cluster {groupIdx + 1}</span>
                  </h3>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="tag-shimmer px-3 py-1.5 text-xs font-mono rounded-lg border border-border-warm bg-elevated-panel/40 text-text-secondary hover:text-accent-main hover:border-accent-main/30 hover:-translate-y-0.5 cursor-default select-none shadow-sm transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>

        {/* Console Terminal Prompt Footer */}
        <AnimatedSection className="mt-16 border-t border-border-warm/40 pt-8 flex justify-center w-full">
          <div className="w-full max-w-lg font-mono text-xs text-center border border-border-warm bg-elevated-panel/30 p-4 rounded-xl shadow-inner select-none relative overflow-hidden">
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(47,54,50,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(47,54,50,0.04)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            <div className="relative z-10 flex items-center justify-center gap-1.5 text-text-secondary">
              <span className="text-accent-fresh font-bold">$</span>
              <span>npm info bivan-stack --status</span>
              <span className="w-1.5 h-3 bg-accent-fresh ml-0.5 animate-pulse inline-block" />
            </div>
            <div className="relative z-10 text-[10px] text-accent-fresh/80 mt-1">
              "Bivan's systems development workspace loaded successfully."
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
