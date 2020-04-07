import React from "react";
import Styles from "./input.module.scss";

function Input(props) {
  return (
    <div>
      <fieldset className={Styles.fieldSet}>
        <legend className={`${Styles.legendText} px-2 mx-3 mb-0`}>
          {props.labelname}
        </legend>
        <input
          className={`${
            props.haserror ? Styles.error : Styles.formControl
          } shadow-none`}
          {...props}
        />
      </fieldset>
    </div>
  );
}

export default Input;
