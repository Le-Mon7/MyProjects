import './App.scss';

function App() {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
			</header>
			<nav className='nav'>
				<ul>
					<li>
						<a>Messages</a>
					</li>
					<li>
						<a>Music</a>
					</li>
					<li>
						<a>News</a>
					</li>
					<li>
						<a>Profile</a>
					</li>
					<li>
						<a>Settings</a>
					</li>
				</ul>
			</nav>
			<div className='content'>
				<div>
					<img src='http://dgdesign.ru/uploads/posts/2017-02/1486798055_shapka-sayta-osen-1836271.jpg' />
				</div>
				<div>ava</div>
				<div>
					My post
					<div>New Post</div>
					<div>Posts...</div>
				</div>
			</div>
		</div>
	);
}

export default App;
