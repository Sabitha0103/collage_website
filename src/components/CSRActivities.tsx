import React from 'react';
import { motion } from 'framer-motion';

const csrImages = [
    { src: '/saro1.jpeg', title: 'Community Outreach', description: 'Empowering local communities through education and support.' },
    { src: '/saro2.jpeg', title: 'Environmental Initiatives', description: 'Commitment to a greener campus and sustainable practices.' },
    { src: '/saro3.jpeg', title: 'Social Responsibility', description: 'Fostering a culture of giving back and social awareness.' },
    { src: '/saro4.jpeg', title: 'Health & Wellness', description: 'Promoting well-being and health awareness in our surroundings.' },
];

const CSRActivities: React.FC = () => {
    return (
        <section id="csr" className="section-y-lg bg-neutral-50 overflow-hidden">
            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="label-caps text-primary tracking-[0.25em] mb-4"
                    >
                        Beyond Academia
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="heading-lg text-neutral-dark mb-6"
                    >
                        CSR Activities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        At SRIT, we believe in holistic development and social impact. Our CSR initiatives are designed to create a meaningful difference in society.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {csrImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl bg-white"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transform transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {image.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CSRActivities;
