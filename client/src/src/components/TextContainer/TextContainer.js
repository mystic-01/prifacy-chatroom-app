import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => {
    console.log(users);
    return (
        <div className="textContainer">
            <h1 className="users-heading">People in current room:</h1>
            <hr className="heading-rule" />
            <div className="activeContainer">
                <h2>
                {users.map(user => 
                    <div key={user.name} className="activeItem">
                        <img className="onlineIcon" src={onlineIcon} alt="online icon"></img>
                        {user.name}
                    </div>
                )}
                </h2>
            </div>
        </div>
    );
};

export default TextContainer;
