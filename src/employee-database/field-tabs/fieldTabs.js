import React from 'react';
import Styles from './fieldTabs.module.scss';

function FieldTabs(props) {
    return (
        <div className={`px-3 py-1 ${Styles.tabsBackground}`} onClick={props.click}>
            <p className={`mb-0 ${Styles.tabsText}`}>{props.children}</p>
        </div>
    )
}

export default FieldTabs
