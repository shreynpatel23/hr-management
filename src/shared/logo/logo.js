import React from 'react';
import logo from "../../assets/images/logo.png";
import Styles from "./logo.module.scss";

function Logo() {
    return (
        <div className={Styles.placement}>
            <img src={logo} alt="Logo" className={Styles.imgSize}/>
        </div>
    )
}

export default Logo
