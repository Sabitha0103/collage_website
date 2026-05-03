import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DepartmentData } from '../../data/departments';

interface DepartmentCourseStructureProps {
    dept: DepartmentData;
}

/* ── Course Structure data per department ─────────────── */

interface CourseDocument {
    description: string;
    link: string;
}

interface CourseSection {
    key: string;
    title: string;
    subtitle?: string;
    documents: CourseDocument[];
}

const courseData: Record<string, CourseSection[]> = {
    cse: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_CSE',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: 'https://www.srit.ac.in/computer-science-engineering/cse-syllabus/' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: 'https://www.srit.ac.in/computer-science-engineering/cse-syllabus/' },
                { description: 'Course Structure - SRIT R20', link: 'https://www.srit.ac.in/computer-science-engineering/cse-syllabus/' },
                { description: 'Course Structure - SRIT R23', link: 'https://www.srit.ac.in/computer-science-engineering/cse-syllabus/' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
                { description: 'Academic Calendar 2024-25', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (I Year)', link: '#' },
                { description: 'Course Outcomes - R20 Regulation (II Year)', link: '#' },
                { description: 'Course Outcomes - R20 Regulation (III Year)', link: '#' },
                { description: 'Course Outcomes - R20 Regulation (IV Year)', link: '#' },
                { description: 'Course Outcomes - R23 Regulation (I Year)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - I Year (2025-26)', link: '#' },
                { description: 'Time Table - II Year (2025-26)', link: '#' },
                { description: 'Time Table - III Year (2025-26)', link: '#' },
                { description: 'Time Table - IV Year (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation (All Semesters)', link: '#' },
                { description: 'Lesson Plans - R23 Regulation (All Semesters)', link: '#' },
            ],
        },
    ],
    csm: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_CSM',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: '#' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: '#' },
                { description: 'Course Structure - SRIT R20', link: '#' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
                { description: 'Course Outcomes - R23 Regulation (I Year)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
                { description: 'Lesson Plans - R23 Regulation', link: '#' },
            ],
        },
    ],
    ece: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_ECE',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: 'https://www.srit.ac.in/electronics-communication-engineering/ece-syllabus/' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: 'https://www.srit.ac.in/electronics-communication-engineering/ece-syllabus/' },
                { description: 'Course Structure - SRIT R20', link: 'https://www.srit.ac.in/electronics-communication-engineering/ece-syllabus/' },
                { description: 'Course Structure - SRIT R23', link: 'https://www.srit.ac.in/electronics-communication-engineering/ece-syllabus/' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
                { description: 'Course Outcomes - R23 Regulation (I Year)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
                { description: 'Lesson Plans - R23 Regulation', link: '#' },
            ],
        },
    ],
    eee: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_EEE',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: 'https://www.srit.ac.in/eee/eee-syllabus/' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: 'https://www.srit.ac.in/eee/eee-syllabus/' },
                { description: 'Course Structure - SRIT R20', link: 'https://www.srit.ac.in/eee/eee-syllabus/' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
            ],
        },
    ],
    mec: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_MEC',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: 'https://www.srit.ac.in/mec/mec-syllabus/' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: 'https://www.srit.ac.in/mec/mec-syllabus/' },
                { description: 'Course Structure - SRIT R20', link: 'https://www.srit.ac.in/mec/mec-syllabus/' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
            ],
        },
    ],
    cad: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_CAD',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: '#' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: '#' },
                { description: 'Course Structure - SRIT R20', link: '#' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
            ],
        },
    ],
    civil: [
        {
            key: 'regulations',
            title: 'Regulations & Syllabus',
            subtitle: 'Academic Regulations & Syllabus_CIVIL',
            documents: [
                { description: 'Academic Regulations of B. Tech. Program - SRIT R20', link: 'https://www.srit.ac.in/civil-engineering/civ-syllabus/' },
                { description: 'Academic Regulations of B. Tech. Program - SRIT R23', link: 'https://www.srit.ac.in/civil-engineering/civ-syllabus/' },
                { description: 'Course Structure - SRIT R20', link: 'https://www.srit.ac.in/civil-engineering/civ-syllabus/' },
            ],
        },
        {
            key: 'calendar',
            title: 'Academic Calendar',
            documents: [
                { description: 'Academic Calendar 2025-26 (Odd Semester)', link: '#' },
                { description: 'Academic Calendar 2025-26 (Even Semester)', link: '#' },
            ],
        },
        {
            key: 'outcomes',
            title: 'Course Outcomes',
            documents: [
                { description: 'Course Outcomes - R20 Regulation (All Years)', link: '#' },
            ],
        },
        {
            key: 'timetables',
            title: 'Time Tables',
            documents: [
                { description: 'Time Table - All Years (2025-26)', link: '#' },
            ],
        },
        {
            key: 'lessonplans',
            title: 'Lesson Plans',
            documents: [
                { description: 'Lesson Plans - R20 Regulation', link: '#' },
            ],
        },
    ],
};

