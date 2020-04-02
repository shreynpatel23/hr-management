import React from "react";
import Styles from "../../personal-details/personalDetails.module.scss";
import Input from "../input/input";

function PersonalDetailsForm(props) {
  const [married, setMarried] = React.useState("YES");
  const [gender, setGender] = React.useState("Male");
  return (
    <form className="py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group py-3">
              <Input
                type="text"
                placeholder="Employee ID"
                // conditional rendering for placeholder for error
                // placeholder={error.employeeId ? error.employeeId : 'Enter Employee ID'}
                // use this prop for error cases
                // haserror={error.employeeId}
                name="employeeId"
                id="employeeId"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
            <div className="form-group py-3">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
            <div className="form-group py-3">
              <Input
                type="number"
                placeholder="Phone number"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-3">
              <Input
                type="text"
                placeholder="Full Name"
                name="fullName"
                id="fullName"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
            <div className="form-group py-3">
              <Input
                type="text"
                placeholder="Date of Birth"
                name="dateOfBirth"
                id="dateOfBirth"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
            <div className="form-group py-3">
              <Input
                type="text"
                placeholder="Date of Joining"
                name="dateOfJoining"
                id="dateOfJoining"
                autoComplete="off"
                disabled={props.disabled}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-6 p-2">
            <p className={`${Styles.labelText} pb-1 mb-0`}>Married</p>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div
                className={`px-3 py-1 mx-1 ${
                  married === "YES" ? Styles.activeTab : Styles.tab
                }`}
                style={{ cursor: "pointer", borderRadius: "8px" }}
                onClick={() => setMarried("YES")}
              >
                <p
                  className={`mb-0 ${
                    married === "YES" ? Styles.activeText : Styles.nonActiveText
                  }`}
                >
                  Yes
                </p>
              </div>
              <div
                className={`px-3 py-1 mx-1 ${
                  married === "NO" ? Styles.activeTab : Styles.tab
                }`}
                style={{ cursor: "pointer", borderRadius: "8px" }}
                onClick={() => setMarried("NO")}
              >
                <p
                  className={`mb-0 ${
                    married === "NO" ? Styles.activeText : Styles.nonActiveText
                  }`}
                >
                  No
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <p className={`${Styles.labelText} pb-1 mb-0`}>Gender</p>
            <div className="d-flex align-items-center py-1 justify-content-center justify-content-md-start">
              <div className="px-3">
                <label className={`${Styles.container} mb-0 pl-3`}>
                  Male
                  <input
                    type="radio"
                    checked={gender === "Male"}
                    name="radio"
                    onChange={() => setGender("Male")}
                  />
                  <span className={`${Styles.checkmark}`}></span>
                </label>
              </div>
              <div className="px-3">
                <label className={`${Styles.container} mb-0 pl-3`}>
                  Female
                  <input
                    type="radio"
                    checked={gender === "Female"}
                    name="radio"
                    onChange={() => setGender("Female")}
                  />
                  <span className={`${Styles.checkmark}`}></span>
                </label>
              </div>
              <div className="px-3">
                <label className={`${Styles.container} mb-0 pl-3`}>
                  Others
                  <input
                    type="radio"
                    checked={gender === "Others"}
                    name="radio"
                    onChange={() => setGender("Others")}
                  />
                  <span className={`${Styles.checkmark}`}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PersonalDetailsForm;
