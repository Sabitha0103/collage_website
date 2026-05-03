import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const themes = [
    {
        title: 'Artificial Intelligence',
        description: 'Machine learning, neural networks, NLP, and intelligent automation systems for next-generation computing.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        index: '01',
    },
    {
        title: 'Smart Infrastructure',
        description: 'IoT-enabled systems, sustainable engineering, and intelligent campus solutions.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        index: '02',
    },
    {
        title: 'Advanced Electronics',
        description: 'VLSI design, embedded systems, signal processing, and communication technologies.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        index: '03',
    },
];

const Research: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section
            id="research"
            ref={ref}
            className="section-y-lg"
            style={{
                backgroundColor: '#FFD29D',
                backgroundImage: 'url(/srit.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Research Focus
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Areas of Excellence
                    </h2>
                </motion.div>

                {/* Asymmetric grid: hero card + 2 stacked */}
                <div className="grid lg:grid-cols-2 gap-5">
                    {/* Hero card — spans full left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="group relative h-[400px] lg:h-full lg:min-h-[480px] overflow-hidden rounded-lg cursor-pointer"
                    >
                        <img
                            src={themes[0].image}
                            alt={themes[0].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

                        {/* Index number */}
                        <span className="absolute top-6 right-6 font-serif text-6xl font-bold text-white/8">
                            {themes[0].index}
                        </span>

                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                            <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                                {themes[0].title}
                            </h3>
                            <p className="text-white/50 text-[14px] leading-relaxed max-w-md">
                                {themes[0].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right column — 2 stacked cards */}
                    <div className="grid gap-5">
                        {themes.slice(1).map((theme, i) => (
                            <motion.div
                                key={theme.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: (i + 1) * 0.12 }}
                                className="group relative h-[230px] overflow-hidden rounded-lg cursor-pointer"
                            >
                                <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                                {/* Index number */}
                                <span className="absolute top-5 right-5 font-serif text-4xl font-bold text-white/8">
                                    {theme.index}
                                </span>

                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <h3 className="font-serif text-lg font-semibold text-white mb-1.5">
                                        {theme.title}
                                    </h3>
                                    <p className="text-white/45 text-[13px] leading-relaxed">
                                        {theme.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
