export const messagesReducer = (state, action) => {
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
