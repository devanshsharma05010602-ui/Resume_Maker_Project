import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const TemplateMinimalist = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-12 bg-white max-w-4xl mx-auto">
            {/* Header - Minimal */}
            <div className="mb-8 pb-6 border-b border-gray-200">
                <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-lg text-gray-500 font-light mb-4">{resumeData.personalInfo.jobTitle}</p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                    {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                    {resumeData.personalInfo.phone && <span>•</span>}
                    {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                    {resumeData.personalInfo.location && <span>•</span>}
                    {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-10">
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-10">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between mb-1">
                                <h3 className="font-medium text-gray-900">{exp.role}</h3>
                                <span className="text-xs text-gray-500">{exp.startDate} — {exp.endDate}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                            <ul className="space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && <li key={i} className="text-sm text-gray-700 pl-4 border-l-2 border-gray-200">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
                <div className="mb-10">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                                <span className="text-xs text-gray-500">{edu.startDate} — {edu.endDate}</span>
                            </div>
                            <p className="text-sm text-gray-600">{edu.institution}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-10">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.skills.map((skill, index) => (
                            <span key={index} className="text-sm text-gray-700">{skill.name}</span>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Projects</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-medium text-gray-900 mb-1">{proj.title}</h3>
                            <p className="text-sm text-gray-700">{proj.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateMinimalist;
