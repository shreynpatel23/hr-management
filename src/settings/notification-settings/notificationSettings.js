import React from "react";
import CommonStyles from "../../shared/sharedStyles.module.scss";
import Styles from "../../notification-prefrences/notificationPrefrences.module.scss";
import Button from "../../shared/button/button";
import { PrimaryButtonStyle, ButtonTextStyle } from "../../shared/buttonStyles";

function NotificationSettings() {
  const [edit, setEdit] = React.useState(false);
  function handelSaveChanges() {
    setEdit(false);
    console.log("save changes clicked");
  }
  return (
    <div className={`${CommonStyles.Logincard}`}>
      {!edit ? (
        <div className="py-2 d-flex align-items-center justify-content-end">
          <p
            className={`mb-0 ${Styles.editNotification}`}
            onClick={() => setEdit(true)}
          >
            Edit
          </p>
        </div>
      ) : null}
      <div className="py-4">
        <p className={`${Styles.heading} mb-0 text-center`}>
          Choose your Notification Prefrences.
        </p>
        <p className={`${Styles.subheading}`}>
          you can change that in the settings section.
        </p>
      </div>
      <div className="py-3">
        <div className={`${Styles.notificationTab} d-flex align-items-center`}>
          <div className="px-2">
            <p className={`mb-0 ${Styles.notificationType}`}>Email</p>
          </div>
          <div className="px-2 ml-auto">
            {edit ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 93.468 93.469"
                style={{ fill: "#f8383f" }}
              >
                <path
                  id="prefix__Union_20"
                  d="M9650.015 18528.109l-23.69-23.691-23.687 23.688a13.5 13.5 0 0 1-19.089-19.09l23.688-23.689-23.687-23.687a13.5 13.5 0 0 1 19.089-19.094l23.688 23.689 23.689-23.689a13.5 13.5 0 0 1 19.089 19.094l-23.688 23.688 23.688 23.689a13.5 13.5 0 1 1-19.089 19.094z"
                  data-name="Union 20"
                  transform="translate(-9579.592 -18438.594)"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="prefix__tick"
                width="20"
                height="20"
                viewBox="0 0 37.412 37.412"
                style={{ fill: "#00c726" }}
              >
                <path
                  id="prefix__Union_8"
                  d="M3.532 35.582a3.532 3.532 0 1 1 0-7.063H10.5V3.414a3.414 3.414 0 0 1 6.828 0V34.5a.853.853 0 0 1-.688.837.88.88 0 0 1-.608.243z"
                  data-name="Union 8"
                  transform="rotate(45 12.58 30.37)"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className={`${Styles.notificationTab} d-flex align-items-center`}>
          <div className="px-2">
            <p className={`mb-0 ${Styles.notificationType}`}>SMS</p>
          </div>
          <div className="px-2 ml-auto">
            {edit ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 93.468 93.469"
                style={{ fill: "#f8383f" }}
              >
                <path
                  id="prefix__Union_20"
                  d="M9650.015 18528.109l-23.69-23.691-23.687 23.688a13.5 13.5 0 0 1-19.089-19.09l23.688-23.689-23.687-23.687a13.5 13.5 0 0 1 19.089-19.094l23.688 23.689 23.689-23.689a13.5 13.5 0 0 1 19.089 19.094l-23.688 23.688 23.688 23.689a13.5 13.5 0 1 1-19.089 19.094z"
                  data-name="Union 20"
                  transform="translate(-9579.592 -18438.594)"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="prefix__tick"
                width="20"
                height="20"
                viewBox="0 0 37.412 37.412"
                style={{ fill: "#00c726" }}
              >
                <path
                  id="prefix__Union_8"
                  d="M3.532 35.582a3.532 3.532 0 1 1 0-7.063H10.5V3.414a3.414 3.414 0 0 1 6.828 0V34.5a.853.853 0 0 1-.688.837.88.88 0 0 1-.608.243z"
                  data-name="Union 8"
                  transform="rotate(45 12.58 30.37)"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="py-2">
          <p className={`${Styles.warningText} mb-0`}>
            Additional charges may apply
          </p>
        </div>
      </div>
      {edit ? (
        <div className={`d-flex align-items-center justify-content-between`}>
          <div className="px-2">
            <p
              className={`mb-0 ${Styles.cancelText}`}
              onClick={() => setEdit(false)}
            >
              Cancel
            </p>
          </div>
          <div className="d-inline-flex">
            <Button style={PrimaryButtonStyle} click={handelSaveChanges}>
              <p className="mb-0" style={ButtonTextStyle}>
                Save
              </p>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NotificationSettings;
