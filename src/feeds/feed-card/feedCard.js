import React from "react";
import classes from "./feedCard.module.scss";

function FeedCard(props) {
  return (
    <div className={classes.feedCard}>
      <div className={`d-flex align-items-center ${classes.cardHeader}`}>
        <div className="px-2">
          <p className={`mb-0 ${classes.headerText}`}>{props.header}</p>
        </div>
        <div className="px-2 ml-auto">
          <p className={`mb-0 ${classes.headerText}`}>{props.time}</p>
        </div>
      </div>
      {props.imageUrl ? (
        <div>
          <img src={props.imageUrl} alt="" className={classes.imgSize} />
        </div>
      ) : (
        <div className="p-3">{props.children}</div>
      )}
    </div>
  );
}

export default FeedCard;
