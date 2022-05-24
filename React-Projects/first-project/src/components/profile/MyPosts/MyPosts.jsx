import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.scss';

function MyPosts(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea
					onChange={onPostChange}
					value={props.newPostText}
				></textarea>
				<button onClick={onAddPost}>Add Post</button>
			</div>
			<div>{arrPosts}</div>
		</div>
	);
}

export default MyPosts;
