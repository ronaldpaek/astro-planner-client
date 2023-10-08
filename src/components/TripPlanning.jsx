import React from 'react';
import lightIcon from '@/assets/lightIcon.svg';
import websiteIcon from '@/assets/websiteIcon.svg';
import eBookIcon from '@/assets/eBookIcon.svg';
import rightArrow from '@/assets/rightArrow.svg';
import { Link } from 'react-router-dom';

export default function TripPlanning() {
  return (
    <div className="trip-container">
      <div className="trip-planning flex-col">
        <h1 className=" context text">Innovative Trip Planning</h1>
        <p className="context text">
          Our vision is to revolutionaize the way people travel by <br />{' '}
          introducing intelligent trip planning
        </p>
      </div>
      <div className="card-wrapper ">
        <div className="cardOne flex-col">
          <div className="lightIcon">
            <img src={lightIcon} alt="light icon" />
          </div>
          <div className="wrapper">
            <p className=" context text">
              Partner allows you to browse multiple carriers for travel.
            </p>
          </div>
          <Link to="/">
            <div className="learnMore">
              <p id="learnMoreText">Learn more</p>
              <img src={rightArrow} alt="learn more" />
            </div>
          </Link>
        </div>
        <div className="cardTwo flex-col">
          <div className="websiteIcon">
            <img src={websiteIcon} alt="website icon" />
          </div>
          <div className="wrapper">
            <p className="context text">
              The website is a way for partners to communicate with their
              customers.
            </p>
          </div>
          <Link to="/">
            <div className="learnMore">
              <p id="learnMoreText">Learn more</p>
              <img src={rightArrow} alt="learn more" />
            </div>
          </Link>
        </div>
        <div className="cardThree flex-col">
          <div className="eBookIcon">
            <img src={eBookIcon} alt="website icon" />
          </div>
          <div className="wrapper">
            <p className="context text">
              The ebook Reader is a new way to look at e-books.
            </p>
          </div>
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
