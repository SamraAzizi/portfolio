import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Introduction to modern AI Course',
    issuer: 'Lyan Bloomer Cisco Networking',
    date: 'March 25, 2025',
    image: '/certificates/ai.png',
    link: null,
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Lyan Bloomer Cisco Networking',
    date: 'March 25, 2025',
    image: '/certificates/cyber.png',
    link: null,
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Lyan Bloomer Cisco Networking',
    date: 'March 25, 2025',
    image: '/certificates/Cyberr.png',
    link: null,
  },
  {
    title: 'How To Use ChatGPT',
    issuer: 'codeacademy',
    date: 'December 3, 2024',
    image: '/certificates/chat.png',
    link: null,
  },
  {
    title: 'Introduction to Artificail Inteligence',
    issuer: 'Founderz',
    date: 'December 06, 2024',
    image: '/certificates/artificial.png',
    link: null,
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'laura quintana Cisco Networking Academy',
    date: 'December 27, 2024',
    image: '/certificates/hardware.png',
    link: null,
  },
  {
    title: 'English for IT1',
    issuer: 'laura quintana Cisco Networking Academy',
    date: 'December 12, 2024',
    image: '/certificates/IT1.png',
    link: null,
  },
  {
    title: 'English for IT2',
    issuer: 'laura quintana Cisco Networking Academy',
    date: 'December 21, 2024',
    image: '/certificates/IT2.png',
    link: null,
  },
  {
    title: 'Fundementals of LLMs',
    issuer: 'Huggingface instructor',
    date: 'August 26, 2025',
    image: '/certificates/LLM.png',
    link: null,
  },
  // Add more certificates here
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2e8b57]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#2e8b57]/15 rounded-full blur-[100px]" />
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
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f9fa] mb-6">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-[#2e8b57] to-[#4ade80] bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#b0b7c3]/70">
            Recognition of continuous learning and professional development
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2e8b57]/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-[#111]/90 to-[#0a0a0a]/90 border border-white/10 rounded-2xl overflow-hidden group-hover:border-[#2e8b57]/30 transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent flex items-center justify-center"
                  >
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#2e8b57] hover:bg-[#4ade80] text-[#f8f9fa] rounded-full flex items-center gap-2 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2e8b57]/10 flex items-center justify-center border border-[#2e8b57]/20 flex-shrink-0">
                      <Award className="w-5 h-5 text-[#2e8b57]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#f8f9fa] mb-1 group-hover:text-[#2e8b57] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-[#b0b7c3]/70">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#2e8b57] bg-[#2e8b57]/10 px-3 py-1 rounded-full border border-[#2e8b57]/20">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Message */}
        {certificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Award className="w-16 h-16 text-[#2e8b57]/40 mx-auto mb-4" />
            <p className="text-lg text-[#b0b7c3]/60">
              Add your certificates by editing the certificates array in CertificatesSection.jsx
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}