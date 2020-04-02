import React from "react";
import classes from "./rolesPermission.module.scss";
import { PrimaryButtonStyle, ButtonTextStyle } from "../../shared/buttonStyles";
import Button from "../../shared/button/button";
import RoleCard from "./role-card/roleCard";

function RolesPermission() {
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
          <div className={`ml-auto `}>
            <Button style={PrimaryButtonStyle} click={handleSave}>
              <p
                className={`mb-0 ${classes.responsiveText}`}
                style={ButtonTextStyle}
              >
                Save
              </p>
            </Button>
          </div>
          <div className={`px-3`} style={{ whiteSpace: "nowrap" }}>
            <Button style={PrimaryButtonStyle} click={handleAddRole}>
              <p
                className={`mb-0 ${classes.responsiveText}`}
                style={ButtonTextStyle}
              >
                Add Role
              </p>
            </Button>
          </div>
        </div>
        <div className={classes.contentHeight}>
          <div className="p-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 py-2">
                  <RoleCard
                    name="Admin"
                    canAddMember={true}
                    canEditMember={true}
                    canAddField={true}
                  />
                </div>
                <div className="col-lg-6 py-2">
                  <RoleCard
                    name="Supervisor"
                    canAddMember={false}
                    canEditMember={true}
                    canAddField={false}
                  />
                </div>
                <div className="col-lg-6 py-2">
                  <RoleCard
                    name="Employee"
                    canAddMember={false}
                    canEditMember={false}
                    canAddField={false}
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

export default RolesPermission;
