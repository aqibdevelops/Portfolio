import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-white py-12 px-8 w-full">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex space-x-8 mb-8">
                    <a
                        href="https://github.com/aqibdevelops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aqib-alam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://x.com/aqibdevelops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="https://instagram.com/aqibnai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <Instagram size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Aqib Alam. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
