export const profileReducer = (state, action) => {
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
