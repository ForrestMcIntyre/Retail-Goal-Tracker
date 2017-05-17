import React, { Component } from 'react';

class PostListView extends Component {
  render() {
    this.props.posts.map((post) => {
      console.log(post); // Nothing in console
    })
    return (
      <div className="PostView">
        {this.props.posts.map(function(post) {
          return(
            <div>
              <p>{post.title}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PostListView;