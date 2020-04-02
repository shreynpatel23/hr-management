import React from "react";
import CommonStyles from "../shared/sharedStyles.module.scss";
import Styles from "./employeeDatabase.module.scss";
import FieldTabs from "./field-tabs/fieldTabs";
import { FieldTabsList } from "../constants";
import Button from "../shared/button/button";
import { PrimaryButtonStyle, ButtonTextStyle } from "../shared/buttonStyles";
import FiledList from "./field-list/filedList";
import { Colors } from "../shared/colors";
import BackButton from "../shared/backButton/backButton";
import { useHistory } from "react-router-dom";
import Logo from "../shared/logo/logo";

function EmployeeDatabase() {
  const [selectedFields, setSelectedFields] = React.useState([]);
  let history = useHistory();
  function handleSelectedTab(value) {
    setSelectedFields(selectedFields.concat(value));
  }
  function handleNext() {
    history.push("personal-details");
  }
  function handleRemoveField() {
    console.log("remove field clicked");
  }
  function handleBack() {
    history.push("/notification-prefrences");
  }
  return (
    <div className={`${CommonStyles.background}`}>
      <div className={`${CommonStyles.logoBranding}`}>
        <Logo />
      </div>
      <div className={`${CommonStyles.contentContainer}`}>
        <div className={`${CommonStyles.card}`}>
          <div className="py-4">
            <p className={`${Styles.heading} mb-0 text-center`}>
              Select the fields that you include in your Database
            </p>
            <p className={`${Styles.subheading}`}>
              Select the checkbox of the field you want to be Required.
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 p-2">
                <p className={`${Styles.cardlabel} mb-0 py-1`}>All Fields</p>
                <div
                  className={Styles.cardBody}
                  style={{ height: "300px", overflowY: "scroll" }}
                >
                  <div
                    className="d-flex align-items-center mb-3"
                    style={{ borderBottom: `1px solid ${Colors.TEXTCOLOR}` }}
                  >
                    <div className="px-2">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div className="px-2 flex-grow-1">
                      <input
                        type="text"
                        placeholder="Search Field Here"
                        className={Styles.formControl}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    {FieldTabsList.map(fieldName => {
                      return (
                        <div className="p-2" key={fieldName}>
                          <FieldTabs click={() => handleSelectedTab(fieldName)}>
                            {fieldName}
                          </FieldTabs>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <p className={`${Styles.cardlabel} mb-0 py-1`}>
                  Selected Fields
                </p>
                <div
                  className={Styles.cardBody}
                  style={{ height: "300px", overflowY: "scroll" }}
                >
                  <div
                    className="d-flex align-items-center pb-2"
                    style={{ borderBottom: `1px solid ${Colors.TEXTCOLOR}` }}
                  >
                    <div className="px-2">
                      <p className={`mb-0 ${Styles.fieldHeading}`}>
                        Field Name
                      </p>
                    </div>
                    <div className="px-5 ml-auto">
                      <p className={`mb-0 ${Styles.fieldHeading}`}>Required</p>
                    </div>
                  </div>
                  {selectedFields.map(fieldName => {
                    return (
                      <div className="p-2" key={fieldName}>
                        <FiledList
                          fieldName={fieldName}
                          click={handleRemoveField}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 d-flex align-items-center justify-content-between">
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

export default EmployeeDatabase;
