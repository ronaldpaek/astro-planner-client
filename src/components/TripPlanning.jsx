import React from "react";
import lightIcon from "@/assets/lightIcon.svg";
import websiteIcon from "@/assets/websiteIcon.svg";
import eBookIcon from "@/assets/eBookIcon.svg";
import rightArrow from "@/assets/rightArrow.svg";
import { Link } from "react-router-dom";

export default function TripPlanning() {
  return (
    <div className="trip-container">
      <div className="trip-planning">
        <h1>Innovative Trip Planning</h1>
        <p>
          Our vision is to revolutionaize the way people travel by <br />{" "}
          introducing intelligent trip planning
        </p>
      </div>
      <div className="card-container">
        <div className="cardOne">
          <div className="lightIcon">
            <img src={lightIcon} alt="light icon" />{" "}
          </div>
          <p className="wrapper">
            Partner allows you to browse multiple carriers for travel.
          </p>
          <Link to="/">
            <div className="learnMore">
              <p id="learnMoreText">Learn more</p>
              <img src={rightArrow} alt="learn more" />
            </div>
          </Link>
        </div>
        <div className="cardTwo">
          <div className="websiteIcon">
            <img src={websiteIcon} alt="website icon" />
          </div>
          <p className="wrapper">
            The website is a way for partners to communicate with their
            customers.
          </p>
          <Link to="/">
            <div className="learnMore">
              <p id="learnMoreText">Learn more</p>
              <img src={rightArrow} alt="learn more" />
            </div>
          </Link>
        </div>
        <div className="cardThree">
          <div className="eBookIcon">
            <img src={eBookIcon} alt="website icon" />
          </div>
          <p className="wrapper">
            The ebook Reader is a new way to look at e-books.
          </p>
          <Link to="/">
            <div className="learnMore">
              <p id="learnMoreText">Learn more</p>
              <img src={rightArrow} alt="learn more" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
