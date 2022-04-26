import Post from './Post/Post';
import style from './MyPosts.module.scss';

function MyPosts(props) {
	let arrPosts = props.posts.map((post) => (
		<Post message={post.msg} likes={post.likes} />
	));

	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div>{arrPosts}</div>
		</div>
	);
}

export default MyPosts;
