/* import React from 'react'; */
import './Forms.css';

function Button(props) {
	return <button onClick={() => props.func(props.textAlert)} className="button">{props.text}</button>;
}

export default Button;