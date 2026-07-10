import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';
import { Project, projects } from '../data/projects';

const WORDS = [
  { text: 'WhatsApp Bot', x: '12%', y: '15%', delay: 0.1, duration: 5.5, colorClass: 'border-accent-fresh/30 text-accent-fresh bg-elevated-panel cursor-pointer hover:border-accent-fresh/70', projectId: 'whatsapp-bot' },
  { text: 'Web Chatbot', x: '48%', y: '22%', delay: 0.3, duration: 6.2, colorClass: 'border-border-warm bg-soft-panel text-text-secondary cursor-pointer hover:border-accent-main/50', projectId: 'website-chatbot' },
  { text: 'Hate Speech NLP', x: '15%', y: '45%', delay: 0.5, duration: 5.8, colorClass: 'border-accent-cool/30 text-accent-cool bg-elevated-panel cursor-pointer hover:border-accent-cool/70', projectId: 'hate-speech-detection' },
  { text: 'Tournament DB', x: '52%', y: '50%', delay: 0.2, duration: 6.8, colorClass: 'border-border-warm bg-soft-panel text-text-secondary cursor-pointer hover:border-accent-main/50', projectId: 'tournament-manager' },
  { text: 'MySQL', x: '72%', y: '75%', delay: 0.4, duration: 6.5, colorClass: 'border-border-warm bg-soft-panel text-text-secondary cursor-grab active:cursor-grabbing' },
  { text: 'n8n', x: '75%', y: '38%', delay: 0.7, duration: 5.9, colorClass: 'border-accent-main/30 text-accent-main bg-elevated-panel cursor-grab active:cursor-grabbing', projectId: 'whatsapp-bot' }, // n8n relates to whatsapp bot too
  { text: 'Gemini', x: '45%', y: '70%', delay: 0.8, duration: 6.4, colorClass: 'border-border-warm bg-soft-panel text-text-secondary cursor-grab active:cursor-grabbing' },
];

const titleWords = ['Building', 'practical', 'systems', 'with'];

export const Hero: React.FC<{ onSelectProject: (project: Project) => void }> = ({ onSelectProject }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-main-bg"
    >
      {/* Ambient Blobs — pure CSS animation, no JS per-frame */}
      <div className="ambient-glow w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent-main/20 left-1/3 top-1/4 animate-blob-drift-1" />
      <div className="ambient-glow w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-accent-fresh/15 right-10 bottom-1/4 animate-blob-drift-2" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Label */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Portfolio / 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6 font-display max-w-2xl flex flex-wrap gap-x-[0.22em] gap-y-[0.05em]">
            {titleWords.map((word, i) => (
              <span
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.06}s`,
                }}
                className="inline-block"
              >
                {word}
              </span>
            ))}
            <span
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + titleWords.length * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + titleWords.length * 0.06}s`,
              }}
              className="inline-block text-accent-main"
            >
              web,
            </span>
            <span
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 1) * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 1) * 0.06}s`,
              }}
              className="inline-block text-accent-soft"
            >
              automation,
            </span>
            <span
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 2) * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 2) * 0.06}s`,
              }}
              className="inline-block text-text-primary"
            >
              data,
            </span>
            <span
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 3) * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 3) * 0.06}s`,
              }}
              className="inline-block text-text-primary"
            >
              and
            </span>
            <span
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 4) * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (titleWords.length + 4) * 0.06}s`,
              }}
              className="inline-block text-accent-fresh"
            >
              AI.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-10 font-ui"
          >
            I’m an Informatics student who builds real-world projects — from WhatsApp moderation bots and cashier systems to machine learning experiments and database design.
          </p>

          {/* Buttons */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            }}
            className="flex flex-wrap items-center gap-4 font-ui"
          >
            <Magnetic>
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-accent-main text-main-bg font-medium text-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent-main/10"
              >
                Explore Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://github.com/xevorine"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border-warm bg-sec-bg/50 hover:bg-soft-panel hover:text-accent-main text-text-secondary text-sm transition-all duration-300"
              >
                GitHub
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Column: Floating Labels — Interactive Dragging and Hovering */}
        <div className="lg:col-span-5 h-[350px] md:h-[450px] relative w-full rounded-2xl border border-border-warm bg-sec-bg/25 backdrop-blur-[1px] overflow-hidden shadow-inner shadow-white/5">
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,-50 C 150,150 50,250 450,450" fill="none" stroke="var(--color-text-muted)" strokeWidth="0.75" strokeDasharray="4 4" />
            <path d="M -10,120 C 150,180 300,100 500,280" fill="none" stroke="var(--color-border-warm)" strokeWidth="1" />
            <circle cx="150" cy="180" r="3" fill="var(--color-accent-fresh)" opacity="0.5" />
            <circle cx="300" cy="100" r="2" fill="var(--color-accent-main)" opacity="0.5" />
          </svg>

          {WORDS.map((word) => (
            <motion.div
              key={word.text}
              style={{
                left: word.x,
                top: word.y,
                position: 'absolute',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 5, 0],
                x: [0, 8, -5, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: word.delay },
                scale: { duration: 1, delay: word.delay },
                y: { duration: word.duration, repeat: Infinity, ease: "easeInOut", delay: word.delay },
                x: { duration: word.duration + 1.5, repeat: Infinity, ease: "easeInOut", delay: word.delay }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              dragElastic={0.45}
              onClick={() => {
                if (word.projectId) {
                  const proj = projects.find(p => p.id === word.projectId);
                  if (proj) onSelectProject(proj);
                }
              }}
              className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-ui backdrop-blur-sm select-none shadow-md shadow-black/10 transition-colors duration-300 cursor-grab active:cursor-grabbing ${word.colorClass}`}
            >
              {word.text}
            </motion.div>
          ))}

          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-main-bg/85 border border-border-warm text-[10px] text-text-muted font-ui pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
            Click project / Drag to interact
          </div>
        </div>

      </div>
    </section>
  );
};
