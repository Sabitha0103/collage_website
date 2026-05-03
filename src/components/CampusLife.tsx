import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const campusItems = [
    {
        id: '01',
        title: 'TECH_LABS',
        subtitle: 'Accessing secure facility imagery. High-resolution textures loaded.',
        image: '/labs.jpg',
    },
    {
        id: '02',
        title: 'CLUB_HUBS',
        subtitle: 'Collaborative learning communities and innovation workspaces.',
        image: '/shutterbugs.jpg',
    },
    {
        id: '03',
        title: 'SPORTS_ARENA',
        subtitle: 'Outdoor athletic grounds and professional indoor courts.',
        image: '/sportfacilites.jpg',
    },
    {
        id: '04',
        title: 'CULTURAL_FEST',
        subtitle: 'Annual youth festivals and societal celebrations.',
        image: '/culturalevent.jpg',
    },
    {
        id: '05',
        title: 'LIBRARY_ARCHIVES',
        subtitle: 'Vast collection of 51,477 Volumes and digital e-resources.',
        image: '/library.jpg',
    },
    {
        id: '06',
        title: 'TRANSIT_SYSTEM',
        subtitle: 'Fleet of 29 buses covering crucial routes for all scholars.',
        image: '/Transport.jpg',
    },
    {
        id: '07',
        title: 'INTERN_HOUSING',
        subtitle: 'Advanced programs handling student housing and skills integration.',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
];

const CampusLife: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section ref={ref} className="py-20 md:py-32 bg-[#050505] relative overflow-hidden font-sans border-t border-white/10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-60"></div>

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#ea580c] font-sans font-bold text-[11px] md:text-sm tracking-[0.25em] uppercase mb-4 block">
                            GALLERY INTERFACE
                        </span>
                        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                            CAMPUS <span className="text-white/20">ARCHIVE</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Responsive Gallery (Vertical on Mobile, Horizontal Accordion on Desktop) */}
                <div className="flex flex-col md:flex-row h-auto md:h-[600px] lg:h-[700px] w-full gap-2 md:gap-2">
                    {campusItems.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={item.id}
                                layout
                                onClick={() => setActiveIndex(index)}
                                className={`relative rounded-xl md:rounded-sm overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                    isActive 
                                        ? 'flex-[5] h-[350px] md:h-full md:flex-[3]' 
                                        : 'h-[80px] md:h-full w-full md:w-[45px] lg:w-[60px]'
                                }`}
                            >
                                {/* Image background */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(e) => { e.currentTarget.src = '/principal.jpg' }}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                                        isActive ? 'grayscale-0 scale-100' : 'grayscale-[100%] scale-[1.15] opacity-60 hover:opacity-100'
                                    }`}
                                />
                                
                                {/* Overlay gradient */}
                                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-black/10' : 'bg-black/50'}`} />

                                {/* Upper Left Number */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                                    <span className={`font-mono font-bold text-[10px] md:text-sm transition-colors duration-500 ${isActive ? 'text-[#ea580c]' : 'text-white/40'}`}>
                                        /{item.id}
                                    </span>
                                </div>

                                {/* Active View Content text */}
                                <div className={`absolute inset-x-4 bottom-6 md:inset-x-8 md:bottom-10 z-10 transition-all duration-700 delay-150 flex flex-col justify-end ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
                                    <h3 className="font-sans text-3xl md:text-6xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-3 md:mb-5">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-[10px] md:text-sm lg:text-base max-w-sm md:max-w-xl font-sans leading-relaxed">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Inactive Text (Hidden on mobile if not active, or shown differently) */}
                                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 flex items-center justify-center transition-all duration-500 delay-100 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                    <span className="md:hidden font-sans text-[11px] text-white/70 font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                                        {item.title.replace('_', ' ')}
                                    </span>
                                    <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="hidden md:block font-sans text-xs md:text-sm lg:text-lg text-white/50 font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                                        {item.title}
                                    </span>
                                </div>
                                
                                {/* Top Right Icon on Active */}
                                {isActive && (
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">
                                        <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-10px, 10px); }
                    to { opacity: 1; transform: translate(0, 0); }
                }
            `}} />
        </section>
    );
};

export default CampusLife;
