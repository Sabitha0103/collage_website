import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const accreditations = [
    { title: 'NAAC A', subtitle: 'Accredited', logo: '/naac.jpg' },
    { title: 'UGC', subtitle: 'Autonomous Status' },
    { title: 'NBA', subtitle: 'Accredited Programs', logo: '/nba.jpg' }
];

const Accreditations: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} className="bg-white border-b border-neutral-100 py-16 lg:py-20">
            <div className="section-container">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                        Recognized For Excellence
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-100/0 md:divide-neutral-100">
                    {accreditations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0"
                        >
                            {item.logo && (
                                <motion.img
                                    src={item.logo}
                                    alt={item.title}
                                    className="h-28 md:h-36 mb-6 object-contain drop-shadow-lg"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                    whileHover={{ scale: 1.15, rotate: [-3, 3, -3, 0] }}
                                />
                            )}
                            {!item.logo && (
                                <div className="h-28 md:h-36 mb-6 flex items-center justify-center">
                                    <span className="text-5xl font-black text-neutral-200">{item.title}</span>
                                </div>
                            )}
                            <h3 className="font-serif text-3xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-3">
                                {item.title}
                            </h3>
                            <p className="text-xs lg:text-sm font-bold tracking-[0.15em] text-neutral-500 uppercase">
                                {item.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accreditations;
