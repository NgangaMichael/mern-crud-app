import {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Details() {
    const [blog, setBlogs] = useState([]);
    const {id} = useParams();

    // Fetch all blogs
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/details/${id}`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  
    useEffect(() => {
      fetchBlog();
    }, []);

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  return (
    <div>
        <h3>Details</h3>
        <hr />
        <h5>{blog.title}</h5>
        <p>{blog.body}</p>
        <p>{blog.author}</p>
        <Link to={`/editblog/${blog._id}`}>Edit blog</Link>
        <button onClick={() => deleteBlog(blog._id)}>Delete</button>
    </div>
  )
}
