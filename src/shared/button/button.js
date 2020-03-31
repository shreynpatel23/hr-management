import React from "react";
import Styles from "./button.module.scss";

function Button(props) {
  return (
    <button
      className={`${Styles.btn} px-4 py-2`}
      style={props.style}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
}

export default Button;
