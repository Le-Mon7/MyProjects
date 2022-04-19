import Post from './Post/Post';
import style from './MyPosts.module.scss';

function MyPosts() {
	let postData = [
		{ id: 1, msg: 'Hi! How are yoy?', likes: 5 },
		{ id: 2, msg: 'Soy good!', likes: 11 },
		{ id: 3, msg: "I'm funny, thanks you.", likes: 3 },
	];

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div>
				<Post message={postData[0].msg} likes={postData[0].likes} />
				<Post message={postData[1].msg} likes={postData[1].likes} />
				<Post message={postData[2].msg} likes={postData[2].likes} />
			</div>
		</div>
	);
}

export default MyPosts;
