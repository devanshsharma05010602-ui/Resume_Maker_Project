import React from 'react';

const TemplateDesigner = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const accentColor = resumeData.themeColor || '#ec4899';

    return (
        <div className="p-8 bg-white">
            {/* Asymmetric Header */}
            <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="col-span-2">
                    <h1 className="text-6xl font-black text-gray-900 mb-3 leading-none">
                        {resumeData.personalInfo.firstName}
                        <br />
                        <span style={{ color: accentColor }}>{resumeData.personalInfo.lastName}</span>
                    </h1>
                    <p className="text-2xl font-light text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                </div>
                <div className="col-span-1 flex flex-col justify-end text-sm text-gray-600">
                    <div>{resumeData.personalInfo.email}</div>
                    <div>{resumeData.personalInfo.phone}</div>
                    <div>{resumeData.personalInfo.location}</div>
                </div>
            </div>

            {/* Asymmetric Layout */}
            <div className="grid grid-cols-5 gap-6">
                {/* Wide Content Area */}
                <div className="col-span-3">
                    {/* Summary */}
                    {resumeData.summary && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-black text-gray-900 mb-3" style={{ color: accentColor }}>About</h2>
                            <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                        </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ color: accentColor }}>Experience</h2>
                            {resumeData.experience.map((exp, index) => (
                                <div key={index} className="mb-6 relative pl-6 border-l-4" style={{ borderColor: accentColor }}>
                                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                                    <div className="text-sm font-semibold text-gray-700">{exp.company}</div>
                                    <div className="text-xs text-gray-500 mb-2">{exp.startDate} — {exp.endDate}</div>
                                    <ul className="space-y-1">
                                        {exp.description && exp.description.map((desc, i) => (
                                            desc && <li key={i} className="text-sm text-gray-700">{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Narrow Sidebar */}
                <div className="col-span-2">
                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-black text-gray-900 mb-3" style={{ color: accentColor }}>Skills</h3>
                            <div className="space-y-2">
                                {resumeData.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="text-sm font-semibold text-gray-800">{skill.name}</div>
                                        {skill.level && (
                                            <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: skill.level === 'Expert' ? '100%' : skill.level === 'Intermediate' ? '70%' : '40%',
                                                        backgroundColor: accentColor
                                                    }}
                                                ></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-black text-gray-900 mb-3" style={{ color: accentColor }}>Education</h3>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="mb-3">
                                    <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                                    <div className="text-xs text-gray-700">{edu.institution}</div>
                                    <div className="text-xs text-gray-500">{edu.startDate?.slice(-4)}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects */}
                    {resumeData.projects.length > 0 && (
                        <div>
                            <h3 className="text-lg font-black text-gray-900 mb-3" style={{ color: accentColor }}>Projects</h3>
                            {resumeData.projects.map((proj, index) => (
                                <div key={index} className="mb-3">
                                    <div className="font-bold text-sm text-gray-900">{proj.title}</div>
                                    <p className="text-xs text-gray-700 mt-1">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateDesigner;
