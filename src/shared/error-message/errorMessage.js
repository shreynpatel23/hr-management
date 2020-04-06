import React from "react";

function ErrorMessage(props) {
  return (
    <div className="py-2 text-center text-danger" style={{ fontSize: "12px" }}>
      {props.children}
    </div>
  );
}

export default ErrorMessage;
