import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { facultyProfiles } from '../data/faculty';

const FacultySpotlight: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="faculty" ref={ref} className="section-y-lg bg-neutral-dark text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-white/5 skew-x-[-15deg] origin-top opacity-30 pointer-events-none" />

            {/* Background Watermark */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0 translate-y-1/4">
                <span className="font-sans font-bold text-[18vw] leading-none text-white/[0.02] whitespace-nowrap">
                    FACULTY
                </span>
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left: Sticky Text Column */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 h-max">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-1 bg-primary mb-8" />
                            <p className="label-caps text-primary tracking-[0.25em] mb-4">
                                Academic Leadership
                            </p>
                            <h2 className="heading-lg text-white mb-6">
                                World-Class<br />Educators &<br />Researchers
                            </h2>
                            <p className="text-white/60 text-[15px] leading-[1.8] mb-10 max-w-sm">
                                Our faculty comprises distinguished scholars and industry veterans dedicated to pushing the boundaries of engineering education and driving impactful research aligned with global standards.
                            </p>

                            <a href="/faculty" className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 hover:border-primary hover:bg-primary/10 text-white text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 group">
                                View Full Directory <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Faculty Grid (Staggered) */}
                    <div className="lg:w-2/3">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-0">
                            {facultyProfiles.map((faculty, i) => (
                                <motion.div
                                    key={faculty.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className={`group cursor-pointer ${i % 2 !== 0 ? 'sm:mt-24' : 'sm:mb-24'}`}
                                >
                                    <div className="relative overflow-hidden bg-neutral-800 rounded-lg group-hover:shadow-[0_20px_40px_rgba(194,65,12,0.15)] transition-all duration-500">
                                        <div className="aspect-[4/5] relative">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                            />
                                            {/* Gradient overlay for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                                            {/* Text Content overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="h-[2px] w-8 bg-primary mb-5 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                                                <h3 className="font-serif text-2xl font-bold text-white mb-1 drop-shadow-sm">
                                                    {faculty.name}
                                                </h3>
                                                <p className="text-primary text-[11px] font-bold tracking-[0.15em] uppercase mb-2 drop-shadow-md">
                                                    {faculty.department}
                                                </p>
                                                <p className="text-white/80 text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 lg:max-w-[90%] border-t border-white/10 pt-3 mt-3">
                                                    {faculty.specialization}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultySpotlight;
