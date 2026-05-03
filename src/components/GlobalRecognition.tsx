import React from 'react';

interface StatItem {
    value: string;
    label: string;
}

const stats: StatItem[] = [
    { value: '2007', label: 'Year Established' },
    { value: '7', label: 'Departments' },
    { value: '51,477+', label: 'Library Volumes' },
    { value: '36+', label: 'Journals & Magazines' },
    { value: 'JNTU', label: 'Affiliated University' },
];

const GlobalRecognition: React.FC = () => {
    return (
        <section className="py-20 bg-neutral-dark">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold font-sans mb-4 block">
                        Institutional Highlights
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
                        Numbers That Define SRIT
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/50 font-sans tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Separator */}
                <div className="mt-16 flex items-center justify-center">
                    <div className="w-16 h-px bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary mx-4" />
                    <div className="w-16 h-px bg-primary/40" />
                </div>
            </div>
        </section>
    );
};

export default GlobalRecognition;
