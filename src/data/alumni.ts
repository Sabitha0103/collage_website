export interface Alumni {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    batch: string;
}

export const alumniStories: Alumni[] = [
    {
        id: 'al-1',
        name: 'Karthik Reddy',
        role: 'Senior Software Engineer',
        company: 'Google',
        batch: '2016',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'al-2',
        name: 'Sneha Verma',
        role: 'Data Scientist',
        company: 'Microsoft',
        batch: '2018',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'al-3',
        name: 'Arjun Desai',
        role: 'Lead Cloud Architect',
        company: 'Amazon Web Services',
        batch: '2015',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'al-4',
        name: 'Meenakshi Iyer',
        role: 'Product Manager',
        company: 'Atlassian',
        batch: '2017',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
];
