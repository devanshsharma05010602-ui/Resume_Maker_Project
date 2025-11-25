import React from 'react';

const TemplateFresher = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white">
            {/* Header */}
            <div className="text-center mb-6 pb-4 border-b-2 border-gray-900">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-lg text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                    {resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}
                </div>
            </div>

            {/* Education FIRST for freshers */}
            {resumeData.education.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">{edu.institution}, {edu.location}</p>
                            {edu.score && <p className="text-sm text-gray-600 mt-1">Score/CGPA: {edu.score}</p>}
                            {edu.description && <p className="text-sm text-gray-700 mt-2">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Skills SECOND for freshers */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">Technical Skills</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {resumeData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                <span className="text-sm text-gray-700 font-medium">{skill.name}</span>
                                {skill.level && <span className="text-xs text-gray-500">({skill.level})</span>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects - Important for freshers */}
            {resumeData.projects.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">Projects</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-bold text-base text-gray-900">{proj.title}</h3>
                            {proj.techStack && <p className="text-xs text-gray-600 italic mt-1">Technologies: {proj.techStack}</p>}
                            <p className="text-sm text-gray-700 mt-2">{proj.description}</p>
                            {proj.link && (
                                <a href={formatUrl(proj.link)} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Certifications */}
            {resumeData.certifications && resumeData.certifications.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="mb-2">
                            <div className="font-semibold text-sm text-gray-900">{cert.name}</div>
                            <div className="text-xs text-gray-600">{cert.issuer}, {cert.issueDate}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Experience (Internships) - Last for freshers */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">Internships & Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateFresher;
