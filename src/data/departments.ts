export interface MissionItem {
    id: string;
    text: string;
}

export interface HodMessage {
    name: string;
    designation: string;
    message: string;
    image: string;
}

export interface DepartmentData {
    slug: string;
    code: string;
    name: string;
    fullName: string;
    tagline: string;
    description: string[];
    highlights: string[];
    image: string;
    researchAreas: string[];
    stats: {
        faculty: string;
        labs: string;
        students: string;
        placement: string;
    };
    vision: string;
    mission: MissionItem[];
    goals: string;
    hodMessage: HodMessage;
}

export const departments: DepartmentData[] = [
    {
        slug: 'cse',
        code: 'CSE',
        name: 'Computer Science & Engineering',
        fullName: 'Department of Computer Science & Engineering',
        tagline: 'Knowledge creation and innovation driving every aspect of modern life.',
        description: [
            'Computer Science and Engineering animates our world, driving knowledge creation and innovation that touches every aspect of our lives. The department at SRIT prepares students with a strong foundation in algorithms, data structures, operating systems, databases, and software engineering.',
            'Students gain practical experience through industry-level internship programs and exposure to current technologies. The curriculum is aligned with industry standards, ensuring graduates are equipped for careers in software development, systems architecture, and emerging technology domains.',
        ],
        highlights: [
            'Industry-aligned curriculum with real-world project experience',
            'Advanced internship programs with corporate-level exposure',
            'Certified faculty with industry and academic experience',
        ],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Artificial Intelligence',
            'Cybersecurity',
            'Cloud Computing',
            'Data Science',
        ],
        stats: {
            faculty: '42+',
            labs: '8',
            students: '750+',
            placement: '96%',
        },
        vision: 'To evolve as a leading department by offering best comprehensive teaching and learning practices for students to be self-competent technocrats with professional ethics and social responsibilities.',
        mission: [
            {
                id: 'DM1',
                text: 'Continuous enhancement of the teaching-learning practices to gain profound knowledge in theoretical & practical aspects of computer science applications.',
            },
            {
                id: 'DM2',
                text: 'Administer training on emerging technologies and motivate the students to inculcate self-learning abilities, ethical values and social consciousness to become competent professionals.',
            },
            {
                id: 'DM3',
                text: 'Perpetual elevation of Industry-Institute interactions to facilitate the students to work on real-time problems to serve the needs of the society.',
            },
        ],
        goals: 'An SRIT graduate in CSE will lead a successful professional career in IT/ITES industry with ethical values, become a competent and responsible professional with good communication skills and leadership qualities, and engage in life-long learning acquiring new and relevant professional competencies.',
        hodMessage: {
            name: 'Dr. K. Subba Rao',
            designation: 'Head of the Department, CSE',
            message: 'The Department of Computer Science & Engineering at SRIT is committed to providing an environment that fosters academic excellence and innovation. We focus on developing competent professionals who can contribute meaningfully to the society through technology. Our faculty members are dedicated to nurturing talent and guiding students towards successful careers in the ever-evolving field of computer science.',
            image: '/csmhod.jpg',
        },
    },
    {
        slug: 'csm',
        code: 'CSM',
        name: 'CSE — AI & Machine Learning',
        fullName: 'Department of CSE (Artificial Intelligence & Machine Learning)',
        tagline: 'Preparing students for the future of intelligent computing and automation.',
        description: [
            'The CSE — AI & Machine Learning specialization prepares students for the rapidly evolving landscape of intelligent systems. The program covers core computer science fundamentals alongside specialized courses in machine learning, neural networks, natural language processing, and computer vision.',
        ],
        highlights: [
            'Hands-on experience with modern AI frameworks',
            'Industry exposure through partner organizations',
            'Project-based learning with real-world datasets',
        ],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Autonomous Systems',
        ],
        stats: {
            faculty: '18+',
            labs: '3',
            students: '240+',
            placement: '98%',
        },
        vision: 'To become a center of excellence in AI & Machine Learning education, fostering innovation and producing industry-ready professionals capable of solving complex real-world problems.',
        mission: [
            {
                id: 'M1',
                text: 'To provide quality education in AI & ML with emphasis on practical application and industry readiness.',
            },
            {
                id: 'M2',
                text: 'To foster research and innovation in cutting-edge areas of artificial intelligence and machine learning.',
            },
            {
                id: 'M3',
                text: 'To develop ethical AI practitioners who understand the societal impact of intelligent systems.',
            },
            {
                id: 'M4',
                text: 'To build industry partnerships that provide students with real-world exposure and career opportunities.',
            },
        ],
        goals: 'To produce competent AI & ML engineers who can design, develop, and deploy intelligent systems that address real-world challenges across diverse domains.',
        hodMessage: {
            name: 'Dr. P. Chitralingappa',
            designation: 'Head of the Department, CSM',
            message: 'The AI & Machine Learning department is at the forefront of technological innovation. We are committed to providing our students with the skills and knowledge needed to excel in this rapidly evolving field.',
            image: '/csmhod.jpg',
        },
    },
    {
        slug: 'ece',
        code: 'ECE',
        name: 'Electronics & Communication',
        fullName: 'Department of Electronics & Communications Engineering',
        tagline: 'Embedded systems, signal processing, VLSI design, and telecommunications.',
        description: [
            'Electronics and Communications Engineering at SRIT drives knowledge creation and innovation in communications devices, embedded systems, signal processing, and VLSI design. The department provides a comprehensive curriculum that spans analog and digital electronics, microprocessors, and communication systems.',
        ],
        highlights: [
            'Modern communication systems curriculum',
            'Industry-standard laboratory equipment',
            'Active technical competitions and research participation',
        ],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'VLSI Design',
            'Signal Processing',
            'Embedded Systems',
            'Communication Networks',
        ],
        stats: {
            faculty: '35+',
            labs: '10',
            students: '600+',
            placement: '92%',
        },
        vision: 'To become a department of excellence in Electronics and Communication and allied areas of engineering by empowering rural students with latest technological updates and human values.',
        mission: [
            {
                id: 'DM1',
                text: 'Continually improve the teaching learning and associated processes to prepare the students with problem solving skills.',
            },
            {
                id: 'DM2',
                text: 'Provide comprehensive learning experiences to imbibe industry based technical knowledge and encourage students to pursue higher studies with awareness on ethical values.',
            },
            {
                id: 'DM3',
                text: 'Nurture a strong research eco-system that facilitates quality research by faculty and students.',
            },
        ],
        goals: 'ECE graduates will work in multi-disciplinary environments with ethical & social responsibilities, acquire the latest technological skills by pursuing higher education and research, and lead teams with good leadership traits for a successful professional career.',
        hodMessage: {
            name: 'Dr. M. Venkata Rao',
            designation: 'Head of the Department, ECE',
            message: 'The ECE department is dedicated to providing an enriching learning experience that combines theoretical knowledge with practical skills in electronics and communication engineering.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    },
    {
        slug: 'eee',
        code: 'EEE',
        name: 'Electrical & Electronics',
        fullName: 'Department of Electrical & Electronics Engineering',
        tagline: 'Electrical circuits, machines, power systems, and control engineering.',
        description: [
            'The Electrical & Electronics Engineering department provides students with a wide range of fundamental knowledge in core disciplines such as Electrical Circuits, Electrical Machines, Power Systems, Control Systems, and Power Electronics.',
        ],
        highlights: [
            'Power electronics and control systems focus',
            'Practical lab sessions with modern equipment',
            'Career preparation in power and automation engineering',
        ],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Power Systems & Smart Grids',
            'Renewable Energy Integration',
            'Power Electronics',
            'Control & Automation',
        ],
        stats: {
            faculty: '28+',
            labs: '7',
            students: '450+',
            placement: '88%',
        },
        vision: 'To emerge as a premier center of learning in Electrical & Electronics Engineering with scientific quest having focus on professional ethics and human values.',
        mission: [
            {
                id: 'DM1',
                text: 'Provide academic environment conducive for high quality learning in Electrical and Electronics Engineering to ensure our graduates have successful careers.',
            },
            {
                id: 'DM2',
                text: 'Strengthen industry institute interaction to enable the students work on real time problems and encourage them to engage in lifelong learning.',
            },
            {
                id: 'DM3',
                text: 'Ensure that our students are well trained to work in a team with professional ethics and apply latest tools for the solution of engineering problems.',
            },
        ],
        goals: 'EEE graduates will have successful careers in any organization or excel in higher education programs, be successful professionals with ethical values capable of working in multi-disciplinary areas, and practice lifelong learning to comprehend, analyze and design solutions for real life problems.',
        hodMessage: {
            name: 'Dr. S. Nagaraj',
            designation: 'Head of the Department, EEE',
            message: 'The EEE department strives to provide a comprehensive education that prepares students for successful careers in electrical engineering and related fields.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    },
    {
        slug: 'mec',
        code: 'MEC',
        name: 'Mechanical Engineering',
        fullName: 'Department of Mechanical Engineering',
        tagline: 'The most diverse discipline, spanning aerospace, thermal, and manufacturing.',
        description: [
            'The department at SRIT provides a comprehensive education covering thermodynamics, fluid mechanics, manufacturing processes, machine design, and automobile engineering. Students develop both theoretical knowledge and practical skills through well-equipped workshops and laboratories.',
        ],
        highlights: [
            'Manufacturing processes and machine design focus',
            'Well-equipped workshops and laboratories',
            'Diverse career paths across multiple industries',
        ],
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Thermal Sciences',
            'Advanced Manufacturing',
            'Robotics & Kinematics',
            'Materials Engineering',
        ],
        stats: {
            faculty: '30+',
            labs: '12',
            students: '500+',
            placement: '85%',
        },
        vision: 'To become a quality department in Mechanical Engineering that makes its students well qualified, innovative contributors to their profession and society.',
        mission: [
            {
                id: 'DM1',
                text: 'Educate and prepare the students to acquire good technical skills.',
            },
            {
                id: 'DM2',
                text: 'Provide better exposure to cutting edge technologies and strengthening Institute-Industry interaction to solve realistic problems.',
            },
            {
                id: 'DM3',
                text: 'To pursue higher studies inculcating lifelong learning capabilities and encouraging students to become an Entrepreneur.',
            },
            {
                id: 'DM4',
                text: 'To motivate quality research by both faculty and students addressing the core issues in Mechanical Engineering.',
            },
        ],
        goals: 'MEC graduates will work as practicing Mechanical Engineers in public & private sectors, pursue higher education with lifelong learning skills, and participate as leaders accepting professional & social responsibilities with value addition to the nation.',
        hodMessage: {
            name: 'Dr. V. Krishna Reddy',
            designation: 'Head of the Department, MEC',
            message: 'The Mechanical Engineering department is committed to producing engineers who are well-versed in both traditional and modern manufacturing technologies.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    },
    {
        slug: 'cad',
        code: 'CAD',
        name: 'CSE — AI & Data Science',
        fullName: 'Department of CSE (Artificial Intelligence & Data Science)',
        tagline: 'Big data analytics, statistical inference, and AI-driven decision systems.',
        description: [
            'The CSE — AI & Data Science program equips students with cutting-edge skills in big data analytics, artificial intelligence, and data-driven decision-making. The curriculum combines core computer science fundamentals with specialized courses in data mining, statistical modeling, and predictive analytics.',
        ],
        highlights: [
            'Cloud computing and data engineering skills',
            'Industry collaboration and project-based learning',
            'Preparation for data science and ML engineering careers',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Big Data Analytics',
            'Predictive Modeling',
            'Machine Learning',
            'Business Intelligence',
        ],
        stats: {
            faculty: '15+',
            labs: '2',
            students: '180+',
            placement: '97%',
        },
        vision: 'To be a pioneering department in AI & Data Science education, producing professionals who can harness data for intelligent decision-making and innovation.',
        mission: [
            {
                id: 'M1',
                text: 'To provide quality education in data science, analytics, and artificial intelligence with practical orientation.',
            },
            {
                id: 'M2',
                text: 'To develop expertise in big data technologies, cloud computing, and statistical modeling.',
            },
            {
                id: 'M3',
                text: 'To foster industry partnerships for real-world data science project experience.',
            },
            {
                id: 'M4',
                text: 'To produce ethical data scientists committed to responsible use of AI and data technologies.',
            },
        ],
        goals: 'To produce competent data scientists and AI engineers who can leverage data-driven approaches to solve complex business and societal challenges.',
        hodMessage: {
            name: 'Dr. A. Srinivas',
            designation: 'Head of the Department, CAD',
            message: 'The AI & Data Science department is focused on building a new generation of data professionals who can drive innovation through intelligent data analysis.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    },
    {
        slug: 'civil',
        code: 'CIV',
        name: 'Civil Engineering',
        fullName: 'Department of Civil Engineering',
        tagline: 'Enhancing the standard of living through infrastructural development.',
        description: [
            'Students develop skills in design, analysis, and construction of infrastructure — from buildings and bridges to highways and water systems. The curriculum includes both theoretical knowledge and practical exposure through site visits and laboratory work.',
        ],
        highlights: [
            'Environmental engineering and sustainable development',
            'Design and analysis of infrastructure systems',
            'Practical exposure through site visits and labs',
        ],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Structural Engineering',
            'Geotechnical Engineering',
            'Transportation Planning',
            'Sustainable Infrastructure',
        ],
        stats: {
            faculty: '22+',
            labs: '6',
            students: '380+',
            placement: '82%',
        },
        vision: 'To become a premier department of learning in Civil Engineering that empowers its students to be technically sound, ethical and sensitive to environmental sustainability.',
        mission: [
            {
                id: 'DM1',
                text: 'Provide comprehensive learning experience to the students in designing Civil Engineering structures.',
            },
            {
                id: 'DM2',
                text: 'Nurture a strong research eco system that facilitates research and life-long learning.',
            },
            {
                id: 'DM3',
                text: 'Provide opportunities for students to work in contexts that make them ethical and useful to the society.',
            },
        ],
        goals: 'Civil Engineering graduates will become successful professionals in Government agencies/companies or entrepreneurs, responsible Civil Engineers with good leadership qualities, and engage in lifelong learning with good computational skills and multi-disciplinary approach.',
        hodMessage: {
            name: 'Dr. R. Suresh Kumar',
            designation: 'Head of the Department, Civil',
            message: 'The Civil Engineering department is dedicated to developing infrastructure professionals who can contribute to the nation\'s growth through sustainable construction practices.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    },
];

export function getDepartmentBySlug(slug: string): DepartmentData | undefined {
    return departments.find((d) => d.slug === slug);
}
