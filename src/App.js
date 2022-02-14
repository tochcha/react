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
import store from './redux/state';




function App() {
	return <>
		<BrowserRouter>
			<div className="main_wrapper">
				<div className='main_grid'>
					<Header />
					<div className='content'>
						<div className="wrapper">
							<div className='content__grid'>
								<aside className='aside'>
									<Nav menu={store._state.menu} />
									<Friends friends={store._state.friends} />
								</aside>
								<main className='main'>
									<Routes>
										<Route path="/" element={<Home />} />
										<Route
											path="/dialogs/*"
											element={<Dialogs
												dialogsUsers={store._state.dialogsPage.dialogsUsers}
												messagesData={store._state.dialogsPage.messagesData}
											/>}
										/>
										<Route
											path="/profile"
											element={<Profile
												myProfile={store._state.myProfilePage.myProfile} dataMyPosts={store._state.myProfilePage.dataMyPosts}
												newPostText={store._state.myProfilePage.newPostText}
												updatePostText={store.updatePostText}
												addPost={store.addPost}
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
