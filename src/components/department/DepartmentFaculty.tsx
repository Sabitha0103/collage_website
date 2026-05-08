import React from 'react';
import type { DepartmentData } from '../../data/departments';

interface DepartmentFacultyProps {
    dept: DepartmentData;
}

const avatarPlaceholder = (name: string) => {
    // Filter out single-character tokens (like 'K.') but keep meaningful words
    const initials = name
        .split(' ')
        .filter((n) => n.length > 1 && !n.endsWith('.'))
        .slice(0, 2)
        .map((n) => n[0])
        .join('');
    return initials || name.slice(0, 2).toUpperCase();
};

const DepartmentFaculty: React.FC<DepartmentFacultyProps> = ({ dept }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12">
                <h2 className="font-serif text-4xl font-semibold text-neutral-dark mb-4">
                    Our Faculty
                </h2>
                <p className="text-neutral-700 text-lg max-w-2xl leading-relaxed">
                    The {dept.code} department is proud to be home to {dept.stats.faculty} highly qualified faculty members dedicated to academic excellence, research, and mentoring the next generation of engineers.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {dept.faculty.map((faculty, i) => (
                    <div key={i} className="group">
                        <div className="aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm mb-4 flex items-center justify-center">
                            {faculty.image ? (
                                <img
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center text-5xl font-serif font-bold transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #FFD29D 0%, #FFB563 100%)',
                                        color: '#F85E00',
                                    }}
                                >
                                    {avatarPlaceholder(faculty.name)}
                                </div>
                            )}
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-1">
                            {faculty.name}
                        </h3>
                        <p className="text-primary text-base font-medium mb-1">
                            {faculty.designation}
                        </p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-1">
                            {faculty.specialization}
                        </p>
                        <p className="text-neutral-500 text-xs font-medium">
                            {faculty.qualification}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://www.srit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 rounded-[6px] text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-300"
                >
                    View Full Directory
                </a>
            </div>
        </div>
    );
};

export default DepartmentFaculty;
