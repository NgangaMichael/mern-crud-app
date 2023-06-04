// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Create a new blog
  const createBlog = async () => {
    const newBlog = {
      title: title,
      body: body,
      author: author
    };

    try {
      await axios.post('/blogs', newBlog);
      fetchBlogs(); // Refresh blogs list after creating a new blog
      setTitle('');
      setBody('');
      setAuthor('');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/blogs/${id}`);
      fetchBlogs(); // Refresh blogs list after deleting a blog
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <h1>My Blog App</h1>

      {/* Blog Form */}
      <form onSubmit={createBlog}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Blogs List */}
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>By: {blog.author}</p>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
