import React from "react";
import classes from "./members.module.scss";
import inputStyle from "../../shared/input/input.module.scss";
import Button from "../../shared/button/button";
import { PrimaryButtonStyle, ButtonTextStyle } from "../../shared/buttonStyles";
import MemberCard from "./member-card/memberCard";
import { Pagination } from "react-bootstrap";
import AddMember from "./add-member/addMember";

function Members() {
  const [activeTab, setActiveTab] = React.useState(1);
  const [toggleAddmember, setToggleAddmember] = React.useState(false);
  function handelAddMember() {
    setToggleAddmember(true);
    console.log("Add member clicked");
  }
  let active = activeTab;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActiveTab(number)}
      >
        {number}
      </Pagination.Item>
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
                    <Button style={PrimaryButtonStyle} click={handelAddMember}>
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
                    <Button style={PrimaryButtonStyle} click={handelAddMember}>
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
            <Pagination bsPrefix={classes.paginationStyle}>{items}</Pagination>
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
