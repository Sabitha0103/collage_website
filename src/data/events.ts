export interface EventItem {
    id: string;
    title: string;
    dateStr: string;
    month: string;
    day: string;
    type: string;
}

export const upcomingEvents: EventItem[] = [
    {
        id: 'ev-1',
        title: 'SURGETHON2K24 #InnovationMarathon',
        dateStr: 'November 15, 2024',
        month: 'NOV',
        day: '15',
        type: 'Hackathon'
    },
    {
        id: 'ev-2',
        title: 'FPGA Webinar #CloudComputing #EdgeComputing',
        dateStr: 'November 20, 2024',
        month: 'NOV',
        day: '20',
        type: 'Webinar'
    },
    {
        id: 'ev-3',
        title: 'Generative AI Expert Talk',
        dateStr: 'November 25, 2024',
        month: 'NOV',
        day: '25',
        type: 'Expert Talk'
    },
    {
        id: 'ev-4',
        title: 'SRIT Hackathon - Ignite70',
        dateStr: 'December 02, 2024',
        month: 'DEC',
        day: '02',
        type: 'Competition'
    }
];
