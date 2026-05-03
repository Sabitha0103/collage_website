import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { upcomingEvents } from '../data/events';

const UpcomingEvents: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="events" ref={ref} className="section-y-lg bg-neutral-dark text-white relative overflow-hidden">


            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    {/* Left side — Headers */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            Mark Your Calendar
                        </p>
                        <h2 className="heading-lg text-white mb-6">
                            Upcoming
                            <br />
                            Events
                        </h2>
                        <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-sm">
                            Join us for workshops, guest lectures, and annual festivals that foster creativity, networking, and technical excellence.
                        </p>
                        <a href="#events" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-white/10 hover:border-white/35 transition-all duration-300">
                            View Full Calendar
                        </a>
                    </motion.div>

                    {/* Right side — Events List */}
                    <div className="flex flex-col">
                        {upcomingEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group flex flex-col sm:flex-row sm:items-center gap-6 py-8 cursor-pointer ${i !== 0 ? 'border-t border-white/10' : ''
                                    }`}
                            >
                                {/* Date Box */}
                                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:bg-primary group-hover:border-primary transition-all duration-400">
                                    <span className="text-white/50 text-xs font-bold tracking-[0.2em] group-hover:text-white/80 transition-colors">
                                        {event.month}
                                    </span>
                                    <span className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                                        {event.day}
                                    </span>
                                </div>

                                {/* Event Info */}
                                <div className="flex-1">
                                    <p className="label-caps text-primary/80 mb-2 group-hover:text-primary transition-colors">
                                        {event.type}
                                    </p>
                                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-white/40 text-sm font-medium">
                                        {event.dateStr}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="hidden sm:flex w-12 items-center justify-end text-white/20 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 text-2xl">
                                    →
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
