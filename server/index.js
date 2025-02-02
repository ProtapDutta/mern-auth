const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('✅ Database Connected'))
    .catch((err) => console.log('❌ Database not connected', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS setup (Allow frontend requests)
app.use(cors({
    origin: process.env.CLIENT_URL,  // Allow frontend requests
    credentials: true
}));

// Routes
app.use('/', require('./routes/authRoutes'));

// Dynamic Port for Render
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`🚀 Server is running on port ${port}`));
