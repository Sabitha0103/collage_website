export interface ResearchLab {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const researchLabs: ResearchLab[] = [
    {
        id: 'ai-lab',
        name: 'Artificial Intelligence Lab',
        description: 'Advanced computing facility focused on machine learning algorithms, natural language processing, and computer vision research.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'robotics-lab',
        name: 'Robotics & Automation Lab',
        description: 'State-of-the-art facility for developing autonomous systems, industrial robotic arms, and drone technologies.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'embedded-systems-lab',
        name: 'Embedded Systems Lab',
        description: 'Equipped with cutting-edge microcontrollers, DSP kits, and FPGA development boards for IoT and edge computing solutions.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'data-science-lab',
        name: 'Data Science Research Lab',
        description: 'High-performance computing cluster dedicated to big data analytics, statistical modeling, and predictive systems.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];
