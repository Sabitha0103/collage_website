import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const accreditations = [
    { title: 'NAAC A+', subtitle: 'Accredited' },
    { title: 'UGC', subtitle: 'Autonomous Status' },
    { title: 'NBA', subtitle: 'Accredited Programs' }
];

const Accreditations: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} className="bg-white border-b border-neutral-100 py-10 lg:py-12">
            <div className="section-container">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <p className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                        Recognized For Excellence
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 divide-x divide-neutral-100/0 lg:divide-neutral-100">
                    {accreditations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <h3 className="font-serif text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight mb-1">
                                {item.title}
                            </h3>
                            <p className="text-[11px] font-medium tracking-[0.1em] text-neutral-500 uppercase">
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
