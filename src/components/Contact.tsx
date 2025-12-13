import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState('none');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        // Check for package in URL params on mount
        const params = new URLSearchParams(window.location.search);
        const packageParam = params.get('package');
        if (packageParam) {
            setSelectedPackage(packageParam);
            // Wait for layout to be ready then scroll
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const subject = `Portfolio Contact: ${formData.name} - ${selectedPackage} Package`;
        const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Package: ${selectedPackage}

Message:
${formData.message}`;

        window.location.href = `mailto:aquibalam.13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-100 tracking-wide">Contact Me</h2>
                <p className="text-gray-400 text-xl font-light">Let's build something together</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl bg-[#1e1e1e] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone number <span className="text-gray-500">(optional)</span></label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-300">Select Package</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['Basic', 'Standard', 'Enterprise'].map((pkg) => (
                                <label
                                    key={pkg}
                                    className={`
                    flex items-center justify-center px-4 py-2 rounded-xl border cursor-pointer transition-all duration-200
                    ${selectedPackage === pkg.toLowerCase()
                                            ? 'bg-white text-black border-white'
                                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'}
                  `}
                                >
                                    <input
                                        type="radio"
                                        name="package"
                                        value={pkg.toLowerCase()}
                                        checked={selectedPackage === pkg.toLowerCase()}
                                        onChange={(e) => setSelectedPackage(e.target.value)}
                                        className="hidden"
                                    />
                                    <span className="font-medium">{pkg}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-gray-200 text-black font-semibold text-center hover:bg-white transition-colors uppercase tracking-wide mt-8"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
