import React from "react";
import classes from "./loading.module.scss";

function Loading() {
  return (
    <div
      style={{ height: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className={classes.dot1}></div>
      <div className={classes.dot2}></div>
      <div className={classes.dot3}></div>
    </div>
  );
}

export default Loading;
