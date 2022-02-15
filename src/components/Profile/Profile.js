import React from 'react';
import s from './Profile.module.css';
import ProfileMain from './ProfileMain/ProfileMain';
import MyPosts from './MyPosts/MyPosts';

function Profile({ myProfile, dataMyPosts, newPostText, updatePostText, addPost }) {
	return <div className='profile'>
		<div className={s.banner}>
			<img src={myProfile.banner} alt="" />
		</div>
		<div className="main__content">
			<ProfileMain myProfile={myProfile} />
			<MyPosts
				title='My posts store!'
				dataMyPosts={dataMyPosts}
				addPost={addPost}
				newPostText={newPostText}
				updatePostText={updatePostText}
			/>
		</div>
	</div>
}

export default Profile;