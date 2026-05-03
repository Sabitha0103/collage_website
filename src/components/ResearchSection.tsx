import React from 'react';

const facilities = [
    {
        num: '01',
        title: 'Central Library',
        detail:
            '51,477 volumes, 36+ national and international journals, and a digital library with 12 systems for e-resources.',
    },
    {
        num: '02',
        title: 'Transport Network',
        detail:
            '29 buses covering Anantapur, Tadipatri, Dharmavaram & Paamidi — 4,000 student capacity across two shifts.',
    },
    {
        num: '03',
        title: 'Internship Programs',
        detail:
            'Advanced internship tracks for all streams, integrating corporate-level work standards and professional development.',
    },
    {
        num: '04',
        title: 'Expert Faculty',
        detail:
            'Highly qualified and certified teaching staff with extensive academic and industry experience.',
    },
    {
        num: '05',
        title: 'Sports & Recreation',
        detail:
            'Interdepartmental, intercollegiate, and inter-university competitions fostering team spirit and holistic development.',
    },
    {
        num: '06',
        title: 'Wi-Fi Campus',
        detail:
            'High-speed internet connectivity across the campus supporting digital learning and research activities.',
    },
];

const partners = [
    'EduSkills Foundation',
    'Amazon Web Services',
    'Palo Alto Networks',
    'EC Council Academia',
];

const ResearchSection: React.FC = () => {
    return (
        <section id="research" className="bg-white">
            {/* Cinematic full-width image */}
            <div className="relative w-full h-[400px] lg:h-[520px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="SRIT library and learning resources"
                    className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-[1200px] mx-auto px-6 pb-12 lg:pb-16">
                        <p className="label-caps text-white/35 tracking-[0.3em] mb-4">
                            Infrastructure
                        </p>
                        <h2 className="heading-2 text-white">
                            Facilities &amp; Campus Life
                        </h2>
                    </div>
                </div>
            </div>

            {/* Numbered facility highlights — 3-column grid */}
            <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 reveal-stagger">
                    {facilities.map((f) => (
                        <div key={f.num} className="reveal">
                            <span className="font-serif text-4xl lg:text-5xl font-bold text-primary/15">
                                {f.num}
                            </span>
                            <h3 className="heading-3 text-neutral-dark mt-4 mb-2">
                                {f.title}
                            </h3>
                            <div className="w-12 h-[2px] bg-primary mb-3" />
                            <p className="text-neutral-500 text-[13px] leading-[1.85]">
                                {f.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Industry partners — inline horizontal */}
                <div className="mt-20 lg:mt-28 pt-12 border-t border-neutral-200 reveal">
                    <p className="label-caps text-neutral-400 tracking-[0.25em] mb-8">
                        Industry Partners
                    </p>
                    <p className="text-neutral-700 text-base leading-relaxed">
                        {partners.map((p, i) => (
                            <React.Fragment key={p}>
                                <span className="font-medium">{p}</span>
                                {i < partners.length - 1 && (
                                    <span className="text-neutral-300 mx-4">·</span>
                                )}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Single featured testimonial — editorial pull-quote */}
                <div className="mt-20 lg:mt-28 pt-12 border-t border-neutral-200 reveal">
                    <div className="relative max-w-3xl">

                        <blockquote className="relative font-serif text-xl lg:text-[1.625rem] italic text-neutral-700 leading-relaxed">
                            My four years at SRIT were a great memory to cherish for a
                            lifetime. It was full of learning and grooming. I am thankful
                            to the whole faculty and mentors for sculpting me.
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="w-8 h-px bg-primary" />
                            <p className="label-caps text-neutral-400 tracking-[0.2em]">
                                Abhimanyu Reddy, Alumni
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchSection;
