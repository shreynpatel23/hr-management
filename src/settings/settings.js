import React from 'react'
import RolesPermission from './roles-permission/rolesPermission'
import NotificationSettings from './notification-settings/notificationSettings'
import Members from './members/members'
import EmployeeDatabaseSettings from './employee-database-settings/employeeDatabaseSettings'
import Styles from './settings.module.scss';
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

function Settings() {
    let location = useLocation();
    return (
        <div className={`d-flex align-items-center justify-content-center ${Styles.settingsBack}`}>
            <Switch location={location}>
                <Route
                    path={"/application/settings"}
                    exact
                    component={() => <Redirect to={"/application/settings/notification-settings"} />}
                />
                <Route path="/application/settings/notification-settings">
                    <NotificationSettings />
                </Route>
                <Route path="/application/settings/roles-permission">
                    <RolesPermission />
                </Route>
                <Route path="/application/settings/members">
                    <Members />
                </Route>
                <Route path="/application/settings/employee-database-settings">
                    <EmployeeDatabaseSettings />
                </Route>
            </Switch>
        </div>
    )
}

export default Settings
