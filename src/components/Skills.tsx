import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'Flask',
    'RestAPI', 'FlaskAPI', 'Django', 'SQL',
    'Figma', 'Adobe Illustrator'
];

const Skills: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 100
            }
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center items-center relative py-20 px-8"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-24 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-100 tracking-wide">Skills</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                    Technologies and tools I use to create digital experiences.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap justify-center gap-4 max-w-4xl"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        variants={itemVariants}
                        className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
