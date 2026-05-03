import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LeadershipVision: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 bg-[#f8f7f4] relative overflow-hidden">
            <div className="section-container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                            Visionary Leadership
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                            Guiding <span className="text-primary">The Future</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Fanned Cards Showcase */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 md:-space-x-12 lg:-space-x-20">
                    
                    {/* Chairman Card (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50, rotate: -20 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: -12 } : {}}
                        whileHover={{ 
                            rotate: 0, 
                            scale: 1.05, 
                            zIndex: 40,
                            y: -20
                        }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer group z-10"
                    >
                        <img
                            src="/sambasir.jpg"
                            alt="Sri. A. Sambasiva Reddy"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">
                                Sri. A. Sambasiva Reddy
                            </h3>
                            <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase mb-4">
                                FOUNDER & CHAIRMAN
                            </p>
                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-gray-200 italic text-[15px] leading-relaxed border-l-4 border-[#ea580c] pl-4">
                                    "To provide value-based technical education and mold students into ethically strong and technologically competent professionals."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mrs. Padmavathi Card (Middle) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                        whileHover={{ 
                            scale: 1.05, 
                            zIndex: 40,
                            y: -20
                        }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 }}
                        className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer group z-20 md:mt-8"
                    >
                        <img
                            src="/padmavathi.jpg"
                            alt="Mrs. Padmavathi"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">
                                Mrs. Padmavathi
                            </h3>
                            <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase mb-4">
                                DIRECTOR
                            </p>
                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-gray-200 italic text-[15px] leading-relaxed border-l-4 border-[#ea580c] pl-4">
                                    "Committed to nurturing holistic development and driving excellence across academics and administration."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Principal Card (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 50, rotate: 20 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 12 } : {}}
                        whileHover={{ 
                            rotate: 0, 
                            scale: 1.05, 
                            zIndex: 40,
                            y: -20
                        }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
                        className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer group z-30 md:mt-16"
                    >
                        <img
                            src="/principal.jpg"
                            alt="Dr.Balakrishna"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">
                                Dr.Balakrishna
                            </h3>
                            <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase mb-4">
                                PRINCIPAL
                            </p>
                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <p className="text-gray-200 italic text-[15px] leading-relaxed border-l-4 border-[#ea580c] pl-4">
                                    "Our mission is to foster innovation and academic excellence, empowering students to become global leaders."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipVision;
