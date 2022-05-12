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
		},
	},
	getState() {
		return this._state;
	},
	addPost() {
		let newPost = {
			id: 4,
			msg: this._state.profilePage.newPostText,
			likes: 7,
		};

		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._rerenderEntireTree(this._state);
	},
	changePost(postMessage) {
		this._state.profilePage.newPostText = postMessage;
		this._rerenderEntireTree(this._state);
	},
	_rerenderEntireTree() {
		console.log('State change');
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer;
	},
};

export default store;