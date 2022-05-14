import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';

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
		this._state.profilePage = profileReducer(
			this._state.profilePage,
			action
		);
		this._state.messagesPage = messagesReducer(
			this._state.messagesPage,
			action
		);

		this._rerenderEntireTree(this._state);
	},
};

export default store;
