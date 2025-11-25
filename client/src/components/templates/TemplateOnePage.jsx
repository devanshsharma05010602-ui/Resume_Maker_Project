import React from 'react';

const TemplateOnePage = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-6 bg-white">
            {/* Compact Header */}
            <div className="text-center mb-4 pb-3 border-b border-gray-900">
                <h1 className="text-2xl font-bold text-gray-900">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-sm text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-xs text-gray-600 mt-1">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                </div>
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-3 gap-4 text-xs">
                {/* Left Column - Skills & Education */}
                <div>
                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase text-gray-900 mb-1">Skills</h3>
                            <div className="space-y-0.5">
                                {resumeData.skills.map((skill, index) => (
                                    <div key={index} className="text-gray-700">• {skill.name}</div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                        <div>
                            <h3 className="font-bold text-sm uppercase text-gray-900 mb-1">Education</h3>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="mb-2">
                                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                                    <div className="text-gray-700">{edu.institution}</div>
                                    <div className="text-gray-600">{edu.startDate?.slice(-4)}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Middle & Right Columns - Experience */}
                <div className="col-span-2">
                    {/* Very Brief Summary */}
                    {resumeData.summary && (
                        <div className="mb-3">
                            <p className="text-gray-700 leading-tight">{resumeData.summary.slice(0, 200)}...</p>
                        </div>
                    )}

                    {/* Experience - Condensed */}
                    {resumeData.experience.length > 0 && (
                        <div className="mb-3">
                            <h3 className="font-bold text-sm uppercase text-gray-900 mb-1">Experience</h3>
                            {resumeData.experience.map((exp, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-bold text-gray-900">{exp.role}</span>
                                        <span className="text-[10px] text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <div className="text-gray-700 font-semibold">{exp.company}</div>
                                    {/* Only show first 2 bullet points */}
                                    {exp.description && exp.description.slice(0, 2).map((desc, i) => (
                                        desc && <div key={i} className="text-gray-700 mt-0.5">• {desc}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects - Very brief */}
                    {resumeData.projects.length > 0 && (
                        <div>
                            <h3 className="font-bold text-sm uppercase text-gray-900 mb-1">Key Projects</h3>
                            {resumeData.projects.slice(0, 2).map((proj, index) => (
                                <div key={index} className="mb-1">
                                    <span className="font-semibold text-gray-900">{proj.title}:</span>
                                    <span className="text-gray-700"> {proj.description?.slice(0, 80)}...</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateOnePage;
