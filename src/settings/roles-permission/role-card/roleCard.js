import React from "react";
import classes from "./roleCard.module.scss";
import Styles from "../../../personal-details/personalDetails.module.scss";
import { Colors } from "../../../shared/colors";
import Select from "react-select";

function RoleCard(props) {
  const [addMember, setAddMember] = React.useState(props.canAddMember);
  const [editMember, setEditMember] = React.useState(props.canEditMember);
  const [addFields, setAddFields] = React.useState(props.canAddField);
  const options = [
    { value: "employeeId", label: "Employee Id" },
    { value: "full-name", label: "Full Name" },
    { value: "date-of-birth", label: "Date of Birth" },
    { value: "email", label: "Email" },
    { value: "date-of-joining", label: "Date Of Joining" },
    { value: "phone-number", label: "Phone Number" },
    { value: "marital-status", label: "Marital Status" },
    { value: "gender", label: "Gender" }
  ];

  return (
    <div className={`${classes.roleCardBack}`}>
      <div
        className={`py-3 d-flex align-items-center px-4`}
        style={{ borderBottom: `2px solid ${Colors.BACKGROUND}` }}
      >
        <p className={`mb-0 ${classes.roleName}`}>{props.name}</p>
      </div>
      <div className={`${classes.formWrapper}`}>
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-12">
              <div className="container-fluid p-0">
                <div className="row no-gutters py-2">
                  <div className="col-6">
                    <div className="px-2">
                      <p className={`mb-0 ${classes.key}`}>Add Member: </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className={`px-3 py-1 mx-1 ${
                          addMember ? Styles.activeTab : Styles.tab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setAddMember(true)}
                      >
                        <p
                          className={`mb-0 ${
                            addMember ? Styles.activeText : Styles.nonActiveText
                          }`}
                        >
                          Yes
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 mx-1 ${
                          addMember ? Styles.tab : Styles.activeTab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setAddMember(false)}
                      >
                        <p
                          className={`mb-0 ${
                            addMember ? Styles.nonActiveText : Styles.activeText
                          }`}
                        >
                          No
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="container-fluid p-0">
                <div className="row no-gutters py-2">
                  <div className="col-6">
                    <div className="px-2">
                      <p className={`mb-0 ${classes.key}`}>Edit Member: </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className={`px-3 py-1 mx-1 ${
                          editMember ? Styles.activeTab : Styles.tab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setEditMember(true)}
                      >
                        <p
                          className={`mb-0 ${
                            editMember
                              ? Styles.activeText
                              : Styles.nonActiveText
                          }`}
                        >
                          Yes
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 mx-1 ${
                          editMember ? Styles.tab : Styles.activeTab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setEditMember(false)}
                      >
                        <p
                          className={`mb-0 ${
                            editMember
                              ? Styles.nonActiveText
                              : Styles.activeText
                          }`}
                        >
                          No
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="container-fluid p-0">
                <div className="row no-gutters py-2">
                  <div className="col-6">
                    <div className="px-2">
                      <p className={`mb-0 ${classes.key}`}>Add Fields: </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className={`px-3 py-1 mx-1 ${
                          addFields ? Styles.activeTab : Styles.tab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setAddFields(true)}
                      >
                        <p
                          className={`mb-0 ${
                            addFields ? Styles.activeText : Styles.nonActiveText
                          }`}
                        >
                          Yes
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 mx-1 ${
                          addFields ? Styles.tab : Styles.activeTab
                        }`}
                        style={{ cursor: "pointer", borderRadius: "8px" }}
                        onClick={() => setAddFields(false)}
                      >
                        <p
                          className={`mb-0 ${
                            addFields ? Styles.nonActiveText : Styles.activeText
                          }`}
                        >
                          No
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="d-flex align-items-center py-2">
                <div className="px-2">
                  <p className={`mb-0 ${classes.key}`}>Self Edit: </p>
                </div>
                <div className="px-2 flex-grow-1">
                  <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={options}
                    defaultValue={[options[1], options[2]]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleCard;
