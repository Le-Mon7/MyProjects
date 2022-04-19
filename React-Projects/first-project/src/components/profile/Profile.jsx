import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';
import style from './Profile.module.scss';

function Profile() {
	return (
		<div>
			<Description />
			<MyPosts />
		</div>
	);
}

export default Profile;
