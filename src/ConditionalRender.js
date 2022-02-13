import React from 'react';

function ConditionalRender ({ isLoggedIn }) {
    if(isLoggedIn) {
        return <p>Welcome back!</p>
    }
    return <p>Please login.</p>
}


export default ConditionalRender;