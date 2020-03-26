import React, { useEffect } from 'react';
import Styles from './sideBar.module.scss';
import imgStyle from '../logo/logo.module.scss';
import logo from "../../assets/images/logo.png";
import { Colors } from '../colors';
import CrossSvg from '../../assets/svg/crossSvg';
import { Accordion } from "react-bootstrap";
import FeedsSvg from '../../assets/svg/feedsSvg';
import SettingsSvg from '../../assets/svg/settingsSvg';
import { useHistory, useParams } from 'react-router-dom';

function SideBar(props) {
    const params = useParams();
    let history = useHistory();
    const [activeKey, setActiveKey] = React.useState("0");
    const [activeSettingsTab, setActiveSettingsTab] = React.useState('notification-settings');
    function CustomToggle({ children, onClick }) {
        return (
        <div onClick={onClick}>
            {children}
        </div>
        );
    }
    function handelChangeSettingsTab(value) {
        history.push(`/application/settings/${value}`)
        setActiveSettingsTab(value);
    }
    useEffect(() => {
        if(params.value === 'feeds') {
            setActiveKey('0')
        } else {
            setActiveKey('1')
        }
    }, [params])
    return (
        <div className={`${Styles.sideBarBackground} sticky-top`} style={{zIndex: 2}}>
            <div className="py-2 d-flex align-items-center" style={{height: '10%'}}>
                <div className="px-2">
                    <img src={logo} alt="logo" className={imgStyle.imgSize}/>
                </div>
                <div className={`px-2 ml-auto ${Styles.showOnMobile}`} onClick={props.click}>
                    <CrossSvg color={Colors.TEXTCOLOR} />
                </div>
            </div>
            <div style={{height: '90%'}}>
                <Accordion defaultActiveKey="0" activeKey={activeKey}>
                    <div className="py-3">
                        <CustomToggle
                            eventKey="0"
                            onClick={() => {
                                setActiveKey('0')
                                history.push('/feeds');
                            }}
                        >
                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <div className="px-2">
                                    <FeedsSvg color={activeKey === '0' ? Colors.PRIMARYCOLOR : Colors.TEXTCOLOR}/>
                                </div>
                                <div className="px-2">
                                    <p className={`mb-0 ${activeKey === '0' ? Styles.activeTab : Styles.sideBarTab}`}>Feeds</p>
                                </div>
                            </div>
                        </CustomToggle>
                        <Accordion.Collapse eventKey="0">
                            <div></div>
                        </Accordion.Collapse>
                    </div>
                    <div className="py-3">
                        <CustomToggle
                            eventKey="1"
                            onClick={() => {
                                setActiveKey('1')
                                history.push('/settings');
                            }}
                        >
                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <div className="px-2">
                                    <SettingsSvg color={activeKey === '1' ? Colors.PRIMARYCOLOR : Colors.TEXTCOLOR}/>
                                </div>
                                <div className="px-2">
                                    <p className={`mb-0 ${activeKey === '1' ? Styles.activeTab : Styles.sideBarTab}`}>Settings</p>
                                </div>
                            </div>
                        </CustomToggle>
                        <Accordion.Collapse eventKey="1">
                            <div className="px-4 py-3">   
                                <div className="py-2">
                                    <p 
                                        className={`mb-0 ${activeSettingsTab === 'notification-settings' ? Styles.activeSubTab : Styles.subTab}`} 
                                        onClick={() => handelChangeSettingsTab('notification-settings')}
                                    >Notification Settings</p>
                                </div>
                                <div className="py-2">
                                    <p 
                                        className={`mb-0 ${activeSettingsTab === 'employee-database-settings' ? Styles.activeSubTab : Styles.subTab}`} 
                                        onClick={() => handelChangeSettingsTab('employee-database-settings')}
                                    >Employee Database</p>
                                </div>
                                <div className="py-2">
                                    <p 
                                        className={`mb-0 ${activeSettingsTab === 'roles-permission' ? Styles.activeSubTab : Styles.subTab}`} 
                                        onClick={() => handelChangeSettingsTab('roles-permission')}
                                    >Roles and Permission</p>
                                </div>
                                <div className="py-2">
                                    <p 
                                        className={`mb-0 ${activeSettingsTab === 'members' ? Styles.activeSubTab : Styles.subTab}`} 
                                        onClick={() => handelChangeSettingsTab('members')}
                                    >Members</p>
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
                 
            </div>
        </div>
    )
}

export default SideBar
