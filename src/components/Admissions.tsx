import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Admissions: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="admissions" ref={ref} className="relative pt-4 pb-12 lg:pt-6 lg:pb-20 bg-orange-50 overflow-hidden">
            <div className="relative section-container max-w-[1100px] mx-auto z-10 px-4 sm:px-6">
                {/* The "Card" Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative bg-neutral-900 rounded-[2.5rem] py-16 px-6 sm:px-12 md:py-20 md:px-20 text-center overflow-hidden shadow-2xl shadow-neutral-900/10"
                >
                    {/* Ambient Animated Background Orbs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 rounded-[100%] blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-0 right-[-10%] w-[400px] h-[300px] bg-amber-600/10 rounded-[100%] blur-[80px] pointer-events-none" />

                    {/* Badge */}
                    <motion.div variants={itemVariants} className="relative z-10 inline-block mb-6">
                        <span className="px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(234,88,12,0.15)]">
                            Admissions 2026
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2 
                        variants={itemVariants}
                        className="relative z-10 font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Join the Next Generation <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ea580c] drop-shadow-sm">
                            of Engineers
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p 
                        variants={itemVariants}
                        className="relative z-10 text-white/70 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Admissions through AP EAPCET (Category-A) and management quota
                        (Category-B) following APSCHE guidelines. B.Tech programs across
                        7 engineering disciplines.
                    </motion.p>

                    {/* Interactive Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(234, 88, 12, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            href="https://www.srit.ac.in/admission-procedure/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-[#ea580c] text-white text-xs md:text-sm font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-3 transition-all duration-300 group shadow-lg"
                        >
                            Apply Now
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            href="https://www.srit.ac.in/courses-offered/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                        >
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                            Download Brochure
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Admissions;
