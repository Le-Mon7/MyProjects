import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.scss';

function Dialogs(props) {
	let arrDialogs = props.messagesPage.dialogs.map((dialog) => (
		<DialogItem id={dialog.id} name={dialog.name} />
	));

	let arrMessages = props.messagesPage.messages.map((message) => (
		<Message id={message.id} msg={message.msg} myMsg={message.myMsg} />
	));

	let onNewMsg = () => {
		props.addMessage();
	};

	let onMsgChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageText(text);
	};

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>
				<div className={style.dialogs_items_title}>Dialogs</div>
				{arrDialogs}
			</div>
			<div className={style.messages}>
				<div className={style.messages_title}>Messages</div>
				<div className={style.messages_items}>{arrMessages}</div>
				<textarea
					onChange={onMsgChange}
					value={props.messagesPage.newMessageText}
				></textarea>
				<button onClick={onNewMsg}>New Message</button>
			</div>
		</div>
	);
}

export default Dialogs;
