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
        <div className="space-y-16">
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
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
                                About
                            </span>
                        </div>
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white leading-tight">
                            About the Department
                        </h2>
                        <p className="text-white/75 text-sm mt-4 max-w-2xl leading-relaxed">
                            {dept.description[0]}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* ── Vision ───────────────────────────────────────── */}
            <motion.section
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-serif text-xl lg:text-2xl font-bold" style={{ color: '#0A0903' }}>
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
                        <p className="text-[15px] leading-[1.85] text-neutral-700">
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
                    <h3 className="font-serif text-xl lg:text-2xl font-bold" style={{ color: '#0A0903' }}>
                        Mission
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #0A0903 0%, transparent 100%)' }} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                            {/* Top accent bar */}
                            <div
                                className="h-1"
                                style={{
                                    background: `linear-gradient(90deg, #F85E00 ${(index + 1) * 25}%, #FFD29D 100%)`,
                                }}
                            />
                            <div className="px-6 py-6 lg:px-7 lg:py-7">
                                <div className="flex items-start gap-4">
                                    <span
                                        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)',
                                            color: '#F85E00',
                                            boxShadow: '0 2px 8px rgba(255, 181, 99, 0.3)',
                                        }}
                                    >
                                        {item.id}
                                    </span>
                                    <p className="text-[14px] leading-[1.8] text-neutral-600 pt-1.5">
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
                    <h3 className="font-serif text-xl lg:text-2xl font-bold" style={{ color: '#0A0903' }}>
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
                        <p className="text-[15px] leading-[1.85] text-neutral-700">
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
                    <h3 className="font-serif text-xl lg:text-2xl font-bold" style={{ color: '#0A0903' }}>
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
                                <h4 className="font-serif text-lg font-semibold text-white">
                                    {dept.hodMessage.name}
                                </h4>
                                <p className="text-white/60 text-xs mt-0.5">
                                    {dept.hodMessage.designation}
                                </p>
                            </div>
                        </div>

                        {/* HOD Content */}
                        <div className="flex-1 px-8 py-8 lg:px-10 lg:py-10 flex flex-col justify-center">
                            <div className="hidden md:block mb-5">
                                <h4 className="font-serif text-xl font-semibold" style={{ color: '#0A0903' }}>
                                    {dept.hodMessage.name}
                                </h4>
                                <p className="text-sm mt-1" style={{ color: '#F85E00' }}>
                                    {dept.hodMessage.designation}
                                </p>
                            </div>

                            {/* Quote icon */}
                            <div className="mb-4">
                                <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                                    <path d="M0 24V14.4C0 11.7333 0.466667 9.33333 1.4 7.2C2.33333 5.06667 3.6 3.26667 5.2 1.8C6.8 0.333333 8.6 -0.4 10.6 0.2L9.8 3.6C8.6 3.93333 7.53333 4.73333 6.6 6C5.66667 7.26667 5.13333 8.66667 5 10.2H10V24H0ZM18 24V14.4C18 11.7333 18.4667 9.33333 19.4 7.2C20.3333 5.06667 21.6 3.26667 23.2 1.8C24.8 0.333333 26.6 -0.4 28.6 0.2L27.8 3.6C26.6 3.93333 25.5333 4.73333 24.6 6C23.6667 7.26667 23.1333 8.66667 23 10.2H28V24H18Z" fill="#FFD29D" fillOpacity="0.5" />
                                </svg>
                            </div>

                            <p className="text-[14.5px] leading-[1.85] text-neutral-600 italic">
                                {dept.hodMessage.message}
                            </p>

                            {/* Signature accent */}
                            <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: '1px solid rgba(248, 94, 0, 0.06)' }}>
                                <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                                <span className="text-xs font-semibold" style={{ color: '#F85E00' }}>
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
                    <h3 className="font-serif text-xl lg:text-2xl font-bold" style={{ color: '#0A0903' }}>
                        Research Areas
                    </h3>
                    <span className="flex-1 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #F85E00 0%, transparent 100%)' }} />
                </div>

                <div className="flex flex-wrap gap-3">
                    {dept.researchAreas.map((area, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
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
