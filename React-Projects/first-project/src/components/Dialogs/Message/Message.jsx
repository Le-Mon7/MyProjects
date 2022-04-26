import style from './Message.module.scss';

function Message(props) {
	if (props.myMsg == 1) {
		return (
			<div className={`${style.message} ${style.my_message}`}>
				{props.msg}
			</div>
		);
	} else {
		return <div className={`${style.message}`}>{props.msg}</div>;
	}
}

export default Message;
