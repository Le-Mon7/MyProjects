let initialState = {
	dialogs: [
		{ id: 1, name: 'Max' },
		{ id: 2, name: 'Anastasia' },
		{ id: 3, name: 'Jim' },
		{ id: 4, name: 'Igor' },
	],
	messages: [
		{ id: 1, msg: 'Hi!', myMsg: 0 },
		{ id: 2, msg: 'How are you?', myMsg: 1 },
		{ id: 3, msg: 'Yo!', myMsg: 1 },
		{ id: 4, msg: 'Thanks!', myMsg: 0 },
	],
	newMessageText: 'New text of message',
};

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let newMessage = {
				id: 5,
				msg: state.newMessageText,
				myMsg: 1,
			};

			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newMessageText = action.textMsg;
			return state;
		default:
			return state;
	}
};

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewMessageTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-MESSAGE-TEXT',
	textMsg: text,
});
