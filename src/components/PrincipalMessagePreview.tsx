import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const PrincipalMessagePreview: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="section-y bg-white relative overflow-hidden text-center md:text-left">
            <div className="section-container">
                <div className="grid lg:grid-cols-[1fr,2fr] gap-10 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto lg:mx-0 w-64 md:w-80 lg:w-full max-w-sm"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
                            <img
                                src="principal.jpg"
                                alt="Principal Portrait"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-6 text-left">
                                <h3 className="font-serif text-xl font-bold text-white">Dr. G. Balakrishna</h3>
                                <p className="text-white/80 text-sm mt-0.5">Principal, SRIT</p>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3"></div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col justify-center items-center md:items-start"
                    >
                        <Quote className="w-12 h-12 text-primary/20 mb-6 rotate-180" />
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 leading-snug mb-6">
                            "Education is not just about acquiring knowledge, but about developing the mindset to apply that knowledge for the betterment of society."
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl text-[15px] lg:text-[16px]">
                            Welcome to SRIT, where excellence is a habit and innovation is an everyday pursuit. Our commitment to a transformative educational experience extends beyond the classroom, preparing students to lead with purpose in a rapidly evolving technological landscape.
                        </p>
                        <a
                            href="/message-from-head"
                            className="inline-flex items-center gap-2 group text-primary font-semibold hover:text-orange-600 transition-colors"
                        >
                            Read Full Message
                            <span className="group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalMessagePreview;
