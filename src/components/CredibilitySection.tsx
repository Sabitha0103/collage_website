import React from 'react';

const metrics = [
    { icon: '🏛️', value: '2008', label: 'Founded' },
    { icon: '🎓', value: '3000+', label: 'Students' },
    { icon: '👨‍🏫', value: '150+', label: 'Faculty' },
    { icon: '📚', value: '7', label: 'Departments' },
    { icon: '🏢', value: '100+', label: 'Recruiters' },
];

const CredibilitySection: React.FC = () => {
    return (
        <section className="bg-neutral-dark py-16 lg:py-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-4">
                    {metrics.map((m) => (
                        <div key={m.label} className="text-center">
                            <div className="text-3xl mb-3">{m.icon}</div>
                            <div className="font-serif text-3xl lg:text-4xl font-bold text-white mb-1">
                                {m.value}
                            </div>
                            <div className="text-white/40 text-sm font-medium tracking-wide uppercase">
                                {m.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredibilitySection;
