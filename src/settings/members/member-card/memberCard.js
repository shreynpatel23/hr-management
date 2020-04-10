import React from "react";
import Styles from "./memberCard.module.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";

function MemberCard(props) {
  const [role, setRole] = React.useState(props.role);
  return (
    <div className={`row ${Styles.memberCard} m-0 d-flex align-items-center`}>
      <div className="col-2">
        <p className={`mb-0 ${Styles.tableValue}`}>{props.employee_id}</p>
      </div>
      <div className="col-3">
        <p className={`mb-0 ${Styles.tableValue}`}>{props.name}</p>
      </div>
      <div className="col-4">
        <p className={`mb-0 ${Styles.tableValue}`}>{props.email}</p>
      </div>
      <div className="col-2">
        <DropdownButton
          id="dropdown-menu"
          bsPrefix={Styles.dropdown}
          title={role}
        >
          <Dropdown.Item
            eventKey="Admin"
            onClick={() => {
              setRole("Admin");
            }}
          >
            <p className={`mb-0 ${Styles.tableValue}`}>Admin</p>
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="Supervisor"
            onClick={() => {
              setRole("Supervisor");
            }}
          >
            <p className={`mb-0 ${Styles.tableValue}`}>Supervisor</p>
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="Employee"
            onClick={() => {
              setRole("Employee");
            }}
          >
            <p className={`mb-0 ${Styles.tableValue}`}>Employee</p>
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className={`col-1 d-flex align-items-center justify-content-end`}>
        <div className={`${Styles.showOnHover}`}>
          <i className="fa fa-edit" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
