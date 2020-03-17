import React from 'react'
import Styles from './input.module.scss'

function Input(props) {
    return (
        <input
        className={`${
            props.haserror ? Styles.error :   Styles.formControl
        } shadow-none`}
        {...props}
      />
    )
}

export default Input

