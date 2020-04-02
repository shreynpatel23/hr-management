import React from "react";
import Button from "../shared/button/button";
import BackButton from "../shared/backButton/backButton";
import { useHistory } from "react-router-dom";
import CommonStyles from "../shared/sharedStyles.module.scss";
import { PrimaryButtonStyle, ButtonTextStyle } from "../shared/buttonStyles";
import Styles from "./personalDetails.module.scss";
import Logo from "../shared/logo/logo";
import PersonalDetailsForm from "../shared/personal-details-form/personalDetailsForm";

function PersonalDetails() {
  let history = useHistory();
  function handleBack() {
    history.push("/employee-database");
  }
  function handleNext() {
    history.push("/application/feeds");
  }
  return (
    <div className={`${CommonStyles.background}`}>
      <div className={`${CommonStyles.logoBranding}`}>
        <Logo />
      </div>
      <div className={`${CommonStyles.contentContainer}`}>
        <div className={`${CommonStyles.card} p-4`}>
          <div className="py-3">
            <p className={`${Styles.heading} mb-0 text-center`}>
              Fill the input having * sign
            </p>
          </div>
          <div className="py-3">
            <PersonalDetailsForm />
          </div>
          <div
            className={`py-4 d-flex align-items-center justify-content-between`}
          >
            <div className="px-2">
              <BackButton click={handleBack} />
            </div>
            <div className="px-2">
              <Button style={PrimaryButtonStyle} click={handleNext}>
                <p className="mb-0" style={ButtonTextStyle}>
                  Next
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
