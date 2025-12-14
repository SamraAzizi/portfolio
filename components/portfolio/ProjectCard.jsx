import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Layers, Eye } from 'lucide-react';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2e8b57]/60 to-[#4ade80]/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative bg-gradient-to-br from-[#111]/90 to-[#0a0a0a]/90 border border-white/5 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:border-[#2e8b57]/30 transition-all duration-500">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e8b57]/20 to-[#0a2a1d]/20 flex items-center justify-center border border-[#2e8b57]/10 group-hover:border-[#2e8b57]/30 transition-colors duration-300">
              <Layers className="w-6 h-6 text-[#2e8b57]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f8f9fa] group-hover:text-[#2e8b57] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-[#b0b7c3]/60">{project.role}</p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-lg bg-white/5 text-[#b0b7c3] hover:text-[#2e8b57] hover:bg-[#2e8b57]/10 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2e8b57] bg-[#2e8b57]/10 border border-[#2e8b57]/20 rounded-full"
            >
              <Code2 className="w-3 h-3" />
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#b0b7c3]/80 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Outcome */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-sm text-[#b0b7c3]/60 italic">
            <span className="text-[#2e8b57] font-medium not-italic">Outcome:</span>{' '}
            {project.outcome}
          </p>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2e8b57]/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />
        </div>

        {/* View Details Hint */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-[#2e8b57] font-medium">Click to view details →</span>
        </div>
      </div>
    </motion.div>
  );
}