import React from "react";
import Styles from "../../../shared/popup.module.scss";
import classes from "./addMember.module.scss";
import PersonalDetailsForm from "../../../shared/personal-details-form/personalDetailsForm";
import {
  PrimaryButtonStyle,
  ButtonTextStyle,
  secondaryButtonStyle,
  secondaryButtonTextStyle
} from "../../../shared/buttonStyles";
import Button from "../../../shared/button/button";
import { Colors } from "../../../shared/colors";

function AddMember({ onAddMember, onCancelAddMember }) {
  function handleAddMember() {
    console.log("add member clicked");
    onAddMember();
  }
  function handleUploadCSV() {
    console.log("handle upload csv here");
  }
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${Styles.overlay}`}
    >
      <div className={Styles.popUpCard}>
        <div className={classes.formWidth}>
          <div className={classes.formWrapper}>
            <PersonalDetailsForm />
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <div className="px-3">
              <Button
                style={secondaryButtonStyle}
                click={() => onCancelAddMember()}
              >
                <p
                  className={`mb-0 ${classes.responsiveText}`}
                  style={secondaryButtonTextStyle}
                >
                  Cancel
                </p>
              </Button>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div className="px-2">
                  <div
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={handleUploadCSV}
                  >
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="prefix__photo"
                        width="25"
                        height="25"
                        viewBox="0 0 29.056 25.729"
                        style={{ fill: Colors.PRIMARYCOLOR }}
                      >
                        <g id="prefix__Group_117" data-name="Group 117">
                          <g id="prefix__Group_116" data-name="Group 116">
                            <circle
                              id="prefix__Ellipse_6"
                              cx="1.996"
                              cy="1.996"
                              r="1.996"
                              data-name="Ellipse 6"
                              transform="translate(8.955 6.349)"
                            />
                            <path
                              id="prefix__Path_10"
                              d="M27.337 39.692a6.147 6.147 0 0 0-3.437-1.635V27.909a3.992 3.992 0 0 0-1.137-2.773A3.874 3.874 0 0 0 19.99 24H3.909a3.992 3.992 0 0 0-2.773 1.137A3.874 3.874 0 0 0 0 27.909v16.552a3.992 3.992 0 0 0 1.137 2.773 3.874 3.874 0 0 0 2.772 1.136h15.554a5.866 5.866 0 0 0 7.874-8.678zM1.469 27.909a2.321 2.321 0 0 1 .721-1.691 2.433 2.433 0 0 1 1.719-.718H19.99a2.461 2.461 0 0 1 2.44 2.44v8.65l-4.1-4.1a.744.744 0 0 0-1.054 0l-6.183 6.21L6.9 34.48a.744.744 0 0 0-1.054 0l-4.377 4.436zm2.413 19.047V46.9a2.433 2.433 0 0 1-1.719-.721 2.53 2.53 0 0 1-.693-1.719v-3.437l4.907-4.935 4.186 4.187a.771.771 0 0 0 1.054 0l6.183-6.21 4.048 4.076-.25.083a2.574 2.574 0 0 0-.36.111c-.111.028-.222.083-.333.111a.83.83 0 0 0-.222.111 2.576 2.576 0 0 0-.277.139l-.416.25c-.083.055-.139.083-.222.139-.055.028-.083.055-.139.083a3.345 3.345 0 0 0-.665.582 5.865 5.865 0 0 0-1.719 4.159 6.1 6.1 0 0 0 .139 1.22c.028.111.055.194.083.3.083.277.166.555.277.832v.028a5.086 5.086 0 0 0 .36.665zm22.374 0a4.386 4.386 0 0 1-6.127.055c-.111-.111-.222-.25-.333-.36-.083-.083-.166-.194-.25-.277a2.633 2.633 0 0 1-.277-.471c-.055-.111-.111-.194-.166-.3a2.342 2.342 0 0 1-.139-.471c-.028-.111-.083-.25-.111-.36a4.589 4.589 0 0 1-.083-.887 4.45 4.45 0 0 1 1.275-3.105 4.286 4.286 0 0 1 3.106-1.28 4.45 4.45 0 0 1 3.105 1.275 4.333 4.333 0 0 1 1.275 3.105 4.434 4.434 0 0 1-1.275 3.076z"
                              data-name="Path 10"
                              transform="translate(0 -24)"
                            />
                            <path
                              id="prefix__Path_11"
                              d="M301.58 264.622a.967.967 0 0 0-.25-.166.809.809 0 0 0-.25-.055h-.055a.809.809 0 0 0-.25.055.655.655 0 0 0-.25.166l-1.719 1.719a.745.745 0 1 0 1.054 1.054l.444-.444V270a.749.749 0 1 0 1.5 0v-3.05l.444.444a.745.745 0 1 0 1.054-1.054z"
                              data-name="Path 11"
                              transform="translate(-277.903 -247.737)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="px-1">
                      <p className={`${classes.uploadText} mb-0`}>Upload CSV</p>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <Button style={PrimaryButtonStyle} click={handleAddMember}>
                    <p
                      className={`mb-0 ${classes.responsiveText}`}
                      style={ButtonTextStyle}
                    >
                      Add
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
