import React from 'react';

import sendIcon from '../../icons/paper-plane.png'
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input 
            type="text" 
            value={message}
            className="input"
            placeholder="Type a message" 
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null} 
            />
            <button className="sendButton" onClick={e => sendMessage(e)}><img src={sendIcon} className="img-send-button" alt="send icon" /></button>        
        </form>
    )
}

export default Input;