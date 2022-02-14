import s from './Post.module.css';


function Post({message, likes}) {
	return <>
		<div className={s.item}>
			<div className={s.icon}></div>
			<div className={s.message}>
				<p>quest</p>
				<p className={`${s.parag}`}>{message} <span className={s.likes}>({likes})</span></p>
			</div>
		</div>
	</>
}

export default Post;