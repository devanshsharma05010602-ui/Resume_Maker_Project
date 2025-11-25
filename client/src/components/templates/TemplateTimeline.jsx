import React from 'react';

const TemplateTimeline = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const timelineColor = resumeData.themeColor || '#3b82f6';

    return (
        <div className="p-8 bg-white">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-xl text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* Timeline Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 text-center">Career Journey</h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5" style={{ backgroundColor: timelineColor }}></div>

                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-8`}>
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                                        <div className="font-bold text-base text-gray-900">{exp.role}</div>
                                        <div className="text-sm font-semibold text-gray-700 mt-1">{exp.company}</div>
                                        <div className="text-xs text-gray-600 mt-1">{exp.startDate} - {exp.endDate}</div>
                                        <ul className={`text-xs text-gray-700 mt-2 space-y-1 ${index % 2 === 0 ? 'list-inside' : 'list-inside'}`}>
                                            {exp.description && exp.description.slice(0, 2).map((desc, i) => (
                                                desc && <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: timelineColor }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills & Education Grid */}
            <div className="grid grid-cols-2 gap-6">
                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-700">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {resumeData.education.length > 0 && (
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">Education</h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                                <div className="text-xs text-gray-700">{edu.institution}</div>
                                <div className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateTimeline;
