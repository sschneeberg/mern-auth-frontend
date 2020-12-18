import React from 'react';

function Profile(props) {
    return (
        <div>
            <h1>Profile</h1>
            <p>Hello, {props.username}</p>
        </div>
    );
}

export default Profile;
