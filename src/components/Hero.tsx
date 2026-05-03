import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
            {/* Background image with Ken Burns */}
            <div className="absolute inset-0">
                <img
                    src="/srit1.jpg"
                    alt="SRIT campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content — left-aligned, cleared below navbar */}
            <div className="relative z-10 section-container w-full pt-24 md:pt-32 pb-16 md:pb-24">
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="label-caps text-primary-light tracking-[0.25em] mb-6"
                    >
                        Anantapur, Andhra Pradesh
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="display-heading text-white mb-8"
                    >
                        Srinivasa Ramanujan
                        <br />
                        Institute of Technology
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
                    >
                        A center of excellence in <span className="text-primary italic">engineering</span> education, nurturing
                        industry-ready engineers since 2007.
                    </motion.p>

                    {/* Decorative divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="w-16 h-px bg-white/20 mb-8 origin-left"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#about"
                            className="px-8 py-3.5 bg-primary text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-primary-dark transition-colors duration-300"
                        >
                            Explore Programs
                        </a>
                        <a
                            href="#admissions"
                            className="px-8 py-3.5 border border-white/20 text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-primary/20 hover:border-primary transition-all duration-300"
                        >
                            Apply Now
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom credential strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm border-t border-white/8"
            >
                <div className="section-container py-3.5 flex items-center justify-between lg:justify-center gap-6 lg:gap-14 flex-wrap">
                    {['Affiliated to JNTUA', 'Approved by AICTE', 'Estd. 2007', 'NAAC Accredited'].map((item, i) => (
                        <span key={item} className="flex items-center gap-7 text-white/30 text-[10px] font-medium tracking-[0.2em] uppercase">
                            {i > 0 && <span className="hidden lg:block w-px h-3 bg-white/10 -ml-4" />}
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
