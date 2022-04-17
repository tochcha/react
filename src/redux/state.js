import { nanoid } from 'nanoid'
let store = {
	_state: {
		dialogsPage: {
			dialogsUsers: [
				{ id: 1, name: 'Teagirl', ava: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' },
				{ id: 2, name: 'Vasyl Petrenok', ava: 'https://www.meme-arsenal.com/memes/e6adac8c2b0d7958ff9fa0964cf49a6d.jpg' },
				{ id: 3, name: 'Gennadij Abramovich', ava: 'https://vjoy.cc/wp-content/uploads/2020/11/avatarka-dlya-like.jpg' }
			],
			messagesData: [
				{
					id: 1,
					ava: 'https://www.meme-arsenal.com/memes/e6adac8c2b0d7958ff9fa0964cf49a6d.jpg',
					message: 'Переписали за страна, своих даль не выйти lorem собрал. Ipsum эта своего проектах, свою путь которой семь. Что, города своих. Необходимыми пор заманивший своих грустный. Запятой большого агентство текст злых послушавшись рот продолжил, он прямо, использовало своих первую вершину напоивший.',
					myPost: false
				},
				{
					id: 2,
					ava: 'https://html5css.ru/howto/img_avatar.png',
					message: 'Ipsum эта своего проектах, свою путь которой семь',
					myPost: true
				}
			],
			newPostText: '',
		},
		myProfilePage: {
			myProfile: {
				name: 'Alex',
				surname: 'Zatynin',
				ava: 'https://arte1.ru/images/detailed/4/2252.jpg',
				banner: 'https://arte1.ru/images/detailed/4/2252.jpg'
			},
			dataMyPosts: [
				{
					id: 1,
					message: 'Lorem ipsum dolor sit amet consectetur.',
					likes: 12
				},
				{
					id: 2,
					message: 'Города всемогущая рукопись заглавных грустный, на берегу собрал он образ осталось диких, океана заманивший которое домах курсивных себя одна там выйти имеет своего вскоре свою жаренные! Свою рукописи коварный города безопасную страна.',
					likes: 54
				}
			],
			newPostText: '',
		},
		menu: [
			{
				url: '',
				text: 'Home',
			},
			{
				url: 'profile',
				text: 'Profile',
			},
			{
				url: 'dialogs',
				text: 'Dialogs',
			},
			{
				url: 'news',
				text: 'News',
			},
			{
				url: 'music',
				text: 'Music',
			},
			{
				url: 'setting',
				text: 'Setting',
			},
		],
		friends: [
			{
				name: 'Sveta',
				ava: 'https://i.pinimg.com/736x/19/85/be/1985be408ebdeb23b19af4cdf2f86e61.jpg',
			},
			{
				name: 'Praska',
				ava: 'https://i.pinimg.com/236x/90/9f/7f/909f7f8f9e7934687f99086c3b90a4d0.jpg',
			},
			{
				name: 'Gala',
				ava: 'https://i.pinimg.com/236x/e1/c5/cb/e1c5cb86e6411d6ce65a3f186107a469.jpg',
			},
		]
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	_addPost() {
		let newPost = {
			id: nanoid(),
			message: this._state.myProfilePage.newPostText,
			likes: 0
		};
		if (this._state.myProfilePage.newPostText.length > 0) {
			this._state.myProfilePage.dataMyPosts.push(newPost);
		}
		this._updatePostText('');
		this._callSubscriber(this._state);
	},
	_updatePostText(newText) {
		this._state.myProfilePage.newPostText = newText;
		console.log(this._state.myProfilePage.newPostText);
		this._callSubscriber(this._state);
	},
	_addWriteFriendText() {
		let newPost = {
			id: nanoid(),
			ava: 'https://html5css.ru/howto/img_avatar.png',
			message: this._state.dialogsPage.newPostText,
			myPost: true
		};
		if (this._state.dialogsPage.newPostText.length > 0) {
			this._state.dialogsPage.messagesData.push(newPost);
		}
		this._updatePostText('');
		this._callSubscriber(this._state);
	},
	_updateWriteFriendText(newText) {
		this._state.dialogsPage.newPostText = newText;
		console.log(this._state.dialogsPage.newPostText);
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			this._addPost();
		}  else if (action.type === 'UPDATE-POST-TEXT') {
			this._updatePostText(action.newText);
		} else if (action.type === 'UPDATE-WRITE-FRIEND-TEXT') {
			this._updateWriteFriendText(action.newText);
		} else if (action.type === 'ADD-WRITE-FRIEND-TEXT') {
			this._addWriteFriendText(action.newText);
		}
	}
};



export default store;