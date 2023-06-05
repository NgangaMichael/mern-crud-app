import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

  const [blogs, setBlogs] = useState([]);

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
        <h3>All blogs</h3>
        <Link to='/addblog'>Add blog</Link>
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
  )
}
