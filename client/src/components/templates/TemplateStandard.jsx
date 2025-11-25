import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from 'lucide-react';

const TemplateStandard = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white" style={{ color: resumeData.themeColor }}>
            {/* Header */}
            <div className="text-center border-b-2 pb-4 mb-4" style={{ borderColor: resumeData.themeColor }}>
                <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-800">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-xl font-medium text-gray-600 mt-1">{resumeData.personalInfo.jobTitle}</p>

                <div className="flex justify-center flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    {resumeData.personalInfo.email && <div className="flex items-center"><Mail size={14} className="mr-1" />{resumeData.personalInfo.email}</div>}
                    {resumeData.personalInfo.phone && <div className="flex items-center"><Phone size={14} className="mr-1" />{resumeData.personalInfo.phone}</div>}
                    {resumeData.personalInfo.location && <div className="flex items-center"><MapPin size={14} className="mr-1" />{resumeData.personalInfo.location}</div>}
                </div>
                <div className="flex justify-center flex-wrap gap-4 mt-2 text-sm text-blue-600">
                    {resumeData.personalInfo.linkedin && <div className="flex items-center"><Linkedin size={14} className="mr-1" /><a href={formatUrl(resumeData.personalInfo.linkedin)} target="_blank" rel="noreferrer">LinkedIn</a></div>}
                    {resumeData.personalInfo.github && <div className="flex items-center"><Github size={14} className="mr-1" /><a href={formatUrl(resumeData.personalInfo.github)} target="_blank" rel="noreferrer">GitHub</a></div>}
                    {resumeData.personalInfo.portfolioUrl && <div className="flex items-center"><Globe size={14} className="mr-1" /><a href={formatUrl(resumeData.personalInfo.portfolioUrl)} target="_blank" rel="noreferrer">Portfolio</a></div>}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Professional Summary</h2>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.summary}</p>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Work Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between font-bold text-gray-800">
                                <span>{exp.role}</span>
                                <span className="text-sm font-medium text-gray-600">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                                <span>{exp.company}</span>
                                <span>{exp.location}</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
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
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-3">
                            <div className="flex justify-between font-bold text-gray-800">
                                <span>{edu.institution}</span>
                                <span className="text-sm font-medium text-gray-600">{edu.startDate} - {edu.endDate}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-700">
                                <span className="font-semibold">{edu.degree}</span>
                                <span>{edu.location}</span>
                            </div>
                            {edu.score && <div className="text-sm text-gray-600 italic">Score: {edu.score}</div>}
                            {edu.description && <p className="text-sm text-gray-600 mt-1">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Skills</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                        {resumeData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <span className="font-semibold mr-1">{skill.name}</span>
                                {skill.level && <span className="text-gray-500 text-xs">({skill.level})</span>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Projects</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-3">
                            <div className="flex justify-between font-bold text-gray-800">
                                <span>{proj.title}</span>
                                {proj.link && <a href={formatUrl(proj.link)} target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline font-normal">{proj.link}</a>}
                            </div>
                            {proj.techStack && <div className="text-sm text-gray-600 italic mb-1">Tech Stack: {proj.techStack}</div>}
                            <p className="text-sm text-gray-700">{proj.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Certifications */}
            {resumeData.certifications && resumeData.certifications.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="mb-2 text-sm text-gray-700">
                            <div className="font-semibold">
                                {cert.url ? (
                                    <a href={formatUrl(cert.url)} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600">
                                        {cert.name}
                                    </a>
                                ) : (
                                    cert.name
                                )}
                            </div>
                            <div className="text-gray-600">{cert.issuer} | {cert.issueDate}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Additional Sections */}
            <div className="grid grid-cols-2 gap-6">
                {resumeData.languages && resumeData.languages.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Languages</h2>
                        <ul className="text-sm text-gray-700">
                            {resumeData.languages.map((lang, index) => (
                                <li key={index} className="mb-1">
                                    <span className="font-semibold">{lang.name}</span> - {lang.proficiency}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {resumeData.awards && resumeData.awards.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold uppercase mb-2 border-b text-gray-800" style={{ borderColor: resumeData.themeColor }}>Awards</h2>
                        <ul className="text-sm text-gray-700">
                            {resumeData.awards.map((award, index) => (
                                <li key={index} className="mb-1">
                                    <span className="font-semibold">{award.title}</span> - {award.issuer}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateStandard;
