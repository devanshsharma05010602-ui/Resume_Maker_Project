import React from 'react';

const TemplateDarkMode = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-gray-900 text-gray-100" style={{ fontFamily: 'Courier New, monospace' }}>
            {/* Header */}
            <div className="mb-6">
                <div className="text-green-400 text-sm mb-2">&gt; whoami</div>
                <h1 className="text-3xl font-bold text-white mb-1">
                    {resumeData.personalInfo.firstName}_{resumeData.personalInfo.lastName}
                </h1>
                <p className="text-lg text-gray-300">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-400 mt-2">
                    <span className="text-green-400">email:</span> {resumeData.personalInfo.email} |
                    <span className="text-green-400"> phone:</span> {resumeData.personalInfo.phone}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-6">
                    <div className="text-green-400 text-sm mb-2">&gt; cat about.txt</div>
                    <p className="text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-green-400">
                        {resumeData.summary}
                    </p>
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6">
                    <div className="text-green-400 text-sm mb-2">&gt; ls skills/</div>
                    <div className="pl-4">
                        {resumeData.skills.map((skill, index) => (
                            <div key={index} className="text-sm text-gray-300">
                                <span className="text-blue-400">-rw-r--r--</span> {skill.name}
                                {skill.level && <span className="text-yellow-400 ml-2">[{skill.level}]</span>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <div className="text-green-400 text-sm mb-2">&gt; cat experience.log</div>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4 pl-4 border-l-2 border-blue-400">
                            <div className="text-base font-bold text-white">
                                [{exp.startDate} - {exp.endDate}] {exp.role}
                            </div>
                            <div className="text-sm text-gray-400">@ {exp.company}</div>
                            <ul className="mt-2 space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && (
                                        <li key={i} className="text-sm text-gray-300">
                                            <span className="text-green-400">*</span> {desc}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <div className="mb-6">
                    <div className="text-green-400 text-sm mb-2">&gt; ls -la projects/</div>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-3 pl-4">
                            <div className="text-base font-bold text-white">
                                <span className="text-purple-400">drwxr-xr-x</span> {proj.title}/
                            </div>
                            {proj.techStack && (
                                <div className="text-xs text-yellow-400 mt-1">
                                    Tech: {proj.techStack}
                                </div>
                            )}
                            <p className="text-sm text-gray-300 mt-1">{proj.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
                <div>
                    <div className="text-green-400 text-sm mb-2">&gt; cat education.md</div>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-2 pl-4 text-sm text-gray-300">
                            <span className="text-white font-bold">## {edu.degree}</span>
                            <div>{edu.institution} | {edu.startDate} - {edu.endDate}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateDarkMode;
