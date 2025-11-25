import React from 'react';

const TemplateProjectShowcase = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-xl text-gray-700 mb-2">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-600">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* PROJECTS FIRST - Large Section */}
            {resumeData.projects.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2">Featured Projects</h2>
                    <div className="space-y-6">
                        {resumeData.projects.map((proj, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-5 hover:shadow-lg transition">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold text-gray-900">{proj.title}</h3>
                                    {proj.link && (
                                        <a href={formatUrl(proj.link)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                                            View Project →
                                        </a>
                                    )}
                                </div>

                                {proj.techStack && (
                                    <div className="mb-3">
                                        <span className="text-xs font-semibold text-gray-600 uppercase">Tech Stack: </span>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {proj.techStack.split(',').map((tech, i) => (
                                                <span key={i} className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills & Experience Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Skills</h3>
                        <div className="space-y-2">
                            {resumeData.skills.map((skill, index) => (
                                <div key={index} className="text-sm text-gray-700">• {skill.name}</div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Experience - Condensed */}
                {resumeData.experience.length > 0 && (
                    <div className="col-span-2">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Experience</h3>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <span className="font-bold text-sm text-gray-900">{exp.role} at {exp.company}</span>
                                    <span className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-xs text-gray-700 mt-1">{exp.description?.[0]}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Education */}
            {resumeData.education.length > 0 && (
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="text-sm text-gray-700">
                            <span className="font-semibold">{edu.degree}</span> — {edu.institution} ({edu.startDate?.slice(-4)})
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateProjectShowcase;
