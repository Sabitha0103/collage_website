import React from 'react';

interface Facility {
    title: string;
    description: string;
    image: string;
}

const facilities: Facility[] = [
    {
        title: 'Modern Library',
        description: 'The library manages knowledge both in print and digital formats, with a collection of 51,477 volumes, 36+ national & international journals, and a digital library with 12 computer systems for accessing e-journals, e-books, and e-learning resources.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Advanced Internships',
        description: 'SRIT offers advanced internship programs for all streams with personal development to integrate student skills to market level, familiarizing them with corporate-level work standards and optimizing their performance.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Industry Partnerships',
        description: 'SRIT maintains strategic placement partnerships with leading organizations including EduSkills Foundation, AWS, Palo Alto Networks, and EC Council, providing students real-world industry exposure and career opportunities.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const ResearchExcellence: React.FC = () => {
    return (
        <section id="research" className="py-28 lg:py-36 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold font-sans mb-4 block">
                            Facilities & Industry Connect
                        </span>
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-dark">
                            Excellence in <br />
                            <span className="italic font-medium">Learning & Growth</span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-md mt-6 lg:mt-0 leading-relaxed font-sans">
                        SRIT provides state-of-the-art facilities and industry partnerships
                        to ensure students are equipped with practical knowledge and are
                        career-ready from day one.
                    </p>
                </div>

                {/* Facility Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {facilities.map((facility) => (
                        <div
                            key={facility.title}
                            className="group relative overflow-hidden rounded-sm bg-white border border-neutral-300/40"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-3 group-hover:text-primary-dark transition-colors duration-300">
                                    {facility.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                                    {facility.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-neutral-300/40">
                                    <a
                                        href="https://www.srit.ac.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-sm font-medium tracking-wide hover:text-primary-dark transition-colors duration-300 flex items-center gap-2 group/link"
                                    >
                                        Learn More
                                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Facilities Grid Banner */}
                <div className="mt-16 p-12 lg:p-16 bg-white border border-neutral-300/40 rounded-sm">
                    <div className="grid md:grid-cols-5 gap-8 text-center">
                        {[
                            { icon: '🎓', label: 'Internships', desc: 'Industry-level training' },
                            { icon: '📚', label: 'Modern Library', desc: '51,477+ volumes' },
                            { icon: '👨‍🏫', label: 'Expert Faculty', desc: 'Certified teaching staff' },
                            { icon: '⚽', label: 'Sports', desc: 'Complete facilities' },
                            { icon: '🚌', label: 'Transport', desc: 'Full connectivity' },
                        ].map((item) => (
                            <div key={item.label} className="group">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="font-serif text-sm font-semibold text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">
                                    {item.label}
                                </h4>
                                <p className="text-neutral-500 text-xs font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchExcellence;
