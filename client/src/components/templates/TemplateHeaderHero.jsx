import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const TemplateHeaderHero = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const heroColor = resumeData.themeColor || '#6366f1';

    return (
        <div className="bg-white">
            {/* Large Colored Header */}
            <div className="p-8 text-white" style={{ backgroundColor: heroColor }}>
                <h1 className="text-5xl font-bold mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-2xl font-medium opacity-90">{resumeData.personalInfo.jobTitle}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-90">
                    {resumeData.personalInfo.email && <span className="flex items-center gap-1"><Mail size={14} />{resumeData.personalInfo.email}</span>}
                    {resumeData.personalInfo.phone && <span className="flex items-center gap-1"><Phone size={14} />{resumeData.personalInfo.phone}</span>}
                    {resumeData.personalInfo.location && <span className="flex items-center gap-1"><MapPin size={14} />{resumeData.personalInfo.location}</span>}
                </div>
            </div>

            {/* Two Column Content */}
            <div className="flex">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-gray-50 p-6">
                    {/* Links */}
                    <div className="mb-6">
                        <h3 className="font-bold text-sm uppercase text-gray-700 mb-3">Links</h3>
                        <div className="space-y-2 text-xs">
                            {resumeData.personalInfo.linkedin && (
                                <div><a href={formatUrl(resumeData.personalInfo.linkedin)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a></div>
                            )}
                            {resumeData.personalInfo.github && (
                                <div><a href={formatUrl(resumeData.personalInfo.github)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Profile</a></div>
                            )}
                            {resumeData.personalInfo.portfolioUrl && (
                                <div><a href={formatUrl(resumeData.personalInfo.portfolioUrl)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Portfolio</a></div>
                            )}
                        </div>
                    </div>

                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                        <div className="mb-6">
                            <h3 className="font-bold text-sm uppercase text-gray-700 mb-3">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.map((skill, index) => (
                                    <span key={index} className="bg-white px-2 py-1 rounded text-xs text-gray-700 border border-gray-200">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                        <div>
                            <h3 className="font-bold text-sm uppercase text-gray-700 mb-3">Education</h3>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="mb-3 text-xs">
                                    <div className="font-semibold text-gray-800">{edu.degree}</div>
                                    <div className="text-gray-600">{edu.institution}</div>
                                    <div className="text-gray-500">{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Content */}
                <div className="w-2/3 p-6">
                    {/* Summary */}
                    {resumeData.summary && (
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-2" style={{ color: heroColor }}>About Me</h2>
                            <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                        </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-3" style={{ color: heroColor }}>Experience</h2>
                            {resumeData.experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-base text-gray-800">{exp.role}</h3>
                                        <span className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-600">{exp.company}</p>
                                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
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
                            <h2 className="text-lg font-bold text-gray-800 mb-3" style={{ color: heroColor }}>Projects</h2>
                            {resumeData.projects.map((proj, index) => (
                                <div key={index} className="mb-3">
                                    <h3 className="font-bold text-base text-gray-800">{proj.title}</h3>
                                    <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateHeaderHero;
