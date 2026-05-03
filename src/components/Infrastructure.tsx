import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { infrastructureData } from '../data/infrastructure';

const Infrastructure: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="infrastructure" ref={ref} className="section-y-lg bg-neutral-dark text-white pt-24 pb-32">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-primary" />

            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="label-caps text-white/30 tracking-[0.25em] mb-5">
                        Campus Facilities
                    </p>
                    <h2 className="heading-lg text-white">
                        World-Class Infrastructure
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {infrastructureData.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group relative h-[300px] lg:h-[380px] overflow-hidden rounded-lg cursor-pointer ${item.span || ''}`}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500">
                                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-white mb-2">
                                    {item.name}
                                </h3>
                                {/* Short line accent */}
                                <div className="w-10 h-1 bg-primary mb-3" />
                                <p className="text-white/70 text-[14px] leading-relaxed max-w-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
