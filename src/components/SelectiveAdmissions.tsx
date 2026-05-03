import React from 'react';

const SelectiveAdmissions: React.FC = () => {
    return (
        <section id="admissions" className="relative py-28 lg:py-36 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c476?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="SRIT campus architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/95 via-neutral-dark/85 to-neutral-dark/70" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold font-sans mb-4 block">
                            Admissions Open
                        </span>
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                            Shape Your Future <br />
                            <span className="italic font-medium text-white/80">at SRIT Ananthapuramu</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-6 font-sans">
                            SRIT offers a nurturing academic environment where students from
                            rural and developing areas can achieve engineering excellence. Our
                            commitment to quality education, industry partnerships, and
                            holistic development prepares graduates for successful careers in
                            technology and engineering.
                        </p>
                        <p className="text-white/50 leading-relaxed mb-10 font-sans">
                            With affiliated programs under JNTU Ananthapuramu and approvals
                            from AICTE, SRIT provides recognized degrees in 7 engineering
                            disciplines with advanced specializations in AI, Machine Learning,
                            and Data Science.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.srit.ac.in/admission-procedure/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-white text-sm font-medium tracking-widest uppercase hover:bg-primary-dark transition-colors duration-300 rounded-sm text-center"
                            >
                                Admission Procedure
                            </a>
                            <a
                                href="https://www.srit.ac.in/courses-offered/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors duration-300 rounded-sm text-center"
                            >
                                Courses Offered
                            </a>
                        </div>
                    </div>

                    {/* Right - Quick Info */}
                    <div className="space-y-6">
                        {[
                            { label: 'Affiliation', value: 'JNTUA', detail: 'Jawaharlal Nehru Technological University, Ananthapuramu' },
                            { label: 'Programs Offered', value: '7 B.Tech', detail: 'Including AI & ML and Data Science specializations' },
                            { label: 'Scholarships', value: 'Available', detail: 'Various central and state government scholarships supported' },
                            { label: 'Contact', value: '951 561 1111', detail: 'Rotarypuram Village, BK Samudram, Anantapur - 515701' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/10 transition-all duration-500"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-white/50 text-xs uppercase tracking-widest font-sans mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-white/40 text-sm font-sans">
                                            {stat.detail}
                                        </div>
                                    </div>
                                    <div className="font-serif text-2xl lg:text-3xl font-bold text-primary shrink-0 ml-4">
                                        {stat.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectiveAdmissions;
