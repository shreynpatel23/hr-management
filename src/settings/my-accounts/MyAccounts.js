import React from "react";
import CommonStyles from "../../shared/sharedStyles.module.scss";
import PersonalDetailsForm from "../../shared/personal-details-form/personalDetailsForm";
import Button from "../../shared/button/button";
import { PrimaryButtonStyle, ButtonTextStyle } from "../../shared/buttonStyles";

function MyAccounts() {
  function handelSaveChanges() {
    // handel this function
    setEdit(false);
    console.log("save changes clicked");
  }
  const [edit, setEdit] = React.useState(false);
  return (
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
      <PersonalDetailsForm disabled={edit} />
      {edit ? (
        <div
          className={`d-flex align-items-center justify-content-between py-3`}
        >
          <div className="px-2">
            <p
              className={`mb-0 ${CommonStyles.cancelText}`}
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

export default MyAccounts;
