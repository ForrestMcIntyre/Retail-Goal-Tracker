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
      .then(response => response.json()).then((data) => {
        console.log(data);
        // loop the the ids and surround them with the API url
        this.stories = data.map(function(id) {
          return 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
        });
      this.getPostData(this.stories);
      });
  }

  // Given an array of URLs, create an array of objects
  async getPostData(stories) {
    //Because these requests are async, we have to wait until they return to call setState()
    //So let's convert the top 10 URLs to fetch->json() promises.
    var requests = stories.slice(0, 10).map(url => fetch(url).then(response => response.json()));
    //Now we use Promise.all() to wait for all requests to return
    //await is a new keyword that pauses execution in async functions to wait for a promise
    //see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    var posts = await Promise.all(requests);
    this.setState({ posts });
  }

  render() {
    const elements = this.state.posts.map((post) => {
      return(
      <div key={post.id}>
        <h2>{post.title}</h2>
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