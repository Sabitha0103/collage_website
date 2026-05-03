import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

const stats = [
    {
        icon: TrendingUp,
        value: '9.08 LPA',
        label: 'Highest Package',
        subtext: 'TCS Prime',
    },
    {
        icon: Users,
        value: '370+',
        label: 'Total Offers',
        subtext: '2024-25 Season',
    },
    {
        icon: Building,
        value: '20+',
        label: 'Companies Visited',
        subtext: 'Top MNCs & Startups',
    },
    {
        icon: Award,
        value: '80%',
        label: 'Placement Rate',
        subtext: 'Consistent Performance',
    },
];

const recruiters = [
    'TCS', 'Cognizant', 'HCL', 'Infosys',
    'Lumen Technologies', 'Foxconn', 'Cadsys', 'Playto Labs',
    'IOpex Tech', 'Snovasys', 'INDO-MIM', 'IRMAI',
    'Calix', 'Wayvo.AI', 'IndiGrid', 'Bonito Designs'
];

const Placements: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="placements" ref={ref} className="relative py-16 lg:py-20 bg-[#1f1f1f] border-t border-[#333] text-white overflow-hidden">
            <div className="section-container max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Side: Content & Stats */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="pr-0 lg:pr-12 relative z-10"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-xs uppercase">
                                PLACEMENTS @ SRIT
                            </span>
                        </motion.div>
                        <motion.h2 
                            variants={itemVariants} 
                            className="font-serif text-[2.5rem] lg:text-5xl font-bold text-white mb-6 leading-[1.15]"
                        >
                            Building Careers, Creating Leaders
                        </motion.h2>
                        <motion.p 
                            variants={itemVariants} 
                            className="text-neutral-400 text-sm md:text-[15px] leading-relaxed mb-10 max-w-lg"
                        >
                            SRIT has an outstanding placement record with top companies recruiting our students year after year. Our dedicated Training &amp; Placement cell prepares students with industry-ready skills.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 lg:gap-5 mb-8">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="bg-[#242424] border border-[#333] p-4 sm:p-5 rounded hover:border-[#ea580c]/50 hover:bg-[#2a2a2a] transition-all duration-300">
                                        <Icon className="w-5 h-5 text-[#ea580c] mb-3" />
                                        <div className="font-serif text-2xl lg:text-[1.75rem] font-bold text-white mb-1.5 leading-none">
                                            {stat.value}
                                        </div>
                                        <div className="text-white text-xs sm:text-sm font-bold mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-neutral-500 text-[11px] sm:text-xs">
                                            {stat.subtext}
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <motion.a 
                            variants={itemVariants}
                            href="#"
                            className="inline-block px-8 py-3.5 bg-[#ea580c] text-white font-semibold text-sm rounded hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20"
                        >
                            Know More
                        </motion.a>
                    </motion.div>

                    {/* Right Side: Recruiters Grid */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-[#171717]/80 backdrop-blur-md border border-[#333] p-6 sm:p-8 lg:p-10 rounded-lg relative z-10 shadow-2xl"
                    >
                        <div className="text-center mb-8">
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                                Our Recruiters
                            </h3>
                            <div className="w-10 h-[3px] bg-[#ea580c] mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
                            {recruiters.map((recruiter, idx) => (
                                <div 
                                    key={idx}
                                    className="border border-[#2a2a2a] bg-[#1f1f1f] p-2 flex items-center justify-center text-center hover:border-[#555] hover:bg-[#2a2a2a] transition-colors rounded-sm min-h-[50px] lg:min-h-[55px]"
                                >
                                    <span className="text-[13px] lg:text-sm font-bold text-white/90">
                                        {recruiter}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
                
                {/* Decorative background split element */}
                <div className="absolute top-0 bottom-0 right-0 w-[45%] bg-[#1a1a1a] z-0 hidden lg:block border-l border-white/5" />
            </div>
        </section>
    );
};

export default Placements;
