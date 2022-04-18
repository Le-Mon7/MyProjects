import style from './Post.module.scss';

function Post() {
	return (
		<div className={style.item}>
			<img
				src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
				alt=''
			/>
			<span>Post 1</span>
			<div className={style.like}>Like</div>
		</div>
	);
}

export default Post;
