import Post from './Post/Post';
import style from './MyPosts.module.scss';

function MyPosts() {
	return (
		<div className={style.posts}>
			<h3>My post</h3>
			<div className={style.addPost}>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;
