import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Quote } from 'lucide-react';


export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2e8b57]/50 transition-all duration-300 group"
                >
                  <X className="w-6 h-6 text-[#b0b7c3] group-hover:text-[#f8f9fa]" />
                </button>

                {/* Header Section */}
                <div className="relative p-8 lg:p-12 border-b border-white/5">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e8b57]/20 rounded-full blur-[150px]" />
                  
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#2e8b57]/10 border border-[#2e8b57]/20">
                      <span className="text-sm font-medium text-[#2e8b57]">{project.role}</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#f8f9fa] mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-xl text-[#b0b7c3]/80 leading-relaxed mb-6">
                      {project.fullDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm font-medium text-[#2e8b57] bg-[#2e8b57]/10 border border-[#2e8b57]/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 space-y-12">
                  {/* Screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-[#f8f9fa] mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-gradient-to-b from-[#2e8b57] to-[#4ade80] rounded-full" />
                        Project Preview
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#2e8b57]/30 transition-all duration-300"
                          >
                            <img
                              src={screenshot}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  {(project.liveDemo || project.githubRepo) && (
                    <div className="flex flex-wrap gap-4">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2e8b57] to-[#4ade80] rounded-full text-[#f8f9fa] font-medium hover:shadow-lg hover:shadow-[#2e8b57]/50 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          View Live Demo
                        </a>
                      )}
                      {project.githubRepo && (
                        <a
                          href={project.githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[#f8f9fa] font-medium hover:bg-white/10 hover:border-[#2e8b57]/30 transition-all duration-300"
                        >
                          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          View Source Code
                        </a>
                      )}
                    </div>
                  )}

                  {/* Challenges & Solutions */}
                  {project.challenges && project.challenges.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-[#f8f9fa] mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-gradient-to-b from-[#2e8b57] to-[#4ade80] rounded-full" />
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-6">
                        {project.challenges.map((challenge, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#2e8b57]/30 transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2e8b57]/20 flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-[#2e8b57]" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-[#f8f9fa] mb-2">
                                  {challenge.challenge}
                                </h4>
                                <p className="text-[#b0b7c3]/70 mb-4">
                                  {challenge.description}
                                </p>
                                <div className="flex items-start gap-3 p-4 bg-[#2e8b57]/10 border border-[#2e8b57]/20 rounded-lg">
                                  <CheckCircle2 className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                                  <p className="text-sm text-[#b0b7c3]">
                                    <span className="font-medium text-[#2e8b57]">Solution:</span>{' '}
                                    {challenge.solution}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonials */}
                  {project.testimonials && project.testimonials.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-[#f8f9fa] mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-gradient-to-b from-[#2e8b57] to-[#4ade80] rounded-full" />
                        Feedback & Impact
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.testimonials.map((testimonial, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-[#2e8b57]/30 transition-all duration-300"
                          >
                            <Quote className="w-8 h-8 text-[#2e8b57]/30 mb-4" />
                            <p className="text-[#b0b7c3]/80 italic mb-6 leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2e8b57] to-[#4ade80] flex items-center justify-center text-[#f8f9fa] font-semibold">
                                {testimonial.author[0]}
                              </div>
                              <div>
                                <p className="font-medium text-[#f8f9fa]">{testimonial.author}</p>
                                <p className="text-sm text-[#b0b7c3]/60">{testimonial.role}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div className="p-6 bg-gradient-to-r from-[#2e8b57]/10 to-transparent border-l-4 border-[#2e8b57] rounded-lg">
                    <h4 className="text-lg font-semibold text-[#f8f9fa] mb-2">Key Outcome</h4>
                    <p className="text-[#b0b7c3]/80 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}