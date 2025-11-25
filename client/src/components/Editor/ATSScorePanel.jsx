import React, { useMemo } from 'react';
import { useResume } from '../../context/ResumeContext';
import { calculateATSScore } from '../../utils/atsScoreCalculator';
import { TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

const ATSScorePanel = () => {
    const { resumeData } = useResume();

    const atsResult = useMemo(() => calculateATSScore(resumeData), [resumeData]);

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreBgColor = (score) => {
        if (score >= 80) return 'bg-green-600';
        if (score >= 60) return 'bg-yellow-600';
        return 'bg-red-600';
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-800">ATS Score</h3>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    Beta
                </span>
            </div>

            {/* Circular Score */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 mb-3">
                    <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                        />
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke={atsResult.score >= 80 ? '#16a34a' : atsResult.score >= 60 ? '#ca8a04' : '#dc2626'}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${atsResult.score * 3.52} 352`}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-3xl font-bold ${getScoreColor(atsResult.score)}`}>
                            {atsResult.score}
                        </span>
                        <span className="text-xs text-gray-500">out of 100</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(atsResult.score)}`}>
                        Grade: {atsResult.grade}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                        {atsResult.score >= 80 ? 'Excellent! ATS-ready' : atsResult.score >= 60 ? 'Good, but needs improvement' : 'Needs significant work'}
                    </p>
                </div>
            </div>

            {/* Breakdown */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Score Breakdown</h4>
                <div className="space-y-2">
                    {atsResult.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                            <span className="text-gray-700">{item.category}</span>
                            <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${getScoreBgColor(atsResult.score)}`}
                                        style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="font-medium text-gray-700 w-12 text-right">
                                    {item.score}/{item.maxScore}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendations */}
            {atsResult.recommendations.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Recommendations</h4>
                    <div className="space-y-2">
                        {atsResult.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-gray-200">
                                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700">{recommendation}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {atsResult.score >= 90 && (
                <div className="mt-4 flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-green-800">
                        Amazing! Your resume is highly optimized for ATS systems.
                    </span>
                </div>
            )}
        </div>
    );
};

export default ATSScorePanel;
