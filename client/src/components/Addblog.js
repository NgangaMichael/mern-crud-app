import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export default function Addblog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    const createBlog = async () => {
        const newBlog = {
          title: title,
          body: body,
          author: author
        };
    
        try {
          await axios.post('/blogs', newBlog);
          setTitle('');
          setBody('');
          setAuthor('');
          navigate('/');
        } catch (error) {
          console.error('Error creating blog:', error);
        }
    };
  return (
    <div>
        <Link to='/'>Home</Link>
        <h3>Addblog</h3>
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
    </div>
  )
}
