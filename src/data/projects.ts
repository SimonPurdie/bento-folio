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
    category: 'Languages' | 'Visualization' | 'Tools' | 'Skills';
}

export const tools: Skill[] = [
    { name: 'Python', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Data Analysis', category: 'Visualization' },
    { name: 'Data Visualization', category: 'Visualization' },
    { name: 'Agentic AI', category: 'Tools' },
    { name: 'Semantic Analysis', category: 'Tools' },
    { name: 'Problem Solving', category: 'Skills' },
    { name: 'Communication', category: 'Skills' }
];

export const projects: Project[] = [
    {
        title: 'VS Code PR Analysis',
        description: 'Looks at a large dataset of Pull Requests from Microsoft’s VS Code repo.\nA full stack analysis project from data collection to storytelling.',
        tags: ['Data Analysis', 'Power BI', 'GraphQL', 'Python'],
        link: 'https://simonpurdie.github.io/VS-Code-PR-Analysis/',
        color: 'bg-orange-100/50',
        span: 'md:col-span-2 md:row-span-1',
    },
    {
        title: 'WorkHunter',
        description: 'Job search environment for AI agents. Assists them in interacting with Job board APIs, scraping, filtering, and ranking opportunities based on complex criteria.',
        tags: ['Python', 'Automation', 'Agentic AI'],
        link: 'https://github.com/SimonPurdie/workhunter',
        color: 'bg-emerald-100/50',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Miyori',
        description: 'An Agentic AI project built from stratch to develop understanding of core components and patterns.',
        tags: ['Python', 'SQL', 'Agentic AI'],
        link: 'https://github.com/SimonPurdie/Miyori',
        color: 'bg-stone-200',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'IT Systems Leadership',
        description: '6+ years managing critical systems at the Royal Courts of Justice.\nBridging the gap between technical complexity and senior stakeholders.',
        tags: ['Leadership', 'Communication', 'Problem Solving'],
        color: 'bg-white',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Understanding Semantic Analysis',
        description: 'An educational Jupyter Notebook exploring fundamentals of Semantic Analysis using modern machine learning tools.',
        tags: ['Python', 'Semantic Analysis', 'ML', 'NLP'],
        link: 'https://github.com/SimonPurdie/understanding-semantic-analysis',
        color: 'bg-brand-sage',
        span: 'md:col-span-2 md:row-span-1',
    },
];

export const personalInfo = {
    name: 'Simon Purdie',
    title: 'Data Analyst | Programmer | Designer',
    tagline: 'I teach machines to find patterns, and show people why those patterns matter.',
    about: 'With a background in IT Systems Management and Performing Arts, I bring a unique blend of technical depth and creative communication to data analysis. \n\nI love to build systems and solve problems.',
    socials: [
        { name: 'GitHub', url: 'https://github.com/SimonPurdie' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simon-purdie-uk' },
    ]
};
