import React from 'react';
import s from "./Dialogs.module.css";
import DialogUser from './DialogUser/DialogUser';
import DialogContent from './DialogContent/DialogContent';


function Dialogs(props) {
	const resUsers = props.dialogsUsers.map((user, index) => {
		return <DialogUser key={index} name={user.name} ava={user.ava} id={user.id} />
	});

	return <>
		<div className='profile'>
			<div className="main__content">
				<div className={s.dialogs}>
					<h1>Dialogs</h1>
					<div className={s.row}>
						<div className={s.items}>
							{resUsers}
						</div>
						<div className={s.content}>
							<div className={s.dialogsItems}>
								<DialogContent messagesData={props.messagesData} id='1' />
								<DialogContent messagesData={props.messagesData} id='2' />
								<DialogContent messagesData={props.messagesData} id='3' />
								{/* <Routes>
									<Route path="/dialogs/1" element={<DialogContent id='1' />} />
									<Route path="/dialogs/2" element={<DialogContent id='2' />} />
									<Route path="/dialogs/3" element={<DialogContent id='3' />} />
								</Routes> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Dialogs;