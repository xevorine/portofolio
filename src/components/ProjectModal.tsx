import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="w-full max-w-2xl bg-soft-panel border border-border-warm rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
      >
        {/* Glow ambient background inside modal */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-main/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-fresh/5 rounded-full filter blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-warm/50 relative z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-accent-main">{project.number}</span>
            <span className="text-text-muted text-xs">/</span>
            <span className="text-xs uppercase tracking-widest text-text-secondary font-ui">{project.category}</span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-border-warm hover:border-accent-main/40 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer active:scale-95"
            title="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto relative z-10 scrollbar-thin">
          {/* Title */}
          <h3 className="text-3xl md:text-4xl text-text-primary font-display font-light">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-ui">
            {project.description}
          </p>

          <hr className="border-border-warm/50" />

          {/* Challenge & Solution editorial section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-ui text-accent-cool font-bold">
                Tantangan / Challenge
              </h4>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-ui">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-ui text-accent-fresh font-bold">
                Solusi / Solution
              </h4>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-ui">
                {project.solution}
              </p>
            </div>
          </div>

          <hr className="border-border-warm/50" />

          {/* Tech stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-ui text-text-muted mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-ui rounded bg-elevated-panel/50 border border-border-warm text-text-secondary select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer (Action) */}
        <div className="p-6 border-t border-border-warm/50 flex justify-end bg-sec-bg/50 relative z-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-accent-main hover:bg-accent-soft text-main-bg font-ui font-medium text-xs md:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent-main/10 flex items-center gap-1.5 cursor-pointer active:scale-98"
          >
            Visit Repository
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
