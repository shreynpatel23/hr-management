import React from "react";
import CommonStyles from "../../shared/sharedStyles.module.scss";
import PersonalDetailsForm from "../../shared/personal-details-form/personalDetailsForm";
import Button from "../../shared/button/button";
import {
  PrimaryButtonStyle,
  ButtonTextStyle,
  secondaryButtonStyle,
  secondaryButtonTextStyle
} from "../../shared/buttonStyles";
import classes from "./MyAccounts.module.scss";

function MyAccounts() {
  function handleSaveChanges() {
    // handle this function
    setEdit(false);
    console.log("save changes clicked");
  }
  const [edit, setEdit] = React.useState(false);
  return (
    <div className={classes.back}>
      <div className={`${CommonStyles.card} py-3`}>
        {!edit ? (
          <div className="py-3 d-flex align-items-center justify-content-end">
            <p
              className={`mb-0 ${CommonStyles.editText}`}
              onClick={() => setEdit(true)}
            >
              Edit
            </p>
          </div>
        ) : null}
        <PersonalDetailsForm disabled={!edit} />
        {edit ? (
          <div
            className={`d-flex align-items-center justify-content-between py-3`}
          >
            <div className="px-2">
              <Button style={secondaryButtonStyle} click={() => setEdit(false)}>
                <p
                  className={`mb-0 ${classes.responsiveText}`}
                  style={secondaryButtonTextStyle}
                >
                  Cancel
                </p>
              </Button>
            </div>
            <div className="d-inline-flex">
              <Button style={PrimaryButtonStyle} click={handleSaveChanges}>
                <p className="mb-0" style={ButtonTextStyle}>
                  Save
                </p>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MyAccounts;
