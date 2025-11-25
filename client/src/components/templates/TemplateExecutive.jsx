import React from 'react';

const TemplateExecutive = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-6 bg-white" style={{ fontFamily: 'Georgia, serif' }}>
            {/* Header */}
            <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-base text-gray-700 mt-1">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-xs text-gray-600 mt-2">
                    {resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Executive Summary</h2>
                    <p className="text-xs text-gray-800 leading-tight">{resumeData.summary}</p>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Professional Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-xs text-gray-900">{exp.role} — {exp.company}</h3>
                                <span className="text-[10px] text-gray-700">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <ul className="list-disc list-inside text-[10px] text-gray-800 mt-1 space-y-0.5">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <span className="font-bold text-xs text-gray-900">{edu.degree}, {edu.institution}</span>
                                <span className="text-[10px] text-gray-700">{edu.startDate} - {edu.endDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Core Competencies</h2>
                    <div className="text-xs text-gray-800">
                        {resumeData.skills.map((skill, index) => skill.name).join(' • ')}
                    </div>
                </div>
            )}

            {/* Certifications */}
            {resumeData.certifications && resumeData.certifications.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="text-xs text-gray-800">
                            {cert.name} — {cert.issuer}, {cert.issueDate}
                        </div>
                    ))}
                </div>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <div>
                    <h2 className="text-sm font-bold uppercase text-gray-900 mb-1 border-b border-gray-400">Key Projects</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-2">
                            <h3 className="font-bold text-xs text-gray-900">{proj.title}</h3>
                            <p className="text-[10px] text-gray-800">{proj.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateExecutive;
