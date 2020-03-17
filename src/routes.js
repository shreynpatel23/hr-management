import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./login/login";
import NotificationPrefrences from "./notification-prefrences/notificationPrefrences";

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
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
