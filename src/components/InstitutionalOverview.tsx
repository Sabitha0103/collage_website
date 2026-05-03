import React from 'react';

const InstitutionalOverview: React.FC = () => {
    return (
        <section id="about" className="py-28 lg:py-36 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text */}
                    <div>
                        <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold font-sans mb-4 block">
                            Welcome to SRIT
                        </span>
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-dark leading-tight mb-8">
                            A Vision for
                            <br />
                            <span className="italic font-medium text-primary-dark">Educational Excellence</span>
                        </h2>
                        <div className="space-y-5 text-neutral-700 leading-relaxed font-sans">
                            <p className="text-lg">
                                Srinivasa Ramanujan Institute of Technology was established by
                                Founder-cum-Secretary Sri Aluru Sambasiva Reddy in November 2007,
                                under the Smt. Aluru Narayanamma Memorial Educational Society, in
                                memory of his mother Late Smt. Aluru Narayanamma — to give shape
                                to his firm belief that "Education is a Key Enabler for Progress."
                            </p>
                            <p>
                                This belief has shaped his entire life — he himself excelled in his
                                scholastic years and then became a tutor, teaching students not
                                only his subject but also imparting higher human values. As his
                                career progressed, he wanted to ensure that maximum students from
                                rural and developing areas could derive benefit from this credo.
                            </p>
                            <p>
                                Located in Ananthapuramu, Andhra Pradesh, SRIT is committed to
                                creating engineers who are industry-ready, socially responsible,
                                and equipped with the knowledge and skills to make a meaningful
                                impact on the world.
                            </p>
                        </div>
                        <div className="mt-10 flex items-center gap-6">
                            <a
                                href="#departments"
                                className="text-primary text-sm font-semibold tracking-wide hover:text-primary-dark transition-colors duration-300 flex items-center gap-2 group"
                            >
                                Explore Departments
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                            <span className="w-px h-5 bg-neutral-300" />
                            <a
                                href="#research"
                                className="text-neutral-500 text-sm font-medium tracking-wide hover:text-neutral-dark transition-colors duration-300"
                            >
                                Facilities
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="SRIT students on campus"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Accent Block */}
                        <div className="absolute -bottom-6 -left-6 bg-primary-dark text-white p-8 rounded-sm hidden lg:block">
                            <div className="font-serif text-4xl font-bold">Since</div>
                            <div className="text-sm text-white/80 mt-1 font-sans">2007 — Ananthapuramu</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalOverview;
