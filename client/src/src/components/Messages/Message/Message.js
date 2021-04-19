import React from 'react';
import {emojify} from 'react-emoji';

import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (trimmedName === user) {
        isSentByCurrentUser = true;
    }

    return (
       isSentByCurrentUser 
       ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{user}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
};

export default Message;
