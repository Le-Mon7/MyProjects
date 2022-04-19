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
	let dialogsData = [
		{ id: 1, name: 'Max' },
		{ id: 2, name: 'Anastasia' },
		{ id: 3, name: 'Jim' },
		{ id: 4, name: 'Igor' },
	];

	let messagesData = [
		{ id: 1, msg: 'Hi!' },
		{ id: 2, msg: 'How are you?' },
		{ id: 3, msg: 'Yo!' },
		{ id: 4, msg: 'Thanks!' },
	];

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>
				<div className={style.dialogs_items_title}>Dialogs</div>
				<DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
				<DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
				<DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
				<DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
			</div>
			<div className={style.messages}>
				<div className={style.messages_title}>Messages</div>
				<div className={style.messages_items}>
					<Message msg={messagesData[0].msg} />
					<Message msg={messagesData[1].msg} />
					<Message msg={messagesData[2].msg} />
					<Message msg={messagesData[3].msg} />
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
