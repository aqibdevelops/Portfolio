import React from 'react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Basic',
        price: '$79',
        description: 'Build a custom single page web app',
        features: ['3 revisions'],
        buttonText: 'Contact me',
        link: '?package=basic#contact'
    },
    {
        name: 'STANDARD',
        price: '$199',
        description: 'Custom web app with less than 7 pages',
        features: ['5 revisions'],
        buttonText: 'Contact me',
        link: '?package=standard#contact'
    },
    {
        name: 'ENTERPRISE',
        price: "Let's talk",
        description: 'All things custom. Full backend integration. AI integration options.',
        features: ['Contact for quote'],
        buttonText: 'Contact me',
        link: '?package=enterprise#contact'
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="min-h-screen flex flex-col justify-center items-center py-20 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-100 tracking-wide">Pricing</h2>
                <p className="text-gray-400 text-xl font-light">Flexible plans for your needs</p>
            </motion.div>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex flex-col bg-white/5 rounded-3xl p-8 shadow-xl shadow-black/20 hover:bg-white/10 transition-colors duration-300 relative group"
                    >
                        <h3 className="text-2xl font-normal text-white mb-4 uppercase tracking-wide">{plan.name}</h3>
                        <div className="text-5xl font-bold text-white mb-6">{plan.price}</div>

                        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                            {plan.description}
                        </p>

                        <div className="flex-grow">
                            {plan.features.map((feature, idx) => (
                                <p key={idx} className="text-gray-300 mb-2">{feature}</p>
                            ))}
                        </div>

                        <a
                            href={plan.link}
                            className="w-full mt-8 py-3 rounded-full bg-gray-200 text-black font-semibold text-center hover:bg-white transition-colors uppercase tracking-wide"
                        >
                            {plan.buttonText}
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
