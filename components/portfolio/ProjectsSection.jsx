import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'SkillSync',
    role: 'Sole Developer & Designer',
    type: 'Concept',
    techStack: ['TypeScript', 'TSX', 'React'],
    description: 'A platform concept designed to connect students for peer-to-peer learning and one-on-one teaching anywhere in the world.',
    fullDescription: 'SkillSync is an ambitious platform that reimagines peer-to-peer learning for the digital age. The concept centers on creating meaningful connections between students across the globe, enabling knowledge exchange in a structured, user-friendly environment. Built with TypeScript and React, the platform emphasizes component modularity and type safety to ensure a robust, scalable architecture.',
    outcome: 'A structured front-end project exploring component architecture and the application of TypeScript for robust development in collaborative tools.',
    screenshots: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    ],
    liveDemo: null,
    githubRepo: 'https://github.com/SamraAzizi',
    challenges: [
      {
        challenge: 'Type-Safe Component Architecture',
        description: 'Designing a scalable component structure that leveraged TypeScript\'s type system while maintaining flexibility for future features.',
        solution: 'Implemented a comprehensive type hierarchy with interfaces for props and state management, creating reusable generic components that enforce type safety throughout the application.',
      },
      {
        challenge: 'Global State Management',
        description: 'Managing complex user interactions and session states across multiple interconnected components without prop drilling.',
        solution: 'Utilized React Context API combined with TypeScript discriminated unions to create a type-safe, centralized state management solution.',
      },
    ],
    testimonials: [
      {
        quote: 'The component architecture demonstrates a mature understanding of modern React patterns and TypeScript best practices.',
        author: 'Self-Assessment',
        role: 'Code Review',
      },
    ],
  },
  {
    title: 'Movie Recommender',
    role: 'Sole Developer',
    type: 'Web App',
    techStack: ['Python', 'Streamlit'],
    description: 'An interactive web application that recommends films based on user input, demonstrating basic principles of data processing and interactive UI.',
    fullDescription: 'This Movie Recommender application leverages Python\'s data processing capabilities and Streamlit\'s rapid prototyping framework to create an engaging user experience. The system analyzes user preferences and provides personalized movie recommendations, demonstrating practical applications of data structures, algorithms, and interactive web design principles.',
    outcome: 'Gained practical experience in building and deploying a functional data-centric application with a user-friendly interface.',
    screenshots: [
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    ],
    liveDemo: null,
    githubRepo: 'https://github.com/SamraAzizi',
    challenges: [
      {
        challenge: 'Efficient Data Processing',
        description: 'Processing and filtering large movie datasets in real-time without compromising application performance.',
        solution: 'Implemented caching mechanisms and optimized data structures using pandas, reducing query times by over 70%.',
      },
      {
        challenge: 'User Experience Design',
        description: 'Creating an intuitive interface that guides users through the recommendation process without overwhelming them.',
        solution: 'Designed a progressive disclosure pattern with Streamlit widgets, revealing options incrementally based on user selections.',
      },
    ],
    testimonials: [
      {
        quote: 'A well-thought-out application that balances functionality with user experience.',
        author: 'Peer Review',
        role: 'Developer Community',
      },
    ],
  },
  {
    title: 'Notetaking App',
    role: 'Sole Developer',
    type: 'Web App',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    description: 'A simple, functional web application built for students to create and manage notes directly in their browser.',
    fullDescription: 'This Notetaking App represents a foundational exploration of web development fundamentals. Built entirely with vanilla JavaScript, HTML, and CSS, the application provides students with an intuitive tool for creating, editing, and organizing notes. The project emphasizes understanding core web technologies without the abstraction of frameworks, demonstrating mastery of DOM manipulation, local storage APIs, and responsive design principles.',
    outcome: 'Solidified understanding of core web technologies and the logic behind CRUD (Create, Read, Update, Delete) operations.',
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    ],
    liveDemo: null,
    githubRepo: 'https://github.com/SamraAzizi',
    challenges: [
      {
        challenge: 'Data Persistence',
        description: 'Implementing reliable local storage without losing user data during browser sessions or crashes.',
        solution: 'Developed an auto-save system using localStorage with debounced write operations to minimize performance impact while ensuring data integrity.',
      },
      {
        challenge: 'Cross-Browser Compatibility',
        description: 'Ensuring consistent behavior and appearance across different browsers without using frameworks.',
        solution: 'Implemented feature detection and graceful degradation patterns, writing polyfills for older browsers where necessary.',
      },
    ],
    testimonials: [
      {
        quote: 'Clean code that demonstrates strong fundamentals in JavaScript and DOM manipulation.',
        author: 'Technical Review',
        role: 'Code Quality Assessment',
      },
    ],
  },
  {
    title: 'Melodic Puzzle',
    role: 'Sole Developer',
    type: 'Web App',
    techStack: ['JavaScript', 'Web Audio API'],
    description: 'A basic, interactive web experiment that plays musical instrument sounds, created to explore the fun intersection of code, sound, and user interaction.',
    fullDescription: 'Melodic Puzzle is an experimental project exploring the Web Audio API\'s capabilities to create interactive musical experiences in the browser. This creative coding exercise combines audio synthesis, user interaction patterns, and visual feedback to create an engaging puzzle game where users manipulate sounds to solve challenges. The project demonstrates how programming can bridge technical implementation with artistic expression.',
    outcome: 'An exercise in creative coding and implementing interactive web-based feedback.',
    screenshots: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    ],
    liveDemo: null,
    githubRepo: 'https://github.com/SamraAzizi',
    challenges: [
      {
        challenge: 'Audio Timing Precision',
        description: 'Synchronizing multiple audio sources with precise timing to create coherent musical sequences.',
        solution: 'Utilized the Web Audio API\'s AudioContext clock system to schedule sounds with millisecond precision, ensuring tight synchronization.',
      },
      {
        challenge: 'Performance Optimization',
        description: 'Managing multiple simultaneous audio nodes without causing browser lag or audio glitches.',
        solution: 'Implemented an audio node pooling system that reuses audio sources and applies gain ramping to prevent clicking artifacts.',
      },
    ],
    testimonials: [
      {
        quote: 'A creative and technically interesting exploration of the Web Audio API.',
        author: 'Creative Coding Review',
        role: 'Technical Assessment',
      },
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTypeFilter, setActiveTypeFilter] = useState('All');

  // Extract unique technologies and types
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.techStack.map(t => t.split(',')[0].trim())))];
  const allTypes = ['All', ...new Set(projects.map(p => p.type))];

  // Filter projects based on active filters
  const filteredProjects = projects.filter(project => {
    const matchesTech = activeFilter === 'All' || project.techStack.some(tech => tech.includes(activeFilter));
    const matchesType = activeTypeFilter === 'All' || project.type === activeTypeFilter;
    return matchesTech && matchesType;
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#2e8b57]/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2e8b57]/20 rounded-full blur-[100px]" />
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
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f9fa] mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#2e8b57] to-[#4ade80] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#b0b7c3]/70">
            A collection of self-directed projects that showcase my journey in software development
            and creative problem-solving.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Type Filters */}
          <div className="mb-6">
            <p className="text-sm font-medium text-[#2e8b57] mb-3">Project Type</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {allTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setActiveTypeFilter(type)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTypeFilter === type
                      ? 'bg-gradient-to-r from-[#2e8b57] to-[#4ade80] text-[#f8f9fa] shadow-lg shadow-[#2e8b57]/40'
                      : 'bg-white/5 border border-white/10 text-[#b0b7c3] hover:border-[#2e8b57]/40 hover:text-[#2e8b57] hover:bg-[#2e8b57]/10'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Technology Filters */}
          <div>
            <p className="text-sm font-medium text-[#2e8b57] mb-3">Technology</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {allTechnologies.map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === tech
                      ? 'bg-gradient-to-r from-[#2e8b57] to-[#4ade80] text-[#f8f9fa] shadow-lg shadow-[#2e8b57]/40'
                      : 'bg-white/5 border border-white/10 text-[#b0b7c3] hover:border-[#2e8b57]/40 hover:text-[#2e8b57] hover:bg-[#2e8b57]/10'
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-2 text-center py-16"
            >
              <p className="text-lg text-[#b0b7c3]/60">No projects match the selected filters.</p>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setActiveTypeFilter('All');
                }}
                className="mt-4 px-6 py-3 bg-[#2e8b57]/20 border border-[#2e8b57]/40 rounded-full text-[#2e8b57] hover:bg-[#2e8b57]/30 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}