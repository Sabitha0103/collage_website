import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { newsUpdates } from '../data/news';

const NewsAnnouncements: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="news" ref={ref} className="section-y-lg bg-white border-t border-neutral-200">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            Stay Informed
                        </p>
                        <h2 className="heading-lg text-neutral-dark">
                            News & Announcements
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <a href="#news" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                            View All News <span>→</span>
                        </a>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {newsUpdates.map((news, i) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Category & Date */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="label-caps text-primary-dark bg-primary/5 px-3 py-1.5 rounded-sm">
                                    {news.category}
                                </span>
                                <span className="text-neutral-400 text-sm font-serif italic">
                                    {news.date}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-neutral-200 mb-5 group-hover:bg-primary/60 transition-colors duration-400" />

                            {/* Content */}
                            <h3 className="font-serif text-xl font-bold text-neutral-dark mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                {news.headline}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                                {news.summary}
                            </p>

                            <span className="text-neutral-900 text-sm font-semibold inline-flex items-center gap-2 group-hover:text-primary group-hover:gap-3 transition-all duration-300">
                                Read Article <span>→</span>
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsAnnouncements;
