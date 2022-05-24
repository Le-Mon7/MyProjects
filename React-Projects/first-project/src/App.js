import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

function App(props) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-contents'>
				<Routes>
					<Route
						path='/messages/*'
						element={<DialogsContainer store={props.store} />}
					/>
					<Route path='/music/' element={<Music />} />
					<Route path='/news/' element={<News />} />
					<Route
						path='/profile/'
						element={<Profile store={props.store} />}
					/>
					<Route path='/settings/' element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
