import React from 'react';
import Styles from "./button.module.scss";

function Button(props) {
    return (
        <button className={`px-3 py-2 ${Styles.btn}`} style={props.style} onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button
