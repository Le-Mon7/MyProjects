import Post from './Post/Post';
import style from './MyPosts.module.scss';

import React from 'react';

function MyPosts(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	let newPostElem = React.createRef();

	let addPost = () => {
		let text = newPostElem.current.value;
		props.addPost(text);
	};

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea ref={newPostElem}></textarea>
				<button onClick={addPost}>Add Post</button>
			</div>
			<div>{arrPosts}</div>
		</div>
	);
}

export default MyPosts;
