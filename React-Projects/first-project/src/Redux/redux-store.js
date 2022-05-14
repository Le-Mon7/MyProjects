import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';

let rootReducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
});

let store = createStore(rootReducers);

export default store;
