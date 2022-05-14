import React from 'react';
import Post from './Post/Post';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	};

	return <MyPosts />;
}

export default MyPostsContainer;
