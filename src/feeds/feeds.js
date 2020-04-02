import React from "react";
import classes from "./feeds.module.scss";
import uploadButton from "../assets/images/upload.png";
import { PrimaryButtonStyle, ButtonTextStyle } from "../shared/buttonStyles";
import Button from "../shared/button/button";
import FeedCard from "./feed-card/feedCard";
import AniversaryImage from "../assets/images/aniversary.jpg";
import BirthdayImage from "../assets/images/birthday.jpg";
import WelcomeImage from "../assets/images/welcome.jpg";

function Feeds() {
  function handleUploadImage() {
    console.log("upload image clicked");
  }
  function handleAddPost() {
    console.log("post clicked");
  }
  return (
    <div className={classes.feedsWidth}>
      <div className={classes.postCard}>
        <textarea
          className={classes.formControl}
          placeholder="Type message here"
          rows="3"
        ></textarea>
        <div className="py-2 d-flex align-items-center justify-content-end">
          <div className="px-2">
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={handleUploadImage}
            >
              <div className="px-1">
                <img
                  src={uploadButton}
                  alt="upload"
                  className={classes.imgSize}
                />
              </div>
              <div className="px-1">
                <p className={`mb-0 ${classes.uploadText}`}>Upload Image</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <Button style={PrimaryButtonStyle} click={handleAddPost}>
              <p className="mb-0" style={ButtonTextStyle}>
                Post
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="py-3">
          <FeedCard header="Posted by Name here" time="1 days ago">
            <p className={`mb-0 ${classes.cardText}`}>
              Hello folks, we are planning a work from home because of the
              pandemic situation that is spreading all over the world. Stay safe
              and take care
            </p>
          </FeedCard>
        </div>
        <div className="py-3">
          <FeedCard
            header="Happy Birthday Shrey"
            time="4 days ago"
            imageUrl={BirthdayImage}
          />
        </div>
        <div className="py-3">
          <FeedCard
            header="Happy work anniversary Mayur"
            time="10 days ago"
            imageUrl={AniversaryImage}
          />
        </div>
        <div className="py-3">
          <FeedCard
            header="Welcome to the team"
            time="12 days ago"
            imageUrl={WelcomeImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Feeds;
