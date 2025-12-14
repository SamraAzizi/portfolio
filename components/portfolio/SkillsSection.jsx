import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, GraduationCap, MessageCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Development & Tools',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Web Development Frameworks'],
  },
  {
    title: 'Academic & Analytical Core',
    icon: GraduationCap,
    skills: ['Advanced Mathematics', 'Physics', 'Problem-Solving', 'Logical Reasoning'],
  },
  {
    title: 'Languages & Communication',
    icon: MessageCircle,
    skills: ['Fluent in Multiple Languages', 'Technical Writing', 'Creative Writing', 'Communication'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2e8b57]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#2e8b57]/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#2e8b57] bg-[#2e8b57]/10 rounded-full border border-[#2e8b57]/20 mb-6">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f9fa] mb-6">
            Toolkit &{' '}
            <span className="bg-gradient-to-r from-[#2e8b57] to-[#4ade80] bg-clip-text text-transparent">
              Disciplines
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2e8b57]/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-[#111]/80 to-[#0a0a0a]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm group-hover:border-[#2e8b57]/20 transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2e8b57]/20 to-[#0a2a1d]/20 flex items-center justify-center border border-[#2e8b57]/10 group-hover:border-[#2e8b57]/30 transition-all duration-300 relative"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ 
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.6, ease: "easeInOut" }
                    }}
                  >
                    {/* Icon Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-[#2e8b57]/40 blur-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-7 h-7 text-[#2e8b57] relative z-10" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#f8f9fa] group-hover:text-[#2e8b57] transition-colors duration-300">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -4,
                        rotate: [0, -2, 2, 0],
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-4 py-2 text-sm font-medium text-[#b0b7c3] bg-white/5 border border-white/10 rounded-full hover:border-[#2e8b57]/40 hover:text-[#2e8b57] hover:bg-[#2e8b57]/10 hover:shadow-lg hover:shadow-[#2e8b57]/20 transition-all duration-300 cursor-default group/skill"
                    >
                      {/* Subtle Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2e8b57]/30 to-[#4ade80]/30 blur-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Shimmer Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                      </motion.div>
                      
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}