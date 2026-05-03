import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResearchLabs: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="research-labs" ref={ref} className="section-y-lg bg-warm-50 relative overflow-hidden">
            {/* Base Background without AI watermark */}
            <div className="absolute inset-0 bg-neutral-50/50" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-4">
                        Industry & Research
                    </p>
                    <h2 className="font-serif text-3xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                        Centers of Excellence
                    </h2>
                    <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
                        Our advanced research centers, established in collaboration with global industry leaders, provide students with hands-on experience in cutting-edge technologies.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Hardcoding Dassault and similar high-end labs for prestige */}
                    {[
                        {
                            name: 'Dassault Systèmes 3DEXPERIENCE Center',
                            desc: 'State-of-the-art facility for product design, simulation, and manufacturing in collaboration with Dassault.',
                            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            partner: 'Dassault Systèmes'
                        },
                        {
                            name: 'AI & Deep Learning Hub',
                            desc: 'Advanced supercomputing infrastructure dedicated to artificial intelligence, neural networks, and computer vision.',
                            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            partner: 'APSSDC'
                        },
                        {
                            name: 'IoT & Smart Sensors Lab',
                            desc: 'Prototyping facility for Industrial Internet of Things, embedded systems, and sensor networks.',
                            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            partner: 'Texas Instruments'
                        },
                        {
                            name: 'Advanced Robotics Workspace',
                            desc: 'Dedicated center for autonomous systems, robotic arms, and mechatronics engineering.',
                            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            partner: 'Leading Industry Ties'
                        }
                    ].map((lab, i) => (
                        <motion.div
                            key={lab.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-white border border-neutral-100/50 rounded-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500"
                        >
                            <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                                <img
                                    src={lab.image}
                                    alt={lab.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:hidden" />
                            </div>
                            <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 font-bold text-[10px] tracking-widest uppercase rounded-sm mb-3">
                                        Partner: {lab.partner}
                                    </span>
                                    <h3 className="font-serif text-xl font-bold text-neutral-900 leading-tight mb-2">
                                        {lab.name}
                                    </h3>
                                    <p className="text-neutral-500 text-[13px] leading-relaxed">
                                        {lab.desc}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-neutral-100">
                                    <span className="inline-flex items-center text-primary text-[12px] font-bold tracking-widest uppercase group-hover:text-orange-600 transition-colors">
                                        Explore Facility <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchLabs;
