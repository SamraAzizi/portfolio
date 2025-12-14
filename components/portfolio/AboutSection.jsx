import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Lightbulb, Rocket } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: Compass, label: 'Self-Directed Learning' },
    { icon: Target, label: 'Analytical Mindset' },
    { icon: Lightbulb, label: 'Creative Problem-Solving' },
    { icon: Rocket, label: 'Engineering Foundation' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#2e8b57]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#2e8b57]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#2e8b57] bg-[#2e8b57]/10 rounded-full border border-[#2e8b57]/20 mb-6">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f8f9fa] mb-8">
              The Path{' '}
              <span className="bg-gradient-to-r from-[#2e8b57] to-[#4ade80] bg-clip-text text-transparent">
                Ahead
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#b0b7c3]/80 leading-relaxed">
              <p>
                I am a self-motivated student preparing for a university career in engineering. 
                My portfolio represents a proactive journey into software development, undertaken 
                independently without formal guidance.
              </p>
              <p>
                Each project is a self-assigned problem, blending my rigorous academic mindset 
                in math and physics with the creative logic of programming.
              </p>
              <p>
                I am not just learning to code; I am <span className="text-[#2e8b57] font-medium">engineering a foundation</span>. 
                I approach development with an analytical lens, breaking down complex ideas—whether 
                a peer-learning platform or a physics simulation—into structured, functional systems.
              </p>
              <p>
                My goal is to enter engineering school with a practical, builder's perspective, 
                ready to contribute to innovative projects and collaborative teams.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2e8b57]/20 to-[#0a2a1d]/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-[#111]/90 to-[#0a0a0a]/90 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="group flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#2e8b57]/30 hover:bg-[#2e8b57]/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#2e8b57]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-[#2e8b57]" />
                      </div>
                      <span className="text-sm font-medium text-[#b0b7c3] group-hover:text-[#f8f9fa] transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative p-6 rounded-xl bg-gradient-to-r from-[#2e8b57]/10 to-transparent border-l-4 border-[#2e8b57]">
                  <p className="text-[#f8f9fa]/90 italic">
                    "Not just learning to code—engineering a foundation for the future."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 -right-8 w-24 h-24 border border-[#2e8b57]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#2e8b57]/10 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}