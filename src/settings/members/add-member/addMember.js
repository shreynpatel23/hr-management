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
import uploadButton from "../../../assets/images/upload.png";

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
                      <img
                        src={uploadButton}
                        alt="upload"
                        className={classes.imgSize}
                      />
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
