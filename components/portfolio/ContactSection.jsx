import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'samarraazizi@gmail.com',
    href: 'mailto:samarraazizi@gmail.com',
    icon: Mail,
    color: 'from-[#2e8b57] to-[#4ade80]',
  },
  {
    name: 'GitHub',
    value: 'github.com/SamraAzizi',
    href: 'https://github.com/SamraAzizi',
    icon: Github,
    color: 'from-[#333] to-[#666]',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/samraazizi',
    href: 'https://linkedin.com/in/samraazizi',
    icon: Linkedin,
    color: 'from-[#0077b5] to-[#00a0dc]',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2e8b57]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#2e8b57] bg-[#2e8b57]/10 rounded-full border border-[#2e8b57]/20 mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f9fa] mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#2e8b57] to-[#4ade80] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#b0b7c3]/70">
            I am actively seeking opportunities to contribute to innovative projects, 
            collaborate with peers, and begin my formal engineering education. 
            Feel free to reach out for project discussions or potential collaborations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative block"
            >
              {/* Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-[#111]/90 to-[#0a0a0a]/90 border border-white/5 rounded-2xl p-6 backdrop-blur-sm group-hover:border-[#2e8b57]/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20 flex items-center justify-center`}>
                    <link.icon className="w-6 h-6 text-[#f8f9fa]" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#b0b7c3] group-hover:text-[#2e8b57] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-lg font-semibold text-[#f8f9fa] mb-1">{link.name}</h3>
                <p className="text-sm text-[#b0b7c3]/70 group-hover:text-[#2e8b57] transition-colors duration-300">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="mailto:samraazizi@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2e8b57] to-[#0a2a1d] rounded-full text-[#f8f9fa] font-medium text-lg overflow-hidden"
          >
            <span className="relative z-10">Send me an email</span>
            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-[#2e8b57] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-[#2e8b57]/50 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-[#b0b7c3]/40">
            © 2023 Samra Azizi. Built with independent curiosity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}