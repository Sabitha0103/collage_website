export interface Faculty {
    id: string;
    name: string;
    department: string;
    specialization: string;
    image: string;
}

export const facultyProfiles: Faculty[] = [
    {
        id: 'fac-1',
        name: 'Dr. Anand Raman',
        department: 'Computer Science',
        specialization: 'Artificial Intelligence & Deep Learning',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'fac-2',
        name: 'Dr. Sarah Mathews',
        department: 'Electronics & Comm.',
        specialization: 'VLSI Design & Embedded Systems',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'fac-3',
        name: 'Dr. Rajesh Kumar',
        department: 'Mechanical Engineering',
        specialization: 'Thermal Sciences & Robotics',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'fac-4',
        name: 'Dr. Priya Reddy',
        department: 'Data Science',
        specialization: 'Big Data Analytics & NLP',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];
