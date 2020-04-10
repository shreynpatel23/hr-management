import React from "react";
import classes from "./rolesPermission.module.scss";
import { Accordion } from "react-bootstrap";
import {
  PrimaryButtonStyle,
  ButtonTextStyle,
  secondaryButtonStyle,
  secondaryButtonTextStyle,
} from "../../shared/buttonStyles";
import Button from "../../shared/button/button";
import RoleCard from "./role-card/roleCard";
import AddRole from "./add-role/addRole";
import { Colors } from "../../shared/colors";

function RolesPermission() {
  const [addRole, setAddRole] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState("0");
  function CustomToggle({ children, onClick }) {
    return <div onClick={onClick}>{children}</div>;
  }
  function handleSave() {
    console.log("handle save");
  }
  function handleAddRole() {
    console.log("handle ");
  }
  return (
    <div style={{ height: "100%" }}>
      <div className={classes.back}>
        <div
          className={`${classes.headerHeight} d-flex align-items-center justify-content-between px-3`}
        >
          <div className="px-2">
            <p className={`mb-0 ${classes.label}`}>Roles and Permission</p>
          </div>
          <div className={`px-3 ml-auto`} style={{ whiteSpace: "nowrap" }}>
            <Button style={PrimaryButtonStyle} click={handleAddRole}>
              <p
                className={`mb-0 ${classes.responsiveText}`}
                style={ButtonTextStyle}
                onClick={() => setAddRole(true)}
              >
                Add Role
              </p>
            </Button>
          </div>
        </div>

        <div className={classes.contentHeight}>
          <Accordion defaultActiveKey="0" activeKey={activeKey}>
            <div className="p-3">
              <CustomToggle eventKey="0">
                <div
                  className={`py-3 d-flex align-items-center ${classes.accordionToggle}`}
                >
                  <div className="px-3">
                    <p className={`${classes.label} mb-0`}>
                      Employee Master Database
                    </p>
                  </div>
                  <div className="ml-auto px-3">
                    <div
                      onClick={() => {
                        setActiveKey("0");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="10"
                        viewBox="0 0 40 10"
                        style={{ fill: Colors.TEXTCOLOR, cursor: "pointer" }}
                      >
                        <g
                          id="prefix__Group_131"
                          data-name="Group 131"
                          transform="translate(-1396 -252)"
                        >
                          <circle
                            id="prefix__Ellipse_7"
                            cx="5"
                            cy="5"
                            r="5"
                            data-name="Ellipse 7"
                            transform="translate(1396 252)"
                          />
                          <circle
                            id="prefix__Ellipse_8"
                            cx="5"
                            cy="5"
                            r="5"
                            data-name="Ellipse 8"
                            transform="translate(1411 252)"
                          />
                          <circle
                            id="prefix__Ellipse_9"
                            cx="5"
                            cy="5"
                            r="5"
                            data-name="Ellipse 9"
                            transform="translate(1426 252)"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </CustomToggle>
              <Accordion.Collapse eventKey="0">
                <div className={`${classes.accordionToggleContent} mx-3`}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 py-3">
                        <RoleCard
                          name="Admin"
                          canAddMember={true}
                          canEditMember={true}
                          canAddField={true}
                        />
                      </div>
                      <div className="col-lg-6 py-3">
                        <RoleCard
                          name="Supervisor"
                          canAddMember={false}
                          canEditMember={true}
                          canAddField={false}
                        />
                      </div>
                      <div className="col-lg-6 py-3">
                        <RoleCard
                          name="Employee"
                          canAddMember={false}
                          canEditMember={false}
                          canAddField={false}
                        />
                      </div>
                    </div>
                    <div className="py-3 d-flex align-items-center justify-content-end">
                      <div className="d-inline-flex">
                        <Button style={secondaryButtonStyle} click={handleSave}>
                          <p
                            className={`mb-0 ${classes.responsiveText}`}
                            style={secondaryButtonTextStyle}
                          >
                            Save
                          </p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </div>
      </div>
      {addRole ? (
        <AddRole
          onCancelAddRole={() => setAddRole(false)}
          handleAddMember={() => setAddRole(false)}
        />
      ) : null}
    </div>
  );
}

export default RolesPermission;
