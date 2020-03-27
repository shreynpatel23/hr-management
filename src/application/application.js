import React from "react";
import Feeds from "../feeds/feeds";
import Settings from "../settings/settings";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import SideBar from "../shared/side-bar/sideBar";
import TopNav from "../shared/top-nav/topNav";
import Styles from "./application.module.scss";

function Application() {
  let location = useLocation();
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-xl-2 d-none d-xl-block">
          <SideBar />
        </div>
        <div className="col-xl-10 col-lg-12">
          <div className={Styles.background}>
            <TopNav />
            <Switch location={location}>
              <Route
                path={"/application"}
                exact
                component={() => <Redirect to={"/application/feeds"} />}
              />
              <Route path="/application/feeds">
                <Feeds />
              </Route>
              <Route path="/application/settings/:value">
                <Settings />
              </Route>
              <Route
                exact
                path={"/application/settings"}
                component={() => (
                  <Redirect to="/application/settings/notification-settings" />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
