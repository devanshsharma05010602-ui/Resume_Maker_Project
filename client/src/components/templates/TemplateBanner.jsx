import React from 'react';

const TemplateBanner = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="bg-white">
            {/* Huge Name Banner */}
            <div className="bg-gray-900 text-white p-12 text-center">
                <h1 className="text-7xl font-black uppercase tracking-widest mb-4" style={{ letterSpacing: '0.2em' }}>
                    {resumeData.personalInfo.firstName}
                    <br />
                    {resumeData.personalInfo.lastName}
                </h1>
                <p className="text-2xl font-light tracking-wide">{resumeData.personalInfo.jobTitle}</p>
            </div>

            <div className="p-8">
                {/* Contact Bar */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center text-sm text-gray-700">
                    {resumeData.personalInfo.email} • {resumeData.personalInfo.phone} • {resumeData.personalInfo.location}
                </div>

                {/* Summary */}
                {resumeData.summary && (
                    <div className="mb-6 text-center">
                        <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">{resumeData.summary}</p>
                    </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-3xl font-black uppercase text-center mb-6 text-gray-900">Experience</h2>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {exp.description && exp.description.map((desc, i) => (
                                        desc && <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Grid for Skills and Education */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-black uppercase mb-4 text-gray-900">Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {resumeData.skills.map((skill, index) => (
                                    <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-bold">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-black uppercase mb-4 text-gray-900">Education</h2>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                    <p className="text-sm text-gray-700">{edu.institution}</p>
                                    <p className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateBanner;
