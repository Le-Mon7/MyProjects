import style from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<a href='/messages/'>Messages</a>
				</li>
				<li className={`${style.item} ${style.active}`}>
					<a href='/music/'>Music</a>
				</li>
				<li className={style.item}>
					<a href='/news/'>News</a>
				</li>
				<li className={style.item}>
					<a href='/profile/'>Profile</a>
				</li>
				<li className={style.item}>
					<a href='/settings/'>Settings</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
