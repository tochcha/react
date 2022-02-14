import React from 'react';
import s from './Profile.module.css';
import ProfileMain from './ProfileMain/ProfileMain';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
	return <div className='profile'>
		<div className={s.banner}>
			<img src={props.myProfile.banner} alt="" />
		</div>
		<div className="main__content">
			<ProfileMain myProfile={props.myProfile} />
			<MyPosts title='My posts store!' dataMyPosts={props.dataMyPosts} addPost={props.addPost} newPostText={props.newPostText} updatePostValue={props.updatePostValue} />
		</div>
	</div>
}

export default Profile;