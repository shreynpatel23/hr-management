import React from 'react';
import logo from "../assets/images/logo.png";

function Logo() {
    return (
        <div style={{position: 'absolute', top:'40px', left: '40px'}}>
            <img src={logo} alt="Logo" width="60" height="60"/>
        </div>
    )
}

export default Logo
