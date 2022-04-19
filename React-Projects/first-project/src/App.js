import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-contents'>
					<Routes>
						<Route path='/messages/' element={<Dialogs />} />
						<Route path='/music/' element={<Music />} />
						<Route path='/news/' element={<News />} />
						<Route path='/profile/' element={<Profile />} />
						<Route path='/settings/' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
