import React from "react";
import classes from "./members.module.scss";
import inputStyle from "../../shared/input/input.module.scss";
import Button from "../../shared/button/button";
import { PrimaryButtonStyle, ButtonTextStyle } from "../../shared/buttonStyles";
import MemberCard from "./member-card/memberCard";
import AddMember from "./add-member/addMember";
import { Colors } from "../../shared/colors";

function Members() {
  const [activeTab, setActiveTab] = React.useState(1);
  const [toggleAddmember, setToggleAddmember] = React.useState(false);
  function handleAddMember() {
    setToggleAddmember(true);
    console.log("Add member clicked");
  }
  let active = activeTab;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <li
        key={number}
        className={`page-item ${
          active === number ? classes.activeTab : classes.nonActiveTab
        }`}
        onClick={() => setActiveTab(number)}
      >
        <p className="mb-0">{number}</p>
      </li>
    );
  }
  return (
    <div style={{ height: "100%" }}>
      <div className={classes.back}>
        <div className={classes.headerHeight}>
          <div className="py-2 container-fluid">
            <div className="row no-gutters m-0">
              <div className="col-lg-4 py-2">
                <div className="d-flex align-items-center">
                  <div className="px-2">
                    <p className={`mb-0 ${classes.label}`}>Members</p>
                  </div>
                  <div className={`ml-auto ${classes.showOnMobile}`}>
                    <Button style={PrimaryButtonStyle} click={handleAddMember}>
                      <p
                        className={`mb-0 ${classes.responsiveText}`}
                        style={ButtonTextStyle}
                      >
                        Add Member
                      </p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 py-2">
                <div className="d-flex justify-content-end">
                  <div className="px-2 flex-grow-1">
                    <div
                      className={`d-flex align-items-center ${classes.searchBack}`}
                    >
                      <div className="px-2">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </div>
                      <div className="pr-2 flex-grow-1">
                        <input
                          type="text"
                          style={{ borderBottom: 0 }}
                          className={inputStyle.formControl}
                          placeholder="Search Agency"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`pl-2 ${classes.showonWeb}`}>
                    <Button style={PrimaryButtonStyle} click={handleAddMember}>
                      <p
                        className={`mb-0 ${classes.responsiveText}`}
                        style={ButtonTextStyle}
                      >
                        Add Member
                      </p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div className={` ${classes.headerWidth}`}>
            <div className={`container-fluid py-2`}>
              <div className={`row m-0 ${classes.membersHeading}`}>
                <div className="col-3">
                  <p className={`mb-0 ${classes.header}`}>Employee ID</p>
                </div>
                <div className="col-3">
                  <p className={`mb-0 ${classes.header}`}>Name</p>
                </div>
                <div className="col-4">
                  <p className={`mb-0 ${classes.header}`}>Email</p>
                </div>
                <div className="col-2">
                  <p className={`mb-0 ${classes.header}`}>Role</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Admin"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Supervisor"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Employee"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Supervisor"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Admin"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Employee"
            />
          </div>
          <div className="container-fluid py-2">
            <MemberCard
              employee_id="1001"
              name="Mayur Jadhav"
              email="mayur@dataorc.io"
              role="Admin"
            />
          </div>
        </div>
        <div
          style={{ height: "10%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="m-0">
            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0">
                <li className="page-item">
                  <div
                    className={`${classes.nonActiveTab} mb-0`}
                    onClick={() => setActiveTab(activeTab - 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.092"
                      height="14.561"
                      viewBox="0 0 15.092 14.561"
                      style={{ fill: Colors.PRIMARYCOLOR, marginBottom: "5px" }}
                    >
                      <g
                        id="prefix__Group_133"
                        data-name="Group 133"
                        transform="translate(-1180.669 -39.448)"
                      >
                        <g
                          id="prefix__Group_131"
                          data-name="Group 131"
                          transform="translate(1180.669 39.448)"
                        >
                          <path
                            id="prefix__Union_15"
                            d="M6.373 14.111L.481 8.174a1.687 1.687 0 0 1-.227-.284Q.231 7.871.21 7.85a1.1 1.1 0 0 1 .239-1.51L6.386.448A1.132 1.132 0 0 1 7.914.205a1.1 1.1 0 0 1-.239 1.511L2.1 7.243l5.538 5.581a1.131 1.131 0 0 1 .243 1.527.742.742 0 0 1-.54.209 1.42 1.42 0 0 1-.968-.449z"
                            data-name="Union 15"
                          />
                        </g>
                        <g
                          id="prefix__Group_132"
                          data-name="Group 132"
                          transform="translate(1187.638 39.448)"
                        >
                          <path
                            id="prefix__Union_15-2"
                            d="M6.373 14.111L.482 8.174a1.691 1.691 0 0 1-.227-.284C.239 7.878.224 7.864.21 7.85a1.1 1.1 0 0 1 .24-1.511L6.387.448A1.131 1.131 0 0 1 7.914.205a1.1 1.1 0 0 1-.24 1.511L2.1 7.243l5.537 5.581a1.13 1.13 0 0 1 .243 1.527.741.741 0 0 1-.541.21 1.418 1.418 0 0 1-.966-.45z"
                            data-name="Union 15"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </li>
                {items}
                <li className="page-item">
                  <div
                    className={`${classes.nonActiveTab} mb-0`}
                    onClick={() => setActiveTab(activeTab + 1)}
                    style={{ transform: "rotate(-180deg)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.092"
                      height="14.561"
                      viewBox="0 0 15.092 14.561"
                      style={{ fill: Colors.PRIMARYCOLOR, marginBottom: "5px" }}
                    >
                      <g
                        id="prefix__Group_133"
                        data-name="Group 133"
                        transform="translate(-1180.669 -39.448)"
                      >
                        <g
                          id="prefix__Group_131"
                          data-name="Group 131"
                          transform="translate(1180.669 39.448)"
                        >
                          <path
                            id="prefix__Union_15"
                            d="M6.373 14.111L.481 8.174a1.687 1.687 0 0 1-.227-.284Q.231 7.871.21 7.85a1.1 1.1 0 0 1 .239-1.51L6.386.448A1.132 1.132 0 0 1 7.914.205a1.1 1.1 0 0 1-.239 1.511L2.1 7.243l5.538 5.581a1.131 1.131 0 0 1 .243 1.527.742.742 0 0 1-.54.209 1.42 1.42 0 0 1-.968-.449z"
                            data-name="Union 15"
                          />
                        </g>
                        <g
                          id="prefix__Group_132"
                          data-name="Group 132"
                          transform="translate(1187.638 39.448)"
                        >
                          <path
                            id="prefix__Union_15-2"
                            d="M6.373 14.111L.482 8.174a1.691 1.691 0 0 1-.227-.284C.239 7.878.224 7.864.21 7.85a1.1 1.1 0 0 1 .24-1.511L6.387.448A1.131 1.131 0 0 1 7.914.205a1.1 1.1 0 0 1-.24 1.511L2.1 7.243l5.537 5.581a1.13 1.13 0 0 1 .243 1.527.741.741 0 0 1-.541.21 1.418 1.418 0 0 1-.966-.45z"
                            data-name="Union 15"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {toggleAddmember ? (
        <AddMember
          onAddMember={() => setToggleAddmember(false)}
          onCancelAddMember={() => setToggleAddmember(false)}
        />
      ) : null}
    </div>
  );
}

export default Members;
