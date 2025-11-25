// Sample resume data for different professional categories

export const sampleResumeData = {
    softwareEngineer: {
        templateId: 'modern-split',
        personalInfo: {
            firstName: 'Alex',
            lastName: 'Chen',
            email: 'alex.chen@email.com',
            phone: '+1 (555) 123-4567',
            location: 'San Francisco, CA',
            linkedin: 'linkedin.com/in/alexchen',
            github: 'github.com/alexchen',
            jobTitle: 'Full-Stack Software Engineer'
        },
        summary: 'Full-stack software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and modern development practices. Proven track record of delivering high-impact features for millions of users.',
        experience: [
            {
                id: '1',
                company: 'TechCorp Inc.',
                role: 'Senior Software Engineer',
                location: 'San Francisco, CA',
                startDate: 'Mar 2021',
                endDate: 'Present',
                current: true,
                description: ['Led development of microservices architecture serving 2M+ daily active users', 'Reduced API response time by 40% through optimization and caching strategies', 'Mentored team of 4 junior engineers and conducted code reviews', 'Implemented CI/CD pipeline reducing deployment time by 60%']
            },
            {
                id: '2',
                company: 'StartupXYZ',
                role: 'Software Engineer',
                location: 'Palo Alto, CA',
                startDate: 'Jun 2019',
                endDate: 'Feb 2021',
                current: false,
                description: ['Built responsive web applications using React, Node.js, and PostgreSQL', 'Designed and implemented RESTful APIs for mobile and web clients', 'Collaborated with product team to define technical requirements', 'Improved test coverage from 45% to 85%']
            }
        ],
        education: [
            {
                id: '1',
                institution: 'Stanford University',
                degree: 'Bachelor of Science in Computer Science',
                field: 'Computer Science',
                location: 'Stanford, CA',
                startDate: 'Sep 2015',
                endDate: 'May 2019',
                score: 'GPA: 3.8/4.0'
            }
        ],
        skills: [
            { id: '1', name: 'JavaScript', category: 'Languages' },
            { id: '2', name: 'TypeScript', category: 'Languages' },
            { id: '3', name: 'Python', category: 'Languages' },
            { id: '4', name: 'React', category: 'Frontend' },
            { id: '5', name: 'Node.js', category: 'Backend' },
            { id: '6', name: 'PostgreSQL', category: 'Database' },
            { id: '7', name: 'Docker', category: 'DevOps' },
            { id: '8', name: 'AWS', category: 'Cloud' }
        ],
        projects: [
            {
                id: '1',
                title: 'Open Source Contribution',
                description: 'Core contributor to popular React UI library with 50K+ GitHub stars',
                techStack: 'React, TypeScript, Storybook',
                link: 'github.com/project'
            }
        ]
    },

    businessProfessional: {
        templateId: 'standard-professional',
        personalInfo: {
            firstName: 'Sarah',
            lastName: 'Williams',
            email: 'sarah.williams@email.com',
            phone: '+1 (555) 234-5678',
            location: 'New York, NY',
            linkedin: 'linkedin.com/in/sarahwilliams',
            jobTitle: 'Senior Business Analyst'
        },
        summary: 'Results-driven business professional with 8+ years of experience in strategic planning, project management, and team leadership. Proven ability to drive revenue growth, optimize operations, and build high-performing teams. Strong analytical and communication skills with MBA from top-tier institution.',
        experience: [
            {
                id: '1',
                company: 'Global Consulting Group',
                role: 'Senior Business Analyst',
                location: 'New York, NY',
                startDate: 'Jan 2020',
                endDate: 'Present',
                current: true,
                description: ['Lead strategic initiatives for Fortune 500 clients across various industries', 'Conducted market analysis and competitive research to identify growth opportunities', 'Managed cross-functional teams of 6-8 consultants on high-impact projects', 'Delivered $5M+ in cost savings through process optimization recommendations']
            },
            {
                id: '2',
                company: 'Finance Corp',
                role: 'Business Analyst',
                location: 'New York, NY',
                startDate: 'Jun 2017',
                endDate: 'Dec 2019',
                current: false,
                description: ['Analyzed business processes and identified efficiency improvements', 'Created financial models and ROI analyses for new product launches', 'Collaborated with stakeholders to gather requirements and define KPIs', 'Presented findings and recommendations to C-level executives']
            }
        ],
        education: [
            {
                id: '1',
                institution: 'Harvard Business School',
                degree: 'Master of Business Administration',
                field: 'MBA',
                location: 'Boston, MA',
                startDate: 'Sep 2015',
                endDate: 'May 2017',
                score: 'GPA: 3.9/4.0'
            },
            {
                id: '2',
                institution: 'Columbia University',
                degree: 'Bachelor of Arts in Economics',
                field: 'Economics',
                location: 'New York, NY',
                startDate: 'Sep 2011',
                endDate: 'May 2015',
                score: 'GPA: 3.7/4.0'
            }
        ],
        skills: [
            { id: '1', name: 'Strategic Planning', category: 'Business' },
            { id: '2', name: 'Financial Analysis', category: 'Business' },
            { id: '3', name: 'Project Management', category: 'Management' },
            { id: '4', name: 'Stakeholder Management', category: 'Management' },
            { id: '5', name: 'Data Analysis', category: 'Technical' },
            { id: '6', name: 'Excel', category: 'Technical' },
            { id: '7', name: 'PowerPoint', category: 'Technical' },
            { id: '8', name: 'Salesforce', category: 'Technical' }
        ],
        projects: []
    },

    recentGraduate: {
        templateId: 'minimalist',
        personalInfo: {
            firstName: 'Emma',
            lastName: 'Johnson',
            email: 'emma.johnson@email.com',
            phone: '+1 (555) 345-6789',
            location: 'Austin, TX',
            linkedin: 'linkedin.com/in/emmajohnson',
            jobTitle: 'Marketing Professional'
        },
        summary: 'Motivated recent graduate with a Bachelor\'s degree in Marketing and hands-on experience in digital marketing campaigns. Strong analytical skills, creative mindset, and passion for brand storytelling. Seeking to leverage academic knowledge and internship experience in an entry-level marketing role.',
        experience: [
            {
                id: '1',
                company: 'Digital Marketing Agency',
                role: 'Marketing Intern',
                location: 'Austin, TX',
                startDate: 'Jun 2024',
                endDate: 'Dec 2024',
                current: false,
                description: ['Assisted in planning and executing social media campaigns across multiple platforms', 'Conducted market research and competitor analysis for client projects', 'Created engaging content for Instagram, LinkedIn, and Twitter', 'Analyzed campaign metrics and prepared performance reports']
            },
            {
                id: '2',
                company: 'University Marketing Club',
                role: 'Vice President',
                location: 'Austin, TX',
                startDate: 'Sep 2023',
                endDate: 'May 2024',
                current: false,
                description: ['Organized marketing workshops and networking events for 200+ members', 'Led team of 5 students in coordinating annual marketing conference', 'Secured sponsorships totaling $15,000 for club activities', 'Managed club\'s social media presence and website']
            }
        ],
        education: [
            {
                id: '1',
                institution: 'University of Texas at Austin',
                degree: 'Bachelor of Business Administration in Marketing',
                field: 'Marketing',
                location: 'Austin, TX',
                startDate: 'Sep 2020',
                endDate: 'May 2024',
                score: 'GPA: 3.6/4.0'
            }
        ],
        skills: [
            { id: '1', name: 'Social Media Marketing', category: 'Marketing' },
            { id: '2', name: 'Content Creation', category: 'Marketing' },
            { id: '3', name: 'Google Analytics', category: 'Analytics' },
            { id: '4', name: 'SEO', category: 'Digital' },
            { id: '5', name: 'Canva', category: 'Design' },
            { id: '6', name: 'Adobe Creative Suite', category: 'Design' },
            { id: '7', name: 'Microsoft Office', category: 'Technical' },
            { id: '8', name: 'Email Marketing', category: 'Marketing' }
        ],
        projects: [
            {
                id: '1',
                title: 'Senior Capstone Project',
                description: 'Developed comprehensive marketing strategy for local nonprofit, resulting in 30% increase in social media engagement',
                techStack: 'Market Research, Social Media Strategy, Analytics',
            }
        ]
    },

    creativeProfessional: {
        templateId: 'modern-split',
        personalInfo: {
            firstName: 'Maya',
            lastName: 'Patel',
            email: 'maya.patel@email.com',
            phone: '+1 (555) 456-7890',
            location: 'Los Angeles, CA',
            linkedin: 'linkedin.com/in/mayapatel',
            portfolioUrl: 'mayapatel.design',
            jobTitle: 'Senior UX/UI Designer'
        },
        summary: 'Award-winning UX/UI designer with 6+ years of experience creating delightful digital experiences. Expertise in user research, prototyping, and visual design. Passionate about solving complex problems through human-centered design. Portfolio includes work for startups, agencies, and Fortune 500 companies.',
        experience: [
            {
                id: '1',
                company: 'Design Studio LA',
                role: 'Senior UX/UI Designer',
                location: 'Los Angeles, CA',
                startDate: 'Aug 2021',
                endDate: 'Present',
                current: true,
                description: ['Lead design for mobile and web applications serving 1M+ users', 'Conducted user research and usability testing to inform design decisions', 'Collaborated with product managers and engineers in agile environment', 'Designed and maintained comprehensive design system used across 5 products']
            },
            {
                id: '2',
                company: 'Creative Agency Inc.',
                role: 'UX Designer',
                location: 'San Diego, CA',
                startDate: 'Jun 2018',
                endDate: 'Jul 2021',
                current: false,
                description: ['Designed user interfaces for diverse clients including e-commerce and SaaS', 'Created wireframes, prototypes, and high-fidelity mockups using Figma', 'Presented design concepts to stakeholders and incorporated feedback', 'Improved conversion rates by 25% through A/B testing and iterations']
            }
        ],
        education: [
            {
                id: '1',
                institution: 'Rhode Island School of Design',
                degree: 'Bachelor of Fine Arts in Graphic Design',
                field: 'Graphic Design',
                location: 'Providence, RI',
                startDate: 'Sep 2014',
                endDate: 'May 2018',
                score: 'GPA: 3.8/4.0'
            }
        ],
        skills: [
            { id: '1', name: 'UI/UX Design', category: 'Design' },
            { id: '2', name: 'Figma', category: 'Tools' },
            { id: '3', name: 'Adobe Creative Suite', category: 'Tools' },
            { id: '4', name: 'Prototyping', category: 'Design' },
            { id: '5', name: 'User Research', category: 'Research' },
            { id: '6', name: 'Wireframing', category: 'Design' },
            { id: '7', name: 'HTML/CSS', category: 'Technical' },
            { id: '8', name: 'Design Systems', category: 'Design' }
        ],
        projects: [
            {
                id: '1',
                title: 'Award-Winning E-commerce Redesign',
                description: 'Led complete redesign of major retail website, winning Awwwards Site of the Day',
                techStack: 'Figma, User Research, A/B Testing',
            }
        ]
    }
};
