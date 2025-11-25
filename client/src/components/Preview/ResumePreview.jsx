import React, { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import { useReactToPrint } from 'react-to-print';
import { Download } from 'lucide-react';

// Category A: ATS-Safe
import TemplateStandard from '../templates/TemplateStandard';
import TemplateMinimalist from '../templates/TemplateMinimalist';
import TemplateExecutive from '../templates/TemplateExecutive';
import TemplateAcademic from '../templates/TemplateAcademic';
import TemplatePinstripe from '../templates/TemplatePinstripe';

// Category B: Modern Tech
import TemplateModernSplit from '../templates/TemplateModernSplit';
import TemplateHeaderHero from '../templates/TemplateHeaderHero';
import TemplateTimeline from '../templates/TemplateTimeline';
import TemplateCompactTech from '../templates/TemplateCompactTech';
import TemplateDarkMode from '../templates/TemplateDarkMode';

// Category C: Creative
import TemplateDesigner from '../templates/TemplateDesigner';
import TemplateInfographic from '../templates/TemplateInfographic';
import TemplateAccentPop from '../templates/TemplateAccentPop';
import TemplateProfileCard from '../templates/TemplateProfileCard';
import TemplateBanner from '../templates/TemplateBanner';

// Category D: Specialized
import TemplateFresher from '../templates/TemplateFresher';
import TemplateProjectShowcase from '../templates/TemplateProjectShowcase';
import TemplateConsultant from '../templates/TemplateConsultant';
import TemplateInternational from '../templates/TemplateInternational';
import TemplateOnePage from '../templates/TemplateOnePage';

const ResumePreview = () => {
    const { resumeData } = useResume();
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `${resumeData.personalInfo.firstName || 'Resume'}_Resume`,
    });

    // Template mapping
    const getTemplate = () => {
        switch (resumeData.templateId) {
            // Category A: ATS-Safe
            case 'standard-professional':
                return <TemplateStandard resumeData={resumeData} />;
            case 'minimalist':
                return <TemplateMinimalist resumeData={resumeData} />;
            case 'executive':
                return <TemplateExecutive resumeData={resumeData} />;
            case 'academic':
                return <TemplateAcademic resumeData={resumeData} />;
            case 'pinstripe':
                return <TemplatePinstripe resumeData={resumeData} />;

            // Category B: Modern Tech
            case 'modern-split':
                return <TemplateModernSplit resumeData={resumeData} />;
            case 'header-hero':
                return <TemplateHeaderHero resumeData={resumeData} />;
            case 'timeline':
                return <TemplateTimeline resumeData={resumeData} />;
            case 'compact-tech':
                return <TemplateCompactTech resumeData={resumeData} />;
            case 'dark-mode':
                return <TemplateDarkMode resumeData={resumeData} />;

            // Category C: Creative
            case 'designer':
                return <TemplateDesigner resumeData={resumeData} />;
            case 'infographic':
                return <TemplateInfographic resumeData={resumeData} />;
            case 'accent-pop':
                return <TemplateAccentPop resumeData={resumeData} />;
            case 'profile-card':
                return <TemplateProfileCard resumeData={resumeData} />;
            case 'banner':
                return <TemplateBanner resumeData={resumeData} />;

            // Category D: Specialized
            case 'fresher':
                return <TemplateFresher resumeData={resumeData} />;
            case 'project-showcase':
                return <TemplateProjectShowcase resumeData={resumeData} />;
            case 'consultant':
                return <TemplateConsultant resumeData={resumeData} />;
            case 'international':
                return <TemplateInternational resumeData={resumeData} />;
            case 'one-page':
                return <TemplateOnePage resumeData={resumeData} />;

            default:
                return <TemplateStandard resumeData={resumeData} />;
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full flex justify-end mb-4 px-2">
                <button
                    onClick={handlePrint}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 shadow-lg transition font-medium text-xs"
                >
                    <Download className="w-4 h-4 mr-1" />
                    Download PDF
                </button>
            </div>

            <div className="border shadow-xl bg-white transition-all resume-preview" style={{ width: '210mm', minHeight: '297mm' }}>
                <div ref={componentRef}>
                    {getTemplate()}
                </div>
            </div>
        </div>
    );
};

export default ResumePreview;
