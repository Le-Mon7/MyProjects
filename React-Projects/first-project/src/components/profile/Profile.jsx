import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

function Profile(props) {
	return (
		<div>
			<Description />
			<MyPosts
				posts={props.state.posts}
				addPost={props.addPost}
				changePost={props.changePost}
				newPostText={props.state.newPostText}
			/>
		</div>
	);
}

export default Profile;
