import './App.css';
// import Create from './Create';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const App = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        // console.log(response);
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
    </div>
  );
}

export default App;
