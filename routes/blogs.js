// routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const newBlog = req.body;
    const createdBlog = await Blog.create(newBlog);
    res.status(201).json(createdBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Read all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error retrieving blogs:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Read a single blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.json(blog);
  } catch (error) {
    console.error('Error retrieving blog:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedBlog) {
      return res.status(404).send('Blog not found');
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).send('Blog not found');
    }
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;