import React from 'react';
import './App.css';
import './components/Forms/Forms.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import store from './redux/state';




function App({ store }) {
	return <>
		<BrowserRouter>
			<div className="main_wrapper">
				<div className='main_grid'>
					<Header />
					<div className='content'>
						<div className="wrapper">
							<div className='content__grid'>
								<aside className='aside'>
									<Nav menu={store.getState().menu} />
									<Friends friends={store.getState().friends} />
								</aside>
								<main className='main'>
									<Routes>
										<Route path="/" element={<Home />} />
										<Route
											path="/dialogs/*"
											element={<Dialogs
												dialogsUsers={store.getState().dialogsPage.dialogsUsers}
												messagesData={store.getState().dialogsPage.messagesData}
											/>}
										/>
										<Route
											path="/profile"
											element={<Profile
												myProfile={store.getState().myProfilePage.myProfile} dataMyPosts={store.getState().myProfilePage.dataMyPosts}
												newPostText={store.getState().myProfilePage.newPostText}
												dispatch={store.dispatch.bind(store)}
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
