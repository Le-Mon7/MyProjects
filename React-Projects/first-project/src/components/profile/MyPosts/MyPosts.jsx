import Post from './Post/Post';
import style from './MyPosts.module.scss';

import React from 'react';

function MyPosts(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	let newPostElem = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElem.current.value;
		props.changePost(text);
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
