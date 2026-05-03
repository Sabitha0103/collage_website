import React from 'react';
import type { DepartmentData } from '../../data/departments';

interface DepartmentProjectsProps {
    dept: DepartmentData;
}

const mockProjects = [
    {
        title: 'Autonomous Drone Navigation System',
        category: 'Student Project',
        description: 'A deep learning-based navigation system for drones in GPS-denied environments.',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2023'
    },
    {
        title: 'Smart Healthcare Monitoring Framework',
        category: 'Faculty Research',
        description: 'An IoT-enabled framework for remote continuous health monitoring of elderly patients.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2023'
    },
    {
        title: 'Blockchain for Academic Credentialing',
        category: 'Funded Project',
        description: 'A decentralized application for verifying and issuing academic certificates securely.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f4bec4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2024'
    }
];

const DepartmentProjects: React.FC<DepartmentProjectsProps> = ({ dept }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-neutral-dark mb-4">
                    Research & Projects
                </h2>
                <p className="text-neutral-600 max-w-2xl leading-relaxed">
                    Innovation is at the core of the {dept.code} department. Explore some of the recent groundbreaking projects and research conducted by our students and faculty.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockProjects.map((project, i) => (
                    <div key={i} className="group border border-neutral-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video overflow-hidden bg-neutral-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="label-caps text-primary text-[0.65rem]">
                                    {project.category}
                                </span>
                                <span className="text-neutral-400 text-xs font-medium">
                                    {project.year}
                                </span>
                            </div>
                            <h3 className="font-serif text-xl font-medium text-neutral-dark mb-3 line-clamp-2">
                                {project.title}
                            </h3>
                            <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-neutral-100">
                                <a href="#" className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors inline-flex items-center">
                                    Read Case Study <span className="ml-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentProjects;
