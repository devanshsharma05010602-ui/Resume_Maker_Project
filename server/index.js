const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// CORS Configuration for production and development
const getAllowedOrigins = () => {
    const origins = ['http://localhost:5173']; // Local development

    if (process.env.FRONTEND_URL) {
        // Remove trailing slash if present and add to allowed origins
        origins.push(process.env.FRONTEND_URL.replace(/\/$/, ''));
    }

    return origins;
};

const allowedOrigins = getAllowedOrigins();
console.log('Allowed Origins:', allowedOrigins);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('BLOCKED BY CORS:', origin);
            console.log('Expected one of:', allowedOrigins);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/resume', require('./routes/resume'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
