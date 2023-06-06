import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
    
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
            <Link to={`/details/${blog._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
