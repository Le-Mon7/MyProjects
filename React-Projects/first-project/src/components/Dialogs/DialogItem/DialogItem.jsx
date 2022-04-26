import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.scss';

function DialogItem(props) {
	let url = '/messages/' + props.id;

	return (
		<div className={style.dialog}>
			<NavLink
				to={url}
				className={(navData) => (navData.isActive ? style.active : '')}
			>
				{props.name}
			</NavLink>
		</div>
	);
}

export default DialogItem;
