import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="section-y-lg bg-white relative overflow-hidden">

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left — text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Accent bar */}
                        <div className="w-20 h-[3px] bg-primary mb-5" />

                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            About SRIT
                        </p>

                        <h2 className="heading-lg text-neutral-dark mb-8">
                            Inspired by the Legacy of
                            <br />
                            Srinivasa Ramanujan
                        </h2>

                        <div className="space-y-5 text-neutral-600 leading-[1.8] text-[15px] max-w-lg">
                            <p>
                                Srinivasa Ramanujan Institute of Technology was established in November 2007
                                under the Smt. Aluru Narayanamma Memorial Educational Society,
                                founded by Founder-cum-Secretary Sri Aluru Sambasiva Reddy — driven by the belief that
                            </p>
                            <blockquote className="border-l-2 border-primary/30 pl-5 italic text-neutral-700">
                                "Education is a Key Enabler for Progress."
                            </blockquote>
                            <p>
                                Located in Ananthapuramu, Andhra Pradesh, SRIT is permanently
                                affiliated to JNTU Ananthapuramu and approved by AICTE New Delhi.
                                The institute offers 7 undergraduate engineering programs and has
                                built an enviable record of producing industry-ready graduates.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <a
                                href="#departments"
                                className="inline-flex items-center gap-2 text-primary text-sm font-semibold group"
                            >
                                <span>Explore Departments</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                            <span className="w-px h-4 bg-neutral-300" />
                            <a
                                href="https://www.srit.ac.in/overview/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 text-sm font-medium hover:text-primary transition-colors duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — certificate grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { src: '/cert-iic.jpg', alt: 'IIC Certificate' },
                            { src: '/cert-salesforce.jpg', alt: 'Salesforce Award' },
                            { src: '/cert-eduskills.jpg', alt: 'EduSkills Certificate' },
                            { src: '/cert-nptel.jpg', alt: 'NPTEL Certificate' }
                        ].map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md border border-neutral-100 bg-white">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
