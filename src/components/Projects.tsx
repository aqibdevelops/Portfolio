import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Skill Yatra website',
        description: 'A platform connecting skills with opportunities, featuring a clean modern interface.',
        image: '/login-form.png',
        link: '#'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-100 tracking-wide">Projects</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">Selected works and experiments</p>
            </motion.div>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="group relative bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="aspect-video w-full overflow-hidden bg-white/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                            <a
                                href={project.link}
                                className="inline-flex items-center text-sm font-medium text-white hover:text-gray-300 transition-colors"
                            >
                                View Project <span className="ml-2">→</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
