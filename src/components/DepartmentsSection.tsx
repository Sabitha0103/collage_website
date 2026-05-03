import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';

const DepartmentsSection: React.FC = () => {
    return (
        <section id="departments" className="section-pad-lg bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header — left-aligned with extending rule */}
                <div className="flex items-baseline gap-8 mb-16 lg:mb-20 reveal">
                    <h2 className="heading-2 text-neutral-dark whitespace-nowrap">
                        Academic Departments
                    </h2>
                    <div className="hidden lg:block flex-1 h-px bg-neutral-200 translate-y-[-4px]" />
                </div>

                {/* Academic index — vertical list */}
                <div className="border-t border-neutral-200">
                    {departments.map((dept, index) => (
                        <Link
                            key={dept.slug}
                            to={`/department/${dept.slug}`}
                            className="group grid grid-cols-1 lg:grid-cols-[50px_70px_1fr_1fr] items-baseline gap-3 lg:gap-8 py-7 lg:py-8 border-b border-neutral-200 hover:bg-warm-50 transition-all duration-400 px-3 lg:px-6 -mx-3 lg:-mx-6 reveal"
                        >
                            {/* Index number */}
                            <span className="hidden lg:block text-[13px] text-neutral-300 font-medium tabular-nums">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Code */}
                            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/50">
                                {dept.code}
                            </span>

                            {/* Name */}
                            <h3 className="font-serif text-xl lg:text-[1.4rem] font-semibold text-neutral-dark group-hover:text-primary group-hover:translate-x-1 transition-all duration-400 leading-snug">
                                {dept.name}
                            </h3>

                            {/* Tagline + arrow */}
                            <div className="flex items-baseline justify-between gap-6">
                                <p className="text-neutral-500 text-[13px] leading-relaxed">
                                    {dept.tagline}
                                </p>
                                <span className="shrink-0 text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-sm">
                                    →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;
