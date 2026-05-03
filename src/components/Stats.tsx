import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '10k+', label: 'Global Alumni' },
    { value: '150+', label: 'Expert Faculty' },
    { value: '50+', label: 'Advanced Labs' },
    { value: '100+', label: 'Top Recruiters' },
];

const Stats: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="bg-neutral-dark relative">
            {/* Top accent line */}
            <div className="h-[2px] bg-primary/30" />

            <div className="py-20 lg:py-28">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-0">
                        {stats.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`text-center ${i > 0 ? 'lg:border-l lg:border-white/8' : ''
                                    }`}
                            >
                                <div
                                    className="font-serif text-4xl lg:text-6xl xl:text-7xl font-bold text-primary tracking-tight"
                                    style={{ fontVariantNumeric: 'tabular-nums' }}
                                >
                                    {item.value}
                                </div>
                                <div className="label-caps text-white/30 mt-4 tracking-[0.2em]">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
