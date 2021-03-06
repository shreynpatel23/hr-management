import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./login/login";
import NotificationPrefrences from "./notification-prefrences/notificationPrefrences";
import EmployeeDatabase from "./employee-database/employeeDatabase";
import PersonalDetails from "./personal-details/personalDetails";
import Feeds from "./feeds/feeds";
import Application from "./application/application";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path={"/"}
            exact
            component={() => <Redirect to={"/login"} />}
          />
          <Route path={"/login"} component={Login} />
          <Route path={"/notification-prefrences"} component={NotificationPrefrences} />
          <Route path={"/employee-database"} component={EmployeeDatabase} />
          <Route path={"/personal-details"} component={PersonalDetails} />
          <Route path={"/application/:value"} component={Application} />
          <Route exact path={"/application"} component={() => <Redirect to="application/feeds" />} />
          <Route path={"/feeds"} component={Feeds} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
