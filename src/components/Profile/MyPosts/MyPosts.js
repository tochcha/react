import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCrator, onPostChangeActionCrator } from './../../../redux/state';


function MyPosts({ title, dataMyPosts, newPostText, dispatch }) {
	const resDataMyPosts = dataMyPosts.map((myPost, index) => {
		return <Post key={index} message={myPost.message} likes={myPost.likes} />
	});
	let newPostTextarea = React.createRef();
	
	function addPostHandler() {
		dispatch(addPostActionCrator());
	}

	function onPostChange() {
		let text = newPostTextarea.current.value;
		dispatch(onPostChangeActionCrator(text));
	}


	return <>
		<div className="posts">
			<h2>{title}</h2>
			<div className={s.add}>
				<textarea ref={newPostTextarea} value={newPostText} onChange={onPostChange} className={`${s.inpText} inpText`} placeholder='your posts...' />
				<div className={s.buttonbox}>
					<button onClick={addPostHandler} className="button">Add Post</button>
				</div>
			</div>
			<div className="postslist">
				{resDataMyPosts}
			</div>
		</div>
	</>
}

export default MyPosts;