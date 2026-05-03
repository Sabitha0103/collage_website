import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { studentAchievements } from '../data/achievements';

const StudentAchievements: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    
    // For drawing the timeline line dynamically on scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    
    // Applying spring to the scroll progress for a buttery smooth line-drawing effect
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section id="achievements" ref={sectionRef} className="section-y-lg bg-orange-50 relative overflow-hidden">
            {/* Subtle animated background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-orange-300/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#ea580c]/20 bg-[#ea580c]/10 text-[#ea580c] font-sans text-xs font-bold tracking-[0.25em] uppercase mb-6 shadow-sm">
                        Student Success
                    </span>
                    <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tighter leading-[1.1] mb-6">
                        Excellence Beyond the Classroom
                    </h2>
                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-medium">
                        Our students consistently demonstrate their technical prowess
                        and innovation in national hackathons, prestigious placements, research publications,
                        and entrepreneurial ventures.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative pl-6 sm:pl-0">
                    {/* Master Animated Timeline Line */}
                    <div className="absolute left-[36px] sm:left-[21px] top-6 bottom-10 w-[2px] bg-neutral-200 overflow-hidden rounded-full">
                        <motion.div 
                            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#ea580c] to-orange-400 origin-top"
                            style={{ scaleY }}
                        />
                    </div>

                    {studentAchievements.map((item, i) => (
                        <motion.div
                            key={item.id || item.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="group relative flex gap-8 lg:gap-10 pb-12 last:pb-0"
                        >
                            {/* Timeline Line Node */}
                            <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                                <motion.div 
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.2 + (i*0.1), duration: 0.5, type: "spring" }}
                                    className="w-11 h-11 rounded-full border-[3px] border-white shadow-[0_0_15px_rgba(234,88,12,0.25)] bg-white 
                                              group-hover:border-[#ea580c] transition-colors duration-400 flex items-center justify-center"
                                >
                                    <div className="w-3 h-3 bg-neutral-200 rounded-full group-hover:bg-[#ea580c] group-hover:scale-125 transition-all duration-400" />
                                </motion.div>
                            </div>

                            {/* Content Card with Orange Backdrop Layer */}
                            <div className="flex-1 relative">
                                {/* Orange Block Behind */}
                                <div className="absolute inset-0 bg-[#ea580c] rounded-2xl transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 transition-transform duration-400 group-hover:translate-x-4 group-hover:translate-y-4 shadow-sm" />
                                
                                {/* Actual Card */}
                                <div className="relative z-10 h-full bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 transition-transform duration-400 group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden">
                                    {/* Subtle card hover gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-5 relative z-10">
                                        <span className="px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase border border-neutral-200 bg-white shadow-sm text-neutral-700 group-hover:border-orange-300 group-hover:text-[#ea580c] transition-colors">
                                            {item.type || 'PLACEMENT'}
                                        </span>
                                        <span className="font-sans font-medium text-neutral-400 text-sm">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="font-sans text-xl sm:text-[1.35rem] font-black text-neutral-900 mb-3 tracking-tight group-hover:text-[#ea580c] transition-colors relative z-10">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 text-[15px] leading-relaxed relative z-10">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentAchievements;
