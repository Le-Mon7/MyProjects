import style from './Dialogs.module.scss';

function Dialogs() {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>
				<div class={style.dialog + ' ' + style.active}>Andrey</div>
				<div class={style.dialog}>Nastay</div>
				<div class={style.dialog}>Jim</div>
				<div class={style.dialog}>Igor</div>
				<div class={style.dialog}>Lera</div>
				<div class={style.dialog}>Kris</div>
			</div>
			<div className={style.messages}>
				<div className={style.message}>Hi!</div>
				<div className={style.message}>How are you?</div>
				<div className={style.message}>Yo!</div>
				<div className={style.message}>Thanks!</div>
			</div>
		</div>
	);
}

export default Dialogs;
