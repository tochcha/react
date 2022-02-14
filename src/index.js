import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import { addPost, updatePostValue } from './redux/state'


export function myRender(state) {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost = {addPost}
				updatePostValue = {updatePostValue}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
myRender(state);

subscribe(myRender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
