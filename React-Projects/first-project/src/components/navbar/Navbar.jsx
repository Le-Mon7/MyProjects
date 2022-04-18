import style from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<a>Messages</a>
				</li>
				<li className={`${style.item} ${style.active}`}>
					<a>Music</a>
				</li>
				<li className={style.item}>
					<a>News</a>
				</li>
				<li className={style.item}>
					<a>Profile</a>
				</li>
				<li className={style.item}>
					<a>Settings</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
