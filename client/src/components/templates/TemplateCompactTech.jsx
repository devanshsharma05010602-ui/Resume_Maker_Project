import React from 'react';

const TemplateCompactTech = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-6 bg-white">
            {/* Compact Header */}
            <div className="flex justify-between items-start mb-4 pb-3 border-b-2 border-gray-900">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    <p className="text-base text-gray-700">{resumeData.personalInfo.jobTitle}</p>
                </div>
                <div className="text-xs text-gray-600 text-right">
                    <div>{resumeData.personalInfo.email}</div>
                    <div>{resumeData.personalInfo.phone}</div>
                    <div>{resumeData.personalInfo.location}</div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-3 gap-4">
                {/* Left Sidebar - Skills */}
                <div className="col-span-1">
                    {resumeData.skills.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xs font-bold uppercase text-gray-900 mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-1">
                                {resumeData.skills.map((skill, index) => (
                                    <span key={index} className="bg-gray-800 text-white px-2 py-0.5 rounded-full text-[9px]">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xs font-bold uppercase text-gray-900 mb-2">Education</h3>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="mb-2 text-[10px]">
                                    <div className="font-bold text-gray-900">{edu.degree}</div>
                                    <div className="text-gray-700">{edu.institution}</div>
                                    <div className="text-gray-600">{edu.startDate.slice(-4)}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Links */}
                    <div className="mb-4">
                        <h3 className="text-xs font-bold uppercase text-gray-900 mb-2">Links</h3>
                        <div className="space-y-1 text-[9px]">
                            {resumeData.personalInfo.linkedin && <div><a href={formatUrl(resumeData.personalInfo.linkedin)} className="text-blue-600">LinkedIn</a></div>}
                            {resumeData.personalInfo.github && <div><a href={formatUrl(resumeData.personalInfo.github)} className="text-blue-600">GitHub</a></div>}
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="col-span-2">
                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xs font-bold uppercase text-gray-900 mb-2">Experience</h2>
                            {resumeData.experience.map((exp, index) => (
                                <div key={index} className="mb-3">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-xs text-gray-900">{exp.role}</h3>
                                        <span className="text-[9px] text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <p className="text-[10px] font-semibold text-gray-700">{exp.company}</p>
                                    <ul className="list-disc list-inside text-[10px] text-gray-700 mt-1 space-y-0.5">
                                        {exp.description && exp.description.map((desc, i) => (
                                            desc && <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects */}
                    {resumeData.projects.length > 0 && (
                        <div>
                            <h2 className="text-xs font-bold uppercase text-gray-900 mb-2">Projects</h2>
                            {resumeData.projects.map((proj, index) => (
                                <div key={index} className="mb-2">
                                    <h3 className="font-bold text-xs text-gray-900">{proj.title}</h3>
                                    {proj.techStack && (
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {proj.techStack.split(',').map((tech, i) => (
                                                <span key={i} className="bg-gray-200 px-1.5 py-0.5 rounded text-[8px] text-gray-700">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-[10px] text-gray-700">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateCompactTech;
