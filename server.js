// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogs');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// API routes
app.use('/blogs', blogRoutes);
