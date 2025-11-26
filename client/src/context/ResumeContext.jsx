import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            phone: '',
            location: '',
            linkedin: '',
            github: '',
            portfolioUrl: '',
            website: '',
        },
        summary: '',
        education: [],
        experience: [],
        skills: [],
        projects: [],
        certifications: [],
        languages: [],
        awards: [],
        volunteer: [],
        interests: [],
        themeColor: '#000000',
        templateId: 'standard-professional',
    });

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);

    useEffect(() => {
        if (token) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            fetchResume();
        }
    }, [token]);

    // Auto-save effect with debounce
    useEffect(() => {
        if (!token || !user) return; // Don't auto-save if not logged in

        const timeoutId = setTimeout(() => {
            // Auto-save after 5 seconds of inactivity
            autoSaveResume();
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [resumeData, token, user]);

    const login = (newToken, userData) => {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setResumeData({
            personalInfo: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                portfolioUrl: '',
                website: '',
            },
            summary: '',
            education: [],
            experience: [],
            skills: [],
            projects: [],
            certifications: [],
            languages: [],
            awards: [],
            volunteer: [],
            interests: [],
            themeColor: '#000000',
            templateId: 'standard-professional',
        });
    };

    const fetchResume = async () => {
        // Don't attempt to fetch if no token
        if (!token) {
            console.log('No authentication token, skipping resume fetch.');
            return;
        }

        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.id) {
                const res = await axios.get(`${API_URL}/api/resume/${storedUser.id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (res.data) setResumeData(res.data);
            }
        } catch (error) {
            // 404 is expected for new users who haven't saved a resume yet - suppress
            if (error.response && error.response.status === 404) {
                // Silent - this is normal for new users
                return;
            }

            // Only log unexpected errors
            if (error.response && error.response.status === 401) {
                console.log('Authentication expired, please log in again.');
                logout();
            } else {
                console.error('Error fetching resume:', error.message);
            }
        }
    };

    const updateResumeData = (section, data) => {
        setResumeData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };

    const autoSaveResume = async () => {
        // Don't attempt to save if no token or user
        if (!token || !user) {
            return;
        }

        try {
            setIsSaving(true);
            await axios.post(`${API_URL}/api/resume/save`, resumeData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setLastSaved(new Date());
        } catch (error) {
            // Silent fail for auto-save - don't spam console
            if (error.response && error.response.status === 401) {
                // Token expired during session
                logout();
            }
        } finally {
            setIsSaving(false);
        }
    };

    const saveResume = async () => {
        try {
            setLoading(true);
            setIsSaving(true);
            await axios.post(`${API_URL}/api/resume/save`, resumeData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setLastSaved(new Date());
            alert('Resume saved successfully!');
        } catch (error) {
            console.error('Error saving resume:', error);
            alert('Failed to save resume');
        } finally {
            setLoading(false);
            setIsSaving(false);
        }
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updateResumeData, saveResume, loading, login, logout, user, token, isSaving, lastSaved }}>
            {children}
        </ResumeContext.Provider>
    );
};
