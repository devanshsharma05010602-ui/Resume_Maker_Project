import React from 'react';

const TemplateAcademic = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white" style={{ fontFamily: 'Times New Roman, serif' }}>
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-sm text-gray-600">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                </p>
                <p className="text-sm text-gray-600">{resumeData.personalInfo.location}</p>
            </div>

            {/* Education - First */}
            {resumeData.education.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900">Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                    <p className="text-sm italic text-gray-700">{edu.institution}, {edu.location}</p>
                                    {edu.score && <p className="text-sm text-gray-700">Score: {edu.score}</p>}
                                </div>
                                <span className="text-sm text-gray-700">{edu.startDate} - {edu.endDate}</span>
                            </div>
                            {edu.description && <p className="text-sm text-gray-700 mt-2">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Research Experience / Work Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900">Research & Work Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                    <p className="text-sm italic text-gray-700">{exp.company}, {exp.location}</p>
                                </div>
                                <span className="text-sm text-gray-700">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Publications / Projects */}
            {resumeData.projects.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900">Publications & Research Projects</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-3">
                            <h3 className="font-bold text-sm text-gray-900">{proj.title}</h3>
                            <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
                            {proj.link && <p className="text-sm text-blue-600 mt-1"><a href={formatUrl(proj.link)} target="_blank" rel="noreferrer">{proj.link}</a></p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900">Skills & Expertise</h2>
                    <p className="text-sm text-gray-700">
                        {resumeData.skills.map((skill, index) => skill.name).join(', ')}
                    </p>
                </div>
            )}

            {/* Awards */}
            {resumeData.awards && resumeData.awards.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900">Awards & Honors</h2>
                    {resumeData.awards.map((award, index) => (
                        <div key={index} className="mb-2">
                            <h3 className="font-bold text-sm text-gray-900">{award.title}</h3>
                            <p className="text-sm text-gray-700">{award.issuer}, {award.date}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* References */}
            <div className="text-sm italic text-gray-700 text-center mt-8">
                References available upon request
            </div>
        </div>
    );
};

export default TemplateAcademic;
