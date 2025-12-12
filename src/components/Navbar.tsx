import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const links = ['About', 'Skills', 'Projects', 'Pricing', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
        >
            <div className="flex justify-between items-center w-full max-w-7xl px-8">
                <div className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                    @aqibdevelops
                </div>
                <div className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
