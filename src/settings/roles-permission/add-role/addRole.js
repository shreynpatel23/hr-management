import React from "react";
import Styles from "../../../shared/popup.module.scss";
import CommonStyles from "../../../shared/sharedStyles.module.scss";
import classes from "./addRole.module.scss";
import {
  PrimaryButtonStyle,
  ButtonTextStyle,
  secondaryButtonTextStyle,
  secondaryButtonStyle
} from "../../../shared/buttonStyles";
import Button from "../../../shared/button/button";

function AddRole({ onCancelAddRole, handleAddMember }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${Styles.overlay}`}
    >
      <div className={`${Styles.popUpCard} ${classes.popUpWidth}`}>
        <div className="py-2">
          <p className={`mb-0 ${classes.labelText}`}>
            Enter the role name below
          </p>
        </div>
        <div className="py-2 px-3">
          <input
            type="text"
            className={classes.formControl}
            placeholder="Enter Role name here"
          />
        </div>
        <div className="py-2 d-flex align-items-center">
          <div className="px-2">
            <Button
              style={secondaryButtonStyle}
              click={() => onCancelAddRole()}
            >
              <p
                className={`mb-0 ${classes.responsiveText}`}
                style={secondaryButtonTextStyle}
              >
                Cancel
              </p>
            </Button>
          </div>
          <div className="ml-auto px-2">
            <Button style={PrimaryButtonStyle} click={handleAddMember}>
              <p className={`mb-0`} style={ButtonTextStyle}>
                Add Role
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRole;
