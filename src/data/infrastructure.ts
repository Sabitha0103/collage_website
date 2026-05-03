export interface Infrastructure {
    id: string;
    name: string;
    description: string;
    image: string;
    span?: string;
}

export const infrastructureData: Infrastructure[] = [
    {
        id: 'infra-1',
        name: 'Modern Books & Library',
        description: 'Vast collection of 51,477 Volumes, 36+ National & International Journals, and a Digital library with 12 systems to access E-resources.',
        image: 'library.jpg',
        span: 'md:col-span-2'
    },
    {
        id: 'infra-2',
        name: 'Transportation Facilities',
        description: 'The institution runs 29 buses covering important points in Anantapur City and nearby towns, seating 4000 students in two shifts.',
        image: 'Transport.jpg'
    },
    {
        id: 'infra-3',
        name: 'Sports Complex',
        description: 'Indoor stadium, modern gymnasium, and expansive outdoor courts for all major athletic activities.',
        image: 'sports.jpg'
    },
    {
        id: 'infra-4',
        name: 'Advance Internship Programs',
        description: 'Programs for all streams with personal development to integrate skills as per market level so they can inherit performance.',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        span: 'md:col-span-2'
    }
];
