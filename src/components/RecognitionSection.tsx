import React from 'react';

const stats = [
    { value: '2008', label: 'Established' },
    { value: '7', label: 'Departments' },
    { value: '51,477+', label: 'Library Volumes' },
    { value: '29', label: 'Campus Buses' },
];

const RecognitionSection: React.FC = () => {
    return (
        <section className="relative bg-neutral-dark py-20 lg:py-28">
            {/* Top accent border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/30" />

            <div className="max-w-[1200px] mx-auto px-6">
                {/* Monumental numbers */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mb-12 lg:mb-14 reveal-stagger">
                    {stats.map((item, i) => (
                        <div
                            key={item.label}
                            className={`text-center reveal ${i > 0 ? 'lg:border-l lg:border-white/8' : ''
                                }`}
                        >
                            <div className="font-serif text-5xl lg:text-7xl font-bold text-white tracking-tight"
                                style={{ fontVariantNumeric: 'tabular-nums' }}>
                                {item.value}
                            </div>
                            <div className="label-caps text-white/25 mt-4 tracking-[0.25em]">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Affiliation line */}
                <div className="text-center pt-10 border-t border-white/6">
                    <p className="text-white/20 text-[11px] tracking-[0.18em] uppercase">
                        Permanently Affiliated to JNTU Ananthapuramu · Approved by AICTE New Delhi · NAAC Accredited
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RecognitionSection;
