let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, msg: 'Hi! How are yoy?', likes: 5 },
				{ id: 2, msg: 'Soy good!', likes: 11 },
				{ id: 3, msg: "I'm funny, thanks you.", likes: 3 },
			],
			newPostText: 'New text of post',
		},
		messagesPage: {
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
		},
	},
	_rerenderEntireTree() {
		console.log('State change');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				msg: this._state.profilePage.newPostText,
				likes: 7,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._rerenderEntireTree(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.postMessage;
			this._rerenderEntireTree(this._state);
		} else if (action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: 5,
				msg: this._state.messagesPage.newMessageText,
				myMsg: 1,
			};

			this._state.messagesPage.messages.push(newMessage);
			this._state.messagesPage.newMessageText = '';
			this._rerenderEntireTree(this._state);
		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.textMsg;
			this._rerenderEntireTree(this._state);
		}
	},
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-POST-TEXT',
	postMessage: text,
});
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewMessageTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-MESSAGE-TEXT',
	textMsg: text,
});

export default store;
