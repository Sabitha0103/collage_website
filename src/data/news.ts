export interface NewsItem {
    id: string;
    headline: string;
    date: string;
    summary: string;
    category: string;
}

export const newsUpdates: NewsItem[] = [
    {
        id: 'news-1',
        category: 'University',
        headline: 'University class starting soon while the lovely valley team work',
        date: 'October 2024',
        summary: 'We denounce with righteous indignation and dislike men who are so...'
    },
    {
        id: 'news-2',
        category: 'High School',
        headline: 'High school program starting soon for covid-19 situation',
        date: 'September 2024',
        summary: 'We denounce with righteous indignation and dislike men who are so...'
    },
    {
        id: 'news-3',
        category: 'Primary',
        headline: 'Majority of students dissatisfied with their universitys coronavirus support',
        date: 'August 2024',
        summary: 'We denounce with righteous indignation and dislike men who are so...'
    }
];
