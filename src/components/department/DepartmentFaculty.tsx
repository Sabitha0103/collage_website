import React from 'react';
import type { DepartmentData } from '../../data/departments';

interface DepartmentFacultyProps {
    dept: DepartmentData;
}

const mockFaculty = [
    {
        name: 'Dr. Sarah Venkata',
        designation: 'Professor & Head',
        specialization: 'Artificial Intelligence & Machine Learning',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. Ramesh Kumar',
        designation: 'Professor',
        specialization: 'Cloud Computing & Distributed Systems',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. Anjali Desai',
        designation: 'Associate Professor',
        specialization: 'Data Science & Big Data Analytics',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Prof. Kiran Reddy',
        designation: 'Assistant Professor',
        specialization: 'Cybersecurity & Cryptography',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const DepartmentFaculty: React.FC<DepartmentFacultyProps> = ({ dept }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-neutral-dark mb-4">
                    Our Faculty
                </h2>
                <p className="text-neutral-600 max-w-2xl leading-relaxed">
                    The {dept.code} department is proud to be home to {dept.stats.faculty} highly qualified faculty members dedicated to academic excellence, research, and mentoring the next generation of engineers.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {mockFaculty.map((faculty, i) => (
                    <div key={i} className="group">
                        <div className="aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm mb-4">
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-neutral-dark mb-1">
                            {faculty.name}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-1">
                            {faculty.designation}
                        </p>
                        <p className="text-neutral-500 text-xs leading-relaxed">
                            {faculty.specialization}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 rounded-[6px] text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-300">
                    View Full Directory
                </button>
            </div>
        </div>
    );
};

export default DepartmentFaculty;
