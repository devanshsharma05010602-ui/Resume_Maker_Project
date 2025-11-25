import React from 'react';

const TemplateProfileCard = ({ resumeData }) => {
    const formatUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-gray-50">
            {/* Profile Card at Top */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-start gap-6">
                    {/* Photo Placeholder */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                            {resumeData.personalInfo.firstName?.[0]}{resumeData.personalInfo.lastName?.[0]}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-1">
                            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                        </h1>
                        <p className="text-lg text-gray-700 mb-3">{resumeData.personalInfo.jobTitle}</p>
                        {resumeData.summary && (
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">{resumeData.summary}</p>
                        )}
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            {resumeData.personalInfo.email && <span>📧 {resumeData.personalInfo.email}</span>}
                            {resumeData.personalInfo.phone && <span>📱 {resumeData.personalInfo.phone}</span>}
                            {resumeData.personalInfo.location && <span>📍 {resumeData.personalInfo.location}</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-5 mb-4">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                                <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <p className="text-base font-semibold text-gray-700 mb-2">{exp.company}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {exp.description && exp.description.map((desc, i) => (
                                    desc && <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills & Education Grid */}
            <div className="grid grid-cols-2 gap-6">
                {/* Skills */}
                {resumeData.skills.length > 0 && (
                    <div className="bg-white rounded-lg shadow p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {resumeData.education.length > 0 && (
                    <div className="bg-white rounded-lg shadow p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <div className="font-bold text-base text-gray-900">{edu.degree}</div>
                                <div className="text-sm text-gray-700">{edu.institution}</div>
                                <div className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateProfileCard;
