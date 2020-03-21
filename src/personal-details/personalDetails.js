import React from 'react';
import Button from '../shared/button/button';
import BackButton from '../shared/backButton/backButton';
import { useHistory } from 'react-router-dom';
import CommonStyles from '../shared/sharedStyles.module.scss';
import { PrimaryButtonStyle, ButtonTextStyle } from '../shared/buttonStyles';

function PersonalDetails() {
    let history = useHistory();
    function handelBack() {
        history.push('/employee-database')
    }
    function handelNext() {
        // history.push('/feeds');
    }
    return (
        <div className={`${CommonStyles.card} p-4`}>
            <p>Hello from Personal Details</p>
            <div className={`py-4 d-flex align-items-center justify-content-between`}>
                <div className="px-2">
                    <BackButton click={handelBack}/>
                </div>
                <div className="px-2">
                    <Button style={PrimaryButtonStyle} click={handelNext}>
                        <p className="mb-0" style={ButtonTextStyle}>Next</p>    
                    </Button> 
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
