import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Download, Star, X, Briefcase, GraduationCap, Code, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import resumePreview from '../assets/resume-preview.png';
import { sampleResumeData } from '../data/sampleResumeData';
import TemplateStandard from './templates/TemplateStandard';
import TemplateModernSplit from './templates/TemplateModernSplit';
import TemplateMinimalist from './templates/TemplateMinimalist';

const LandingPage = () => {
    const [showSamples, setShowSamples] = useState(false);
    const [selectedSample, setSelectedSample] = useState(null);

    // Sample resume data
    const sampleResumes = [
        {
            id: 1,
            title: "Software Engineer",
            icon: <Code className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500",
            description: "Perfect for tech professionals showcasing projects and skills"
        },
        {
            id: 2,
            title: "Business Professional",
            icon: <Briefcase className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            description: "Ideal for corporate roles and management positions"
        },
        {
            id: 3,
            title: "Recent Graduate",
            icon: <GraduationCap className="w-6 h-6" />,
            color: "from-green-500 to-emerald-500",
            description: "Tailored for students and entry-level candidates"
        },
        {
            id: 4,
            title: "Creative Professional",
            icon: <Palette className="w-6 h-6" />,
            color: "from-orange-500 to-red-500",
            description: "Stand out in design, marketing, and creative fields"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    ResumeForge
                </div>
                <div className="space-x-6 hidden md:flex">
                    <a href="#features" className="hover:text-purple-600 transition">Features</a>
                    <a href="#templates" className="hover:text-purple-600 transition">Templates</a>
                    <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
                </div>
                <div className="space-x-4">
                    <Link to="/auth" className="text-gray-600 hover:text-purple-600 font-medium">Log In</Link>
                    <Link to="/auth" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/2 w-[800px] h-[800px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wide uppercase">
                        The #1 Online Resume Builder
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                        Build Your Dream Resume <br />
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            In Minutes, Not Hours
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Create professional, ATS-friendly resumes with our easy-to-use builder.
                        Choose from modern templates and land your dream job faster.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/auth" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1">
                            Create My Resume
                        </Link>
                        <button
                            onClick={() => setShowSamples(true)}
                            className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg shadow-sm hover:bg-gray-50 transition">
                            View Samples
                        </button>
                    </div>

                    {/* Samples Modal */}
                    {showSamples && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => { setShowSamples(false); setSelectedSample(null); }}>
                            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                {!selectedSample ? (
                                    <>
                                        {/* Modal Header */}
                                        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center rounded-t-2xl z-10">
                                            <div>
                                                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Sample Resumes</h2>
                                                <p className="text-gray-600 mt-1">Choose a template that matches your career</p>
                                            </div>
                                            <button
                                                onClick={() => setShowSamples(false)}
                                                className="p-2 hover:bg-gray-100 rounded-full transition"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>

                                        {/* Modal Body - Sample Selection */}
                                        <div className="p-8">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {sampleResumes.map((sample) => (
                                                    <div
                                                        key={sample.id}
                                                        onClick={() => setSelectedSample(sample.id)}
                                                        className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl"
                                                    >
                                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sample.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                                            {sample.icon}
                                                        </div>
                                                        <h3 className="text-xl font-bold mb-2 text-gray-900">{sample.title}</h3>
                                                        <p className="text-gray-600 mb-4">{sample.description}</p>
                                                        <div className="flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                                                            <span>Preview Template</span>
                                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA at bottom of modal */}
                                            <div className="mt-10 p-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl text-center text-white">
                                                <h3 className="text-2xl font-bold mb-2">Ready to create your own?</h3>
                                                <p className="mb-4 text-purple-100">Build your professional resume in minutes with our easy-to-use editor</p>
                                                <Link
                                                    to="/auth"
                                                    className="inline-block px-8 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                                                >
                                                    Get Started Free
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Preview Header */}
                                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl z-10">
                                            <button
                                                onClick={() => setSelectedSample(null)}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition font-medium text-gray-700"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                                Back to Samples
                                            </button>

                                            <div className="flex items-center gap-3">
                                                {/* Navigation between samples */}
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => setSelectedSample(selectedSample === 1 ? 4 : selectedSample - 1)}
                                                        className="p-2 hover:bg-gray-100 rounded-full transition"
                                                        title="Previous Sample"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                    <span className="text-sm font-medium text-gray-600">
                                                        {sampleResumes.find(s => s.id === selectedSample)?.title}
                                                    </span>
                                                    <button
                                                        onClick={() => setSelectedSample(selectedSample === 4 ? 1 : selectedSample + 1)}
                                                        className="p-2 hover:bg-gray-100 rounded-full transition"
                                                        title="Next Sample"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => { setShowSamples(false); setSelectedSample(null); }}
                                                    className="p-2 hover:bg-gray-100 rounded-full transition"
                                                >
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Preview Body */}
                                        <div className="p-8 bg-gray-50">
                                            <div className="max-w-4xl mx-auto">
                                                <div className="bg-white shadow-2xl" style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
                                                    {(() => {
                                                        let resumeData;
                                                        switch (selectedSample) {
                                                            case 1: resumeData = sampleResumeData.softwareEngineer; break;
                                                            case 2: resumeData = sampleResumeData.businessProfessional; break;
                                                            case 3: resumeData = sampleResumeData.recentGraduate; break;
                                                            case 4: resumeData = sampleResumeData.creativeProfessional; break;
                                                            default: resumeData = sampleResumeData.softwareEngineer;
                                                        }

                                                        // Render appropriate template
                                                        switch (resumeData.templateId) {
                                                            case 'modern-split':
                                                                return <TemplateModernSplit resumeData={resumeData} />;
                                                            case 'minimalist':
                                                                return <TemplateMinimalist resumeData={resumeData} />;
                                                            default:
                                                                return <TemplateStandard resumeData={resumeData} />;
                                                        }
                                                    })()}
                                                </div>

                                                {/* CTA below preview */}
                                                <div className="mt-8 text-center">
                                                    <Link
                                                        to="/auth"
                                                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition"
                                                    >
                                                        <FileText className="w-5 h-5" />
                                                        Use This Template
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}



                    {/* Hero Image / Mockup */}
                    <div className="mt-20 relative mx-auto max-w-5xl">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-2 transform rotate-1 hover:rotate-0 transition duration-500">
                            <img
                                src={resumePreview}
                                alt="Resume Builder Preview"
                                className="w-full h-auto rounded-lg shadow-inner"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose ResumeForge?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to create a resume that stands out and gets you hired.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: <CheckCircle className="w-8 h-8 text-green-500" />, title: "ATS-Friendly", desc: "Templates designed to pass Applicant Tracking Systems." },
                            { icon: <Download className="w-8 h-8 text-blue-500" />, title: "Instant Download", desc: "Export your resume as a high-quality PDF in one click." },
                            { icon: <Star className="w-8 h-8 text-yellow-500" />, title: "Premium Designs", desc: "Stand out with modern, professionally crafted layouts." }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to land your dream job?</h2>
                    <p className="text-xl text-gray-400 mb-10">Join thousands of job seekers who have successfully built their resumes with ResumeForge.</p>
                    <Link to="/auth" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition">
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-gray-900 text-gray-500 border-t border-gray-800 text-center">
                <p>&copy; 2024 ResumeForge. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
