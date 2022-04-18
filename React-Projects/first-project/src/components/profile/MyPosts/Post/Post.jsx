import style from './Post.module.scss';

function Post(props) {
	return (
		<div className={style.item}>
			<img
				src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
				alt=''
			/>
			<span>{props.message}</span>
			<div className={style.like}>{props.likes} Like</div>
		</div>
	);
}

export default Post;
