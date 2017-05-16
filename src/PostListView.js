import React, { Component } from 'react';

class PostListView extends Component {
  render() {
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