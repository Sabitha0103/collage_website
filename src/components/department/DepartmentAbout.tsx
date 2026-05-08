import React from 'react';
import { motion } from 'framer-motion';
import type { DepartmentData } from '../../data/departments';

interface DepartmentAboutProps {
    dept: DepartmentData;
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const DepartmentAbout: React.FC<DepartmentAboutProps> = ({ dept }) => {
    return (
        <div className="space-y-8">
            {/* ── About Title Section ──────────────────────────── */}
            <motion.section
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div
                    className="relative overflow-hidden rounded-2xl px-8 py-10 lg:px-12 lg:py-14"
                    style={{
                        background: 'linear-gradient(135deg, #F85E00 0%, #FFB563 100%)',
                        boxShadow: '0 8px 32px rgba(248, 94, 0, 0.18)',
                    }}
                >
                    {/* Decorative circles */}
                    <div
                        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20"
                        style={{ background: '#FFD29D' }}
                    />
                    <div
                        className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-15"
                        style={{ background: '#FFD29D' }}
                    />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] rounded-full" style={{ background: 'rgba(255, 255, 255, 0.5)' }} />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/70">
                                About
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">
                            About the Department
                        </h2>
                        <p className="text-white/80 text-base mt-4 max-w-2xl leading-relaxed">
                            {dept.description[0]}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* ── Programme Overview ───────────────────────────── */}
            <motion.section
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Programme Overview
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #0A0903 0%, transparent 100%)' }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Eligibility */}
                    <div
                        className="rounded-2xl px-6 py-6"
                        style={{
                            background: 'white',
                            border: '1px solid rgba(248, 94, 0, 0.08)',
                            boxShadow: '0 2px 12px rgba(248, 94, 0, 0.04)',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                                style={{ background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F85E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h4 className="font-serif text-lg font-semibold" style={{ color: '#0A0903' }}>Eligibility</h4>
                        </div>
                        <p className="text-neutral-700 text-sm leading-relaxed">{dept.eligibility}</p>
                    </div>
                    {/* Intake & Accreditation */}
                    <div
                        className="rounded-2xl px-6 py-6"
                        style={{
                            background: 'white',
                            border: '1px solid rgba(248, 94, 0, 0.08)',
                            boxShadow: '0 2px 12px rgba(248, 94, 0, 0.04)',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                                style={{ background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F85E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <h4 className="font-serif text-lg font-semibold" style={{ color: '#0A0903' }}>Intake & Accreditation</h4>
                        </div>
                        <ul className="text-neutral-700 text-sm leading-relaxed space-y-1">
                            <li><span className="font-medium">Intake:</span> {dept.intake} seats per year</li>
                            <li><span className="font-medium">Duration:</span> 4 Years (8 Semesters)</li>
                            <li><span className="font-medium">Affiliation:</span> JNTU Anantapur</li>
                            <li><span className="font-medium">Accreditation:</span> {dept.accreditation}</li>
                        </ul>
                    </div>
                </div>
                {/* Description paragraphs beyond the first — the first paragraph is shown in the About banner above */}
                {dept.description.slice(1).map((para, i) => (
                    <p key={i} className="text-neutral-700 text-base leading-relaxed mt-4">
                        {para}
                    </p>
                ))}
                {/* Highlights */}
                {dept.highlights.length > 0 && (
                    <ul className="mt-6 space-y-2">
                        {dept.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-neutral-700 text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F85E00' }} />
                                {h}
                            </li>
                        ))}
                    </ul>
                )}
            </motion.section>

            <motion.section
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Vision
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #0A0903 0%, transparent 100%)' }} />
                </div>
                <div
                    className="rounded-2xl px-8 py-8 lg:px-10 lg:py-10"
                    style={{
                        background: 'white',
                        border: '1px solid rgba(248, 94, 0, 0.08)',
                        boxShadow: '0 2px 16px rgba(248, 94, 0, 0.05)',
                    }}
                >
                    <div className="flex items-start gap-5">
                        <div
                            className="hidden sm:flex items-center justify-center shrink-0 w-12 h-12 rounded-xl"
                            style={{ background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)' }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F85E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4M12 8h.01" />
                            </svg>
                        </div>
                        <p className="text-[16px] lg:text-lg leading-[1.85] text-neutral-800">
                            {dept.vision}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* ── Mission ──────────────────────────────────────── */}
            <motion.section
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Mission
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #0A0903 0%, transparent 100%)' }} />
                </div>

                <div className="flex flex-col gap-3">
                    {dept.mission.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={2.5 + index * 0.15}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="group relative rounded-2xl overflow-hidden transition-all duration-400"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(248, 94, 0, 0.06)',
                                boxShadow: '0 1px 8px rgba(0,0,0,0.03)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 8px 28px rgba(248, 94, 0, 0.12)';
                                e.currentTarget.style.borderColor = '#FFB563';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 1px 8px rgba(0,0,0,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(248, 94, 0, 0.06)';
                            }}
                        >
                            <div className="px-5 py-4 lg:px-6 lg:py-5">
                                <div className="flex items-start gap-4">
                                    <span
                                        className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-[14px] font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)',
                                            color: '#F85E00',
                                            boxShadow: '0 2px 8px rgba(255, 181, 99, 0.3)',
                                        }}
                                    >
                                        {item.id}
                                    </span>
                                    <p className="text-[18px] leading-[1.6] text-neutral-900 pt-0.5">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ── Goals ────────────────────────────────────────── */}
            <motion.section
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Goals
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #F85E00 0%, transparent 100%)' }} />
                </div>
                <div
                    className="rounded-2xl px-8 py-8 lg:px-10 lg:py-10 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 210, 157, 0.15) 0%, rgba(255, 181, 99, 0.08) 100%)',
                        border: '1px solid rgba(248, 94, 0, 0.08)',
                    }}
                >
                    {/* Accent left border */}
                    <div
                        className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
                        style={{ background: 'linear-gradient(180deg, #F85E00 0%, #FFD29D 100%)' }}
                    />
                    <div className="pl-4">
                        <p className="text-[16px] lg:text-lg leading-[1.85] text-neutral-800">
                            {dept.goals}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* ── Message from HOD ─────────────────────────────── */}
            <motion.section
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Message from HOD
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #F85E00 0%, transparent 100%)' }} />
                </div>

                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: 'white',
                        border: '1px solid rgba(248, 94, 0, 0.08)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                    }}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* HOD Photo */}
                        {dept.hodMessage.image && (
                            <div className="md:w-[220px] lg:w-[260px] shrink-0 relative overflow-hidden">
                                <img
                                    src={dept.hodMessage.image}
                                    alt={dept.hodMessage.name}
                                    className="w-full h-full object-cover"
                                    style={{ minHeight: '260px' }}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(10, 9, 3, 0.6) 0%, transparent 50%)',
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden">
                                    <h4 className="font-serif text-xl font-semibold text-white">
                                        {dept.hodMessage.name}
                                    </h4>
                                    <p className="text-white/80 text-sm mt-0.5">
                                        {dept.hodMessage.designation}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* HOD Content */}
                        <div className="flex-1 px-8 py-8 lg:px-10 lg:py-10 flex flex-col justify-center">
                            <div className={`${dept.hodMessage.image ? 'hidden md:block' : 'block'} mb-5`}>
                                <h4 className="font-serif text-2xl font-semibold" style={{ color: '#0A0903' }}>
                                    {dept.hodMessage.name}
                                </h4>
                                <p className="text-base mt-1 font-medium" style={{ color: '#F85E00' }}>
                                    {dept.hodMessage.designation}
                                </p>
                            </div>

                            {/* Quote icon */}
                            <div className="mb-4">
                                <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                                    <path d="M0 24V14.4C0 11.7333 0.466667 9.33333 1.4 7.2C2.33333 5.06667 3.6 3.26667 5.2 1.8C6.8 0.333333 8.6 -0.4 10.6 0.2L9.8 3.6C8.6 3.93333 7.53333 4.73333 6.6 6C5.66667 7.26667 5.13333 8.66667 5 10.2H10V24H0ZM18 24V14.4C18 11.7333 18.4667 9.33333 19.4 7.2C20.3333 5.06667 21.6 3.26667 23.2 1.8C24.8 0.333333 26.6 -0.4 28.6 0.2L27.8 3.6C26.6 3.93333 25.5333 4.73333 24.6 6C23.6667 7.26667 23.1333 8.66667 23 10.2H28V24H18Z" fill="#FFD29D" fillOpacity="0.5" />
                                </svg>
                            </div>

                            <p className="text-[16px] lg:text-[17px] leading-[1.85] text-neutral-700 italic">
                                {dept.hodMessage.message}
                            </p>

                            {/* Signature accent */}
                            <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: '1px solid rgba(248, 94, 0, 0.06)' }}>
                                <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                                <span className="text-sm font-semibold" style={{ color: '#F85E00' }}>
                                    {dept.hodMessage.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ── Research Areas ────────────────────────────────── */}
            <motion.section
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                        Research Areas
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #F85E00 0%, transparent 100%)' }} />
                </div>

                <div className="flex flex-wrap gap-3">
                    {dept.researchAreas.map((area, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 cursor-default"
                            style={{
                                background: 'white',
                                color: '#0A0903',
                                border: '1px solid rgba(248, 94, 0, 0.1)',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.02)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#FFD29D';
                                e.currentTarget.style.borderColor = '#FFB563';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.borderColor = 'rgba(248, 94, 0, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F85E00' }} />
                            {area}
                        </span>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default DepartmentAbout;
