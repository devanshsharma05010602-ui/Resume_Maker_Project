// ATS Score Calculator
// Analyzes resume data and provides a score from 0-100 based on ATS best practices

export const calculateATSScore = (resumeData) => {
    let score = 0;
    const recommendations = [];
    const breakdown = [];

    // 1. Contact Information (15 points)
    let contactScore = 0;
    if (resumeData.personalInfo.firstName && resumeData.personalInfo.lastName) contactScore += 5;
    if (resumeData.personalInfo.email) contactScore += 3;
    if (resumeData.personalInfo.phone) contactScore += 3;
    if (resumeData.personalInfo.location) contactScore += 2;
    if (resumeData.personalInfo.linkedin || resumeData.personalInfo.github) contactScore += 2;

    score += contactScore;
    breakdown.push({ category: 'Contact Information', score: contactScore, maxScore: 15 });

    if (!resumeData.personalInfo.email) recommendations.push('Add your email address');
    if (!resumeData.personalInfo.phone) recommendations.push('Include a phone number');
    if (!resumeData.personalInfo.linkedin) recommendations.push('Add your LinkedIn profile');

    // 2. Professional Summary (10 points)
    let summaryScore = 0;
    if (resumeData.summary && resumeData.summary.length > 50) {
        summaryScore = 10;
    } else if (resumeData.summary && resumeData.summary.length > 20) {
        summaryScore = 5;
        recommendations.push('Expand your professional summary (aim for 2-3 sentences)');
    } else {
        recommendations.push('Add a professional summary highlighting your key achievements');
    }

    score += summaryScore;
    breakdown.push({ category: 'Professional Summary', score: summaryScore, maxScore: 10 });

    // 3. Work Experience with Action Verbs (25 points)
    const actionVerbs = [
        'achieved', 'improved', 'developed', 'led', 'managed', 'created', 'implemented',
        'designed', 'built', 'increased', 'decreased', 'reduced', 'launched', 'delivered',
        'coordinated', 'optimized', 'streamlined', 'spearheaded', 'executed', 'established'
    ];

    let experienceScore = 0;
    if (resumeData.experience.length > 0) {
        experienceScore += 10;

        let hasActionVerbs = false;
        let bulletPointCount = 0;

        resumeData.experience.forEach(exp => {
            if (Array.isArray(exp.description)) {
                bulletPointCount += exp.description.filter(Boolean).length;
                exp.description.forEach(desc => {
                    if (desc && actionVerbs.some(verb => desc.toLowerCase().includes(verb))) {
                        hasActionVerbs = true;
                    }
                });
            }
        });

        if (hasActionVerbs) experienceScore += 10;
        if (bulletPointCount >= 3) experienceScore += 5;

        if (!hasActionVerbs) recommendations.push('Use action verbs (achieved, led, developed) in your experience descriptions');
        if (bulletPointCount < 3) recommendations.push('Add more bullet points to your work experience (aim for 3-5 per role)');
    } else {
        recommendations.push('Add at least one work experience entry');
    }

    score += experienceScore;
    breakdown.push({ category: 'Work Experience', score: experienceScore, maxScore: 25 });

    // 4. Education (10 points)
    let educationScore = 0;
    if (resumeData.education.length > 0) {
        educationScore = 10;
    } else {
        recommendations.push('Add your education background');
    }

    score += educationScore;
    breakdown.push({ category: 'Education', score: educationScore, maxScore: 10 });

    // 5. Skills Section (20 points)
    let skillsScore = 0;
    if (resumeData.skills.length >= 8) {
        skillsScore = 20;
    } else if (resumeData.skills.length >= 5) {
        skillsScore = 15;
        recommendations.push('Add more skills (aim for 8-12 relevant skills)');
    } else if (resumeData.skills.length > 0) {
        skillsScore = 10;
        recommendations.push('Add more technical and professional skills');
    } else {
        recommendations.push('Add a skills section with relevant technical and soft skills');
    }

    score += skillsScore;
    breakdown.push({ category: 'Skills', score: skillsScore, maxScore: 20 });

    // 6. Bullet Points vs Paragraphs (10 points)
    let formattingScore = 0;
    let useBulletPoints = true;

    resumeData.experience.forEach(exp => {
        if (typeof exp.description === 'string' && exp.description.length > 100) {
            useBulletPoints = false;
        }
    });

    if (useBulletPoints && resumeData.experience.length > 0) {
        formattingScore = 10;
    } else if (!useBulletPoints) {
        formattingScore = 5;
        recommendations.push('Use bullet points instead of paragraphs for experience descriptions');
    }

    score += formattingScore;
    breakdown.push({ category: 'Formatting', score: formattingScore, maxScore: 10 });

    // 7. Appropriate Length (10 points)
    let lengthScore = 0;
    const totalSections = [
        resumeData.experience.length,
        resumeData.education.length,
        resumeData.skills.length,
        resumeData.projects.length,
        (resumeData.certifications || []).length
    ].reduce((a, b) => a + b, 0);

    if (totalSections >= 8 && totalSections <= 25) {
        lengthScore = 10;
    } else if (totalSections >= 5) {
        lengthScore = 7;
    } else if (totalSections > 0) {
        lengthScore = 4;
        recommendations.push('Add more content to make your resume comprehensive');
    }

    score += lengthScore;
    breakdown.push({ category: 'Content Length', score: lengthScore, maxScore: 10 });

    // Bonus: Projects & Certifications (optional, can boost score)
    if (resumeData.projects.length > 0) {
        score += Math.min(5, resumeData.projects.length * 2);
    }
    if ((resumeData.certifications || []).length > 0) {
        score += Math.min(5, (resumeData.certifications || []).length * 2);
    }

    return {
        score: Math.min(100, score),
        breakdown,
        recommendations: recommendations.slice(0, 5), // Top 5 recommendations
        grade: score >= 90 ? 'A+' : score >= 80 ? 'A' : score >= 70 ? 'B' : score >= 60 ? 'C' : 'D'
    };
};
