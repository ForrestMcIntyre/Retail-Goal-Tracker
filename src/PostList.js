import React, { Component } from 'react';
import PostListView from './PostListView.js';

class PostList extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
    this.stories = [];
  }

  componentDidMount() {
    this.getTopPosts();
  }

  // Retrieve an array of top story URLs
  getTopPosts() {
    // Get an array of top story IDs
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => {
        // return JSON
        return response.json();
      }).then((data) => {
        // loop the the ids and surround them with the API url
        this.stories = data.map(function(id) {
          return 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
        });
      this.getPostData(this.stories);
      });
  }

  // Given an array of URLs, create an array of objects
  getPostData(obj) {
    var postData = [];
    for (var i = 0; i < obj.length; i++) {
      fetch(obj[i])
        .then((response) => {
          return response.json();
        }).then((data) => {
          postData.push(data);
        });
    }
    this.setState({ posts: postData });
  }

  render() {
    console.log(this.state.posts);
    const elements = this.state.posts.map((post) => {
      debugger;
      console.log(this.state.posts);
      console.log(post);
      return(
      <div>
        <p>{post.title}</p>
        <p>This is a test</p>
      </div>)
    });

    return(
      <div className="Posts">
        {elements}
      </div>
    )
  }
}

export default PostList;