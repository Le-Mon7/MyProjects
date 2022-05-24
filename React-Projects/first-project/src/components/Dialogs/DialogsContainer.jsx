import React from 'react';
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
	let state = props.store.getState().messagesPage;

	let newMsg = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	let msgChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	};

	return (
		<Dialogs
			updateNewMessageText={msgChange}
			addMessage={newMsg}
			messagesPage={state}
		/>
	);
}

export default DialogsContainer;
