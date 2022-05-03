import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

function Profile(props) {
	return (
		<div>
			<Description />
			<MyPosts posts={props.state.posts} addPost={props.addPost} />
		</div>
	);
}

export default Profile;
