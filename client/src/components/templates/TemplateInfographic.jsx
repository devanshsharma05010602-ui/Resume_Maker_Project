import React from 'react';

const TemplateInfographic = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const getSkillPercentage = (level) => {
        if (level === 'Expert') return 90;
        if (level === 'Intermediate') return 70;
        if (level === 'Beginner') return 40;
        return 50;
    };

    return (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Header */}
            <div className="text-center mb-8 bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-xl text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-600 mt-3">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                </div>
            </div>

            {/* Skills with Visual Meters */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Skills Overview</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {resumeData.skills.slice(0, 8).map((skill, index) => {
                            const percentage = getSkillPercentage(skill.level);
                            return (
                                <div key={index} className="text-center">
                                    {/* Circular Progress */}
                                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-2">
                                        <svg className="w-20 h-20 transform -rotate-90">
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="30"
                                                stroke="#e5e7eb"
                                                strokeWidth="6"
                                                fill="none"
                                            />
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="30"
                                                stroke={resumeData.themeColor || '#3b82f6'}
                                                strokeWidth="6"
                                                fill="none"
                                                strokeDasharray={`${percentage * 1.88} 188`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="absolute text-xs font-bold text-gray-900">{percentage}%</span>
                                    </div>
                                    <div className="text-xs font-semibold text-gray-800">{skill.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Experience Timeline */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4 flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 text-center">
                                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xs">
                                    {exp.startDate?.slice(-4)}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                                <p className="text-xs text-gray-600 mt-1">{exp.description?.[0]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Education & Projects Grid */}
            <div className="grid grid-cols-2 gap-6">
                {resumeData.education.length > 0 && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                                <div className="text-xs text-gray-700">{edu.institution}</div>
                            </div>
                        ))}
                    </div>
                )}

                {resumeData.projects.length > 0 && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Projects</h3>
                        {resumeData.projects.slice(0, 3).map((proj, index) => (
                            <div key={index} className="mb-3">
                                <div className="font-bold text-sm text-gray-900">{proj.title}</div>
                                <p className="text-xs text-gray-700">{proj.description?.slice(0, 60)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateInfographic;
