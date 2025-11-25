import React from 'react';

const TemplatePinstripe = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const accentColor = resumeData.themeColor || '#1e40af';

    return (
        <div className="flex bg-white min-h-full">
            {/* Vertical accent line */}
            <div className="w-1" style={{ backgroundColor: accentColor }}></div>

            <div className="flex-1 p-8">
                {/* Header */}
                <div className="mb-6 pb-4 border-b border-gray-300">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    <p className="text-lg text-gray-700 mt-1">{resumeData.personalInfo.jobTitle}</p>
                    <div className="text-sm text-gray-600 mt-2">
                        {resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}
                    </div>
                </div>

                {/* Summary */}
                {resumeData.summary && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-2" style={{ color: accentColor }}>Professional Summary</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                    </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ color: accentColor }}>Experience</h2>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                    <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-700">{exp.company}, {exp.location}</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
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
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ color: accentColor }}>Education</h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                    <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
                                {edu.score && <p className="text-sm text-gray-600">Score: {edu.score}</p>}
                            </div>
                        ))}
                    </div>
                )}

                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ color: accentColor }}>Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="text-sm text-gray-700">
                                    {skill.name}{index < resumeData.skills.length - 1 && ' •'}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Projects */}
                {resumeData.projects.length > 0 && (
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ color: accentColor }}>Projects</h2>
                        {resumeData.projects.map((proj, index) => (
                            <div key={index} className="mb-3">
                                <h3 className="font-bold text-base text-gray-900">{proj.title}</h3>
                                <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplatePinstripe;
