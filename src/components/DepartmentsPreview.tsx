import React from 'react';

interface Department {
    name: string;
    code: string;
    description: string;
    icon: string;
    link: string;
}

const departments: Department[] = [
    {
        name: 'Computer Science & Engineering',
        code: 'CSE',
        description: 'Computer Science and Engineering animates our world, driving knowledge creation and innovation that touches every aspect of our lives.',
        icon: '◈',
        link: 'https://www.srit.ac.in/computer-science-engineering-2/',
    },
    {
        name: 'CSE — AI & Machine Learning',
        code: 'CSM',
        description: 'Specialization in artificial intelligence and machine learning, preparing students for the future of intelligent computing and automation.',
        icon: '◇',
        link: 'https://www.srit.ac.in/cse-artificial-intelligence-machine-learning-2/',
    },
    {
        name: 'Electronics & Communications',
        code: 'ECE',
        description: 'Driving knowledge creation and innovation in communications devices, embedded systems, signal processing, and VLSI design.',
        icon: '△',
        link: 'https://www.srit.ac.in/electronics-communication-engineering-2/',
    },
    {
        name: 'Electrical & Electronics',
        code: 'EEE',
        description: 'Provides students with fundamental knowledge in core disciplines such as Electrical Circuits, Electrical Machines, and power systems.',
        icon: '○',
        link: 'https://www.srit.ac.in/eee-2/',
    },
    {
        name: 'Mechanical Engineering',
        code: 'MEC',
        description: 'Perhaps the most diverse of the engineering disciplines, encompassing key elements of aerospace, electrical, civil, and many other fields.',
        icon: '□',
        link: 'https://www.srit.ac.in/mec-2/',
    },
    {
        name: 'CSE — AI & Data Science',
        code: 'CAD',
        description: 'Specialization in artificial intelligence and data science, equipping students with cutting-edge skills in big data analytics and AI systems.',
        icon: '◆',
        link: 'https://www.srit.ac.in/cse-data-science/',
    },
    {
        name: 'Civil Engineering',
        code: 'CIV',
        description: 'One of the oldest branches of engineering that enhances the standard of living of a nation through infrastructural development.',
        icon: '▽',
        link: 'https://www.srit.ac.in/civil-engineering-2/',
    },
];

const DepartmentsPreview: React.FC = () => {
    return (
        <section id="departments" className="py-28 lg:py-36 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold font-sans mb-4 block">
                        Academic Departments
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">
                        Successfully Complete Your <br className="hidden sm:block" />
                        <span className="italic font-medium">Degree at SRIT</span>
                    </h2>
                    <p className="text-neutral-500 leading-relaxed font-sans">
                        Our departments are led by certified, experienced faculty dedicated
                        to developing industry-ready engineers through rigorous academics,
                        hands-on learning, and real-world exposure.
                    </p>
                </div>

                {/* Departments Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept) => (
                        <a
                            key={dept.code}
                            href={dept.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-8 lg:p-10 border border-neutral-300/60 rounded-sm hover:border-primary/30 hover:shadow-lg transition-all duration-500 bg-white"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-primary text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    {dept.icon}
                                </div>
                                <span className="text-xs font-semibold text-neutral-500 tracking-widest uppercase bg-neutral-100 px-3 py-1 rounded-full">
                                    {dept.code}
                                </span>
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-3 group-hover:text-primary-dark transition-colors duration-300">
                                {dept.name}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-sans">
                                {dept.description}
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                                Explore Department
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </a>
                    ))}
                </div>

                {/* Courses CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.srit.ac.in/courses-offered/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide hover:text-primary-dark transition-colors duration-300 group"
                    >
                        View All Courses Offered
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsPreview;
