const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Handles form data

// Serve Static Files
app.use(express.static(path.join(__dirname, '..', 'public'))); // Adjust if 'public/' is one level up from server file

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // loads views/index.ejs
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('🔍 Page not found');
});

// Start Server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});