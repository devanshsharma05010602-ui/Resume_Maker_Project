import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from 'lucide-react';

const TemplateModernSplit = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="flex bg-white min-h-full">
            {/* Left Sidebar - 30% */}
            <div className="w-[30%] bg-gray-800 text-white p-6">
                {/* Contact */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-gray-600 pb-2">Contact</h3>
                    <div className="space-y-2 text-xs">
                        {resumeData.personalInfo.email && (
                            <div className="flex items-start gap-2">
                                <Mail size={12} className="mt-0.5 flex-shrink-0" />
                                <span className="break-all">{resumeData.personalInfo.email}</span>
                            </div>
                        )}
                        {resumeData.personalInfo.phone && (
                            <div className="flex items-start gap-2">
                                <Phone size={12} className="mt-0.5 flex-shrink-0" />
                                <span>{resumeData.personalInfo.phone}</span>
                            </div>
                        )}
                        {resumeData.personalInfo.location && (
                            <div className="flex items-start gap-2">
                                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                                <span>{resumeData.personalInfo.location}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Links */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-gray-600 pb-2">Links</h3>
                    <div className="space-y-2 text-xs">
                        {resumeData.personalInfo.linkedin && (
                            <div className="flex items-start gap-2">
                                <Linkedin size={12} className="mt-0.5 flex-shrink-0" />
                                <a href={formatUrl(resumeData.personalInfo.linkedin)} target="_blank" rel="noreferrer" className="hover:underline break-all">LinkedIn</a>
                            </div>
                        )}
                        {resumeData.personalInfo.github && (
                            <div className="flex items-start gap-2">
                                <Github size={12} className="mt-0.5 flex-shrink-0" />
                                <a href={formatUrl(resumeData.personalInfo.github)} target="_blank" rel="noreferrer" className="hover:underline break-all">GitHub</a>
                            </div>
                        )}
                        {resumeData.personalInfo.portfolioUrl && (
                            <div className="flex items-start gap-2">
                                <Globe size={12} className="mt-0.5 flex-shrink-0" />
                                <a href={formatUrl(resumeData.personalInfo.portfolioUrl)} target="_blank" rel="noreferrer" className="hover:underline break-all">Portfolio</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-gray-600 pb-2">Skills</h3>
                        <div className="space-y-2">
                            {resumeData.skills.map((skill, index) => (
                                <div key={index} className="text-xs">
                                    <div className="font-semibold">{skill.name}</div>
                                    {skill.level && <div className="text-gray-400 text-[10px]">{skill.level}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Languages */}
                {resumeData.languages && resumeData.languages.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-gray-600 pb-2">Languages</h3>
                        <div className="space-y-1 text-xs">
                            {resumeData.languages.map((lang, index) => (
                                <div key={index}>
                                    <span className="font-semibold">{lang.name}</span>
                                    <span className="text-gray-400"> - {lang.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Content - 70% */}
            <div className="w-[70%] p-8">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-1">
                        {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    <p className="text-xl text-gray-600">{resumeData.personalInfo.jobTitle}</p>
                </div>

                {/* Summary */}
                {resumeData.summary && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide">Summary</h2>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.summary}</p>
                    </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Experience</h2>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-gray-800">{exp.role}</h3>
                                    <span className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span className="font-semibold">{exp.company}</span>
                                    <span className="text-xs">{exp.location}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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
                        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Education</h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-800">{edu.institution}</h3>
                                    <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <div className="text-sm text-gray-700">{edu.degree}</div>
                                {edu.score && <div className="text-xs text-gray-600">Score: {edu.score}</div>}
                            </div>
                        ))}
                    </div>
                )}

                {/* Projects */}
                {resumeData.projects.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Projects</h2>
                        {resumeData.projects.map((proj, index) => (
                            <div key={index} className="mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-800">{proj.title}</h3>
                                    {proj.link && <a href={formatUrl(proj.link)} target="_blank" rel="noreferrer" className="text-blue-600 text-xs hover:underline">Link</a>}
                                </div>
                                {proj.techStack && <div className="text-xs text-gray-600 italic mb-1">Tech: {proj.techStack}</div>}
                                <p className="text-sm text-gray-700">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certifications */}
                {resumeData.certifications && resumeData.certifications.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Certifications</h2>
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="mb-2 text-sm">
                                <div className="font-semibold text-gray-800">{cert.name}</div>
                                <div className="text-xs text-gray-600">{cert.issuer} | {cert.issueDate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateModernSplit;
