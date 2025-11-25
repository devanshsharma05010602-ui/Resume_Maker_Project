// ResumeForm.jsx - Clean implementation
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import {
    Plus,
    Trash2,
    Save,
    User,
    BookOpen,
    Briefcase,
    Wrench,
    FolderGit2,
    Award,
    Heart,
    FileText,
    Layout,
    FileJson,
} from 'lucide-react';
import TemplateSelector from './TemplateSelector';
import AutoSaveIndicator from './AutoSaveIndicator';
import { downloadJSONResume } from '../../utils/jsonResumeExport';

const ResumeForm = () => {
    const { resumeData, updateResumeData, saveResume, loading } = useResume();
    const [activeTab, setActiveTab] = useState('personal');

    const handleChange = (e, section, index = null, field = null) => {
        const value = e.target.value;
        if (section === 'personalInfo') {
            updateResumeData(section, { ...resumeData.personalInfo, [e.target.name]: value });
        } else if (section === 'summary') {
            updateResumeData(section, value);
        } else {
            const newArray = [...resumeData[section]];
            newArray[index][field] = value;
            updateResumeData(section, newArray);
        }
    };

    const handleArrayChange = (e, section, index, field, subIndex) => {
        const value = e.target.value;
        const newArray = [...resumeData[section]];
        newArray[index][field][subIndex] = value;
        updateResumeData(section, newArray);
    };

    const addArrayItem = (section, index, field) => {
        const newArray = [...resumeData[section]];
        newArray[index][field].push('');
        updateResumeData(section, newArray);
    };

    const removeArrayItem = (section, index, field, subIndex) => {
        const newArray = [...resumeData[section]];
        newArray[index][field] = newArray[index][field].filter((_, i) => i !== subIndex);
        updateResumeData(section, newArray);
    };

    const addItem = (section, item) => {
        updateResumeData(section, [...resumeData[section], item]);
    };

    const removeItem = (section, index) => {
        const newArray = resumeData[section].filter((_, i) => i !== index);
        updateResumeData(section, newArray);
    };

    const tabs = [
        { id: 'templates', label: 'Templates', icon: <Layout size={18} /> },
        { id: 'personal', label: 'Identity', icon: <User size={18} /> },
        { id: 'summary', label: 'Summary', icon: <FileText size={18} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'education', label: 'Education', icon: <BookOpen size={18} /> },
        { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
        { id: 'projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
        { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
        { id: 'additional', label: 'Additional', icon: <Heart size={18} /> },
    ];

    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50/50">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                            ? 'bg-white text-purple-600 border-b-2 border-purple-600'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                {activeTab === 'templates' && (
                    <div className="animate-fadeIn">
                        <TemplateSelector />
                    </div>
                )}

                {activeTab === 'personal' && (
                    <div className="space-y-4 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800">Header & Contact Information</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {['firstName', 'lastName', 'jobTitle', 'email', 'phone', 'location', 'linkedin', 'github', 'portfolioUrl', 'website'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        {field.replace(/([A-Z])/g, ' $1').trim()}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        value={resumeData.personalInfo[field] || ''}
                                        onChange={(e) => handleChange(e, 'personalInfo')}
                                        spellCheck={true}
                                        lang="en"
                                        autoCorrect="on"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                        placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'summary' && (
                    <div className="space-y-4 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
                        <p className="text-gray-600">
                            Briefly describe your years of experience, your main expertise, and your biggest career achievement.
                        </p>
                        <textarea
                            value={resumeData.summary || ''}
                            onChange={(e) => handleChange(e, 'summary')}
                            spellCheck={true}
                            lang="en"
                            autoCorrect="on"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none h-40 resize-none"
                            placeholder="Write a brief, powerful pitch..."
                        />
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
                            <button
                                onClick={() => addItem('experience', {
                                    id: Date.now().toString(),
                                    company: '',
                                    role: '',
                                    location: '',
                                    startDate: '',
                                    endDate: '',
                                    current: false,
                                    description: ['']
                                })}
                                className="flex items-center px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition font-medium"
                            >
                                <Plus size={18} className="mr-2" />
                                Add Position
                            </button>
                        </div>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4 relative group">
                                <button
                                    onClick={() => removeItem('experience', index)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        value={exp.company}
                                        onChange={(e) => handleChange(e, 'experience', index, 'company')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Job Title"
                                        value={exp.role}
                                        onChange={(e) => handleChange(e, 'experience', index, 'role')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        value={exp.location}
                                        onChange={(e) => handleChange(e, 'experience', index, 'location')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            placeholder="Start Date"
                                            value={exp.startDate}
                                            onChange={(e) => handleChange(e, 'experience', index, 'startDate')}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="End Date"
                                            value={exp.endDate}
                                            onChange={(e) => handleChange(e, 'experience', index, 'endDate')}
                                            disabled={exp.current}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none disabled:bg-gray-100"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={exp.current}
                                        onChange={(e) => {
                                            const newArray = [...resumeData.experience];
                                            newArray[index].current = e.target.checked;
                                            if (e.target.checked) newArray[index].endDate = 'Present';
                                            updateResumeData('experience', newArray);
                                        }}
                                        className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                                    />
                                    <label className="text-sm text-gray-600">I currently work here</label>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Description / Achievements</label>
                                    {exp.description.map((desc, subIndex) => (
                                        <div key={subIndex} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={desc}
                                                onChange={(e) => handleArrayChange(e, 'experience', index, 'description', subIndex)}
                                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                                placeholder="• Achieved X by doing Y..."
                                            />
                                            <button
                                                onClick={() => removeArrayItem('experience', index, 'description', subIndex)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => addArrayItem('experience', index, 'description')}
                                        className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center"
                                    >
                                        <Plus size={14} className="mr-1" /> Add Bullet Point
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'education' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                            <button
                                onClick={() => addItem('education', {
                                    id: Date.now().toString(),
                                    institution: '',
                                    degree: '',
                                    field: '',
                                    location: '',
                                    startDate: '',
                                    endDate: '',
                                    score: ''
                                })}
                                className="flex items-center px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition font-medium"
                            >
                                <Plus size={18} className="mr-2" />
                                Add Education
                            </button>
                        </div>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4 relative group">
                                <button
                                    onClick={() => removeItem('education', index)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Institution / University"
                                        value={edu.institution}
                                        onChange={(e) => handleChange(e, 'education', index, 'institution')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Degree"
                                        value={edu.degree}
                                        onChange={(e) => handleChange(e, 'education', index, 'degree')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Field of Study"
                                        value={edu.field}
                                        onChange={(e) => handleChange(e, 'education', index, 'field')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        value={edu.location}
                                        onChange={(e) => handleChange(e, 'education', index, 'location')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            placeholder="Start Date"
                                            value={edu.startDate}
                                            onChange={(e) => handleChange(e, 'education', index, 'startDate')}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="End Date"
                                            value={edu.endDate}
                                            onChange={(e) => handleChange(e, 'education', index, 'endDate')}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Grade / Score"
                                        value={edu.score}
                                        onChange={(e) => handleChange(e, 'education', index, 'score')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                            <button
                                onClick={() => addItem('skills', {
                                    id: Date.now().toString(),
                                    name: '',
                                    category: ''
                                })}
                                className="flex items-center px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition font-medium"
                            >
                                <Plus size={18} className="mr-2" />
                                Add Skill
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {resumeData.skills.map((skill, index) => (
                                <div key={index} className="flex gap-2 items-center p-3 bg-gray-50 rounded-lg border border-gray-200 group">
                                    <div className="flex-1 grid grid-cols-2 gap-2">
                                        <input
                                            type="text"
                                            placeholder="Skill Name"
                                            value={skill.name}
                                            onChange={(e) => handleChange(e, 'skills', index, 'name')}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Category (e.g. Frontend)"
                                            value={skill.category}
                                            onChange={(e) => handleChange(e, 'skills', index, 'category')}
                                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                                        />
                                    </div>
                                    <button
                                        onClick={() => removeItem('skills', index)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                            <button
                                onClick={() => addItem('projects', {
                                    id: Date.now().toString(),
                                    title: '',
                                    description: '',
                                    techStack: '',
                                    link: ''
                                })}
                                className="flex items-center px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition font-medium"
                            >
                                <Plus size={18} className="mr-2" />
                                Add Project
                            </button>
                        </div>
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4 relative group">
                                <button
                                    onClick={() => removeItem('projects', index)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Project Title"
                                        value={project.title}
                                        onChange={(e) => handleChange(e, 'projects', index, 'title')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none font-medium"
                                    />
                                    <div className="grid grid-cols-1 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Tech Stack (e.g. React, Node.js)"
                                            value={project.techStack}
                                            onChange={(e) => handleChange(e, 'projects', index, 'techStack')}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Project Link"
                                            value={project.link}
                                            onChange={(e) => handleChange(e, 'projects', index, 'link')}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Project Description"
                                        value={project.description}
                                        onChange={(e) => handleChange(e, 'projects', index, 'description')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none h-24 resize-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'certifications' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Certifications</h2>
                            <button
                                onClick={() => addItem('certifications', {
                                    id: Date.now().toString(),
                                    name: '',
                                    issuer: '',
                                    date: '',
                                    link: ''
                                })}
                                className="flex items-center px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition font-medium"
                            >
                                <Plus size={18} className="mr-2" />
                                Add Certification
                            </button>
                        </div>
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4 relative group">
                                <button
                                    onClick={() => removeItem('certifications', index)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Certification Name"
                                        value={cert.name}
                                        onChange={(e) => handleChange(e, 'certifications', index, 'name')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Issuing Organization"
                                        value={cert.issuer}
                                        onChange={(e) => handleChange(e, 'certifications', index, 'issuer')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Date"
                                        value={cert.date}
                                        onChange={(e) => handleChange(e, 'certifications', index, 'date')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Credential Link"
                                        value={cert.link}
                                        onChange={(e) => handleChange(e, 'certifications', index, 'link')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'additional' && (
                    <div className="space-y-4 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800">Additional Information</h2>

                        {/* Languages */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-700">Languages</h3>
                                <button
                                    onClick={() => addItem('languages', { id: Date.now().toString(), name: '', proficiency: '' })}
                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center"
                                >
                                    <Plus size={16} className="mr-1" /> Add Language
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {resumeData.languages.map((lang, index) => (
                                    <div key={index} className="flex gap-2 items-center p-3 bg-gray-50 rounded-lg border border-gray-200 group">
                                        <div className="flex-1 grid grid-cols-2 gap-2">
                                            <input
                                                type="text"
                                                placeholder="Language"
                                                value={lang.name}
                                                onChange={(e) => handleChange(e, 'languages', index, 'name')}
                                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Proficiency"
                                                value={lang.proficiency}
                                                onChange={(e) => handleChange(e, 'languages', index, 'proficiency')}
                                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeItem('languages', index)}
                                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="space-y-4 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-700">Interests</h3>
                                <button
                                    onClick={() => addItem('interests', { id: Date.now().toString(), name: '' })}
                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center"
                                >
                                    <Plus size={16} className="mr-1" /> Add Interest
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.interests.map((interest, index) => (
                                    <div key={index} className="flex items-center bg-gray-50 rounded-full border border-gray-200 pl-4 pr-2 py-1">
                                        <input
                                            type="text"
                                            placeholder="Interest"
                                            value={interest.name}
                                            onChange={(e) => handleChange(e, 'interests', index, 'name')}
                                            className="bg-transparent border-none focus:ring-0 outline-none text-sm w-32"
                                        />
                                        <button
                                            onClick={() => removeItem('interests', index)}
                                            className="p-1 text-gray-400 hover:text-red-500 rounded-full transition"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Save & Export Buttons */}
            <div className="p-6 bg-white border-t border-gray-200 flex items-center justify-between">
                <AutoSaveIndicator />
                <div className="flex gap-3">
                    <button
                        onClick={() => downloadJSONResume(resumeData, `${resumeData.personalInfo.firstName}_Resume.json`)}
                        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium border border-gray-300"
                    >
                        <FileJson className="w-4 h-4 mr-2" />
                        Export JSON
                    </button>
                    <button
                        onClick={saveResume}
                        disabled={loading}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition transform hover:-translate-y-0.5 font-semibold disabled:opacity-50"
                    >
                        <Save className="w-5 h-5 mr-2" />
                        {loading ? 'Saving...' : 'Save Resume'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumeForm;
