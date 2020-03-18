import React from 'react';
import Styles from './fieldList.module.scss';

function FiledList(props) {
    return (
        <div className="d-flex align-items-center">
            <div className="px-2 flex-grow-1">
                <p className={`mb-0 ${Styles.fieldName}`}>{props.fieldName}</p>
            </div>
            <div className="px-3">
            <label className={`${Styles.container} mb-0`}>
                <input type="checkbox" />
                <span className={`${Styles.checkmark}`}></span>
            </label>
            </div>
            <div className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" style={{fill :'#a5a5a5', cursor:'pointer'}} onClick={props.click}>
                    <path id="prefix__ic_clear_24px" d="M17 6.209L15.791 5 11 9.791 6.209 5 5 6.209 9.791 11 5 15.791 6.209 17 11 12.209 15.791 17 17 15.791 12.209 11z" transform="translate(-5 -5)" />
                </svg>
            </div>
        </div>
    )
}

export default FiledList
