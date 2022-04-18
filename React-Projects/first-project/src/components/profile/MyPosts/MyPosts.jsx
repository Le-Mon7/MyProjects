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
				<Post message='Hi! How are yoy?' likes='5' />
				<Post message='Soy good!' likes='11' />
				<Post message="I'm funny, thanks you." likes='3' />
			</div>
		</div>
	);
}

export default MyPosts;
