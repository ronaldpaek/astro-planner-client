import React from 'react';
import LightIcon from '@/assets/lightIcon.svg';
import WebsiteIcon from '@/assets/websiteIcon.svg';
import EbookIcon from '@/assets/eBookIcon.svg';
import RightArrowIcon from '@/assets/rightArrow.svg';
import { Link } from 'react-router-dom';

export default function InnovativeTripPlanning() {
  return (
    <div className="trip-planning-container">
      <div className="trip-planning-content">
        <h2 className="trip-planning-title">Innovative Trip Planning</h2>
        <p className="trip-planning-description">
          Our vision is to revolutionize the way people travel by introducing
          <span className="block">intelligent trip planning.</span>
        </p>
      </div>
      <div className="trip-planning-card-container flex">
        <div className="trip-card">
          <div className="light-icon">
            <img src={LightIcon} alt="Light Icon" />
          </div>
          <div className="trip-card-content flex-col">
            <p>Partner allows you to browse multiple carriers for travel.</p>
          </div>
          hi
          <Link to="/">
            <div className="learn-more">
              <p className="learn-more-text">Learn more</p>
              <img src={RightArrowIcon} alt="Learn more" />
            </div>
          </Link>
        </div>
        <div className="trip-card">
          <div className="website-icon">
            <img src={WebsiteIcon} alt="Website Icon" />
          </div>
          <div className="card-content">
            <p className="card-description">
              The website is a way for partners to communicate with their
              customers.
            </p>
          </div>
          <Link to="/">
            <div className="learn-more">
              <p className="learn-more-text">Learn more</p>
              <img src={RightArrowIcon} alt="Learn more" />
            </div>
          </Link>
        </div>
        <div className="trip-card">
          <div className="ebook-icon">
            <img src={EbookIcon} alt="Ebook Icon" />
          </div>
          <div className="card-content">
            <p className="card-description">
              The Ebook Reader is a new way to look at e-books.
            </p>
          </div>
          <Link to="/">
            <div className="learn-more">
              <p className="learn-more-text">Learn more</p>
              <img src={RightArrowIcon} alt="Learn more" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
