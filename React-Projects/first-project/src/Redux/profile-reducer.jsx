let initialState = {
	posts: [
		{ id: 1, msg: 'Hi! How are yoy?', likes: 5 },
		{ id: 2, msg: 'Soy good!', likes: 11 },
		{ id: 3, msg: "I'm funny, thanks you.", likes: 3 },
	],
	newPostText: 'New text of post',
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: 4,
				msg: state.newPostText,
				likes: 7,
			};

			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.postMessage;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-POST-TEXT',
	postMessage: text,
});
