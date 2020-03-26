import React from 'react'
import SideBar from '../side-bar/sideBar';
import Styles from './topNav.module.scss';
import { Colors } from '../colors';

function TopNav() {
    const [showSideBarOnMobile, setShowSideBarOnMobile] = React.useState(false);
    function handelMobileSidebar() {
        setShowSideBarOnMobile(true);
    }
    function hideSideBar() {
        setShowSideBarOnMobile(false);
    }
    return (
        <div className="sticky-top">
            {showSideBarOnMobile ? <div style={{position: 'fixed', top: 0, left: 0}}>
                <SideBar click={hideSideBar}/>
            </div> : null}
            <div className={`d-flex align-items-center ${Styles.topNavBackground}`}>
                <div className={`${Styles.showOnMobile} px-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 31" style={{fill:'#557baf', cursor:'pointer'}} onClick={handelMobileSidebar} className={Styles.hamburger}>
                        <g id="prefix__Group_118" data-name="Group 118" transform="translate(-329 -28)">
                            <rect id="prefix__Rectangle_296" width="37" height="7" data-name="Rectangle 296" rx="3.5" transform="translate(329 28)"/>
                            <rect id="prefix__Rectangle_297" width="27" height="7" data-name="Rectangle 297" rx="3.5" transform="translate(329 40)"/>
                            <rect id="prefix__Rectangle_298" width="37" height="7" data-name="Rectangle 298" rx="3.5" transform="translate(329 52)"/>
                        </g>
                    </svg>
                </div>
                <div className="px-2">
                    <p className={`mb-0 ${Styles.companyName}`}>Company name</p>
                </div>
                <div className="px-2 ml-auto">
                    <p className={`mb-0 ${Styles.employeeName}`}>Hey, Name here</p>
                </div>
                <div className="px-2">
                    <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                        <div className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18.454 22.1" style={{fill: Colors.TEXTCOLOR}}>
                                <g id="logout_2_" data-name="logout (2)" transform="translate(-41)">
                                    <g id="Group_105" data-name="Group 105" transform="translate(44.895)">
                                    <g id="Group_104" data-name="Group 104">
                                        <path id="Path_1" data-name="Path 1" d="M41.858,5.231A.861.861,0,0,1,41,4.368V2.131A2.139,2.139,0,0,1,43.143,0H53.416a2.139,2.139,0,0,1,2.142,2.131V19.968A2.139,2.139,0,0,1,53.416,22.1H43.143A2.139,2.139,0,0,1,41,19.968V17.732a.858.858,0,1,1,1.717,0v2.236a.416.416,0,0,0,.426.4H53.416a.416.416,0,0,0,.426-.4V2.131a.416.416,0,0,0-.426-.4H43.143a.416.416,0,0,0-.426.4V4.368A.861.861,0,0,1,41.858,5.231Z" transform="translate(-41)"/>
                                    </g>
                                    </g>
                                    <g id="Group_107" data-name="Group 107" transform="translate(41 5.706)">
                                    <g id="Group_106" data-name="Group 106" transform="translate(0)">
                                        <path id="Path_2" data-name="Path 2" d="M190.875,136.924l4.568-4.48a.855.855,0,0,1,1.214.015.867.867,0,0,1-.015,1.221l-3.058,3h8.207a.863.863,0,0,1,0,1.727h-8.207l3.058,3a.867.867,0,0,1,.015,1.221.855.855,0,0,1-1.214.015l-4.568-4.48A.867.867,0,0,1,190.875,136.924Z" transform="translate(-190.616 -132.199)"/>
                                    </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="px-1">
                            <p className={`mb-0 ${Styles.logout}`}>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
