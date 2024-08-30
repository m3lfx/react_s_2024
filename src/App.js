import './App.css';
// import Create from './Create';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => alert('Error fetching posts'));
  };
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div className="container pb-5">
      <Nav title="home page" name="sample name" />
      <br />
      <h1>MERN CRUD</h1>
      {(posts.length > 0) ? posts.map((post, i) => (
        <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
          <div className="col pt-3 pb-2">
            {/* <h2>{post.title}</h2> */}
            <Link to={`/post/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p className="lead">{post.content.substring(0, 100)}</p>
            <p>
              Author <span className="badge">{post.user}</span> Published on{' '}
              <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
            </p>
          </div>
        </div>
      )) : <h1>no posts</h1>}
    </div>
  );
}

export default App;
