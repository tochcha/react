import React from 'react';
import s from './Profile.module.css';
import ProfileMain from './ProfileMain/ProfileMain';
import MyPosts from './MyPosts/MyPosts';

function Profile({ profileMain, myProfile, dataMyPosts, newPostText, dispatch }) {
	return <div className='profile'>
		<div className={s.banner}>
			<img src={myProfile.banner} alt="" />
		</div>
		<div className="main__content">
			<ProfileMain
				myProfile={myProfile}
				profileMain={profileMain}
			/>
			<MyPosts
				title='My posts store!'
				dataMyPosts={dataMyPosts}
				newPostText={newPostText}
				dispatch = {dispatch}
			/>
		</div>
	</div>
}

export default Profile;