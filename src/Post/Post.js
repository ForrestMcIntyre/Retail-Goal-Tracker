import React, { Component } from 'react';

class Post extends Component {
	constructor(){
		super();
		this.state = {post: ''};
	}

	componentDidMount() {
		this.getPosting();
	}

	getPosting() {
		fetch('https://hacker-news.firebaseio.com/v0/item/8863.json')
			.then((response) => { 
				return response.json();
			}).then((data) => {
				this.setState({ post: data })
				console.log(this.state);
			});
	}

	render() {
		return(
			<div>
				<h1>{this.state.post.title}</h1>
				<p>{this.state.post.url}</p>
			</div>
		) 
	}
}

export default Post;