import React from 'react';

const companies = [
    'Accenture',
    'Deloitte',
    'Cognizant',
    'Zoho',
    'TCS',
    'Infosys',
    'Wipro',
    'Mobileum',
];

const placementStats = [
    { value: '₹9', unit: 'LPA', label: 'Highest Package' },
    { value: '85', unit: '%', label: 'Placement Rate' },
    { value: '50+', unit: '', label: 'Recruiting Companies' },
];

const PlacementsSection: React.FC = () => {
    return (
        <section id="placements" className="section-pad-lg bg-neutral-100">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 reveal">
                    <p className="label-caps text-primary tracking-[0.3em] mb-6">
                        Career Outcomes
                    </p>
                    <h2 className="heading-2 text-neutral-dark">
                        Placements &amp; Recruiters
                    </h2>
                </div>

                {/* Stats — oversized serif numerals */}
                <div className="grid grid-cols-3 gap-8 lg:gap-0 mb-20 lg:mb-24 reveal-stagger">
                    {placementStats.map((item, i) => (
                        <div
                            key={item.label}
                            className={`text-center reveal ${i > 0 ? 'lg:border-l lg:border-neutral-300' : ''
                                }`}
                        >
                            <div className="font-serif text-4xl lg:text-6xl font-bold text-neutral-dark tracking-tight"
                                style={{ fontVariantNumeric: 'tabular-nums' }}>
                                {item.value}
                                <span className="text-primary text-2xl lg:text-3xl ml-1">{item.unit}</span>
                            </div>
                            <div className="label-caps text-neutral-400 mt-3 tracking-[0.2em]">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company names — horizontal inline text */}
                <div className="text-center reveal">
                    <p className="label-caps text-neutral-400 tracking-[0.25em] mb-8">
                        Our Recruiters
                    </p>
                    <p className="text-neutral-600 text-base lg:text-lg leading-loose">
                        {companies.map((c, i) => (
                            <React.Fragment key={c}>
                                <span className="font-medium hover:text-primary transition-colors duration-300 cursor-default">
                                    {c}
                                </span>
                                {i < companies.length - 1 && (
                                    <span className="text-neutral-300 mx-3 lg:mx-5">·</span>
                                )}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PlacementsSection;
