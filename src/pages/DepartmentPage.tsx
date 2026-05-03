import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartmentBySlug } from '../data/departments';
import DepartmentAbout from '../components/department/DepartmentAbout';
import DepartmentFaculty from '../components/department/DepartmentFaculty';
import DepartmentStudents from '../components/department/DepartmentStudents';
import DepartmentGallery from '../components/department/DepartmentGallery';
import DepartmentCourseStructure from '../components/department/DepartmentCourseStructure';

const sidebarItems = [
    { key: 'about', label: 'About Us', icon: '' },
    { key: 'course', label: 'Course Structure', icon: '' },
    { key: 'program', label: 'Program', icon: '' },
    { key: 'faculty', label: 'Faculty', icon: '' },
    { key: 'students', label: 'Students', icon: '' },
    { key: 'gallery', label: 'Gallery', icon: '' },
];

const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dept = getDepartmentBySlug(slug || '');
    const [activeTab, setActiveTab] = useState('about');

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#FFFAF3' }}>
                <div className="text-center">
                    <h1 className="font-serif text-4xl font-semibold mb-4" style={{ color: '#0A0903' }}>
                        Department Not Found
                    </h1>
                    <Link to="/" className="font-semibold" style={{ color: '#F85E00' }}>
                        ← Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <DepartmentAbout dept={dept} />;
            case 'faculty':
                return <DepartmentFaculty dept={dept} />;
            case 'course':
                return <DepartmentCourseStructure dept={dept} />;
            case 'program':
            case 'students':
                return <DepartmentStudents />;
            case 'gallery':
                return <DepartmentGallery dept={dept} />;
            default:
                return <DepartmentAbout dept={dept} />;
        }
    };

    return (
        <div className="min-h-screen" style={{ background: '#FFFAF3' }}>
            {/* Top Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
                style={{
                    background: 'rgba(255, 250, 243, 0.92)',
                    borderColor: 'rgba(248, 94, 0, 0.08)',
                }}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-[68px]">
                        <div className="flex items-center gap-4">
                            <Link to="/" className="font-serif text-xl font-bold" style={{ color: '#F85E00' }}>
                                SRIT
                            </Link>
                            <span className="hidden sm:block w-px h-6" style={{ background: 'rgba(10,9,3,0.12)' }} />
                            <span className="hidden sm:block text-xs uppercase" style={{ color: '#0A0903', opacity: 0.5 }}>
                                {dept.code} Department
                            </span>
                        </div>
                        <Link to="/departments" className="hidden sm:flex text-sm font-medium" style={{ color: '#F85E00' }}>
                            ← All Departments
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pt-[68px] flex">
                {/* Sidebar */}
                <aside
                    className="hidden lg:flex flex-col fixed top-[68px] left-0 bottom-0 w-[270px] z-30 overflow-y-auto"
                    style={{ background: '#FFD29D' }}
                >
                    <div className="px-6 pt-8 pb-6">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase"
                            style={{ background: 'rgba(248,94,0,0.15)', color: '#0A0903' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F85E00' }} />
                            {dept.code}
                        </div>

                        <h2 className="font-serif text-lg font-semibold mt-4" style={{ color: '#0A0903' }}>
                            {dept.name}
                        </h2>
                    </div>

                    <div className="mx-6 mb-4" style={{ borderTop: '1px solid rgba(10,9,3,0.1)' }} />

                    <nav className="px-4 flex-1">
                        <p className="px-3 text-[10px] uppercase mb-4" style={{ color: 'rgba(10,9,3,0.5)' }}>
                            Menu
                        </p>

                        {sidebarItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setActiveTab(item.key)}
                                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-300"
                                style={{
                                    background: activeTab === item.key ? '#FFB563' : 'transparent',
                                    color: '#0A0903',
                                    fontWeight: activeTab === item.key ? 600 : 400,
                                }}
                            >
                                <span className="text-[13px]">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Bottom Stats */}
                    <div className="px-6 py-6 mt-auto" style={{ borderTop: '1px solid rgba(10,9,3,0.1)' }}>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg p-3" style={{ background: 'rgba(248,94,0,0.08)' }}>
                                <p className="text-[10px] uppercase mb-1" style={{ color: 'rgba(10,9,3,0.6)' }}>Faculty</p>
                                <p className="text-sm font-semibold" style={{ color: '#F85E00' }}>{dept.stats.faculty}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(248,94,0,0.08)' }}>
                                <p className="text-[10px] uppercase mb-1" style={{ color: 'rgba(10,9,3,0.6)' }}>Labs</p>
                                <p className="text-sm font-semibold" style={{ color: '#F85E00' }}>{dept.stats.labs}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(248,94,0,0.08)' }}>
                                <p className="text-[10px] uppercase mb-1" style={{ color: 'rgba(10,9,3,0.6)' }}>Students</p>
                                <p className="text-sm font-semibold" style={{ color: '#F85E00' }}>{dept.stats.students}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(248,94,0,0.08)' }}>
                                <p className="text-[10px] uppercase mb-1" style={{ color: 'rgba(10,9,3,0.6)' }}>Placement</p>
                                <p className="text-sm font-semibold" style={{ color: '#F85E00' }}>{dept.stats.placement}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-[270px] min-h-screen">
                    <section className="relative overflow-hidden" style={{ minHeight: '260px' }}>
                        <div className="absolute inset-0">
                            <img src={dept.image} alt={dept.fullName} className="w-full h-full object-cover" />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,9,3,0.7), rgba(10,9,3,0.5))' }} />
                        </div>
                        <div className="relative z-10 px-8 py-16">
                            <h1 className="font-serif text-3xl font-bold text-white">{dept.fullName}</h1>
                            <p className="text-white/60 text-sm mt-4">{dept.tagline}</p>
                        </div>
                    </section>

                    <div className="px-6 py-10">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DepartmentPage;