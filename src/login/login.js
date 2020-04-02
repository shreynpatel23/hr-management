import React from "react";
import Styles from "./login.module.scss";
import Input from "../shared/input/input";
import Button from "../shared/button/button";
import CommonStyles from "../shared/sharedStyles.module.scss";
import { PrimaryButtonStyle, ButtonTextStyle } from "../shared/buttonStyles";
import { useHistory } from "react-router-dom";
import Logo from "../shared/logo/logo";

function Login() {
  const [employeeId, setEmployeeId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    employeeId: "",
    password: ""
  });
  let history = useHistory();
  function checkEmployeeID() {
    if (!employeeId) {
      setError(error => ({
        ...error,
        employeeId: "Employee id cannot be Empty"
      }));
      return false;
    }
    return true;
  }
  function checkPassword() {
    if (!password) {
      setError(error => ({
        ...error,
        password: "Password cannot be Empty"
      }));
      return false;
    }
    return true;
  }
  function handleLogin(event) {
    event.preventDefault();
    const allCheckPassed = [checkEmployeeID(), checkPassword()].every(Boolean);
    if (!allCheckPassed) {
      return;
    }
    console.log("employee ID", employeeId, "Password", password);
    history.replace("/notification-prefrences");
  }
  function handleForgotPassword() {
    console.log("forgot password clicked");
  }
  return (
    <div className={`${CommonStyles.background}`}>
      <div className={`${CommonStyles.logoBranding}`}>
        <Logo />
      </div>
      <div className={`${CommonStyles.contentContainer}`}>
        <div className={`${CommonStyles.Logincard}`}>
          <div className="py-4">
            <p className={`${Styles.heading} mb-0 text-center`}>Login</p>
          </div>
          <form>
            <div className="form-group">
              <Input
                type="text"
                placeholder={
                  error.employeeId ? error.employeeId : "Enter Employee ID"
                }
                haserror={error.employeeId}
                name="employeeId"
                id="employeeId"
                autoComplete="off"
                onChange={event => {
                  setEmployeeId(event.target.value);
                  setError(error => ({
                    ...error,
                    employeeId: ""
                  }));
                }}
                onBlur={checkEmployeeID}
              />
            </div>
            <div className="form-group">
              <Input
                type="password"
                placeholder={error.password ? error.password : "Enter Password"}
                haserror={error.password}
                name="password"
                id="password"
                autoComplete="off"
                onChange={event => {
                  setPassword(event.target.value);
                  setError(error => ({
                    ...error,
                    password: ""
                  }));
                }}
                onBlur={checkPassword}
              />
              <div className="d-flex align-items-center justify-content-end py-2">
                <p
                  className={`mb-0 ${Styles.forgotPasswordText}`}
                  onClick={handleForgotPassword}
                >
                  Forgot Password
                </p>
              </div>
            </div>
          </form>
          <div className="py-3 d-inline-flex">
            <Button style={PrimaryButtonStyle} click={handleLogin}>
              <p className="mb-0" style={ButtonTextStyle}>
                Login
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
