import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.scss';

function Dialogs(props) {
	let arrDialogs = props.state.dialogs.map((dialog) => (
		<DialogItem id={dialog.id} name={dialog.name} />
	));

	let arrMessages = props.state.messages.map((message) => (
		<Message id={message.id} msg={message.msg} myMsg={message.myMsg} />
	));

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>
				<div className={style.dialogs_items_title}>Dialogs</div>
				{arrDialogs}
			</div>
			<div className={style.messages}>
				<div className={style.messages_title}>Messages</div>
				<div className={style.messages_items}>{arrMessages}</div>
			</div>
		</div>
	);
}

export default Dialogs;
