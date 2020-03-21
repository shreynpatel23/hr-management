import React from 'react'
import ArrowSVG from '../../assets/svg/arrowSVG'
import Styles from './backButton.module.scss';

function BackButton(props) {
    return (
        <div className="d-flex align-items-center" style={{cursor:'pointer'}} onClick={props.click}>
            <div className={`pr-1 ${Styles.rotate}`}>
                <ArrowSVG />
            </div>
            <div className="pl-1">
                <p className={`mb-0 ${Styles.backText}`}>Back</p>
            </div>
        </div>
    )
}

export default BackButton
