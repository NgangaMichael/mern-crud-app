// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const blogRoutes = require('./routes/blogs');
const db = require('./db/db');

db();
app.use(cors());
app.use(express.json());
app.use(blogRoutes);

app.listen(5000, () => {
  console.log('Server has started')
})