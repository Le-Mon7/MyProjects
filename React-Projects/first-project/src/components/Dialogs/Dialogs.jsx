import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.scss';

function DialogItem(props) {
	let url = '/messages/' + props.id;

	return (
		<div className={style.dialog + ' ' + style.active}>
			<NavLink
				to={url}
				className={(navData) => (navData.isActive ? style.active : '')}
			>
				{props.name}
			</NavLink>
		</div>
	);
}

function Message(props) {
	return <div className={style.message}>{props.msg}</div>;
}

function Dialogs() {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>
				<div className={style.dialogs_items_title}>Dialogs</div>
				<DialogItem id='1' name='Andrey' />
				<DialogItem id='2' name='Nastay' />
				<DialogItem id='3' name='Jim' />
				<DialogItem id='4' name='Igor' />
				<DialogItem id='5' name='Kris' />
			</div>
			<div className={style.messages}>
				<div className={style.messages_title}>Messages</div>
				<div className={style.messages_items}>
					<Message msg='Hi!' />
					<Message msg='How are you?' />
					<Message msg='Yo!' />
					<Message msg='Thanks!' />
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
