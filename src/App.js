import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Friends from './components/Friends/Friends';




function App(props) {
	return <>
		<BrowserRouter>
			<div className="main_wrapper">
				<div className='main_grid'>
					<Header />
					<div className='content'>
						<div className="wrapper">
							<div className='content__grid'>
								<aside className='aside'>
									<Nav menu={props.state.menu} />
									<Friends friends={props.state.friends} />
								</aside>
								<main className='main'>
									<Routes>
										<Route path="/" element={<Home />} />
										<Route
											path="/dialogs/*"
											element={<Dialogs
												dialogsUsers={props.state.dialogsPage.dialogsUsers}
												messagesData={props.state.dialogsPage.messagesData}
											/>}
										/>
										<Route
											path="/profile"
											element={<Profile
												myProfile={props.state.myProfilePage.myProfile} dataMyPosts={props.state.myProfilePage.dataMyPosts}
												newPostText={props.state.myProfilePage.newPostText}
												updatePostValue={props.updatePostValue}
												addPost={props.addPost}
											/>}
										/>
										<Route path="/news" element={<News />} />
										<Route path="/music" element={<Music />} />
										<Route path="/setting" element={<Setting />} />
									</Routes>
								</main>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	</>
};
export default App;
