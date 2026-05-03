import React from 'react';

const admissionInfo = [
    {
        label: 'Entrance Exams',
        detail: 'AP EAPCET for 1st year · ECET for lateral entry into 2nd year B.Tech',
    },
    {
        label: 'Qualification',
        detail: '12th Standard (Intermediate) with MPC or Diploma for lateral entry',
    },
    {
        label: 'Contact Admissions',
        detail: '91-951 561 1111 · hr@srit.ac.in',
    },
];

const AdmissionsSection: React.FC = () => {
    return (
        <section id="admissions" className="relative bg-neutral-dark py-28 lg:py-36 overflow-hidden">
            {/* Subtle diagonal gradient for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-neutral-800 to-neutral-dark opacity-80" />

            {/* Accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/30" />

            <div className="relative max-w-[1200px] mx-auto px-6">
                {/* Centered content — single visual axis */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal">
                    <p className="label-caps text-primary tracking-[0.3em] mb-6">
                        Admissions 2026
                    </p>

                    <h2 className="heading-2 text-white mb-8">
                        Begin Your Journey at SRIT
                    </h2>

                    <p className="text-white/40 text-base lg:text-lg leading-relaxed mb-12">
                        Admissions are conducted through a transparent procedure — Category-A
                        seats filled via EAPCET convener based on candidate ranks, and
                        Category-B seats through management following APSCHE guidelines.
                        B.Tech programs offered across 7 engineering disciplines.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <a
                            href="https://www.srit.ac.in/admission-procedure/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-primary text-white text-[12.5px] font-medium tracking-[0.12em] uppercase hover:bg-primary-dark transition-colors duration-300"
                        >
                            Apply Now
                        </a>
                        <a
                            href="https://www.srit.ac.in/courses-offered/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border border-white/15 text-white/60 text-[12.5px] font-medium tracking-[0.12em] uppercase hover:bg-white/5 hover:border-white/30 hover:text-white/80 transition-all duration-300"
                        >
                            View Programs
                        </a>
                    </div>
                </div>

                {/* 3-column info strip with vertical hairlines */}
                <div className="border-t border-white/6 pt-14 lg:pt-16 reveal">
                    <div className="grid md:grid-cols-3 gap-10 lg:gap-0">
                        {admissionInfo.map((item, i) => (
                            <div
                                key={item.label}
                                className={`text-center ${i > 0 ? 'lg:border-l lg:border-white/6' : ''
                                    }`}
                            >
                                <p className="label-caps text-white/25 tracking-[0.25em] mb-4">
                                    {item.label}
                                </p>
                                <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mx-auto">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionsSection;
