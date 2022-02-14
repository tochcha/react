import React from 'react';
import './../../Forms/Forms.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts(props) {
	const resDataMyPosts = props.dataMyPosts.map((myPost, index) => {
		return <Post key={index} message={myPost.message} likes={myPost.likes} />
	});
	let newPostElement = React.createRef();
	
	function addPostHandler() {
		let text = props.newPostText;
		props.addPost(text);
	}

	function onPostChange() {
		let text = newPostElement.current.value;
		props.updatePostText(text);
	}


	return <>
		<div className="posts">
			<h2>{props.title}</h2>
			<div className={s.add}>
				<textarea value={props.newPostText} ref={newPostElement} onChange={onPostChange} className={`${s.inpText} inpText`} placeholder='your posts...' />
				<div className={s.buttonbox}>
					<button onClick={() => addPostHandler()} className="button">Add Post</button>
				</div>
			</div>
			<div className="postslist">
				{resDataMyPosts}
			</div>
		</div>
	</>
}

export default MyPosts;