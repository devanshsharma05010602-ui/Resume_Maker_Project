import React from 'react';
import { Circle } from 'lucide-react';

const TemplateAccentPop = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const accentColor = resumeData.themeColor || '#0ea5e9';

    return (
        <div className="p-8 bg-white">
            {/* Header with Accent */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-16 rounded" style={{ backgroundColor: accentColor }}></div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                        </h1>
                        <p className="text-xl text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                    </div>
                </div>
                <div className="text-sm text-gray-600 pl-5">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone} • {resumeData.personalInfo.location}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-6 pl-5 border-l-4" style={{ borderColor: accentColor }}>
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Circle size={12} fill={accentColor} color={accentColor} />
                        Experience
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4 pl-5">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                <span className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <p className="text-sm font-semibold" style={{ color: accentColor }}>{exp.company}</p>
                            <ul className="mt-2 space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <Circle size={6} fill={accentColor} color={accentColor} className="mt-1.5 flex-shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Circle size={12} fill={accentColor} color={accentColor} />
                            Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full text-sm text-white font-medium"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {resumeData.education.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Circle size={12} fill={accentColor} color={accentColor} />
                            Education
                        </h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                                <p className="text-sm text-gray-700">{edu.institution}</p>
                                <p className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Circle size={12} fill={accentColor} color={accentColor} />
                        Projects
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {resumeData.projects.map((proj, index) => (
                            <div key={index} className="border-l-4 pl-3" style={{ borderColor: accentColor }}>
                                <h3 className="font-bold text-sm text-gray-900">{proj.title}</h3>
                                <p className="text-xs text-gray-700 mt-1">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateAccentPop;
