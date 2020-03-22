import React from 'react';
import CommonStyles from '../shared/sharedStyles.module.scss';
import Styles from './notificationPrefrences.module.scss';
import { PrimaryButtonStyle, ButtonTextStyle } from '../shared/buttonStyles';
import Button from '../shared/button/button';
import { useHistory } from 'react-router-dom';
import Logo from '../shared/logo/logo';

function NotificationPrefrences() {
    let history = useHistory();
    function handelLogin() {
        // handel this function
        console.log('next clicked');
        history.push('/employee-database');
    }
    return (
        <div className={`${CommonStyles.background}`}>
            <div className={`${CommonStyles.logoBranding}`}>
                <Logo />
            </div>
            <div className={`${CommonStyles.contentContainer}`}>
            <div className={`${CommonStyles.Logincard}`}>
                    <div className="py-4">
                        <p className={`${Styles.heading} mb-0 text-center`}>
                            Choose your Notification Prefrences.
                        </p>
                        <p className={`${Styles.subheading}`}>you can change that in the settings section.</p>
                    </div>
                    <div className="py-3">
                        <div className={`${Styles.notificationTab} d-flex align-items-center`}>
                            <div className="px-2">
                                <p className={`mb-0 ${Styles.notificationType}`}>Email</p>
                            </div>
                            <div className="px-2 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" id="prefix__tick" width="20" height="20" viewBox="0 0 37.412 37.412"  style={{fill: '#00c726'}}>
                                    <path id="prefix__Union_8" d="M3.532 35.582a3.532 3.532 0 1 1 0-7.063H10.5V3.414a3.414 3.414 0 0 1 6.828 0V34.5a.853.853 0 0 1-.688.837.88.88 0 0 1-.608.243z" data-name="Union 8" transform="rotate(45 12.58 30.37)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <div className={`${Styles.notificationTab} d-flex align-items-center`}>
                            <div className="px-2">
                                <p className={`mb-0 ${Styles.notificationType}`}>SMS</p>
                            </div>
                            <div className="px-2 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" id="prefix__tick" width="20" height="20" viewBox="0 0 37.412 37.412"  style={{fill: '#00c726'}}>
                                    <path id="prefix__Union_8" d="M3.532 35.582a3.532 3.532 0 1 1 0-7.063H10.5V3.414a3.414 3.414 0 0 1 6.828 0V34.5a.853.853 0 0 1-.688.837.88.88 0 0 1-.608.243z" data-name="Union 8" transform="rotate(45 12.58 30.37)" />
                                </svg>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className={`${Styles.warningText} mb-0`} >Additional charges may apply</p>
                        </div>
                    </div>
                    <div className="py-2 d-inline-flex">
                        <Button style={PrimaryButtonStyle} click={handelLogin}>
                            <p className="mb-0" style={ButtonTextStyle}>Next</p>    
                        </Button> 
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default NotificationPrefrences
