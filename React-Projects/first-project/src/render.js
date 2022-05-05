import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addPost, changePost } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} changePost={changePost} />
		</BrowserRouter>,
		document.getElementById('root')
	);
};
