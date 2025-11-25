import React from 'react';

const TemplateConsultant = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-xl text-gray-700 mb-3">{resumeData.personalInfo.jobTitle}</p>
                <div className="text-sm text-gray-600">
                    {resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Professional Profile</h2>
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* Key Projects / Client Engagements (reusing experience data) */}
            {resumeData.experience.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">Client Engagements</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-6 bg-gray-50 p-5 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <p className="text-base font-semibold text-gray-700">Client: {exp.company}</p>
                                </div>
                                <div className="text-sm text-gray-600 text-right">
                                    <div>{exp.startDate} - {exp.endDate}</div>
                                    <div className="text-xs">{exp.location}</div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Key Deliverables:</p>
                                <ul className="space-y-1">
                                    {exp.description && exp.description.map((desc, i) => (
                                        desc && <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">▸</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Core Competencies (Skills) */}
            {resumeData.skills.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">Core Competencies</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {resumeData.skills.map((skill, index) => (
                            <div key={index} className="bg-blue-600 text-white text-center py-2 px-3 rounded font-semibold text-sm">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education & Certifications */}
            <div className="grid grid-cols-2 gap-6">
                {resumeData.education.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-2 text-sm text-gray-700">
                                <div className="font-semibold">{edu.degree}</div>
                                <div>{edu.institution}</div>
                            </div>
                        ))}
                    </div>
                )}

                {resumeData.certifications && resumeData.certifications.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Certifications</h3>
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="mb-2 text-sm text-gray-700">
                                <div className="font-semibold">{cert.name}</div>
                                <div className="text-xs">{cert.issuer}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateConsultant;
