import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

function Profile(props) {
	return (
		<div>
			<Description />
			<MyPosts
				posts={props.state.posts}
				newPostText={props.state.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	);
}

export default Profile;
