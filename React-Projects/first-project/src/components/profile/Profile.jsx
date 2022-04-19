import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';
import style from './Profile.module.scss';

function Profile() {
	return (
		<div>
			<div>
				<img
					src='http://dgdesign.ru/uploads/posts/2017-02/1486798055_shapka-sayta-osen-1836271.jpg'
					alt=''
				/>
			</div>
			<Description />
			<MyPosts />
		</div>
	);
}

export default Profile;
