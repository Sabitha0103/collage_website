export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'hackathon' | 'research' | 'competition' | 'startup' | 'placement';
}

export const studentAchievements: Achievement[] = [
    {
        id: 'ach-1',
        title: 'Placed in Mobileum - 7 LPA',
        description: 'Abhimanyu Reddy (Mechanical Engineering): "I believe that Mechanical Engineers have the power to shift the trend... Placed as an Associate Software Engineer."',
        date: '2024',
        type: 'placement'
    },
    {
        id: 'ach-2',
        title: 'Secured job in Infosys - 3.6 LPA',
        description: 'Ravichandra Reddy (Mechanical Engineering): "I strongly believe that the branch you choose doesn’t stop you from getting into the IT industry. Placed as a System Engineer."',
        date: '2024',
        type: 'placement'
    },
    {
        id: 'ach-3',
        title: 'Students Achieve their Dreams in All Aspects',
        description: 'Tejaswini & others: "My four years at SRIT were a great memory to cherish for a lifetime. It was full of learning and grooming oneself. I am thankful to the whole faculty."',
        date: '2024',
        type: 'placement'
    }
];
