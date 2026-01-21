export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    color: string; // Tailwind class for background or accent
    span: string; // Tailwind class for grid span (e.g., 'col-span-2')
}

export interface Skill {
    name: string;
    icon?: string; // Could be a simple mapped string or SVG path later
    category: 'Languages' | 'Visualization' | 'Tools' | 'Frameworks';
}

export const tools: Skill[] = [
    { name: 'Python', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Astro', category: 'Frameworks' },
    { name: 'Tailwind', category: 'Frameworks' },
    { name: 'Pandas', category: 'Tools' },
    { name: 'Miyori (AI)', category: 'Tools' },
];

export const projects: Project[] = [
    {
        title: 'Miyori AI Agent',
        description: 'A modular AI coding agent with custom memory systems and autonomous capabilities. Built to handle complex multi-step workflows.',
        tags: ['Python', 'LLMs', 'Agentic Workflow'],
        color: 'bg-stone-200',
        span: 'md:col-span-2 md:row-span-2',
    },
    {
        title: 'WorkHunter',
        description: 'Autonomous job search agent that scrapes, filters, and ranks opportunities based on complex criteria.',
        tags: ['Python', 'Automation', 'Data Engineering'],
        color: 'bg-emerald-100/50',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'VS Code PR Analysis',
        description: 'GraphQL extraction and semantic analysis of Pull Request patterns to optimize team velocity.',
        tags: ['GraphQL', 'Power BI', 'Data Viz'],
        color: 'bg-orange-100/50',
        span: 'md:col-span-1 md:row-span-2',
    },
    {
        title: 'IT Systems Leadership',
        description: '6+ years managing critical systems at the Royal Courts of Justice. Bridging the gap between technical complexity and senior stakeholders.',
        tags: ['Leadership', 'Communication', 'Strategy'],
        color: 'bg-white',
        span: 'md:col-span-2 md:row-span-1',
    },
];

export const personalInfo = {
    name: 'Simon Purdie',
    title: 'Data Analyst & Designer',
    tagline: 'Translating complex data into clear, compelling stories.',
    about: 'With a background in IT Systems Management and Performance Art, I bring a unique blend of technical depth and creative communication to data analysis. I build beautiful, functional systems that solve real problems.',
    socials: [
        { name: 'GitHub', url: 'https://github.com/SimonPurdie' },
        { name: 'LinkedIn', url: '#' }, // user to fill
    ]
};
