import React, { useEffect, useState } from 'react';
import { Check, Cloud, AlertCircle } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const AutoSaveIndicator = () => {
    const { isSaving, lastSaved } = useResume();
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        if (!lastSaved) return;

        const updateTimeAgo = () => {
            const seconds = Math.floor((new Date() - lastSaved) / 1000);

            if (seconds < 60) {
                setTimeAgo('just now');
            } else if (seconds < 3600) {
                const minutes = Math.floor(seconds / 60);
                setTimeAgo(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`);
            } else {
                const hours = Math.floor(seconds / 3600);
                setTimeAgo(`${hours} ${hours === 1 ? 'hour' : 'hours'} ago`);
            }
        };

        updateTimeAgo();
        const interval = setInterval(updateTimeAgo, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, [lastSaved]);

    if (!lastSaved && !isSaving) {
        return null; // Don't show anything if never saved
    }

    return (
        <div className="flex items-center gap-2 text-sm">
            {isSaving ? (
                <>
                    <Cloud className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-gray-600">Saving...</span>
                </>
            ) : lastSaved ? (
                <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Saved {timeAgo}</span>
                </>
            ) : null}
        </div>
    );
};

export default AutoSaveIndicator;
