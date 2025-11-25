import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { FileText, Sparkles, Palette, Target } from 'lucide-react';

const TemplateSelector = () => {
    const { resumeData, updateResumeData } = useResume();

    const templates = [
        {
            category: 'ATS-Safe Classics',
            icon: <FileText size={20} />,
            color: 'blue',
            templates: [
                { id: 'standard-professional', name: 'Standard Professional', description: 'Classic, single-column layout' },
                { id: 'minimalist', name: 'Minimalist', description: 'Clean with lots of white space' },
                { id: 'executive', name: 'Executive', description: 'Dense, serif fonts for seniors' },
                { id: 'academic', name: 'Academic (CV)', description: 'Emphasizes education & research' },
                { id: 'pinstripe', name: 'Pinstripe', description: 'Subtle colored vertical line' },
            ]
        },
        {
            category: 'Modern Tech',
            icon: <Sparkles size={20} />,
            color: 'purple',
            templates: [
                { id: 'modern-split', name: 'Modern Split', description: 'Sidebar for skills & contact' },
                { id: 'header-hero', name: 'Header Hero', description: 'Large colored header' },
                { id: 'timeline', name: 'Timeline', description: 'Vertical timeline design' },
                { id: 'compact-tech', name: 'Compact Tech', description: 'Tight grid with skill tags' },
                { id: 'dark-mode', name: 'Dark Mode', description: 'Dark background, coder style' },
            ]
        },
        {
            category: 'Creative & Visual',
            icon: <Palette size={20} />,
            color: 'pink',
            templates: [
                { id: 'designer', name: 'Designer', description: 'Asymmetrical, creative layout' },
                { id: 'infographic', name: 'Infographic', description: 'Visual skill meters' },
                { id: 'accent-pop', name: 'Accent Pop', description: 'Bold accent color highlights' },
                { id: 'profile-card', name: 'Profile Card', description: 'Card-style header with photo' },
                { id: 'banner', name: 'Banner', description: 'Huge name banner' },
            ]
        },
        {
            category: 'Specialized',
            icon: <Target size={20} />,
            color: 'green',
            templates: [
                { id: 'fresher', name: 'Fresher', description: 'Education-first layout' },
                { id: 'project-showcase', name: 'Project Showcase', description: 'Projects over experience' },
                { id: 'consultant', name: 'Consultant/Gig', description: 'Client engagements focus' },
                { id: 'international', name: 'International', description: 'With photo & personal details' },
                { id: 'one-page', name: 'One-Page Pitch', description: 'Ultra-condensed format' },
            ]
        }
    ];

    const handleTemplateSelect = (templateId) => {
        updateResumeData('templateId', templateId);
    };

    const getColorClasses = (color) => {
        const colors = {
            blue: 'border-blue-500 bg-blue-50 text-blue-700',
            purple: 'border-purple-500 bg-purple-50 text-purple-700',
            pink: 'border-pink-500 bg-pink-50 text-pink-700',
            green: 'border-green-500 bg-green-50 text-green-700',
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Template</h2>
                <p className="text-gray-600">Select a template that best fits your career profile</p>
            </div>

            {templates.map((category, idx) => (
                <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                            {category.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{category.category}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.templates.map((template) => (
                            <button
                                key={template.id}
                                onClick={() => handleTemplateSelect(template.id)}
                                className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-lg ${resumeData.templateId === template.id
                                        ? `border-${category.color}-500 bg-${category.color}-50 shadow-md`
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="font-semibold text-gray-800 mb-1">{template.name}</div>
                                <div className="text-sm text-gray-600">{template.description}</div>
                                {resumeData.templateId === template.id && (
                                    <div className={`mt-2 text-xs font-medium text-${category.color}-600`}>
                                        ✓ Selected
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TemplateSelector;
