import { rerenderEntireTree } from '../render';

let state = {
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
};

export let addPost = () => {
	let newPost = {
		id: 4,
		msg: state.profilePage.newPostText,
		likes: 7,
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export let changePost = (postMessage) => {
	state.profilePage.newPostText = postMessage;
	rerenderEntireTree(state);
};

export default state;
