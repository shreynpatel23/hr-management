import React from "react";
import Styles from "./login.module.scss";
import Input from "../shared/input/input";
import Button from "../shared/button/button";
import CommonStyles from "../shared/sharedStyles.module.scss";
import { PrimaryButtonStyle, ButtonTextStyle } from "../shared/buttonStyles";
import { useHistory } from "react-router-dom";
import Logo from "../shared/logo/logo";
import ErrorMessage from "../shared/error-message/errorMessage";
import Toast from "../shared/toast/toast";
import { useEffect } from "react";

function Login() {
  const [employeeId, setEmployeeId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    employeeId: "",
    password: "",
  });
  const [showToast, setShowToast] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: "",
    message: "",
  });
  let history = useHistory();
  // useEffect(() => {
  //   setShowToast(true);
  //   setToast((toast) => ({
  //     ...toast,
  //     type: "error",
  //     message: "please enter a message here",
  //   }));
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 5000);
  // }, []);
  function checkEmployeeID() {
    if (!employeeId) {
      setError((error) => ({
        ...error,
        employeeId: "Employee id cannot be Empty",
      }));
      return false;
    }
    return true;
  }
  function checkPassword() {
    if (!password) {
      setError((error) => ({
        ...error,
        password: "Password cannot be Empty",
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
      {showToast ? <Toast type={toast.type} message={toast.message} /> : null}
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
                labelname="Employee ID"
                placeholder="Enter Employee ID"
                haserror={error.employeeId}
                name="employeeId"
                id="employeeId"
                autoComplete="off"
                onChange={(event) => {
                  setEmployeeId(event.target.value);
                  setError((error) => ({
                    ...error,
                    employeeId: "",
                  }));
                }}
                onBlur={checkEmployeeID}
              />
              {error.employeeId ? (
                <ErrorMessage>
                  <p className="mb-0">{error.employeeId}</p>
                </ErrorMessage>
              ) : null}
            </div>
            <div className="form-group">
              <Input
                type="password"
                labelname="Password"
                placeholder="Enter Password"
                haserror={error.password}
                name="password"
                id="password"
                autoComplete="off"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError((error) => ({
                    ...error,
                    password: "",
                  }));
                }}
                onBlur={checkPassword}
              />
              {error.password ? (
                <ErrorMessage>
                  <p className="mb-0">{error.password}</p>
                </ErrorMessage>
              ) : null}
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
