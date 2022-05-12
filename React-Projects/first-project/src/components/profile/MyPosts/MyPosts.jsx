import Post from './Post/Post';
import style from './MyPosts.module.scss';

import React from 'react';

function MyPosts(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	let newPostElem = React.createRef();

	let addPost = () => {
		let action = { type: 'ADD-POST' };
		props.dispatch(action);
	};

	let onPostChange = () => {
		let text = newPostElem.current.value;
		let action = { type: 'UPDATE-NEW-POST-TEXT', postMessage: text };
		props.dispatch(action);
	};

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea
					onChange={onPostChange}
					ref={newPostElem}
					value={props.newPostText}
				></textarea>
				<button onClick={addPost}>Add Post</button>
			</div>
			<div>{arrPosts}</div>
		</div>
	);
}

export default MyPosts;
