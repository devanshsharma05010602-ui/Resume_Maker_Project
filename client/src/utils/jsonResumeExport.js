// JSON Resume Export Utility
// Converts ResumeForge data format to JSON Resume standard (https://jsonresume.org/schema/)

export const exportToJSONResume = (resumeData) => {
    const jsonResume = {
        "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
        "basics": {
            "name": `${resumeData.personalInfo.firstName} ${resumeData.personalInfo.lastName}`.trim(),
            "label": resumeData.personalInfo.jobTitle || "",
            "email": resumeData.personalInfo.email || "",
            "phone": resumeData.personalInfo.phone || "",
            "url": resumeData.personalInfo.portfolioUrl || resumeData.personalInfo.website || "",
            "summary": resumeData.summary || "",
            "location": {
                "address": resumeData.personalInfo.location || ""
            },
            "profiles": [
                resumeData.personalInfo.linkedin && {
                    "network": "LinkedIn",
                    "username": "",
                    "url": resumeData.personalInfo.linkedin
                },
                resumeData.personalInfo.github && {
                    "network": "GitHub",
                    "username": "",
                    "url": resumeData.personalInfo.github
                }
            ].filter(Boolean)
        },
        "work": resumeData.experience.map(exp => ({
            "name": exp.company || "",
            "position": exp.role || "",
            "location": exp.location || "",
            "startDate": exp.startDate || "",
            "endDate": exp.current ? "Present" : (exp.endDate || ""),
            "summary": "",
            "highlights": Array.isArray(exp.description) ? exp.description.filter(Boolean) : []
        })),
        "education": resumeData.education.map(edu => ({
            "institution": edu.institution || "",
            "area": edu.degree || "",
            "studyType": "",
            "startDate": edu.startDate || "",
            "endDate": edu.endDate || "",
            "score": edu.score || "",
            "courses": []
        })),
        "skills": resumeData.skills.map(skill => ({
            "name": skill.name || "",
            "level": skill.level || "",
            "keywords": []
        })),
        "projects": resumeData.projects.map(proj => ({
            "name": proj.title || "",
            "description": proj.description || "",
            "highlights": [],
            "keywords": proj.techStack ? proj.techStack.split(',').map(t => t.trim()) : [],
            "url": proj.link || ""
        })),
        "awards": (resumeData.awards || []).map(award => ({
            "title": award.title || "",
            "date": award.date || "",
            "awarder": award.issuer || "",
            "summary": award.description || ""
        })),
        "certificates": (resumeData.certifications || []).map(cert => ({
            "name": cert.name || "",
            "date": cert.issueDate || "",
            "issuer": cert.issuer || "",
            "url": cert.url || ""
        })),
        "languages": (resumeData.languages || []).map(lang => ({
            "language": lang.name || "",
            "fluency": lang.proficiency || ""
        })),
        "interests": (resumeData.interests || []).map(interest => ({
            "name": typeof interest === 'string' ? interest : (interest.name || ""),
            "keywords": []
        })),
        "volunteer": (resumeData.volunteer || []).map(vol => ({
            "organization": vol.organization || "",
            "position": vol.role || "",
            "startDate": vol.startDate || "",
            "endDate": vol.endDate || "",
            "summary": vol.description || "",
            "highlights": []
        }))
    };

    return jsonResume;
};

export const downloadJSONResume = (resumeData, fileName = 'resume.json') => {
    const jsonResume = exportToJSONResume(resumeData);
    const jsonString = JSON.stringify(jsonResume, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
