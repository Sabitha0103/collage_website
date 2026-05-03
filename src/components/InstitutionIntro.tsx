import React from 'react';

const InstitutionIntro: React.FC = () => {
    return (
        <section id="about" className="section-pad-xl bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Giant pull-quote — the visual anchor */}
                <div className="text-center mb-24 lg:mb-32 reveal">
                    <p className="label-caps text-primary tracking-[0.3em] mb-8">
                        From the Founder
                    </p>
                    <blockquote className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] italic text-neutral-dark leading-[1.2] max-w-4xl mx-auto">
                        "Education is a Key Enabler<br />
                        for Progress."
                    </blockquote>
                    <p className="label-caps text-neutral-400 mt-8 tracking-[0.2em]">
                        Sri Aluru Sambasiva Reddy — Founder &amp; Secretary
                    </p>
                </div>

                {/* Full-bleed campus image — visual break */}
                <div className="relative -mx-6 lg:-mx-0 mb-24 lg:mb-32 overflow-hidden reveal">
                    <div className="relative h-[360px] lg:h-[480px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
                            alt="SRIT campus grounds"
                            className="w-full h-full object-cover img-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                    </div>
                    {/* Overlay text on image */}
                    <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-md">
                        <p className="label-caps text-white/50 tracking-[0.25em] mb-3">
                            Est. 2008
                        </p>
                        <p className="font-serif text-xl lg:text-2xl text-white font-semibold leading-snug">
                            Nurturing engineers with professional<br />
                            competency and human values.
                        </p>
                    </div>
                </div>

                {/* Two-column prose — asymmetric */}
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 reveal">
                    {/* Left column — the story */}
                    <div>
                        <p className="label-caps text-neutral-400 tracking-[0.25em] mb-6">
                            About the Institute
                        </p>
                        <h2 className="heading-2 text-neutral-dark mb-10">
                            A Vision for<br />
                            Educational Excellence
                        </h2>
                        <div className="space-y-6 text-neutral-700 leading-[1.85] text-[0.9375rem]">
                            <p>
                                Srinivasa Ramanujan Institute of Technology was established in
                                2008 under the Smt. Aluru Narayanamma Memorial Educational
                                Society, founded by Sri Aluru Sambasiva Reddy in November 2007
                                in memory of his mother, Late Smt. Aluru Narayanamma.
                            </p>
                            <p>
                                Permanently affiliated to JNTU Ananthapuramu and approved by
                                AICTE New Delhi, SRIT has established an enviable record of
                                producing engineering graduates who have achieved success in
                                their chosen fields — all within a span of just over 15 years.
                            </p>
                            <p>
                                Situated at Rotarypuram Village, B.K. Samudram Mandal,
                                Ananthapuramu District, the institute was born from the
                                founder's conviction that the region needed a quality
                                technical institution serving students from rural areas
                                and economically challenged communities.
                            </p>
                        </div>
                    </div>

                    {/* Right column — Vision & Mission */}
                    <div className="lg:pt-16">
                        <div className="mb-14">
                            <p className="label-caps text-primary tracking-[0.25em] mb-5">
                                Vision
                            </p>
                            <p className="font-serif text-xl lg:text-[1.375rem] text-neutral-dark leading-relaxed">
                                To become a premier educational institution in India offering
                                the best teaching and learning environment, enabling students
                                to become complete individuals with professional competency,
                                ethical values, and a strong sense of responsibility towards
                                environment and society at large.
                            </p>
                        </div>

                        <hr className="hairline mb-14" />

                        <div>
                            <p className="label-caps text-primary tracking-[0.25em] mb-5">
                                Mission
                            </p>
                            <ul className="space-y-5 text-neutral-700 text-[0.9375rem] leading-[1.8]">
                                <li className="pl-5 border-l-2 border-primary/20">
                                    Continually enhance the quality of physical infrastructure
                                    and human resources to evolve into a center of excellence
                                    in engineering education.
                                </li>
                                <li className="pl-5 border-l-2 border-primary/20">
                                    Provide comprehensive learning experiences conducive for
                                    students to acquire professional competences, ethical values,
                                    and life-long learning abilities.
                                </li>
                                <li className="pl-5 border-l-2 border-primary/20">
                                    Strengthen industry-institute interactions to enable students
                                    to face the ever-changing requirements of the industry.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionIntro;
