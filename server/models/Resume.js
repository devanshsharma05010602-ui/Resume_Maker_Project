const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    personalInfo: {
        firstName: String,
        lastName: String,
        jobTitle: String,
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        portfolioUrl: String,
        website: String,
    },
    summary: String,
    education: [{
        institution: String,
        degree: String,
        location: String,
        startDate: String,
        endDate: String,
        score: String,
        description: String,
    }],
    experience: [{
        company: String,
        role: String,
        location: String,
        startDate: String,
        endDate: String,
        current: Boolean,
        description: [String], // Array of bullet points
    }],
    skills: [{
        name: String,
        level: String, // Beginner, Intermediate, Expert
        category: String, // Technical, Soft, etc.
    }],
    projects: [{
        title: String,
        techStack: String,
        link: String,
        description: String,
    }],
    certifications: [{
        name: String,
        issuer: String,
        issueDate: String,
        expirationDate: String,
        credentialId: String,
        url: String,
    }],
    languages: [{
        name: String,
        proficiency: String,
    }],
    awards: [{
        title: String,
        issuer: String,
        date: String,
        description: String,
    }],
    volunteer: [{
        organization: String,
        role: String,
        startDate: String,
        endDate: String,
        description: [String],
    }],
    interests: [String],
    themeColor: {
        type: String,
        default: '#000000',
    },
    templateId: {
        type: String,
        default: 'standard-professional',
    },
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
