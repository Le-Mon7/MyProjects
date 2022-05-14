import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.scss';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../Redux/profile-reducer';

function MyPosts(props) {
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

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea
					onChange={onPostChange}
					value={props.newPostText}
				></textarea>
				<button onClick={addPost}>Add Post</button>
			</div>
			<div>{arrPosts}</div>
		</div>
	);
}

export default MyPosts;
