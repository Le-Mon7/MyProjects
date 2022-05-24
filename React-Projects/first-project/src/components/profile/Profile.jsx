import Description from './Description/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
	return (
		<div>
			<Description />
			<MyPostsContainer store={props.store} />
		</div>
	);
}

export default Profile;
