import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-8 max-w-7xl mx-auto w-full gap-12 pt-32 md:pt-0">
            {/* Test Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex-1 max-w-lg"
            >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-100 mb-6">
                    Building digital experiences feature<br />
                    that merge form and function.
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    I'm Aqib, a web developer<br />
                    turning complex problems into<br />
                    clean, elegant code.
                </p>
            </motion.div>

            {/* Browser Graphic */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex-1 w-full max-w-xl"
            >
                <div className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/5 overflow-hidden">
                    {/* Browser Header */}
                    <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        {/* Tab */}
                        <div className="bg-[#1e1e1e] rounded flex-1 py-1 px-4 text-xs text-gray-400 flex items-center justify-between border-b border-transparent">
                            <span>Untitled Tab</span>
                            <span className="opacity-50 hover:opacity-100 cursor-pointer">×</span>
                        </div>
                    </div>

                    {/* Address Bar Area */}
                    <div className="bg-[#1e1e1e] px-4 py-2 border-b border-white/5 flex items-center gap-4">
                        <div className="flex gap-4 text-gray-500">
                            <span>←</span>
                            <span>↻</span>
                        </div>
                        <div className="bg-[#2d2d2d] rounded-full h-7 flex-1" />
                        <div className="text-gray-500">⋮</div>
                    </div>

                    {/* Browser Content (Skeleton) */}
                    <div className="p-6 grid gap-6 bg-[#1a1a1a] h-[300px]">
                        {/* Header Skeleton */}
                        <div className="flex gap-4">
                            <div className="w-1/3 h-24 bg-[#2d2d2d] rounded-lg" />
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="h-4 bg-[#2d2d2d] rounded w-full" />
                                <div className="h-4 bg-[#2d2d2d] rounded w-2/3" />
                            </div>
                        </div>
                        {/* Main Content Skeleton */}
                        <div className="bg-[#2d2d2d] rounded-lg h-full" />

                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-20 bg-[#2d2d2d] rounded-lg" />
                            <div className="h-20 bg-[#2d2d2d] rounded-lg" />
                            <div className="h-20 bg-[#2d2d2d] rounded-lg" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
