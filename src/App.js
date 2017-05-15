import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
        <Comments />
      </div>
    );
  }
}

class Comments extends Component {
  render() {
    return (
      <div className="Comment-box">
        <ul>
          <li> Comment 1 </li>
          <li> Comment 2 </li>
          <li> Comment 3 </li>
        </ul>
      </div>
    )
  }
}

export default App;