/* ── Component ─────────────────────────────────────────── */

const DepartmentCourseStructure: React.FC<DepartmentCourseStructureProps> = ({ dept }) => {
    const [openSection, setOpenSection] = useState<string | null>('regulations');

    const sections = courseData[dept.slug] || courseData['cse'];

    const toggleSection = (key: string) => {
        setOpenSection((prev) => (prev === key ? null : key));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: '#F85E00' }}>
                        {dept.code} · Academics
                    </span>
                    <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: '#0A0903' }}>
                    COURSE STRUCTURE
                </h2>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-3">
                {sections.map((section) => {
                    const isOpen = openSection === section.key;
                    return (
                        <div
                            key={section.key}
                            className="rounded-xl overflow-hidden transition-all duration-300"
                            style={{
                                border: isOpen ? '1px solid rgba(248, 94, 0, 0.15)' : '1px solid rgba(10, 9, 3, 0.06)',
                                boxShadow: isOpen ? '0 4px 20px rgba(248, 94, 0, 0.08)' : '0 1px 4px rgba(0,0,0,0.03)',
                            }}
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleSection(section.key)}
                                className="w-full flex items-center justify-between px-6 py-4 lg:px-8 lg:py-5 transition-colors duration-300"
                                style={{ background: '#0A0903' }}
                                onMouseEnter={(e) => {
                                    if (!isOpen) e.currentTarget.style.background = '#1a1812';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#0A0903';
                                }}
                            >
                                <h3
                                    className="font-serif text-base lg:text-lg font-semibold"
                                    style={{ color: '#F85E00' }}
                                >
                                    {section.title}
                                </h3>
                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0 ml-4"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5 8L10 13L15 8" stroke="#FFB563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.span>
                            </button>

                            {/* Accordion Content */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                        style={{ background: 'white' }}
                                    >
                                        {section.subtitle && (
                                            <div className="px-6 pt-4 pb-2 lg:px-8">
                                                <p className="text-xs text-neutral-400">
                                                    {section.subtitle}
                                                </p>
                                            </div>
                                        )}

                                        {/* Data Table */}
                                        <div className="px-4 lg:px-6 pb-5 overflow-x-auto custom-scrollbar">
                                            <table className="w-full min-w-[500px] text-left">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider"
                                                            style={{
                                                                background: '#F85E00',
                                                                color: 'white',
                                                                borderRight: '1px solid rgba(255,255,255,0.15)',
                                                            }}
                                                        >
                                                            Description
                                                        </th>
                                                        <th
                                                            className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-center"
                                                            style={{
                                                                background: '#F85E00',
                                                                color: 'white',
                                                                width: '180px',
                                                            }}
                                                        >
                                                            View/Download
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {section.documents.map((doc, di) => (
                                                        <tr
                                                            key={di}
                                                            className="transition-colors duration-200"
                                                            style={{
                                                                borderBottom: '1px solid rgba(248, 94, 0, 0.06)',
                                                                background: di % 2 === 0 ? 'rgba(255, 250, 243, 0.5)' : 'white',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.background = 'rgba(255, 210, 157, 0.15)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.background = di % 2 === 0 ? 'rgba(255, 250, 243, 0.5)' : 'white';
                                                            }}
                                                        >
                                                            <td className="px-3 py-3 text-[13px] text-neutral-700">
                                                                {doc.description}
                                                            </td>
                                                            <td className="px-3 py-3 text-center">
                                                                <a
                                                                    href={doc.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200"
                                                                    style={{ color: '#F85E00' }}
                                                                    onMouseEnter={(e) => {
                                                                        e.currentTarget.style.color = '#FFB563';
                                                                    }}
                                                                    onMouseLeave={(e) => {
                                                                        e.currentTarget.style.color = '#F85E00';
                                                                    }}
                                                                >
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <path d="M7 1.75V9.625M7 9.625L4.375 7M7 9.625L9.625 7M2.625 11.375H11.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    View/Download
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DepartmentCourseStructure;
