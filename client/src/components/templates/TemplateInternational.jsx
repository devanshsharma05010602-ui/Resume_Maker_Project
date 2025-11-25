import React from 'react';

const TemplateInternational = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white">
            {/* Header with Photo Slot */}
            <div className="flex gap-6 mb-6 pb-4 border-b-2 border-gray-900">
                {/* Photo Placeholder */}
                <div className="flex-shrink-0">
                    <div className="w-32 h-40 bg-gray-200 border-2 border-gray-400 flex items-center justify-center text-gray-500 text-xs">
                        Photo
                        <br />
                        (3.5 x 4.5 cm)
                    </div>
                </div>

                {/* Personal Info */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    <p className="text-lg text-gray-700 mb-3">{resumeData.personalInfo.jobTitle}</p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                        <div><span className="font-semibold">Email:</span> {resumeData.personalInfo.email}</div>
                        <div><span className="font-semibold">Phone:</span> {resumeData.personalInfo.phone}</div>
                        <div><span className="font-semibold">Location:</span> {resumeData.personalInfo.location}</div>
                        <div><span className="font-semibold">Date of Birth:</span> [DD/MM/YYYY]</div>
                        <div><span className="font-semibold">Nationality:</span> [Country]</div>
                        <div><span className="font-semibold">Marital Status:</span> [Status]</div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase">Profile</h2>
                    <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase">Professional Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{exp.role}</h3>
                                <span className="text-sm text-gray-600">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">{exp.company}, {exp.location}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
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
                    <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase">Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                <span className="text-sm text-gray-600">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <p className="text-sm text-gray-700">{edu.institution}, {edu.location}</p>
                            {edu.score && <p className="text-sm text-gray-600">Score: {edu.score}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase">Skills</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
                        {resumeData.skills.map((skill, index) => (
                            <span key={index}>• {skill.name}</span>
                        ))}
                    </div>
                </div>
            )}

            {/* Languages */}
            {resumeData.languages && resumeData.languages.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase">Languages</h2>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        {resumeData.languages.map((lang, index) => (
                            <div key={index}><span className="font-semibold">{lang.name}:</span> {lang.proficiency}</div>
                        ))}
                    </div>
                </div>
            )}

            {/* References */}
            <div className="text-sm text-gray-700 italic">
                References available upon request
            </div>
        </div>
    );
};

export default TemplateInternational;
