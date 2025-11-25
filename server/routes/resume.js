const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Middleware to verify token (simplified for now, can be extracted)
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    // Bearer <token>
    const bearer = token.split(' ');
    const bearerToken = bearer[1];

    try {
        const decoded = require('jsonwebtoken').verify(bearerToken, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Save or Update Resume
router.post('/save', verifyToken, async (req, res) => {
    try {
        const {
            personalInfo,
            summary,
            education,
            experience,
            skills,
            projects,
            certifications,
            languages,
            awards,
            volunteer,
            interests,
            themeColor,
            templateId
        } = req.body;

        let resume = await Resume.findOne({ user_id: req.userId });

        if (resume) {
            // Update
            resume.personalInfo = personalInfo;
            resume.summary = summary;
            resume.education = education;
            resume.experience = experience;
            resume.skills = skills;
            resume.projects = projects;
            resume.certifications = certifications;
            resume.languages = languages;
            resume.awards = awards;
            resume.volunteer = volunteer;
            resume.interests = interests;
            resume.themeColor = themeColor;
            resume.templateId = templateId;
            await resume.save();
        } else {
            // Create
            resume = new Resume({
                user_id: req.userId,
                personalInfo,
                summary,
                education,
                experience,
                skills,
                projects,
                certifications,
                languages,
                awards,
                volunteer,
                interests,
                themeColor,
                templateId
            });
            await resume.save();
        }

        res.json({ message: 'Resume saved successfully', resume });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Resume
router.get('/:userId', async (req, res) => {
    try {
        const resume = await Resume.findOne({ user_id: req.params.userId });
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
